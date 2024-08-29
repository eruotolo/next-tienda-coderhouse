import { Suspense } from 'react';
import Loading from '@/components/Loading/Loading';
import ProductAll from '@/components/ProductAll/ProductAll';

export default function Productos() {
    return (
        <div className="container mx-auto max-w-[1200px]">
            <Suspense fallback={<Loading />}>
                <ProductAll />
            </Suspense>
        </div>
    );
}
