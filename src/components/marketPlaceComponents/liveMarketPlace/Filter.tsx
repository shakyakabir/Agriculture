import React from "react";
import type { FilterByCatagoryType } from "./CatagoryType";
interface props {
    catagory: FilterByCatagoryType;
    bgColor: string;
    onClick: () => void;
}

const Filter: React.FC<props> = ({ catagory, bgColor, onClick }) => {
    return (
        <button onClick={onClick} className={`border group border-gray-300 rounded-lg flex flex-row items-center gap-x-2 hover:${bgColor} font-semibold hover:text-white px-10 py-2 text-sm`}>
            {catagory.catagory}
            <span className="text-xs group-hover:text-white text-gray-500">{catagory.napaliTranslation}</span>
        </button>
    )
}

export default Filter;