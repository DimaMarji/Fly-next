import React from "react";
import {Typography} from "antd"
import OMImage from  "../../../../public/OM.webp"
import NEOMImage from  "../../../../public/NEOM.webp"
import KnowliomImage from  "../../../../public/Knowliom.webp"
import JockClub from  "../../../../public/JockClub.webp"
import StcGroup from  "../../../../public/StcGroup.webp"
import AlibabCloud from  "../../../../public/AlibabCloud.webp"
import Image from "next/image";

const {Text} = Typography
const CompaniesSection: React.FC = () => {
    const companiesLogoList=[
        OMImage,
        NEOMImage,
        KnowliomImage,
        JockClub,
        StcGroup,
        AlibabCloud

    ]
    return <div className={"companies-section"}>
        <Text>
            انضم إلى صفوف النخبة لأكثر الشركات إثارة للإعجاب التي تثق بنا
        </Text>
        <div className={"logos-list"}>
            {companiesLogoList?.map((item)=>{
                return<div className={"log-div"}><Image src={item} alt={"logo"}/></div>
            })}
        </div>

    </div>
}

export default CompaniesSection