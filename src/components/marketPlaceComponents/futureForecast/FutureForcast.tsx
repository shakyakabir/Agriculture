import React from "react";
import { CiCalendar } from "react-icons/ci";
import WeatherCard from "./WeatherCard";
import type { ForecastDataType } from "./ForcastDataType";

interface props {
}

const FutureForcast: React.FC<props> = () => {
    const weatherDatas: ForecastDataType[] = [
        { day: "Today", nepaliTranslation: "aaja", icon: "☀️", temp: 22, condition: "partialy cloudy" },
        { day: "Tomorrow", nepaliTranslation: "vholi", icon: "⛅", temp: 25, condition: "partialy cloudy" },
        { day: "3rd day", nepaliTranslation: "vholi parxi", icon: "🌦️", temp: 22, condition: "partialy cloudy" },
        { day: "4th day", nepaliTranslation: "niko parsi", icon: "☀️", temp: 20, condition: "partialy cloudy" }
    ];

    const showWeatherData = (id: number) => {

    }

    return (
        <div className="bg-white rounded border border-gray-200 p-5">
            <div className="flex gap-3 justify-start content-center">
                <CiCalendar style={{ stroke: "green", strokeWidth: "1", height: "20px", width: "auto" }} />
                <span className="text-sm font-semibold">4-Day Forecast</span>
            </div>
            <div className="flex flex-row justify-around w-full h-full pt-5">
                {
                    weatherDatas.map((data, index) => (
                        < WeatherCard index={index} data={data} onClick={() => showWeatherData(index)} />
                    ))
                }
            </div>
        </div>
    )
}

export default FutureForcast;