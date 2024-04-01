import { Col, Row, Space, Tabs, TabsProps, Typography } from "antd";
import Image from "next/image";
import PlaneIcon from "../../../../public/plane.png";
import HotelIcon from "../../../../public/hotel.png";
import AddTravel from "./AddTravel/addTravelContainer";
import { useAppMediaQuery } from "@/Hooks/MediaQuery/use-app-media-query";
import AddHotel from "./AddHotel/addHotelContainer";

const { Text } = Typography;

const ReserveSection: React.FC = () => {
  const {isMobileOrTablet} =useAppMediaQuery()
  const onChange = (key: string) => {
    console.log(key);
  };
const flyItems=[
    {
      key: "1",
      label: (
          <Text>ذهاب فقط</Text>
      ),
      children: <AddTravel/>,
    },
    {
      key: "2",
      label: (
        <Text>ذهاب وعودة</Text>
    ),
      children: <AddTravel/>,
    }, {
        key: "3",
        label: (
          <Text>وجهات متعددة</Text>
      ),
        children: "Content of Tab Pane 2",
      },
  ];


  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <Space>
        <Text>الرحلات</Text>
        <Image className="plane-icon" width={16} src={PlaneIcon} alt="airplane" />
      </Space>
    ),
      children: <div>
         <Tabs
          className="reserve-tabs"
          type="card"
          direction="rtl"
          defaultActiveKey="1"
          items={flyItems}
          onChange={onChange}
        />
      </div>,
    },
    {
      key: "2",
      label:  <Space>
      <Text>فنادق</Text>
      <Image className="plane-icon" width={16} src={HotelIcon} alt="airplane" />
    </Space>,
      children:<AddHotel/>,
    },
  ];

  return (
    <Row className="reserve-section">
      <Col md={12} lg={10} sm={24} xs={24}>
        <Tabs
          className="reserve-tabs"
          type="card"
          direction="rtl"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </Col>
      <Col md={12} lg={14} sm={0} xs={0}/>
    </Row>
  );
};
export default ReserveSection;
