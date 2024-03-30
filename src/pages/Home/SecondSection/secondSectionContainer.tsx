import "./style.scss"
import React from "react";
import {Col, Image, Row, Text, Title, Typography} from "antd";
import {secondSectionData} from "./constant";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";

const {Text, Title}=Typography
const SecondSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const aboutUsTitle = <Title typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "32px-20px-20px"}}
                                className={"about-us-title"}
                                typographyFontColor={"#232736"}
                                level={1}>
        {secondSectionData?.title}
    </Title>

    const aboutUsDescription = <Text
        typographyType={{type: "regular-regular-regular", size: "18px-14px-14px"}}>
        {secondSectionData?.description}
    </Text>
    const aboutUsImage = <Image className={"about-us-header-image"} src={secondSectionData.image} alt={"about-us"}/>

    return <div className={"about-us-header-container"}>
        <Row className={"about-us-header"}>
            <Col lg={12} sm={24} xs={24}>
                <div className={"about-us-text"}>
                    {aboutUsTitle}
                    {!isMobileOrTablet && aboutUsDescription}
                </div>
            </Col>
            <Col lg={12} sm={24} xs={24}>
                {aboutUsImage}
            </Col>
            {isMobileOrTablet && <Col lg={12} sm={24} xs={24}>
                {aboutUsDescription}
            </Col>}

        </Row>
    </div>
}

export default SecondSection;
