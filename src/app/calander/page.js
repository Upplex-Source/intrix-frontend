"use client";
import React from "react";

import "./test.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function page() {
    const calanderData = [
        {
            month: "November",
            totalItinerary: 6,
            itineraryList: [
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "12:00 - 23:00",
                    month: "November",
                    day: "Saturday",
                    date: "09",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "14:00 - 23:00",
                    month: "November",
                    day: "Saturday",
                    date: "09",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "16:00 - 00:00",
                    month: "November",
                    day: "Saturday",
                    date: "09",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "21:00 - 07:00",
                    month: "November",
                    day: "Saturday",
                    date: "16",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "11:00 - 00:00",
                    month: "November",
                    day: "Saturday",
                    date: "23",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "15:00 - 23:00",
                    month: "November",
                    day: "Saturday",
                    date: "30",
                },
            ],
        },
        {
            month: "December",
            totalItinerary: 3,
            itineraryList: [
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "13:00 - 23:00",
                    month: "December",
                    day: "Saturday",
                    date: "07",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "12:30 - 00:00",
                    month: "December",
                    day: "Saturday",
                    date: "14",
                },
                {
                    imageSrc: "",
                    eventTitle: "Event Title",
                    location: "Location",
                    time: "18:00 - 04:00",
                    month: "December",
                    day: "Saturday",
                    date: "14",
                },
            ],
        },
    ];

    return (
        <div id="test-wrapper">
            <span className="lbl-title">What Are We Up To</span>
            <span className="lbl-desc">
                Stay engaged with our latest initiatives and events, crafted to bring together experts, innovators, and those passionate about
                sustainable solutions. From informative sessions to collaborative workshops, our events offer valuable insights and opportunities to
                connect with like-minded individuals.
            </span>
            <div className="filter-wrapper">
                <div className="filter">
                    <div className="filter-item">
                        <span>Month</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="filter-item">
                        <span>Year</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="filter-item">
                        <span>Sort By</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="filter-item">
                        <span>Country</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="filter-item">
                        <span>Search</span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
            <div className="calander-wrapper">
                {calanderData.map((item, index) => (
                    <div key={index} className="calander-item">
                        <div className="calander-header">
                            <span className="lbl-title">{item.month}</span>
                            <span className="lbl-total">{item.totalItinerary}</span>
                        </div>
                        <span className="horizontal-line" />
                        <div className="calander-content">
                            {item.itineraryList.map((itinerary, index) => (
                                <React.Fragment key={index}>
                                    <div className="calander-sub-item" key={index}>
                                        <div className="event-detail">
                                            <Image className="event-img" src="/home/icon/eco.png" width={50} height={50} />
                                            <div className="detail-wrapper">
                                                <span className="lbl title">{itinerary.eventTitle}</span>
                                                <span className="lbl">{itinerary.location}</span>
                                                <span className="lbl">{itinerary.time}</span>
                                            </div>
                                        </div>
                                        <div className="event-date">
                                            <div className="month-day">
                                                <span className="lbl month">{itinerary.month}</span>
                                                <span className="lbl day">{itinerary.day}</span>
                                            </div>
                                            <span className="lbl date">{itinerary.date}</span>
                                        </div>
                                        <div className="more-btn">
                                            <button type="button" onClick={() => setModalData(itinerary)}>
                                                More Info
                                            </button>
                                        </div>
                                    </div>
                                    <span className="horizontal-line" />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;
