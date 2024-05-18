import { Content, Footer } from "antd/lib/layout/layout";
import { ISharedLayoutProps } from "./interface";
import { Button, Layout, Menu, Space, Typography } from "antd";
import { UserDetails } from "../../Components/UserDetails/index";
import Image from "next/image";
import { LeftOutlined } from "@ant-design/icons";
import { useState } from "react";

const SharedLayout: React.FC<ISharedLayoutProps> = ({ children }) => {
  // const { mutate } = useCreate(`security/oauth2/token`,{},
  // {"Content-Type": "application/x-www-form-urlencoded"}
  // );
  const { Content, Footer, Header, Sider } = Layout;
  const { Title } = Typography;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const items = [
    {
      key: "الاعدادات",
      // icon: "React.createElement(icon)",
      label: "الاعدادات",
    },
    {
      key: "المدن",
      // icon: "React.createElement(icon)",
      label: "المدن",
    },
    {
      key: "المندوبين",
      // icon: "React.createElement(icon)",
      label: "المندوبين",
    },
    {
      key: "الباقات",
      // icon: "React.createElement(icon)",
      label: "الباقات",
    },
  ];

  const fakeUser = {
    first_name: "ديمة",
    last_name: "المرجي",
    email: "Dima@email.com",
    avatar: undefined,
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
      
        <Sider
          className={"sidebar-container"}
          // breakpoint="lg"
          collapsedWidth="100"
          collapsed={collapsed}
          width={255}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            setCollapsed(collapsed);
          }}
        >
              <Button className="collapse-button" 
              onClick={()=> setCollapsed(!collapsed)}
          icon={
            <Image height={32} width={32} src={"/arrow.svg"} alt={"arrow"} />
          }
        ></Button>
          <Space className={"sidebar-logo"}>
            <Title style={{ fontSize: "19px" }}>الجولات الاستشارية</Title>
          </Space>
          <UserDetails {...fakeUser} />
          <Menu
            theme="light"
            mode="inline"
            className="home-menu"
            items={[
              {
                label: (
                  <Space>
                    <div>الصفحة الرئيسية</div>
                    <LeftOutlined />
                  </Space>
                ),
                key: "home",
                children: [{ label: "الصفحة الرئيسية", key: "/" }],
              },
            ]}
            //   style={{ flex: 1, minWidth: 0 }}
          />
          <Menu
            style={{ textAlign: "right" }}
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "12px 32px 32px 32px" }}>
          <Header style={{ background: "#FFFF" }} />
          <Content style={{ margin: "24px 16px 0", background: "" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default SharedLayout;
