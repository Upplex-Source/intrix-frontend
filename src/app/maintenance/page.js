'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Maintenance() {
    useEffect(() => {
        console.log("Mounted on client");
      }, []);
    
  return (
    <>
    <div className="bg-maintenance flex flex-col items-start gap-6 justify-start md:justify-between px-6 md:px-4 min-h-[1000px] md:min-h-[1000px]">
        <div className='container mx-auto mt-4 min-[1440px]:mt-12'>
            <Image src={'/logo.png'} width={200} height={200} alt='logo' className='w-fit max-w-[150px] md:max-w-[unset]' />
        </div>
        <div className='container mx-auto'>
            <h1 className='capitalize text-[#525456] leading-[1.2] text-[20px] md:text-[40px] font-[Mulish-Black] mb-4 container mx-auto'>
            A clearer, fresher <br className='block' /> experience awaits.
            </h1>
            <p className='font-[Montserrat-Regular] max-w-[650px] text-[#525456] text-[12px] md:text-[20px] mb-4'>We&apos;re currently upgrading our Intrix Lifestyle website to serve you better.</p>
            <p className='font-[Montserrat-Regular] max-w-[650px] text-[#525456] text-[12px] md:text-[20px] mb-4'>In the meantime, simply scan the QR code to instantly connect with our relationship manager for product info or purchases.</p>
            <p className='font-[Montserrat-Regular] max-w-[650px] text-[#525456] text-[12px] md:text-[20px] mb-6 md:mb-12'>Thanks for your understanding—we&apos;ll be back soon!</p>
            <Image src={'/maintenance/qr_whatsapp.png'} className='max-w-[120px] md:max-w-[unset]' width={200} height={200} alt='QR code' />
        </div>
        <div></div>
    </div>
    </>
  )
}
