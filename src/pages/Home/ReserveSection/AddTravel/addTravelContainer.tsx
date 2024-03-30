import { AutoComplete, Button, Dropdown, Radio, Space, Typography } from "antd";
import { useState } from "react";
import Image from "next/image";
import LandingIcon from "../../../../../public/landing.png";
import FlightIcon from "../../../../../public/flight.png";
import { DayPicker } from "react-day-picker";
import { ar } from "date-fns/locale";
import moment from "moment";
import "moment/locale/ar";
import CalendarDropdown from "./CalendarDropdown/calendarDropdownContainer";

const { Text } = Typography;
const AddTravel: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [flightDate, setFlightDate] = useState<any>();
  const [landingDate, setLandingDate] = useState<any>();

  console.log(flightDate);

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
          style={{ width: 200 }}
          placeholder="المدينة أو المطار"
          onSearch={(text) => {}}
          onSelect={() => {}}
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
          style={{ width: 200 }}
          placeholder="المدينة أو المطار"
          onSearch={(text) => {}}
          onSelect={() => {}}
        />
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <CalendarDropdown type={"flight"} selectedDate={flightDate} setSelectedDate={setFlightDate}/>
        <CalendarDropdown type={"landing"} selectedDate={landingDate} setSelectedDate={setLandingDate}/>
    
      </div>

      <Radio.Group
      className="flight-type-radio"
        options={[{label:"السياحية",value:"h"},
        {label:"الأعمال",value:"hs"},
        {label:"الأولى",value:"hd"},]}
        onChange={()=>{}}
        // value={value4}
        optionType="button"
        buttonStyle="solid"
      />
      <Button className="button-full-width" type="primary">
        ابحث عن رحلة
      </Button>
    </div>
  );
};

export default AddTravel;
