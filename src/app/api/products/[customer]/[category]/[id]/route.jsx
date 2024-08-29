import { NextResponse } from 'next/server';
import { db } from '@/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req, { params }) {
    const { category, customer, id } = params;

    if (!category || !customer || !id) {
        return NextResponse.json(
            { error: 'Category, customer, and id are required' },
            { status: 400 }
        );
    }

    try {
        const productDoc = doc(db, 'products', id);
        const productSnapshot = await getDoc(productDoc);

        if (!productSnapshot.exists()) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        const product = productSnapshot.data();
        if (product.category !== category || product.customer !== customer) {
            return NextResponse.json(
                { error: 'Product does not match the specified category and customer' },
                { status: 400 }
            );
        }

        //console.log('Product fetched from API:', product);

        return NextResponse.json({ message: 'Product fetched successfully', product });
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
    }
}
