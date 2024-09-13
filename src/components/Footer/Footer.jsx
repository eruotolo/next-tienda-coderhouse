import Link from 'next/link';
export default function Footer() {
    const beneficios = '/beneficios10.jpg';
    return (
        <>
            <footer className="container mx-auto h-[50px] border-t-[1px] border-[#ededed] mt-[80px] max-w-[1200px] footer-retail">
                <div className="grid grid-cols-6 py-[20px] pl-[20px]">
                    <div className="col-span-1">
                        <h1 className="text-left text-[16] font-bold uppercase text-[#d23232]">
                            Unica Jeans
                        </h1>
                        <p className="text-left text-[13px] leading-[20px] font-light py-[4px]">
                            Sucursales
                        </p>
                        <p className="text-left text-[13px] leading-[20px] font-light">
                            Trabajar con Nosotros
                        </p>
                        <Link
                            href="/contact"
                            className="text-left text-[13px] leading-[20px] font-light py-[4px]"
                        >
                            Contacto
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-left text-[16] font-medium text-[#172983]">Comprar</h1>
                        <p className="text-left text-[13px] leading-[20px] font-light py-[4px]">
                            Como comprar
                        </p>
                        <Link
                            href="/terminos"
                            className="text-left text-[13px] leading-[20px] font-light"
                        >
                            Términos y condiciones
                        </Link>
                        <p className="text-left text-[13px] leading-[20px] font-light py-[4px]">
                            Envíos
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-left text-[16] font-medium text-[#172983]">
                            Mi cuenta
                        </h1>
                        <Link
                            href="/login"
                            className="text-left text-[13px] leading-[20px] font-light py-[4px]"
                        >
                            Mi cuenta
                        </Link>
                        <p className="text-left text-[13px] leading-[20px] font-light py-[4px]">
                            Mis compras
                        </p>
                        <p className="text-left text-[13px] leading-[20px] font-light">
                            Mis direcciones
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-left text-[16] font-medium text-[#172983]">
                            Beneficios
                        </h1>
                        <img src={beneficios} alt="" />
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-left text-[16] font-medium text-[#172983]">
                            Newsletter
                        </h1>
                        <div className="flex mt-[10px]">
                            <input
                                type="email"
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[2px] py-[6px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                placeholder="Ingresa tu e-mail"
                            />
                            <button className="border-[1px] border-[#EDEDED] py-[6px] px-[16px] flex justify-center items-center text-[16px] bg-[#172983] text-[#ffffff] hover:bg-[#2F3C92] hover:text-[#ffffff]">
                                SUSCRIBIRME
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
