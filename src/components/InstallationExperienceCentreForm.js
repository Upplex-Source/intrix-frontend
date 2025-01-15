import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceCentreForm() {
    const models = [
        "INTRIX One Tap 5-in-1",
        "INTRIX One Tap 4-in-1",
        "INTRIX One Tap 2-in-1",
        "INTRIX One Tap Lite",
        "INTRIX All-in-One Filter",
        "INTRIX Font",
    ];

    const states = ["Selangor", "Kuala Lumpur", "Penang", "Johor", "Negeri Sembilan", "Perak", "Malacca", "Pahang", "Kelantan", "Sabah", "Sarawak"];

    return (
        <div className="flex flex-col md:flex-row lg:justify-between w-full relative" id="exp_form">
            {/* Left Image Section */}
            <Image
                src="/product/experience_centre.png" // Replace with the image URL or leave empty for now
                alt="Intrix Experience Centre"
                className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 md:min-h-[700px] h-full object-cover object-top block"
                width={500} // Adjust width and height
                height={650} // For placeholder purposes
            />

            {/* Right Form Section */}
            <div className="flex items-center justify-center w-full md:w-1/2 lg:w-3/5 xl:w-2/3 bg-[#4F4644] text-white px-6 lg:px-12 py-8 lg:py-16">
                <div>
                    <h3 className="text-2xl lg:text-[40px] xl:text-[2.2vw] leading-[1.1] font-bold mb-6 text-[#FFF8ED] max-w-[380px] md:max-w-[450px] xl:max-w-[30vw]">
                    Schedule An <br/>
                    Installation Appointment
                    </h3>
                    <form className="">
                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Type full name here"
                            className="w-full mb-4 px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0"
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full mb-4 px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0"
                        />

                        {/* Phone Number Input */}
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full mb-4 px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0"
                        />

                        {/* Location Dropdown */}
                        <div className="relative mb-4">
                            <select className="w-full px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0 appearance-none">
                                <option>Your Location</option>
                                {/* {shops.map((shop, index) => (
                                    <option key={index}>{shop.name}</option>
                                ))} */}
                                {states.map((state, index) => (
                                    <option key={index}>{state}</option>
                                ))}
                            </select>
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                className="text-[#FFF8ED] w-[20px] absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            />
                        </div>
                        {/* Model Dropdown */}
                        <div className="relative mb-4">
                            <select className="w-full px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0 appearance-none">
                                <option>Select The Model You Are Keen On</option>
                                {models.map((model, index) => (
                                    <option key={index} value={model}>
                                        {model}
                                    </option>
                                ))}
                            </select>
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                className="text-[#FFF8ED] w-[20px] absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            />
                        </div>
                        <div className="flex justify-end mt-8 md:mt-0">
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="relative w-fit send_now_btn bg-[#F79932] text-[#421908] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-16 sm:pr-24"
                            >
                                <span>Send Now</span>
                                <Image className="absolute right-8" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
