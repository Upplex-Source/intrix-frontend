import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceCentreForm() {
    const models = [
        "INTRIX One Tap 5-in-1",
        "INTRIX One Tap 4-in-1",
        "INTRIX One Tap 2-in-1",
        "INTRIX One Tap Lite"
    ];
    const shops = [
        { name: "Big Bath Balakong", location: "9, Jalan C180/1, 43200 Cheras, Selangor, Malaysia." },
        { name: "Big Bath Ecosky", location: "G-36, Ecosky Commercial, No. 972, Jalan Ipoh, Batu 6 1/2, 68100 Batu Caves, Selangor, Malaysia." },
        { name: "Big Bath PJ", location: "94, Jalan SS 2/24, SS2, 47300 Petaling Jaya, Selangor, Malaysia." },
        { name: "Big Bath Puchong", location: "12, Jalan Puteri 1/2, Bandar Puteri, 47100 Puchong, Selangor, Malaysia." },
        { name: "Bofi", location: "32, Jalan Kemajuan, Seksyen 12, 46200 Petaling Jaya, Selangor, Malaysia." },
        { name: "Bumhan Sanitary Wares Sdn Bhd", location: "No.4, & 6, Jalan Anggerik Vanilla R 31/R, Kota Kemuning, 40460 Shah Alam, Selangor, Malaysia." },
        { name: "Deparamax Puchong", location: "59, Jalan Puteri 2/1, Bandar Puteri, 47100 Puchong, Selangor, Malaysia." },
        { name: "E.W.A Bathroom & Kitchen Accessories", location: "52, Jalan Mohagani 1/Ks7, Bandar Botanik, 41200 Klang, Selangor, Malaysia." },
        { name: "Green Bath & Kitchen Sdn Bhd", location: "73, Jalan SS 23/15, Taman Sea, 47400 Petaling Jaya, Selangor, Malaysia." },
        { name: "Hisense Pro Shop", location: "78-G, Jalan Eco Ardence C, U12/36C Shah Alam, Eco Ardence, Seksyen U12, 40170 Selangor, Malaysia." },
        { name: "J&Y World Hardware Sdn Bhd", location: "No.14, 16, 18, Jalan Angsana 2, Taman Bukit Angsana, 43200 Cheras, Selangor, Malaysia." },
        { name: "Kutchenhauss", location: "3, Jalan Pju 5/11, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia." },
        { name: "Living Portal", location: "G31 & G33, Jalan Pandan Prima 2, Dataran Pandan Prima, 55100 Ampang, Selangor, Malaysia." },
        { name: "Rowenda Malaysia", location: "Bistari DE Kota, B-13A, Jalan Teknologi 3/9, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia." },
        { name: "Signature Cyberjaya", location: "L3M-03A, Tamarind Square, Persiaran Multimedia, Cyber 10, 63000 Cyberjaya, Selangor, Malaysia." },
        { name: "Signature Elmina", location: "11-G Jalan Eserina Y, U16/Y Elmina East, 40160 Shah Alam, Selangor, Malaysia." },
        { name: "Signature Flagship Store", location: "Lot 24, Jalan Teknologi Taman Sains Selangor 1, PJU 5 Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia." },
        { name: "Signature IPC", location: "L1.11 & L1.12, IPC Shopping Centre, No.2 Jalan PJU 7/2, Mutiara Damansara, 47800 Petaling Jaya, Selangor, Malaysia." },
        { name: "Signature One Utama", location: "Lot S-106 Old Wing, 2nd floor, One Utama Megamall, Lebuh Bandar Utama, Bandar Utama, 47800 Petaling Jaya, Selangor, Malaysia." },
        { name: "Signature Setia Alam", location: "No.6, Jalan Setia Dagang AJ U13/AJ, Setia Alam, 40170 Shah Alam, Selangor Malaysia." },
        { name: "Signature Subang", location: "14, Ground Floor, Jalan SS15/4, Subang Jaya, 47500 Selangor, Malaysia." },
        { name: "Signature Sunway Geo", location: "E1-03-07, Level 3, Block E1, Sunway Geo, Jalan Lagoon Selatan, Sunway South Quay, 47500 Bandar Sunway, Subang Jaya, Malaysia." },
        { name: "Signature Uptown PJ", location: "No.28, Jalan SS21/1, Damansara Utama, 47400 Petaling Jaya, Selangor, Malaysia." },
        { name: "Sunshine Marble", location: "6, Jalan TPP 5/7, Taman Perindustrian Puchong, 47160 Puchong, Selangor, Malaysia." },
        { name: "Unicorn World Sdn Bhd", location: "B7, 1, Jalan Rawang, Pusat Perniagaan Reef 2, 48000 Rawang, Selangor, Malaysia." },
        { name: "Urbanez (Klang)", location: "9, Jalan Bayu Tinggi 1A, Taman Batu Unjur, 41200 Klang, Selangor, Malaysia." },
        { name: "Urbanez (Kota Damansara)", location: "No.36-2, 1st Floor, Jalan PJU 5/8 Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia." }
    ];
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
            Got Questions? <br /> Book a Session at Our Experience Centre!
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
                <select
                    className="w-full px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0 appearance-none"
                >
                    <option>Your Location</option>
                    {shops.map((shop, index) => (
                        <option key={index}>{shop.name}</option>
                    ))}
                </select>
                <FontAwesomeIcon
                icon={faAngleDown}
                className="text-[#FFF8ED] w-[20px] absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
            </div>
            {/* Model Dropdown */}
            <div className="relative mb-4">
                <select
                    className="w-full px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0 appearance-none"
                >
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
                        <Image className="absolute right-8" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
