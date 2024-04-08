import { Dropdown, Space, Typography } from "antd";
import { ar } from "date-fns/locale";
import moment from "moment";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ICalendarDropdown } from "./interface";

const { Text } = Typography;

const CalendarDropdown: React.FC<ICalendarDropdown> = ({
  selectedDate,
  setSelectedDate,
  type,
  disabledDates
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return (
    <Dropdown
      open={isCalendarOpen}
      placement={"bottom"}
      trigger={["click"]}
      onOpenChange={setIsCalendarOpen}
      overlay={
        <DayPicker
          className="day-picker"
          disabled={disabledDates}
          dir="rtl"
          locale={ar}
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      }
    >
      <div className="date-card">
        <Text className="title">تاريخ {`${type=="flight"?"المغادرة":"العودة"}`}</Text>
        <Space>
          <Text style={{ fontSize: "32px" }}>
            {moment(selectedDate).locale("en").format("D")}
          </Text>
          <div className="month-year">
            <Text>{moment(selectedDate).locale("ar_SA").format("MMMM")}</Text>
            <Text>{moment(selectedDate).locale("en").format("yyyy")}</Text>
          </div>
        </Space>
      </div>
    </Dropdown>
  );
};
export default CalendarDropdown;
