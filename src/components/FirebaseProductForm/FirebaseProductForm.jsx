'use client';

import { useState, useEffect } from 'react';
import { db, storage } from '@/config/firebase';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function FirebaseProductForm({ productId = null }) {
    const [product, setProduct] = useState({
        category: '',
        customer: '',
        description: '',
        nombre: '',
        precio: '',
        stock: '',
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                const docRef = doc(db, 'products', productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id: docSnap.id });
                }
            };
            fetchProduct();
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = product.img || '';

            if (image) {
                const storageRef = ref(storage, `products/${image.name}`);
                const snapshot = await uploadBytes(storageRef, image);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const productData = {
                ...product,
                img: imageUrl,
                precio: parseFloat(product.precio),
                stock: parseInt(product.stock, 10),
            };

            if (productId) {
                const docRef = doc(db, 'products', productId);
                await updateDoc(docRef, productData);
            } else {
                await addDoc(collection(db, 'products'), productData);
            }

            alert(productId ? 'Producto actualizado con éxito' : 'Producto creado con éxito');
        } catch (error) {
            console.error('Error al guardar el producto:', error);
            alert('Error al guardar el producto');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Nombre
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={product.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Categoría
                </label>
                <select
                    name="category"
                    id="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="chaquetas">Chaquetas</option>
                    <option value="pantalones">Pantalones</option>
                    <option value="camisetas">Camisetas</option>
                </select>
            </div>
            <div>
                <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
                    Tipo
                </label>
                <select
                    name="customer"
                    id="customer"
                    value={product.customer}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="">Selecciona una opción</option>
                    <option value="hombres">Hombres</option>
                    <option value="mujeres">Mujeres</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="ninos">Niños</option>
                    <option value="outlet">Outlet</option>
                    <option value="sale">Sale</option>
                </select>
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Descripción
                </label>
                <textarea
                    name="description"
                    id="description"
                    value={product.description}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
            </div>
            <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
                    Precio
                </label>
                <input
                    type="number"
                    name="precio"
                    id="precio"
                    value={product.precio}
                    onChange={handleChange}
                    required
                    step="0.01"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Stock
                </label>
                <input
                    type="number"
                    name="stock"
                    id="stock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Imagen
                </label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="mt-1 block w-full"
                />
            </div>
            {product.img && (
                <div>
                    <img
                        src={product.img}
                        alt="Product"
                        className="mt-2 w-32 h-32 object-cover rounded-md"
                    />
                </div>
            )}
            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {loading
                        ? 'Guardando...'
                        : productId
                        ? 'Actualizar Producto'
                        : 'Crear Producto'}
                </button>
            </div>
        </form>
    );
}
