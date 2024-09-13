'use client';

import { useState } from 'react';
import Confetti from 'react-confetti';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Agregando el estado isLoading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name) {
            tempErrors['name'] = 'El Nombre es requerido';
            isValid = false;
        }

        if (!formData.lastName) {
            tempErrors['lastName'] = 'El Apellido es requerido';
            isValid = false;
        }

        if (!formData.email) {
            tempErrors['email'] = 'Email es requerido';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors['email'] = 'Email no es valido';
            isValid = false;
        }

        if (!formData.phone) {
            tempErrors['phone'] = 'El Teléfono es requerido';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors['phone'] = 'El Teléfono debe de tener 10 digitos';
            isValid = false;
        }

        if (!formData.message) {
            tempErrors['message'] = 'Mensaje es requerido';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            setIsLoading(true);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                console.log('Form Data Submitted: ', formData);
                setSubmitted(true);

                // Resetear el formulario
                setFormData({
                    name: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });

                // Limpiar errores
                setErrors({});
            } catch (error) {
                console.error('Error submitting the form:', error);
                setErrors({ submit: 'There was an error submitting the form. Please try again.' });
            } finally {
                setIsLoading(false);
            }
        }
    };

    return submitted ? (
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-full">
                    <h1 className="font-questrial text-[#fff] text-center font-semibold text-[20px]">
                        ¡Gracias por tu mensaje!
                    </h1>
                    <Confetti />
                </div>
            </div>
        </div>
    ) : (
        <div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="flex mb-[10px]">
                    <div className="w-[220px] flex items-center">
                        <label
                            htmlFor="name"
                            className="#333333 font-bold leading-[20px] text-[14px]"
                        >
                            Nombre
                        </label>
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-[1px] border-[rgb(237, 237, 237)] text-[13px] leading-[20px] w-[550px] h-[40px]"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                </div>
                <div className="flex mb-[10px]">
                    <div className="w-[220px] flex items-center">
                        <label
                            htmlFor="lastName"
                            className="#333333 font-bold leading-[20px] text-[14px]"
                        >
                            Apellido
                        </label>
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="border-[1px] border-[rgb(237, 237, 237)] text-[13px] leading-[20px] w-[550px] h-[40px]"
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                </div>
                <div className="flex mb-[10px]">
                    <div className="w-[220px] flex items-center">
                        <label
                            htmlFor="email"
                            className="#333333 font-bold leading-[20px] text-[14px]"
                        >
                            Email
                        </label>
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-[1px] border-[rgb(237, 237, 237)] text-[13px] leading-[20px] w-[550px] h-[40px]"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>
                <div className="flex mb-[10px]">
                    <div className="w-[220px] flex items-center">
                        <label
                            htmlFor="phone"
                            className="#333333 font-bold leading-[20px] text-[14px]"
                        >
                            Teléfono
                        </label>
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="border-[1px] border-[rgb(237, 237, 237)] text-[13px] leading-[20px] w-[550px] h-[40px]"
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                </div>
                <div className="flex mb-[10px]">
                    <div className="w-[220px] flex items-center">
                        <label
                            htmlFor="message"
                            className="#333333 font-bold leading-[20px] text-[14px]"
                        >
                            Mensaje
                        </label>
                    </div>

                    <div className="flex flex-col">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="border-[1px] border-[rgb(237, 237, 237)] text-[13px] leading-[20px] w-[550px] h-[200px]"
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                </div>
                <div className="ml-[220px] mt-[30px]">
                    <button
                        type="submit"
                        className="bg-[#cccccc] text-[13px] px-[25px] leading-[40px] text-[#ffffff] hover:bg-[#2F3C92] uppercase font-[600]"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
                {errors.submit && <span className="error">{errors.submit}</span>}
            </form>
        </div>
    );
}
