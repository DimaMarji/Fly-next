import React, { createContext, useContext, useState } from "react";

interface TravelContextData {
  flightLocation: any;
  setFlightLocation: React.Dispatch<React.SetStateAction<any>>;
  flightDestination: any;
  setFlightDestination: React.Dispatch<React.SetStateAction<any>>;
  flightDate: any;
  setFlightDate: React.Dispatch<React.SetStateAction<any>>;
  landingDate: any;
  setLandingDate: React.Dispatch<React.SetStateAction<any>>;
  travelType: any;
  setTravelType: React.Dispatch<React.SetStateAction<any>>;
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  babies: number;
  setBabies: React.Dispatch<React.SetStateAction<number>>;
  childrens: number;
  setChildrens: React.Dispatch<React.SetStateAction<number>>;
}

const TravelContext = React.createContext<TravelContextData | undefined>(undefined);

export const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error("useTravelContext must be used within a TravelContextProvider");
  }
  return context;
};

export const TravelContextProvider: React.FC<any> = ({ children }) => {
  const [flightLocation, setFlightLocation] = useState<any>();
  const [flightDestination, setFlightDestination] = useState<any>();
  const [flightDate, setFlightDate] = useState<any>();
  const [landingDate, setLandingDate] = useState<any>();
  const [travelType, setTravelType] = useState<any>();
  const [adults, setAdults] = useState<number>(1);
  const [babies, setBabies] = useState<number>(0);
  const [childrens, setChildrens] = useState<number>(0);

  const value: TravelContextData = {
    flightLocation,
    setFlightLocation,
    flightDestination,
    setFlightDestination,
    flightDate,
    setFlightDate,
    landingDate,
    setLandingDate,
    travelType,
    setTravelType,
    adults,
    setAdults,
    babies,
    setBabies,
    childrens,
    setChildrens,
  };

  return <TravelContext.Provider value={value}>{children}</TravelContext.Provider>;
};