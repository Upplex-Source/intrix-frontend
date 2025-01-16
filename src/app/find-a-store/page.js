"use client";

import React, { useEffect, useState } from "react";
import "./find-a-store.scss";
import dynamic from "next/dynamic";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import { country, states, stores } from "./store-list";

const Map = dynamic(() => import("./component/Map"), {
    ssr: false,
});

function Page() {
    const [selectedCountry, setSelectedCountry] = useState(stores[0]);
    const [selectedState, setSelectedState] = useState(stores[0].states[0]);
    const [selectedPin, setSelectedPin] = useState(stores[0].states[0].branch[0]);

    const [availableAlphabet, setAvailableAlphabet] = useState([]);

    useEffect(() => {
        let tempCountry = stores.find((element) => element.country === selectedCountry.country);
        let tempState = tempCountry.states.find((element) => element.name === selectedState.name);

        let tmp = [];
        tempState.branch.map(({ branchName }) => tmp.push(branchName.charAt(0)));
        let uniqueChars = [...new Set(tmp)];
        setAvailableAlphabet(uniqueChars);
    }, [selectedState]);

    function handleSelectCountry(country) {
        setSelectedCountry(country);
        setSelectedState(country.states[0]);
        setSelectedPin(country.states[0].branch[0]);
    }

    function handleSelectState(state) {
        setSelectedState(state);
        setSelectedPin(state.branch[0]);
    }

    function handleSelectBranch(branch) {
        setSelectedPin(branch);
    }

    function handleFilterBranch(alphabet) {
        let tempCountry = stores.find((element) => element.country === selectedCountry.country);
        let tempState = tempCountry.states.find((element) => element.name === selectedState.name);

        let newBranchList = tempState.branch.filter((item) => {
            return item.branchName.charAt() === alphabet;
        });

        if (newBranchList.length > 0) {
            setSelectedState({ ...selectedState, branch: newBranchList });
            setSelectedPin(newBranchList[0]);
        }
    }

    return (
        <>
            <div id="find-wrapper">
                <h1 className="text-[1.5em] text-center font-bold text-[#000] pt-12 pb-8 mx-auto">Where To Find Us</h1>
                <div className="country-wrapper">
                    {stores.map((item, index) => (
                        <div
                            key={index}
                            className={`country-item ${selectedCountry.country === item.country}`}
                            onClick={() => handleSelectCountry(item)}
                        >
                            {item.country}
                        </div>
                    ))}
                </div>
                <div className="state-wrapper">
                    {selectedCountry.states.map((item, index) => (
                        <div key={index} className={`state-item ${selectedState.name === item.name}`} onClick={() => handleSelectState(item)}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="alphabet-wrapper">
                    {Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i)).map((item, index) => (
                        <div key={index} className={`alphabet-item ${availableAlphabet.includes(item)}`} onClick={() => handleFilterBranch(item)}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="map-wrapper">
                    <Map pin={selectedPin} />
                </div>
                <div className="branch-wrapper grid grid-cols-3 container mx-auto flex items-center gap-x-24 px-4 mb-12">
                    {selectedState.branch.map((item, index) => (
                        <div key={index} className="branch-item" onClick={() => handleSelectBranch(item)}>
                            <div className="lbl lbl-name">{item.branchName}</div>
                            <div className="lbl lbl-address">{item.address}</div>
                            <div className="lbl lbl-contact">{item.contact}</div>
                        </div>
                    ))}
                </div>
            </div>
            <ExperienceCentreForm />
        </>
    );
}

export default Page;
