import React from "react";
import type { ForecastDataType } from "./ForcastDataType";

interface props {
    index: number;
    data: ForecastDataType;
    onClick: () => void;
}

const WeatherCard: React.FC<props> = ({ data, index, onClick }) => {
    return (
        <div key={index} onClick={onClick} className="flex flex-col justify-center items-center w-60 h-40 rounded-md bg-gray-100">
            <div>
                <p className="text-3xl">
                    {data.icon}
                </p>
            </div>
            <div className="flex flex-col text-center">
                <p className="font-semibold">{data.day}</p>
                <p className="text-emerald-500 text-xs font-semibold">{data.nepaliTranslation}</p>
            </div>
            <div className="text-center">
                <p className="text-orange-400 font-bold text-lg">{data.temp} &#176;C</p>
                <p className="text-gray-400 text-sm font-semibold">{data.condition}</p>
            </div>
        </div>
    )
}


export default WeatherCard;