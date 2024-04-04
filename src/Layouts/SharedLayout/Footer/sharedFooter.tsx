import React from 'react';
import LogoImage from "../../../../public/logo.webp";
import PaymentImage from "../../../../public/paymentMethods.webp";
import Image from 'next/image'
import {Button, Divider, Layout, Space, Typography} from "antd";
import googlePlayImage from "../../../../public/google_play.webp";
import appleStoreImage from "../../../../public/apple_store.webp";

const {Text} = Typography
const {Footer} = Layout


const SharedFooter = () => {


    const currentYear = new Date().getFullYear()


    return (
        <>
            <Footer className={"fly-website-footer"}>
                <div className={"fly-website-footer-content"}>
                    <div className={"all-information-div"}>
                        <div>
                            <Button className={"company-logo-button"} type={'link'} href={"/"} target={"_blank"}>
                                <Image
                                    width={140}
                                    alt={"company-logo-image"} className={"company-logo-image"} src={LogoImage}

                                />
                            </Button>
                            <Image
                                width={180}
                                alt={"company-logo-image"} style={{display: "block", marginTop: "24px"}}
                                src={PaymentImage}

                            />
                        </div>
                        <div className={"our-office-div"}>
                            <div className={"perth-australia-div"}>
                                <Text className={"title-text"}
                                      >
                                    فلاي أكيد
                                </Text>
                                <div className={"our-offices"}>
                                    <div>
                                        <Text
                                            className={"footer-link"}>
                                            من نحن
                                        </Text>
                                        <div className={"info-details"}>
                                            <Text
                                                className={"footer-link"}>فلاي أكيد أعمال</Text>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={"our-law-div"}>
                            <div className={"perth-australia-div"}>
                                <Text className={"title-text"}
                                       >
                                    الدعم
                                </Text>
                                <div className={"our-offices"}>
                                    <div>
                                        <Text
                                            className={"footer-link"}>
                                            تواصل معنا
                                        </Text>
                                        <div className={"info-details"}>
                                            <Text
                                                className={"footer-link"}>الأسئلة الشائعة</Text>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={"our-services-div"}>
                            <Text className={"title-text"}
                                 
                            >
                                الأمور القانونية
                            </Text>
                            <div className={"our-services-list"}>
                                <Text
                                    className={`footer-link`}
                                >الشروط والأحكام
                                </Text>
                                <Text
                                    className={`footer-link`}
                                >شروط الخصوصية
                                </Text>

                            </div>
                        </div>
                        <div className={"about-div"}>
                            <Text className={"title-text"}
                                 
                            >
                                التحميل
                            </Text>

                            <Space direction={"vertical"}>
                                <Image height={50} src={appleStoreImage} alt={"download"}/>
                                <Image height={50} src={googlePlayImage} alt={"download"}/>
                            </Space>
                        </div>

                    </div>
                    <div className={"divider-div"}>
                        <Divider className={"fly-footer-divider"}/>
                    </div>
                    <div className={"copyright-div"}>
                    <span className={"copyright-span"}>
                        <Text
                            className={"copyright-text"}
                        >
                            جميع الحقوق محفوظة لموقع وتطبيق فلاي أكيد @{currentYear}    </Text>
                    </span>
                    </div>
                </div>
            </Footer>
        </>
    );

}
export default SharedFooter;
