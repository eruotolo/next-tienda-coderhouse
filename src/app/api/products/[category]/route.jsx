import { NextResponse } from 'next/server';
import { db } from '@/config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function GET(req, { params }) {
    const { category } = params;

    if (!category) {
        return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }

    try {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('category', '==', category));

        const productsSnapshot = await getDocs(q);
        const products = productsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}
