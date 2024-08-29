'use client';

import { PropagateLoader } from 'react-spinners';

export default function Loading() {
    return (
        <>
            <div className="h-[70vh] flex items-center justify-center">
                <PropagateLoader color="#172983" />
            </div>
        </>
    );
}
