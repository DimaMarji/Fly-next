import {AutoComplete, Button, Space, Spin, Typography} from "antd";
import {useEffect, useState} from "react";
import Image from "next/image";
import FlightIcon from "../../../../../public/flight.png";
import "moment/locale/ar";
import {useCreate} from "@/ReactQuery/CreateQuery";
import {useGetAll} from "@/ReactQuery/GetQuery";
import CalendarDropdown from "../AddTravel/CalendarDropdown/calendarDropdownContainer";

const {Text, Title} = Typography;
const AddHotel: React.FC = () => {
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const [searchValue, setSearchValue] = useState<string>();

    const [flightDate, setFlightDate] = useState<any>();
    const [landingDate, setLandingDate] = useState<any>();
    const [travelType, setTravelType] = useState<any>();

    const [flightLocation, setFlightLocation] = useState<any>();
    const [flightDestination, setFlightDestination] = useState<any>();

    const {mutate, isError} = useCreate(
        "shopping/flight-destinations"
    );
    const handleReserve = () => {
        mutate({});
    };

    const {data, isSuccess, isLoading} = useGetAll(
        `reference-data/locations/hotel?keyword=${searchValue}&subType=HOTEL_LEISURE`,
        {enabled: !!searchValue}
    );

    const handleAirportSearch = () => {
        console.log(data);
    };


    useEffect(() => {
        const newOptions = data?.data?.map((item: any) => {
            return {
                label: (
                    <div style={{display: "flex", justifyContent: "space-between", padding: "12px"}}>
                        <Space direction="vertical">
                            <Text>{item?.address?.cityName}</Text>
                            <Text>{item?.address?.countryName}</Text>
                        </Space>
                        <Title style={{fontSize: "20px"}}>{item?.address?.cityCode}</Title>
                    </div>
                ),
                value: item?.id,
            };
        });
        setOptions(newOptions);
    }, [isSuccess]);

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

                    <Text>الفندق أو المدينة</Text>
                </Space>

                <AutoComplete
                    options={options}
                    notFoundContent={isLoading ? <Spin/> : 'No matches'}
                    placeholder="المدينة أو المطار"
                    onSearch={(text: string) => {
                        setSearchValue(text);
                    }}
                    onSelect={(value) => {
                        setFlightLocation(value);
                    }}
                />
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <CalendarDropdown
                    type={"flight"}
                    selectedDate={flightDate}
                    disabledDates={{type: "before", date: new Date()}}
                    setSelectedDate={setFlightDate}
                />
                <CalendarDropdown
                    type={"landing"}
                    selectedDate={landingDate}
                    disabledDates={{type: "before", date: new Date(flightDate)}}
                    setSelectedDate={setLandingDate}
                />
            </div>

            <Button
                className="button-full-width"
                type="primary"
                onClick={handleReserve}
            >
                ابحث عن فنادق
            </Button>
        </div>
    );
};

export default AddHotel;
