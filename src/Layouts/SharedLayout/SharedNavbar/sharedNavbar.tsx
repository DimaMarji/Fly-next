import { Affix, Button, Menu, Select, Space, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import Image from "next/image";
import LogoImage from "../../../../public/Logo-Dark.webp";
import SADFlagImage from "../../../../public/saudi-arabia-flag-icon-64.png";
import USAFlagImage from "../../../../public/united-states.png";
import { useState } from "react";
import { useRouter } from "next/router";
const { Text, Title } = Typography;

const SharedNavbar = () => {
  const router =useRouter()

  const [currentLanguage, setCurrentLanguage] = useState<
    "العربية" | "English"
  >(router.locale=="ar"?"العربية":"English");
 
  const priceOptions = [
    {
      value: "ar",
      label: (
        <Space>
          <Image width={16} alt="en-icon" src={SADFlagImage} />
          <Text>SAR</Text>
        </Space>
      ),
    },
    {
      value: "en",
      label: (
        <Space>
          <Image width={16} alt="en-icon" src={USAFlagImage} />
          <Text>USA</Text>
        </Space>
      ),
    },
  ];

  return (
    <Affix offsetTop={0.1}>
      <Header className="fly-akeed-navbar">
        <Image src={LogoImage} alt="logo" className="logo" />
        <Space>
          <Select
            className="lang-select"
            defaultValue="ar"
            style={{ width: 120 }}
            options={priceOptions}
          />
          <Button className="lang-button" onClick={()=>{
             router.push(router.locale=="ar"?'/en':"/ar", router.locale=="ar"?'/en':"/ar", { locale: router.locale=="ar"?'en':"ar" })
            setCurrentLanguage((prev)=>{
              return prev=="English"?"العربية":"English"
            })
          }}>{currentLanguage} </Button>
        </Space>
        <Space className="buttons-div">
          <Button type="primary">الشركات</Button>
          <Button className="secondary-button">تسجيل الدخول</Button>
        </Space>
      </Header>
    </Affix>
  );
};
export default SharedNavbar;
