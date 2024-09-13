import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.json();

        // Validación de datos en el servidor
        const errors = {};
        if (!formData.name) {
            errors.name = 'El Nombre es requerido';
        }

        if (!formData.lastName) {
            errors.lastName = 'El Apellido es requerido';
        }

        if (!formData.email) {
            errors.email = 'Email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email no es valido';
        }

        if (!formData.phone) {
            errors.phone = 'El Teléfono es requerido';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'El Teléfono debe de tener 10 digitos';
        }

        if (!formData.message) {
            errors.message = 'Mensaje es requerido';
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ success: false, errors }, { status: 400 });
        }

        console.log('Form Data:', formData);

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error processing form data:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
