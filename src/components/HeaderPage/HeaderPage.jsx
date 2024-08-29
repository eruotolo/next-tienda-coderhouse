import Image from 'next/image';

export default function HeaderPage({ imgHeader, titlePage }) {
    return (
        <div className="flex flex-col pt-[30px]">
            <Image
                src={imgHeader}
                alt={'cabezal'}
                width={1160}
                height={200}
                className="w-full mb-[30px]"
            />

            <div className="border-b-[1px] border-[#EDEDED] pb-[15px]">
                <h1 className="text-[#172983] text-[26px] leading-[30px] font-bold uppercase ">
                    {titlePage}
                </h1>
            </div>
        </div>
    );
}
