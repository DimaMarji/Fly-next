import React from "react";
import {Button, Space, Typography} from "antd"
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const {Title, Text} = Typography
const CounterInput: React.FC<any> = ({label, value, setValue}) => {

    const handleCount = (type: "+" | "-") => {
        setValue((prev:any) => type === "+" ? prev + 1 : prev - 1);
    };


    return <div className={"counter-input"}>
           <Space direction={"vertical"}>
            <Button type={"link"} disabled={value >= 5}>
                <UpOutlined onClick={() => handleCount("+")}/>
            </Button>
            <Button type={"link"} disabled={value <= 0}>
                <DownOutlined onClick={() => handleCount("-")}/>
            </Button>
        </Space>
        <Space direction={"vertical"} className="text-div">
            <Text className={"counter-input-label"}>{label}</Text>
            <Title className={"counter-input-value"}>{value}</Title>
        </Space>
     
    </div>
}

export default CounterInput