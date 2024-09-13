'use client';

import { useParams } from 'next/navigation';
import FirebaseProductForm from '@/components/FirebaseProductForm/FirebaseProductForm';

export default function EditProductPage() {
    const { id } = useParams();

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Editar Producto</h1>
            <FirebaseProductForm productId={id} />
        </div>
    );
}
