import React from "react";
import {Col, Row, Typography} from "antd";
import {secondSectionData} from "./constant";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import Image from "next/image"

const {Text, Title}=Typography
const SecondSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const secondSectionTitle = <Title  className={"about-us-title"}
                               
                                level={1}>
        {secondSectionData?.title}
    </Title>

    const secondSectionDescription = <Text>
        {secondSectionData?.description}
    </Text>
    const secondSectionImage = <Image className={"about-us-header-image"} src={secondSectionData.image} alt={"about-us"}/>

    return <div className={"about-us-header-container"}>
        <Row className={"about-us-header"}>
            <Col lg={12} sm={24} xs={24}>
                <div className={"about-us-text"}>
                    {secondSectionTitle}
                    {!isMobileOrTablet && secondSectionDescription}
                </div>
            </Col>
            <Col lg={12} sm={24} xs={24}>
                {secondSectionImage}
            </Col>
            {isMobileOrTablet && <Col lg={12} sm={24} xs={24}>
                {secondSectionDescription}
            </Col>}

        </Row>
    </div>
}

export default SecondSection;
