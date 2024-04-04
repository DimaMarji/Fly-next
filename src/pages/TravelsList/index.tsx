import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  List,
  Row,
  Space,
  Spin,
  Typography,
  message,
  Checkbox,
  Divider,
  Slider,
} from "antd";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import moment from "moment";
import { useRouter } from "next/router";
import { useCreate } from "@/ReactQuery/CreateQuery";
import { useTravelContext } from "@/Context/travelContext";
import TravelsCard from "../../Components/TravelsList/TravelsCard/travelsCardContainer";
import FlightIcon from "../../../public/flight.png";
const { Text, Title } = Typography;
import Image from "next/image";

const TravelsList: React.FC<any> = ({ data }) => {
  const { push } = useRouter();

  const [resultData, setResultData] = useState();

  const { mutate, isError, isLoading } = useCreate(
    "v1/shopping/availability/flight-availabilities",
    {
      onError: (error: any) => {
        message.success(`${error}`);
      },
      onSuccess: (data: any) => {
        setResultData(data?.data);
      },
    }
  );

  const {
    flightLocation,
    flightDestination,
    flightDate,
    adults,
    babies,
    childrens,
    travelType,
    landingDate,
  } = useTravelContext();

  const getTravelers = () => {
    const travelers = [];

    for (let i = 0; i < adults; i++) {
      travelers.push({
        id: (i + 1).toString(),
        travelerType: "ADULT",
      });
    }

    for (let i = 0; i < babies; i++) {
      travelers.push({
        id: (i + 1).toString(),
        travelerType: "BABY",
      });
    }

    for (let i = 0; i < childrens; i++) {
      travelers.push({
        id: (i + 1).toString(),
        travelerType: "CHILD",
      });
    }

    return travelers;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    mutate(
      JSON.stringify({
        originDestinations: [
          {
            ...flightLocation,
            ...flightDestination,
            departureDateTime: {
              date: moment(flightDate).locale("en").format("YYYY-MM-DD"),
              time: moment(flightDate).locale("en").format("HH:mm:ss"),
              // "timeWindow": "2H",
              // "dateWindow": "P1D"
            },
          },
        ],
        travelers: getTravelers(),
        sources: ["GDS"],
      })
    );
  }, []);

  return (
    <div className="travels-container">
      <div id="top" className="travels-container-header">
        <ArrowRightOutlined onClick={() => push("/")} />
        <Space direction="vertical">
          <Text
            style={{ color: "#FFF" }}
          >{`${flightLocation?.originLocationCode}-${flightDestination?.destinationLocationCode}`}</Text>
          <Text style={{ color: "#05459E" }}>{travelType}</Text>
        </Space>
        <Space direction="vertical">
          <Text style={{ color: "#FFF" }}>
            {moment(flightDate).locale("ar_SA").format("DD MMMM YYYY")}
          </Text>
          <Text style={{ color: "rgb(65 108 235)" }}>الذهاب</Text>
        </Space>
        <Space direction="vertical">
          <Text style={{ color: "#FFF" }}>
            {moment(landingDate).locale("ar_SA").format("DD MMMM YYYY")}
          </Text>
          <Text style={{ color: "rgb(65 108 235)" }}>العودة</Text>
        </Space>
        <Button onClick={() => push("/")}>تغيير البحث</Button>
      </div>
      {isLoading ? (
        <div className="travel-loading-div">
          <Title>البحث عن الرحلات</Title>
          <Spin />
        </div>
      ) : (
        <Row>
          <Col span={6}>
            <div className="right-section">
              <Text className="right-section-title">توقف</Text>

              <Checkbox checked>
                {" "}
                <Text>رحلة مباشرة</Text>
              </Checkbox>
              <Checkbox>
                <Text>1 توقف </Text>
              </Checkbox>
              <Divider />
              <Text className="right-section-title">خطوط الطيران</Text>
              <Checkbox checked>
                {" "}
                <Text>طيران الإمارات</Text>
              </Checkbox>
              <Checkbox>
                <Text>فلاي دبي</Text>
              </Checkbox>
              <Checkbox checked>
                {" "}
                <Text>الخطوط السعودية</Text>
              </Checkbox>
              <Checkbox>
                <Text>طيران ناس</Text>
              </Checkbox>
              <Checkbox checked>
                {" "}
                <Text>Flyadeal </Text>
              </Checkbox>
              <Divider />
              <Text className="right-section-title">السعر </Text>
              <Slider defaultValue={70} />
              <Divider />
              <Text className="right-section-title">مدة الرحلة </Text>
              <Slider defaultValue={40} />
              <Divider />
              <Text className="right-section-title">الرحلات </Text>
              <Checkbox checked>
                {" "}
                <Text>الأقل سعرا </Text>
              </Checkbox>
              <Checkbox>
                <Text>اختر </Text>
              </Checkbox>
            </div>
          </Col>
          <Col span={14} offset={4}>
            <Space className="list-label">
              <Image
                className="plane-icon"
                width={36}
                src={FlightIcon}
                alt="airplane"
              />

              <Text className="list-title">رحلة الذهاب</Text>
            </Space>
            <List
              dataSource={resultData}
              renderItem={(item) => (
                <List.Item>
                  <TravelsCard item={item} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TravelsList;
