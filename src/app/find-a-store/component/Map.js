"use client";

import React, { useEffect, useRef, useState } from "react";
import "./map.scss";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

function Map({ pin }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const [zoom] = useState(12);

    useEffect(() => {
        if (map.current) return;

        map.current = new L.Map(mapContainer.current, {
            center: L.latLng(pin.lat, pin.lng),
            zoom: zoom,
            scrollWheelZoom:false,
        });

        const mtLayer = new MaptilerLayer({
            apiKey: "umuA0sFyYyLgCf7SSQKi",
        }).addTo(map.current);

        const LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: "/assets/marker-shadow.png",
                iconSize: [25, 41],
                shadowSize: [20, 20],
            },
        });

        const leafIcon = new LeafIcon({
            iconUrl: "/map-marker.png",
        });

        marker.current = L.marker(L.latLng(pin.lat, pin.lng), { icon: leafIcon }).addTo(map.current);
    }, [zoom]);

    useEffect(() => {
        map.current.panTo([pin.lat, pin.lng], zoom);

        if (marker.current) {
            marker.current.setLatLng([pin.lat, pin.lng]);
        }
    }, [pin]);

    return (
        <div className="mapWrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

export default Map;
