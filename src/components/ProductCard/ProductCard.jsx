import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ nombre, precio, img, id, category, customer }) {
    const bbva = '/bbva.webp';

    return (
        <div className="flex flex-col bg-white max-w-md mx-auto w-[270px] mb-[40px]">
            <div className="flex-shrink-0">
                <Link href={`/products/${customer}/${category}/${id}`}>
                    <Image
                        src={img}
                        alt={'Imagen de Producto'}
                        width={270}
                        height={360}
                        className="h-[360px] w-[270px] object-cover cursor-pointer"
                    />
                </Link>
            </div>
            <div className="pt-2">
                <Link href={`/products/${customer}/${category}/${id}`}>
                    <h1 className="text-[14px] font-[700] leading-[20px] text-left cursor-pointer h-[36px]">
                        {nombre}
                    </h1>
                </Link>
                <p>{customer}</p>
            </div>
            <div className="py-1">
                <p className="text-left text-[#172983] text-[13px] font-[700]">$ {precio}</p>
            </div>
            <div className="flex">
                <Image
                    src={bbva}
                    alt={'Descuento'}
                    width={45}
                    height={14}
                    className="h-[14px] w-[45px] mt-[2px] ml-[-7px]"
                />
                <p className="text-[12px] text-[#054279]">20% de descuento</p>
            </div>
        </div>
    );
}
