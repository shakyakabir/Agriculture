import React, { useState, useEffect, useRef, use } from "react";
import Location from "../components/marketPlaceComponents/selectLocation/Location";
import type { LocationTypes } from "../components/marketPlaceComponents/Types";
import Wheather from "../components/marketPlaceComponents/todayWhether/Wheather";
import { useWheatherContext } from "../components/context/WhetherContext";
import FarmingTips from "../components/marketPlaceComponents/todayWhether/FarmingTips";

const MarketPlace = () => {
    const { selectedLocation } = useWheatherContext();
    const [selectedLocationData, setSelectedLocationData] = useState<LocationTypes[]>([]);

    const locations: LocationTypes[] = [
        { locationName: "Kathmandu", nepaliName: "काठमाडौं", temperature: 20, humudity: "67%", rainfall: "2.3mm", partlyCloudy: "aangsik badal" },
        { locationName: "Chitwan", nepaliName: "चितवन", temperature: 40, humudity: "65%", rainfall: "4.3mm", partlyCloudy: "aangsik badal" },
        { locationName: "Pokhara", nepaliName: "पोखरा", temperature: 10, humudity: "63%", rainfall: "1.3mm", partlyCloudy: "aangsik badal" },
        { locationName: "Dharan", nepaliName: "धरान", temperature: 50, humudity: "70%", rainfall: "2.6mm", partlyCloudy: "aangsik badal" },
    ];

    useEffect(() => {
        setSelectedLocationData(locations.filter((location) => location.locationName === selectedLocation));
        console.log(selectedLocationData);
    }, [selectedLocation]);

    return (
        <div className="market-container flex flex-col gap-y-6">
            <div className="location-container">
                <Location locations={locations} />
            </div>
            <div className="whether-container max-h-[200px] grid grid-cols-5 grid-rows-1">
                <div className="mr-5 col-start-1 col-span-3">
                    <Wheather selectedLocationData={selectedLocationData} />
                </div>
                <div className="col-start-4 col-span-5">
                    <FarmingTips />
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MarketPlace;