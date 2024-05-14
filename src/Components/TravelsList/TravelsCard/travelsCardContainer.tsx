import React from 'react'
import {Button, Card, Divider, Space, Typography} from "antd"
import Image from "next/image"
import SeatIcon from "../../../../public/airplaneSeat1.png"
import {ArrowLeftOutlined} from "@ant-design/icons"
import moment from 'moment'

const {Text,Title} = Typography

const TravelsCard:React.FC<any>=(
    {item}
) =>{
  return (

    <div className='travel-card'><div>
        <Space direction='vertical' ><Text>{item?.segments?.[0]?.aircraft?.code}</Text>
        <Text>{moment.utc(moment.duration(item?.duration).asMilliseconds()).locale("en").format("H[h] - m[m]")}</Text></Space>
        <div>
        <Space direction='vertical' ><Text className='time-text'>
          {moment(item?.segments?.[0]?.departure?.at).locale("en").format("HH:mm")}</Text>
        <Text>{item?.segments?.[0]?.departure?.iataCode}</Text></Space>
        <ArrowLeftOutlined />
        <Space direction='vertical' ><Text className='time-text'>{moment(item?.segments?.[0]?.arrival?.at).locale("en").format("HH:mm")}</Text>
        <Text>{item?.segments?.[0]?.arrival?.iataCode}</Text></Space>
        </div>
        <Image className='seat-image' width={36} alt={"seat"} src={SeatIcon}/>
        </div>
        <div className='book-button'>
        <Space direction='vertical' >
          <Title style={{fontSize:"24px"}}>1,280 ريال</Title>
        <Button type='primary'>اختيار</Button></Space>
        </div>
    </div>
  )
}

export default TravelsCard