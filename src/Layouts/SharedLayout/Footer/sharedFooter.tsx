import React from 'react';
import LogoImage from "../../../../public/Logo-Dark.webp";
import Image from 'next/image'
import {Button, Divider,Layout, Typography} from "antd";
import {useRouter} from 'next/router';
import {pagesFooterItemsData} from "./constant";

const {Text, Title} =Typography
const {Footer} = Layout

const SharedFooter = () => {
  

    const currentYear = new Date().getFullYear()


    return (
        <>
            <Footer className={"fly-website-footer"}>
                <div className={"fly-website-footer-content"}>
                    <div className={"all-information-div"}>
                        <Button onClick={() => {
                            push("/")
                        }} className={"company-logo-button"} type={'link'} href={"/"} target={"_blank"}>
                            <Image
                                width={171}
                                alt={"company-logo-image"} className={"company-logo-image"} src={LogoImage}

                            />
                        </Button>
                        <div className={"our-office-div"}>
                            <div className={"perth-australia-div"}>
                                <Title  className={"title-text"}
                                       level={3}>
                                    فلاي أكيد
                                </Title>
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
                                <Title  className={"title-text"}
                                       level={3}>
                                    الدعم
                                </Title>
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
                            <Title  className={"title-text"}
                                   level={3}
                                >
                                الأمور القانونية
                            </Title>
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
                            <Title className={"title-text"}
                                   level={3}
                                 >
                                Download
                            </Title>

                            <div className={"footer-icons-div"}>
                               
                            </div>
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
