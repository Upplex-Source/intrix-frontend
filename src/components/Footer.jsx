import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#A2B87A] mt-12 md:mt-20 relative">
      <div className="bg-[url('/images/footer.png')] bg-no-repeat bg-cover bg-center text-white text-xl pt-12 sm:pt-[50px] lg:pb-[8vw]">
        <div className="w-[90vw] min-[1440px]:w-[80%] mx-auto pb-4">
          <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-6">
            <div className="w-full lg:w-1/4">
              <Link href={'/'} className="block mb-4">
                <Image src="/images/logo.png" alt="logo" className="block " width={220} height={80} />
              </Link>
              <div className="text-[0.75em] leading-5 mb-3">Company registration number: 202003003433 (003064588-K)</div>
              <div className="mb-2">Contact</div>
              <Link className="hover:underline block" href={'mailto:info@infinitedesign.my'}>info@infinitedesign.my</Link>
              <Link className="hover:underline block" href={'tel:+60138652826'}>013-865 2826</Link>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/2 max-w-[455px]">
                <div className="w-full lg:text-center text-[1.2em] mb-[20px]">
                  Got a project? Want to collaborate?
                </div>
                <button className="text-black bg-[#D7E3C3] flex items-center gap-x-2 lg:mx-auto px-[40px] py-[10px] rounded-[30px]">
                  <FontAwesomeIcon icon={faCaretRight} /> <span>Discuss your project</span>
                </button>
            </div>
            <div className="w-full min-[575px]:w-1/2 lg:w-1/4 xl:w-1/4 xl:pl-12 flex">
              <div className="w-full flex flex-col">
                <div className="mb-[20px]">Menu</div>
                <div className="w-full grid grid-cols-2 gap-2 text-[1.1em]">
                  <Link className="hover:underline" href="/">Home</Link>
                  <Link className="hover:underline" href="/blogs">Blogs</Link>
                  <Link className="hover:underline" href="/services">Services</Link>
                  <Link className="hover:underline" href="/about-us">About Us</Link>
                  <Link className="hover:underline" href="">Themes</Link>
                  <Link className="hover:underline" href="/contact">Contact Us</Link>
                  <Link className="hover:underline" href="/why-us">Why Us</Link>
                  <Link className="hover:underline" href="/faqs">FAQs</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col-reverse sm:gap-0 gap-4 justify-between mt-[40px]">
            <div className="sm:w-1/4 text-[0.85rem] leading-5 sm:text-left text-center">
            &copy; Copyright {new Date().getFullYear()}, Infinite Studio. All rights reserved.
            </div>
            <div className="sm:w-1/3 xl:w-1/2 text-center text-black text-[0.9rem]">
              Terms & Conditions
            </div>
            <div className="sm:w-1/4 xl:w-1/4 xl:pl-12 flex">
              <div className="flex justify-between gap-x-6">
                <Link href={'https://www.xiaohongshu.com/user/profile/6598410800000000220069fe?xhsshare=CopyLink&appuid=63476591000000001901f45e&apptime=1721371810&share_id=b9a8afe5fe0b4534913e743308d881c2'} target="_blank"><Image className="md:h-[30px]" src="/icons/chinese.png" alt="icon" width={30} height={30} /></Link>
                <Link href={'https://www.facebook.com/Infinitedesign.my?mibextid=JRoKGi'} target="_blank"><Image className="md:h-[30px]" src="/icons/fb.png" alt="icon" width={30} height={30} /></Link>
                <Link href={'https://www.tiktok.com/@infinitedesign.my?_t=8o96CQm7mul&_r=1'} target="_blank"><Image className="md:h-[30px]" src="/icons/tiktok.png" alt="icon" width={30} height={30} /></Link>
                <Link href={'https://www.instagram.com/infinitedesign.my?igsh=MWw0dm4wdXVhdnM4MA=='} target="_blank"><Image className="md:h-[30px]" src="/icons/instagram.png" alt="icon" width={30} height={30} /></Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="hidden md:block absolute lg:top-[unset] top-16 lg:left-0 right-0 bottom-0 w-[4em] whitespace-break-spaces lg:whitespace-normal lg:w-full text-[rgba(255,255,255,0.7)] lg:text-[#0e1400] font-[Grotesk-Black] text-[4em] lgtext-[8vw] text-right lg:text-center leading-[1.1]">Let&apos;s Work Together</h1>
      </div>
    </footer>
  );
};

export default Footer;
