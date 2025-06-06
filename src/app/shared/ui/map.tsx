"use client"
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = ({ position }: { position: { lat: number, lng: number } }) => {
    return (
        <div className="w-full">
            <MapContainer
                style={{ height: "400px", width: "100%" }}
                center={position}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position} />
            </MapContainer>
        </div>
    );
};
export default Map;
