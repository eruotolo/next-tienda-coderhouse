'use client';

import Loading from '@/components/Loading/Loading';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import ProductAll from '@/components/ProductAll/ProductAll';

export default function ProductsCategoryPage() {
    const { category } = useParams();

    return (
        <div className="container mx-auto max-w-[1200px]">
            <HeaderPage
                titlePage={`Productos de Hombre - ${category}`}
                imgHeader="/header-hombres.webp"
            />
            <Suspense fallback={<Loading />}>
                <ProductAll category={category} />
            </Suspense>
        </div>
    );
}
