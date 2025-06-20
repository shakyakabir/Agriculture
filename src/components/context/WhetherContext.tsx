import React, { useState, createContext, useContext, type ReactNode } from "react";

interface locationContextType {
    selectedLocation: string;
    setSelectedLocation: (location: string) => void;
}
const LocationContext = createContext<locationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
    const [selectedLocation, setSelectedLocation] = useState<string>("Kathmandu");
    let data = {
        selectedLocation,
        setSelectedLocation
    }
    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}


export const useWheatherContext = () => {
    const context = useContext(LocationContext);

    if (!context) throw new Error("no contxt");

    return context;
};