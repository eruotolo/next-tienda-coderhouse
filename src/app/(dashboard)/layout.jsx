'use client';

import { useState } from 'react';
import Link from 'next/link';
import './dashboard.css';

import { useRouter } from 'next/navigation';
import { AuthProvider, useAuthContext } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

function LogoutButton() {
    const { logoutUser } = useAuthContext();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logoutUser();
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Cerrar sesión
        </button>
    );
}

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <nav>
                    <Link
                        href="/admin"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/newproducts"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Nuevo Producto
                    </Link>
                    <Link
                        href="/"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Configuración
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <header className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <LogoutButton />
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#EDEDED] ">
                    <div className="container mx-auto px-6 py-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
