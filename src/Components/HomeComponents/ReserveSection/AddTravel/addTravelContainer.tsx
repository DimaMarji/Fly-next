import { AutoComplete, Button, Form, Radio, Space, Spin, Typography,message } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import LandingIcon from "../../../../../public/landing.png";
import FlightIcon from "../../../../../public/flight.png";
import "moment/locale/ar";
import CalendarDropdown from "./CalendarDropdown/calendarDropdownContainer";
import moment from "moment";
import {CounterInput} from "./CounterInput";
import {useCreate} from "../../../../ReactQuery/CreateQuery";
import {useGetAll} from "../../../../ReactQuery/GetQuery";
import { useRouter } from "next/router";
import { useTravelContext } from "@/Context/travelContext";
import {CloseOutlined} from "@ant-design/icons"

const { Text, Title } = Typography;
const AddTravel: React.FC<any> = ({type}) => {
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const [searchValue, setSearchValue] = useState<string>();

  const {
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
  } = useTravelContext();

 const {push} = useRouter()

   
  const handleReserve = () => {
    push("/available-travels")
  };

  const { data, isSuccess,isLoading } = useGetAll(
    `https://jevent-user.jevent.event-reg.app/airports?keyword=${searchValue}`,
    { enabled: !!searchValue }
  );


  const travelOptions = [
    { label: "السياحية", value: "السياحية" },
    { label: "الأعمال", value: "الأعمال" },
    { label: "الأولى", value: "الأولى" },
  ];
  const{locale}=useRouter() 
  console.log(locale)

  console.log(data?.data)

  useEffect(() => {
    const newOptions = data?.data?.map((item: any) => {
      return {
        label: (
          <div style={{display:"flex",justifyContent:"space-between",padding:"12px"}}>
            <Space direction="vertical">
              <Text>{locale=="ar"?item?.name_ar:item?.name}</Text>
              <Text>{locale=="ar"?item?.country_ar:item?.country} - {locale=="ar"?item?.city_ar:item?.city}</Text>
            </Space>
            <Title style={{fontSize:"20px"}}>{item?.iata}</Title>
          </div>
        ),
        value: `${locale=="ar"?item?.country_ar:item?.country}-${locale=="ar"?item?.city_ar:item?.city}`,
        key: item?.id,
      };
    });
    setOptions(newOptions);
  }, [isSuccess]);

    const guestsData = [{
        label: "بالغ",
        value: adults,
        setValue:setAdults
    }, {
        label: "طفل",
        value: childrens,
        setValue:setChildrens
    }, {
        label: "رضيع",
        value: babies,
        setValue:setBabies
    },]

  return (
    <Form onFinish={()=>{
      handleReserve()
    }}>
      <div className="travel-select">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Space className="label">
          <Image
            className="plane-icon"
            width={16}
            src={FlightIcon}
            alt="airplane"
          />

          <Text>من</Text>
        </Space>
        <CloseOutlined onClick={()=>setFlightLocation(undefined)}/>
        </div>
<Form.Item  name={"from-city"} rules={[{validator:()=>{
          return !!flightLocation? Promise.resolve() :Promise.reject()
        },message:"الرجاء إدخال المدينة أو المطار"}]}>
        <AutoComplete
          options={options}
          notFoundContent={isLoading ? <Spin /> : 'لا يوجد نتائج'}
          placeholder="المدينة أو المطار"
          onSearch={(text: string) => {
            setSearchValue(text);
          }}
          onSelect={(value,option) => {
            
            const selectedItem=data?.data?.find((item:any)=>item?.id==value)

            setFlightLocation( {
              "id": 1,
              "originLocationCode": selectedItem?.iataCode,
              // "destinationLocationCode": "MAD",

            });
          }}
        />
        </Form.Item>
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
        <Form.Item name={"city"} rules={[{validator:()=>{
          return !!flightDestination? Promise.resolve() :Promise.reject()
        },message:"الرجاء إدخال المدينة أو المطار"}]}>
        <AutoComplete
          options={options}
          style={{ width: "100%"}}
          placeholder="المدينة أو المطار"
          onSearch={(text: string) => {
            setSearchValue(text)
          }}
          onSelect={(value) => {
            const selectedItem=data?.data?.find((item:any)=>item?.id==value)

            setFlightDestination( {
              "destinationLocationCode": selectedItem?.iataCode,
            });
          }}
        />
        </Form.Item>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CalendarDropdown
        
          type={"flight"}
          selectedDate={flightDate}
          disabledDates={{ type: "before", date: new Date() }}
          setSelectedDate={setFlightDate}
        />
     {  type=="withReturn"&&  <CalendarDropdown
          type={"landing"}
          selectedDate={landingDate}
          disabledDates={{ type: "before", date: new Date(flightDate) }}
          setSelectedDate={setLandingDate}
        />}
      </div>

            <div className={"guests-container"}>
            {guestsData?.map((item, index) => {
                return <CounterInput {...item}/>
            })}
            </div>


      <Radio.Group
        className="flight-type-radio"
        options={travelOptions}
        defaultValue={"السياحية"}
        onChange={(event) => {
          console.log(event);
          setTravelType(event?.target?.value);
        }}
        value={travelType}
        optionType="button"
        buttonStyle="solid"
      />
      <Button
        className="button-full-width"
        type="primary"
        htmlType="submit"
      >
        ابحث عن رحلة
      </Button>
    </Form>
  );
};

export default AddTravel;
