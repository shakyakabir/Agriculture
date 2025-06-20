import React from "react";
import LocationBtn from "./LocationBtn.tsx";
import type {LocationTypes} from "../Types";
import { useWheatherContext } from "../../context/WhetherContext.tsx";

interface props {
    locations: LocationTypes[]; 
}

const Location:React.FC<props> = ({locations})=> {
    const {setSelectedLocation} = useWheatherContext();

    const handleOnClick = (l:string)=> {
        setSelectedLocation(l);
    }
    return(
        <div className="flex justify-start gap-x-2">
        {locations.map((location, index) => (
            <LocationBtn key={index} onClick={() => handleOnClick(location.locationName)} locationName={location.locationName} nepaliName={location.nepaliName} />
        ))}
        </div>
    )
}

export default Location;