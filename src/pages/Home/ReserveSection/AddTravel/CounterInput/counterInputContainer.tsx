import React from "react";
import {Space, Typography} from "antd"
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import {Button} from "react-day-picker";

const {Title, Text} = Typography
const CounterInput: React.FC<any> = ({label, value, setValue}) => {

    const handleCount = (type: "+" | "-") => {
        setValue((prev) => type === "+" ? prev + 1 : prev - 1);
    };


    return <div class={"counter-input"}>
        <Space direction={"vertical"}>
            <Text className={"counter-input-label"}>{label}</Text>
            <Title className={"counter-input-value"}>{value}</Title>
        </Space>
        <Space direction={"vertical"}>
            <Button type={"link"} disabled={value >= 50}>
                <ArrowUpOutlined onClick={() => handleCount("+")}/>
            </Button>
            <Button type={"link"}  disabled={value <= 0}>
                <ArrowDownOutlined onClick={() => handleCount("-")}/>
            </Button>
        </Space>
    </div>
}

export default CounterInput