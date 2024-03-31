import React from 'react';
import LogoImage from "../../../../public/Logo-Dark.webp";
import Image from 'next/image'
import {Button, Divider,Layout, Typography} from "antd";
import {useRouter} from 'next/router';
import {pagesFooterItemsData} from "./constant";

const {Text, Title} =Typography
const {Footer} = Layout

const SharedFooter = () => {
    //TODO from api
    const contactInfo = [{
        office: "Perth - Australia",
        email: "mailZcoderz",
        phone: "telZcoderz"
    }
    ]

    const router = useRouter()
    const {push, query, asPath} = router
    const handleRedirect = (to: any) => {
        push(to)
    }

    const currentYear = new Date().getFullYear()


    return (
        <>
            <Footer className={"zcoderz-website-footer"}>
                <div className={"zcoderz-website-footer-content"}>
                    <div className={"all-information-div"}>
                        <Button onClick={() => {
                            push("/")
                        }} className={"company-logo-button"} type={'link'} href={"/"} target={"_blank"}>
                            <Image
                                width={191}
                                height={54}
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
                        <div className={"our-services-div"}>
                            <Title  className={"title-text"}
                                   level={3}
                                >
                                Pages
                            </Title>
                            <div className={"our-services-list"}>
                                {pagesFooterItemsData?.map((item, index) => {
                                    const isSelected =
                                        item.key === '/'
                                            ? asPath === item.key
                                            : Array.isArray(item.key)
                                                ? item.key.some(key => asPath.startsWith(key))
                                                : asPath.startsWith(item.key);
                                    return <Text key={index}
                                                 onClick={(event) => {
                                                     push(item?.key[0], item?.key[1], {scroll: true})
                                                 }}
                                                 className={`footer-link ${isSelected ? "footer-link-selected" : ""}`}
                                    >{item?.label}</Text>
                                })}
                            </div>
                        </div>
                        <div className={"about-div"}>
                            <Title className={"title-text"}
                                   level={3}
                                 >
                                Follow us at
                            </Title>

                            <div className={"footer-icons-div"}>
                               
                            </div>
                        </div>

                    </div>
                    <div className={"divider-div"}>
                        <Divider className={"zcoderz-footer-divider"}/>
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
