"use client";

import React, { useState } from "react";
import "./find-a-store.scss";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./component/Map"), {
    ssr: false,
});

function page() {
    const country = ["Malaysia", "Australia", "United Kingdom", "Hong Kong"];
    const states = [
        {
            name: "Selangor",
            branch: [
                {
                    branchName: "Big Bath Balakong",
                    address: "9, Jalan C180/1, 43200 Cheras, Selangor, Malaysia.",
                    contact: "019-661 9721",
                    lat: 3.034619200379725,
                    lng: 101.76670138255182,
                },
                {
                    branchName: "Big Bath Ecosky",
                    address: "G-36, Ecosky Commercial, No. 972, Jalan Ipoh, Batu 6 1/2, 68100 Batu Caves, Selangor, Malaysia.",
                    contact: "019-207 2686",
                    lat: 3.2187013504909623,
                    lng: 101.67167471701906,
                },
                {
                    branchName: "Big Bath PJ",
                    address: "94, Jalan SS 2/24, SS2, 47300 Petaling Jaya, Selangor, Malaysia.",
                    contact: "019-339 8366",
                    lat: 3.1179998041309873,
                    lng: 101.62524689604702,
                },
                {
                    branchName: "Big Bath Puchong",
                    address: "12, Jalan Puteri 1/2, Bandar Puteri, 47100 Puchong, Selangor, Malaysia.",
                    contact: "013-289 9720",
                    lat: 3.026239977329472,
                    lng: 101.61638031876319,
                },
                {
                    branchName: "Bofi",
                    address: "32, Jalan Kemajuan, Seksyen 12, 46200 Petaling Jaya, Selangor, Malaysia",
                    contact: "03-79588806",
                    lat: 3.2341753317301585,
                    lng: 101.56555466846996,
                },
                {
                    branchName: "Bumhan Sanitary Wares Sdn Bhd",
                    address: "No.4, & 6, Jalan Anggerik Vanilla R 31/R, Kota Kemuning, 40460 Shah Alam, Selangor, Malaysia.",
                    contact: "03-7958 8806",
                    lat: 3.005284450445034,
                    lng: 101.53656518439587,
                },
                {
                    branchName: "Deparamax Puchong",
                    address: "59, Jalan Puteri 2/1, Bandar Puteri, 47100 Puchong, Selangor, Malaysia.",
                    contact: "019-313 9002",
                    lat: 3.0243095053687075,
                    lng: 101.61861527643285,
                },
                {
                    branchName: "E.W.A Bathroom & Kitchen Accessories",
                    address: "52, Jalan Mohagani 1/Ks7, Bandar Botanik, 41200 Klang, Selangor, Malaysia.",
                    contact: "012-303 0884",
                    lat: 2.995793872713962,
                    lng: 101.44676154710838,
                },
                {
                    branchName: "Green Bath & Kitchen Sdn Bhd",
                    address: "73, Jalan SS 23/15, Taman Sea, 47400 Petaling Jaya, Selangor, Malaysia.",
                    contact: "011-3943 9131",
                    lat: 3.115198917573567,
                    lng: 101.61337390711195,
                },
                {
                    branchName: "Hisense Pro Shop",
                    address: "78-G, Jalan Eco Ardence C, U12/36C Shah Alam, Eco Ardence, Seksyen U12, 40170 Selangor, Malaysia.",
                    contact: "016-226 7332",
                    lat: 3.0867835357667017,
                    lng: 101.47631627090044,
                },
                {
                    branchName: "J&Y World Hardware Sdn Bhd",
                    address: "No.14, 16, 18, Jalan Angsana 2, Taman Bukit Angsana, 43200 Cheras, Selangor, Malaysia.",
                    contact: "012-382 0061",
                    lat: 3.061625091580129,
                    lng: 101.75037294390977,
                },
                {
                    branchName: "Kutchenhauss",
                    address: "3, Jalan Pju 5/11, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia.",
                    contact: "016-227 6009",
                    lat: 3.152843098386301,
                    lng: 101.59360336235126,
                },
                {
                    branchName: "Living Portal",
                    address: "G31 & G33, Jalan Pandan Prima 2, Dataran Pandan Prima, 55100 Ampang, Selangor, Malaysia.",
                    contact: "012-666 4991",
                    lat: 3.142105887454841,
                    lng: 101.74122895924918,
                },
                {
                    branchName: "Rowenda Malaysia",
                    address: "Bistari DE Kota, B-13A, Jalan Teknologi 3/9, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia.",
                    contact: "012-268 1326",
                    lat: 3.164091371554294,
                    lng: 101.57466592672597,
                },
                {
                    branchName: "Signature Cyberjaya",
                    address: "L3M-03A, Tamarind Square, Persiaran Multimedia, Cyber 10, 63000 Cyberjaya, Selangor, Malaysia.",
                    contact: "016-931 9571",
                    lat: 2.9199098654029174,
                    lng: 101.63675165924946,
                },
                {
                    branchName: "Signature Elmina",
                    address: "11-G Jalan Eserina Y, U16/Y Elmina East, 40160 Shah Alam, Selangor, Malaysia.",
                    contact: "016-714 6006",
                    lat: 3.1869879294295766,
                    lng: 101.52572725128624,
                },
                {
                    branchName: "Signature Flagship Store",
                    address: "Lot 24, Jalan Teknologi Taman Sains Selangor 1, PJU 5 Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia.",
                    contact: "03-5892 2363",
                    lat: 3.149808261001558,
                    lng: 101.57056652555352,
                },
                {
                    branchName: "Signature IPC",
                    address: "L1.11 & L1.12, IPC Shopping Centre, No.2 Jalan PJU 7/2, Mutiara Damansara, 47800 Petaling Jaya, Selangor, Malaysia.",
                    contact: "1800-88-0009",
                    lat: 3.1561764480894445,
                    lng: 101.61133349604701,
                },
                {
                    branchName: "Signature One Utama",
                    address:
                        "Lot S-106 Old Wing, 2nd floor, One Utama Megamall, Lebuh Bandar Utama, Bandar Utama, 47800 Petaling Jaya, Selangor, Malaysia.",
                    contact: "014-652 1355",
                    lat: 3.149189236899411,
                    lng: 101.61670142429557,
                },
                {
                    branchName: "Signature Setia Alam",
                    address: "No.6, Jalan Setia Dagang AJ U13/AJ, Setia Alam, 40170 Shah Alam, Selangor Malaysia.",
                    contact: "03-7732 6502",
                    lat: 3.1085397665266767,
                    lng: 101.46827201633266,
                },
                {
                    branchName: "Signature Subang",
                    address: "14, Ground Floor, Jalan SS15/4, Subang Jaya, 47500 Selangor, Malaysia.",
                    contact: "03-3345 9255",
                    lat: 3.075371384300904,
                    lng: 101.58748419730499,
                },
                {
                    branchName: "Signature Sunway Geo",
                    address:
                        "E1-03-07, Level 3, Block E1, Sunway Geo, Jalan Lagoon Selatan, Sunway South Quay, 47500 Bandar Sunway, Subang Jaya, Malaysia.",
                    contact: "603-5621 1286",
                    lat: 3.065021412744176,
                    lng: 101.60890932982814,
                },
                {
                    branchName: "Signature Uptown PJ",
                    address: "No.28, Jalan SS21/1, Damansara Utama, 47400 Petaling Jaya, Selangor, Malaysia.",
                    contact: "016-668 1463",
                    lat: 3.1345206525610387,
                    lng: 101.62100530711196,
                },
                {
                    branchName: "Sunshine Marble",
                    address: "6, Jalan TPP 5/7, Taman Perindustrian Puchong, 47160 Puchong, Selangor, Malaysia.",
                    contact: "03-749 66114",
                    lat: 3.0304119013008393,
                    lng: 101.60376739914919,
                },
                {
                    branchName: "Unicorn World Sdn Bhd",
                    address: "B7, 1, Jalan Rawang, Pusat Perniagaan Reef 2, 48000 Rawang, Selangor, Malaysia.",
                    contact: "012-291 8898",
                    lat: 3.3072315074753895,
                    lng: 101.58740634895749,
                },
                {
                    branchName: "Urbanez (Klang)",
                    address: "9, Jalan Bayu Tinggi 1A, Taman Batu Unjur, 41200 Klang, Selangor, Malaysia.",
                    contact: "012-382 9930",
                    lat: 3.013701692949237,
                    lng: 101.43940984147939,
                },
                {
                    branchName: "Urbanez (Kota Damansara)",
                    address: "No.36-2, 1st Floor, Jalan PJU 5/8 Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia.",
                    contact: "03-3324 8133",
                    lat: 3.150212286197105,
                    lng: 101.59402921876315,
                },
            ],
        },
    ];

    const [selectedState, setSelectedState] = useState(states[0].branch);
    const [selectedPin, setSelectedPin] = useState(selectedState[0]);

    function handleSelect(branch) {
        setSelectedPin(branch);
        // window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div id="test-wrapper" className="container mx-auto flex items-center gap-x-24">
            <div className="title">Where To Find Us</div>
            <div className="country-wrapper">
                {country.map((item, index) => (
                    <div key={index} className="country-item">
                        {item}
                    </div>
                ))}
            </div>
            <div className="state-wrapper">
                {states.map((item, index) => (
                    <div key={index} className="state-item" onClick={() => setSelectedState(item.branch)}>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="alphabet-wrapper">
                {Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i)).map((item, index) => (
                    <div key={index} className="alphabet-item">
                        {item}
                    </div>
                ))}
            </div>
            <div className="map-wrapper">
                <Map pin={selectedPin} />
            </div>
            <div className="branch-wrapper">
                {selectedState?.map((item, index) => (
                    <div key={index} className="branch-item" onClick={() => handleSelect(item)}>
                        <div className="lbl lbl-name">{item.branchName}</div>
                        <div className="lbl lbl-address">{item.address}</div>
                        <div className="lbl lbl-contact">{item.contact}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;
