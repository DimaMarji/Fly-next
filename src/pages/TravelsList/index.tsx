import React, { useEffect } from "react";
import { Button, List, Space, Spin, Typography, message } from "antd";
import { Header } from "antd/lib/layout/layout";
import { ArrowRightOutlined } from "@ant-design/icons";
import moment from "moment";
import { useRouter } from "next/router";
import { useCreate } from "@/ReactQuery/CreateQuery";
import { useTravelContext } from "@/Context/travelContext";

const { Text, Title } = Typography;

const TravelsList: React.FC<any> = ({ data }) => {
  const { push } = useRouter();

  const { mutate, isError, isLoading } = useCreate(
    "shopping/availability/flight-availabilities",
    {
      onError: (error: any) => {
        message.success(`${error}`);
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
    landingDate
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
    mutate(
      JSON.stringify({
        originDestinations: [
          {
            ...flightLocation,
            ...flightDestination,
            departureDateTime: {
              date: moment(flightDate).locale("en").format("YYYY-MM-DD"),
              time: moment(flightDate).locale("en").format("hh:mm:ss"),
            },
          },
        ],
        travelers: getTravelers(),
        sources: ["GDS"],
      })
    );
  }, []);
  
  console.log(flightLocation,flightDestination)

  return (
    <div className="travels-container">
      <div className="travels-container-header">
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
        <List />
      )}
    </div>
  );
};

export default TravelsList;
