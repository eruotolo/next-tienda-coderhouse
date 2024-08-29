import { NextResponse } from 'next/server';
import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
    try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const products = productsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}
