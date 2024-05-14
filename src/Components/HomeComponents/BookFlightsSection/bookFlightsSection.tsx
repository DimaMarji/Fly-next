import React from "react";
import {Col, Row, Typography,Space} from "antd"
import googlePlayImage from "../../../../public/google_play.webp";
import landingPhoneImage from "../../../../public/landingPhone.svg";
import appleStoreImage from "../../../../public/apple_store.webp";
import Image from "next/image";

const {Text, Title} = Typography

const BookFlightsSection: React.FC = () => {
    return <div className={"book-flights-section"}>
        <Row className={"second-section-header"}>

        

            <Col md={{span:10}} sm={24} xs={24}>
                <Image className={"mobile-image"} width={350} src={landingPhoneImage} alt={"mobile"}/>

            </Col>
            <Col md={14} sm={24} xs={24}>
                <div className={"second-section-text"}>
                    <Title className={"book-flights-title"}>
                        احجز رحلات الطيران في أي وقت وفي أي مكان بسهولة مع تطبيقنا القابل للتنزيل
                    </Title>
                    <Space>
                    <Image height={60} src={appleStoreImage} alt={"download"}/>
                    <Image height={60} src={googlePlayImage} alt={"download"}/>
                    </Space>
                </div>

            </Col>

        </Row>
    </div>
}

export default BookFlightsSection