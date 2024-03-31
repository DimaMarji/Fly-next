import {AutoComplete, Button, Radio, Space, Typography} from "antd";
import {useState} from "react";
import Image from "next/image";
import LandingIcon from "../../../../../public/landing.png";
import FlightIcon from "../../../../../public/flight.png";
import "moment/locale/ar";
import CalendarDropdown from "./CalendarDropdown/calendarDropdownContainer";
import {CounterInput} from "./CounterInput";

const {Text} = Typography;
const AddTravel: React.FC = () => {
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [flightDate, setFlightDate] = useState<any>();
    const [landingDate, setLandingDate] = useState<any>();
    const [travelType, setTravelType] = useState<any>();

    const [flightLocation, setFlightLocation] = useState<any>();
    const [flightDestination, setFlightDestination] = useState<any>();

    const [adults, setAdults] = useState<number>(0);
 const [babies, setBabies] = useState<number>(0);
 const [children, setChildren] = useState<number>(0);


    const handleReserve = () => {

    }

    const travelOptions = [{label: "السياحية", value: "h"},
        {label: "الأعمال", value: "hs"},
        {label: "الأولى", value: "hd"},]

    const guestsData = [{
        label: "بالغ",
        value: adults,
        setValue:setAdults
    }, {
        label: "طفل",
        value: children,
        setValue:setChildren
    }, {
        label: "رضيع",
        value: babies,
        setValue:setBabies
    },]

    return (
        <div>
            <div className="travel-select">
                <Space className="label">
                    <Image
                        className="plane-icon"
                        width={16}
                        src={FlightIcon}
                        alt="airplane"
                    />

                    <Text>من</Text>
                </Space>

                <AutoComplete
                    options={options}
                    style={{width: 200}}
                    placeholder="المدينة أو المطار"
                    onSearch={(text: string) => {
                    }}
                    onSelect={(value) => {
                        setFlightLocation(value)
                    }}
                />
            </div>
            <div className="travel-select">
                <Space className="label">
                    <Image
                        className="plane-icon"
                        width={16}
                        src={LandingIcon}
                        alt="airplane"
                    />
                    <Text>إلى</Text>
                </Space>
                <AutoComplete
                    options={options}
                    style={{width: 200}}
                    placeholder="المدينة أو المطار"
                    onSearch={(text: string) => {
                    }}
                    onSelect={(value) => {
                        setFlightDestination(value)
                    }}
                />
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <CalendarDropdown type={"flight"} selectedDate={flightDate}
                                  disabledDates={{type: 'before', date: new Date()}} setSelectedDate={setFlightDate}/>
                <CalendarDropdown type={"landing"} selectedDate={landingDate}
                                  disabledDates={{type: 'before', date: new Date(flightDate)}}
                                  setSelectedDate={setLandingDate}/>

            </div>

            <div className={"guests-container"}>
            {guestsData?.map((item, index) => {
                return <CounterInput {...item}/>
            })}
            </div>
            <Radio.Group
                className="flight-type-radio"
                options={travelOptions}
                onChange={(event) => {
                    console.log(event)
                    setTravelType(event?.target?.value)
                }}
                value={travelType}
                optionType="button"
                buttonStyle="solid"
            />
            <Button className="button-full-width" type="primary"
                    onClick={handleReserve}>
                ابحث عن رحلة
            </Button>
        </div>
    );
};

export default AddTravel;
