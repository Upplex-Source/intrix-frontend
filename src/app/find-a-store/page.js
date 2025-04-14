"use client";

import React, { useEffect, useState } from "react";
import "./find-a-store.scss";
import dynamic from "next/dynamic";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import { getCountries } from "@/service/find-us-api/FindUsService";
import SupportCardPDF from "@/components/SupportCardPDF";
import { getInstallationGuide, getProductBrochures, getVideos } from "@/service/find-us-api/FindUsService";

const Map = dynamic(() => import("./component/Map"), {
    ssr: false,
});

function Page() {
    const [storeList, setStoreList] = useState();
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedPin, setSelectedPin] = useState();
    const [selectedAlphabet, setSelectedAlphabet] = useState("I");

    const [availableAlphabet, setAvailableAlphabet] = useState([]);
    const [productBrochures, setProductBrochures] = useState();
    const [installationGudies, setInstallationGudies] = useState();
    const [tutorialVideos, setTutorialVideos] = useState();

    useEffect(() => {
        const handleFirstLoad = async () => {
            try {
                const result = await getCountries();
                const brochures = await getProductBrochures();
                const guides = await getInstallationGuide();
                const videos = await getVideos();

                const result2 = await Promise.all([brochures, guides, videos]);

                if (result2[0] && result2[1] && result2[2]) {
                    setProductBrochures(result2[0].product_brochures);
                    setInstallationGudies(result2[1].installtion_guides);
                    setTutorialVideos(result2[2].videos);
                }

                if (result) {
                    let defCountry = result.countries.find((element) => element.name === "Malaysia");
                    let defState = defCountry.states.find((element) => element.name === "Selangor");

                    setStoreList(result.countries);
                    setSelectedCountry(defCountry);
                    setSelectedState(defState);
                    setSelectedPin(defState.branches[0]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleFirstLoad();
    }, []);

    useEffect(() => {
        let tempCountry = storeList?.find((element) => element.name === selectedCountry?.name);
        let tempState = tempCountry?.states.find((element) => element.name === selectedState.name);

        let tmp = [];
        tempState?.branches.map(({ title }) => tmp.push(title.charAt(0)));
        let uniqueChars = [...new Set(tmp)];
        setAvailableAlphabet(uniqueChars);
    }, [selectedState]);

    function handleSelectCountry(country) {
        setSelectedCountry(country);
        setSelectedState(country.states[0]);
        setSelectedPin(country.states[0].branches[0]);
        setSelectedAlphabet();
    }

    function handleSelectState(state) {
        setSelectedState(state);
        setSelectedPin(state.branches[0]);
        setSelectedAlphabet();
    }

    function handleSelectBranch(branch) {
        setSelectedPin(branch);
    }

    function handleFilterBranch(alphabet) {
        let tempCountry = storeList?.find((element) => element.name === selectedCountry?.name);
        let tempState = tempCountry?.states.find((element) => element.name === selectedState.name);

        let newBranchList = tempState?.branches.filter((item) => {
            return item.title.charAt() === alphabet;
        });

        if (newBranchList.length > 0) {
            setSelectedState({ ...selectedState, branches: newBranchList });
            setSelectedPin(newBranchList[0]);
            setSelectedAlphabet(alphabet);
        }
    }

    const filteredBrochures = productBrochures?.filter(item => item.country_id === selectedCountry?.id);
    const filteredGuides = installationGudies?.filter(item => item.country_id === selectedCountry?.id);
    const filteredVideos = tutorialVideos?.filter(item => item.country_id === selectedCountry?.id);

    return (
        <>
            <div id="find-wrapper">
                <h4 className="font-[Mulish-Regular] text-[1em] text-center text-[#000] pt-[80px] md:pt-12 mx-auto">Find A Store</h4>
                <h1 className="text-[1.5em] text-center font-bold text-[#000] pb-8 mx-auto">Where To Find Us</h1>
                <div className="country-wrapper">
                    {storeList?.map((item, index) => (
                        <div key={index} className={`country-item ${selectedCountry?.name === item.name}`} onClick={() => handleSelectCountry(item)}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="state-wrapper">
                    {selectedCountry?.states?.map((item, index) => {
                        if (item.branches.length > 0) {
                            return (
                                <div
                                    key={index}
                                    className={`state-item whitespace-normal ${selectedState.name === item.name}`}
                                    onClick={() => handleSelectState(item)}
                                >
                                    {item.name}
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="alphabet-wrapper">
                    {Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i)).map((item, index) => (
                        <div
                            key={index}
                            className={`alphabet-item click-${availableAlphabet.includes(item)} ${selectedAlphabet === item}`}
                            onClick={() => handleFilterBranch(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                {selectedPin ? (
                    <div className="map-wrapper">
                        <Map pin={selectedPin} />
                    </div>
                ) : (
                    <div className="no-branch">No branch found in current state</div>
                )}

                <div className="branch-wrapper grid grid-cols-3 container mx-auto flex items-center gap-x-24 px-4 mb-12">
                    {selectedAlphabet
                        ? selectedState?.branches
                              ?.filter((branch) => branch.title.charAt() === selectedAlphabet)
                              .map((item, index) => (
                                  <div key={index} className="branch-item" onClick={() => handleSelectBranch(item)}>
                                      <div className="lbl lbl-name">{item.title}</div>
                                      <div className="lbl lbl-address">{item.address}</div>
                                      <div className="lbl lbl-contact">{item.phone_number}</div>
                                  </div>
                              ))
                        : selectedState?.branches.map((item, index) => (
                              <div key={index} className="branch-item" onClick={() => handleSelectBranch(item)}>
                                  <div className="lbl lbl-name">{item.title}</div>
                                  <div className="lbl lbl-address">{item.address}</div>
                                  <div className="lbl lbl-contact">{item.phone_number}</div>
                              </div>
                          ))}
                </div>
                <div className="w-full">
                    {filteredBrochures?.length > 0 && (
                        <>
                            <div className="container mx-auto mb-6 px-4">
                                <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px]">Product Brochure</h2>
                            </div>
                            <div className="my-6 px-4 border-b border-[#421908]">
                                <SupportCardPDF cards={filteredBrochures} />
                            </div>
                        </>
                    )}

                    {filteredGuides?.length > 0 && (
                        <>
                            <div className="container mx-auto mb-6 px-4">
                                <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px]">Guides</h2>
                            </div>
                            <div className="my-6 px-4 border-b border-[#421908]">
                                <SupportCardPDF cards={filteredGuides} />
                            </div>
                        </>
                    )}

                    {filteredVideos?.length > 0 && (
                        <>
                            <div className="container mx-auto mb-6 px-4">
                                <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px]">Videos</h2>
                            </div>
                            <div className="my-6 px-4">
                                <SupportCardPDF cards={filteredVideos} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <ExperienceCentreForm />
        </>
    );
}

export default Page;
