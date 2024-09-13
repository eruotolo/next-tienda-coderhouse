import ContactForm from '@/components/ContactForm/ContactForm';

export default function ContactPage() {
    const titlePage = 'Contacto';
    return (
        <div className="container mx-auto max-w-[1200px]">
            <div className="flex flex-col pt-[30px]">
                <div className="border-b-[1px] border-[#EDEDED] pb-[15px]">
                    <h1 className="text-[#172983] text-[26px] leading-[30px] font-bold uppercase ">
                        {titlePage}
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-3 pt-[30px]">
                <div className="col-span-2">
                    <ContactForm />
                </div>
                <div className="col-span-1">
                    <h6 className="text-[#333333] text-[13px] mb-[10px] font-bold">Unica Jeans</h6>
                    <p className="text-[#333333] text-[12px] leading-[20px] font-normal">
                        Puig 1805
                    </p>
                    <p className="text-[#333333] text-[12px] leading-[20px] font-normal">
                        Dolores, Soriano
                    </p>
                    <p className="text-[#333333] text-[12px] leading-[20px] font-normal">Uruguay</p>
                    <h5 className="text-[#333333] mt-[10px] text-[16px] leading-[25px]">
                        4534 2344
                    </h5>
                    <p>
                        <a
                            href="mailto:contacto@unicajeans.com.uy"
                            className="text-[#172983] text-[13px] leading-[20px] font-normal"
                        >
                            contacto@unicajeans.com.uy
                        </a>
                    </p>
                    <p className="mt-[10px] text-[#999999] text-[13px] leading-[20px] font-normal">
                        De Lunes a Viernes de 8:30 a 12:00 hs. y de 14:00 a 18:30 hs. - Sábados de 9
                        a 12:30 hs. y de 15:00 a 19:00 hs.
                    </p>
                </div>
            </div>
        </div>
    );
}
