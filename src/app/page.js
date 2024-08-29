import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const sliderItem01 = '/slider-01.webp';
    const infantil = '/infantil.webp';
    const hombres = '/hombres.webp';
    const mujeres = '/mujeres.webp';
    const outlet = '/outlet.jpg';

    return (
        <>
            <section>
                <div className="grid grid-cols-1">
                    <Image
                        src={sliderItem01}
                        alt="Slider"
                        width={1920}
                        height={700}
                        className="w-full object-cover"
                    />
                </div>
                <div className="container mx-auto py-[30px] max-w-[1200px]">
                    <Link href="#">
                        <Image
                            src={infantil}
                            alt={'Infantil'}
                            height={1160}
                            width={390}
                            className="w-full h-[390px] object-cover"
                        />
                    </Link>
                </div>
                <div className="container mx-auto max-w-[1200px]">
                    <div className="flex flex-row justify-between">
                        <Link href="#" className="relative group">
                            <Image
                                src={hombres}
                                alt={'hombres'}
                                height={450}
                                width={450}
                                className="h-[390px] w-[390px] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-[26px]">HOMBRES</span>
                            </div>
                        </Link>
                        <Link href="#" className="relative group">
                            <Image
                                src={mujeres}
                                alt={'hombres'}
                                height={450}
                                width={450}
                                className="h-[390px] w-[390px] object-cover "
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-[26px]">MUJERES</span>
                            </div>
                        </Link>
                        <Link href="#" className="relative group">
                            <Image
                                src={outlet}
                                alt={'hombres'}
                                height={450}
                                width={450}
                                className="h-[390px] w-[390px] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-[26px]">OUTLET</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
