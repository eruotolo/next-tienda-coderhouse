'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function ProductAll({ category, customer }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const endpoint = category
                    ? `/api/products/${customer}/${category}`
                    : `/api/products/${customer}`;
                const response = await fetch(endpoint, { next: { revalidate: 3600 } });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productsList = await response.json();
                setProducts(productsList);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [customer, category]);

    if (loading) {
        return <Loading />;
    }

    if (products.length === 0) {
        return (
            <div className="container mx-auto flex flex-col justify-center items-center h-[65vh]">
                <p className="mb-[20px] text-center text-[26px]">No hay productos disponibles</p>
                <Link
                    href="/"
                    className="border-[1px] border-[#2F3C92] h-[50px] w-[210px] flex justify-center items-center text-[16px] bg-[#2F3C92] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#2F3C92] mt-[20px] mr-[10px]"
                >
                    IR A LA PÁGINA DE INICIO
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap my-[30px]">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
}
