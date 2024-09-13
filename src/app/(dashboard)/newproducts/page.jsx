import FirebaseProductForm from '@/components/FirebaseProductForm/FirebaseProductForm';

export default function NewProductPage() {
    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo Producto</h1>
            <FirebaseProductForm />
        </div>
    );
}
