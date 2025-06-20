import React from "react";

interface props {
    onClick: () => void;
}
const LiveDataBtn: React.FC<props> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-xs px-1 py-1 cursor-pointer text-center font-semibold bg-white rounded">Live Data</button>
    )
}

export default LiveDataBtn;