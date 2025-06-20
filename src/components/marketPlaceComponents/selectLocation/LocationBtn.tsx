import React, {type ReactNode} from "react";

interface props {
    onClick: ()=> void; 
    locationName: string;
    nepaliName: string;
}

const LocationBtn:React.FC<props> = ({onClick, locationName, nepaliName}) => {
    return (
        <button onClick={onClick} className="relative group flex gap-y-1 flex-col px-6  py-1 cursor-pointer border-2 border-emerald-400 font-semibold rounded text-sm">
            <span className="absolute top-0 left-0 h-0 w-0 bg-emerald-500 group-hover:h-full group-hover:w-full transition-all duration-400 ease-in-out"></span>
            <span className="group-hover:text-white z-10">{locationName}</span>
            <span className="text-xs font-normal group-hover:text-white z-10 text-gray-400">{nepaliName}</span>
        </button>
    )
}

export default LocationBtn;