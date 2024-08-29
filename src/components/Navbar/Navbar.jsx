'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CardWidget from '@/components/CardWidget/CardWidget';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    const logo = '/logo.svg';
    const pathname = usePathname();
    const [state, setState] = useState(false);

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest('.menu-btn')) setState(false);
        };
    }, []);

    const categoryHombres = ['chaquetas', 'pantalones', 'camisetas'];

    return (
        <header className="h-[121px] border-b-[1px] border-[#EDEDED]">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex items-center justify-between border-b-[1px] border-[#172983] h-[70px]">
                    <div className="w-2/12 hidden md:flex">
                        <Link
                            href="#"
                            className="uppercase text-[10px] md:text-[12px] text-[#172983]"
                        >
                            ¿Necesitas Ayuda?
                        </Link>
                    </div>
                    <div className="w-8/12 flex md:justify-center">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo Unica Jeans"
                                priority={true}
                                width={459}
                                height={37}
                                className="md:h-[40px] h-[20px] w-auto"
                            />
                        </Link>
                    </div>
                    <div className="w-2/12 flex justify-end">
                        <CardWidget />
                        <div className="md:hidden mr-[20px]">
                            <button
                                className="menu-btn text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {state ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-[#172983]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[#172983]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`justify-center flex-1 items-center mt-8 md:mt-0 md:flex ${
                    state ? 'block' : 'hidden'
                }`}
            >
                <ul className="flex md:flex-row items-center justify-between">
                    <li className="relative group pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer flex text-[#172983] hover:text-[#8e99d1]">
                        <Link href="#" className="flex">
                            HOMBRES
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 w-[12px] h-[51px] ml-[5px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-[#FFFFFF] min-w-[160px] p-[16px] z-10 mt-[40px] border-[#ededed] border-[1px]">
                            {categoryHombres.map((category) => (
                                <li
                                    key={category}
                                    className={`pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer flex ${
                                        pathname === `/products/hombres/${category}`
                                            ? 'text-[#8e99d1]'
                                            : 'text-[#172983] hover:text-[#8e99d1]'
                                    }`}
                                >
                                    <Link href={`/products/hombres/${category}`}>{category}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li
                        className={`pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer ${
                            pathname === '/shop/mujeres'
                                ? 'text-[#8e99d1]'
                                : 'text-[#172983] hover:text-[#8e99d1]'
                        }`}
                    >
                        <Link href="#">MUJERES</Link>
                    </li>
                    <li
                        className={`pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer ${
                            pathname === '/accesorios'
                                ? 'text-[#8e99d1]'
                                : 'text-[#172983] hover:text-[#8e99d1]'
                        }`}
                    >
                        <Link href="#">ACCESORIOS</Link>
                    </li>
                    <li
                        className={`pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer ${
                            pathname === '/sale'
                                ? 'text-[#8e99d1]'
                                : 'text-[#d23232] hover:text-[#8e99d1]'
                        }`}
                    >
                        <Link href="#">SALE</Link>
                    </li>
                    <li
                        className={`pl-[10px] pr-[10px] font-[600] text-[14px] leading-[50px] uppercase cursor-pointer ${
                            pathname === '/outlet'
                                ? 'text-[#8e99d1]'
                                : 'text-[#d23232] hover:text-[#8e99d1]'
                        }`}
                    >
                        <Link href="#">OUTLET</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
