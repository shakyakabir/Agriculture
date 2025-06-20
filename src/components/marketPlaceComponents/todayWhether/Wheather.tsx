import React from "react";
import type { LocationTypes } from "../Types";
import LiveDataBtn from "./LiveDataBtn";

interface props {
    selectedLocationData: LocationTypes[];
}

const Wheather: React.FC<props> = ({ selectedLocationData }) => {
    const handleOnClick = () => {

    }
    return (
        <div className="rounded-xl px-4 bg-green-50 border border-gray-200 flex flex-col gap-y-3 h-full">
            <div className="current-location-container flex flex-row justify-between items-center">
                {
                    selectedLocationData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-y-1 ">
                            <h1 className="font-bold">{data.locationName}</h1>
                            <span className="text-emerald-500">{data.nepaliName}</span>
                        </div>
                    ))
                }
                <div>
                    <LiveDataBtn onClick={handleOnClick} />
                </div>
            </div>
            {
                selectedLocationData.map((data) => (
                    <div className="flex flex-row justify-around">
                        <div className="data-container text-center flex flex-col justify-center">
                            <h1 className="text-2xl font-bold text-emerald-500">{data.temperature} &#176;C</h1>
                            <span className="text-xs font-semibold text-gray-500">temperature</span>
                        </div>
                        <div className="data-container text-center flex flex-col justify-center">
                            <h1 className="text-2xl font-bold text-orange-500">{data.humudity}</h1>
                            <span className="text-xs font-semibold text-gray-500">temperature</span>
                        </div>
                        <div className="data-container text-center flex flex-col justify-center">
                            <h1 className="text-2xl font-bold text-sky-500">{data.rainfall}</h1>
                            <span className="text-xs font-semibold text-gray-500">temperature</span>
                        </div>
                        <div className="data-container text-center flex flex-col justify-center">
                            <h1 className="text-2xl font-bold text-black">{data.partlyCloudy}</h1>
                            <span className="text-xs font-semibold text-gray-500">temperature</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Wheather;