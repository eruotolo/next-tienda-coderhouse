'use client';

import Loading from '@/components/Loading/Loading';
import { Suspense } from 'react';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import ProductAll from '@/components/ProductAll/ProductAll';

export default function ProductsCategoryPage() {
    let customer = 'mujeres';

    return (
        <div className="container mx-auto max-w-[1200px]">
            <HeaderPage titlePage={`Productos de ${customer}`} imgHeader="/header-mujeres.webp" />
            <Suspense fallback={<Loading />}>
                <ProductAll customer={customer} />
            </Suspense>
        </div>
    );
}
