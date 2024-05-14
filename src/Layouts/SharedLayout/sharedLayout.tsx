import {Content, Footer} from "antd/lib/layout/layout";
import {ISharedLayoutProps} from "./interface";
import {Layout, Menu, Space, Typography} from "antd";
import {UserDetails} from "../../Components/UserDetails/index";
import Image from "next/image";

const SharedLayout: React.FC<ISharedLayoutProps> = ({children}) => {

    // const { mutate } = useCreate(`security/oauth2/token`,{},
    // {"Content-Type": "application/x-www-form-urlencoded"}
    // );
    const {Content, Footer, Header, Sider} = Layout
    const {Title} = Typography

    const items = [{
        key: "الاعدادات",
        // icon: "React.createElement(icon)",
        label: "الاعدادات",
    },{
        key: "المدن",
        // icon: "React.createElement(icon)",
        label: "المدن",
    }, {
        key: "المندوبين",
        // icon: "React.createElement(icon)",
        label: "المندوبين",
    }, {
        key: "الباقات",
        // icon: "React.createElement(icon)",
        label: "الباقات",
    },]

    const fakeUser = {
        first_name: "ديمة",
        last_name: "المرجي",
        email: "Dima@email.com",
        avatar: undefined
    }

    return (
        <div>
            <Layout style={{minHeight: "100vh"}}>
                <Sider
                    className={"sidebar-container"}
                    breakpoint="lg"
                    collapsedWidth="0"
                    width={255}

                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <Space className={"sidebar-logo"}>

                        <Title style={{fontSize: "19px"}}>الجولات الاستشارية</Title>
                        <Image height={32} width={32} src={"/arrow.svg"} alt={"arrow"}/>
                    </Space>
                    <UserDetails {...fakeUser} />
                    <Menu style={{textAlign:"right"}} mode="inline" defaultSelectedKeys={['4']} items={items}/>
                </Sider>
                <Layout style={{padding:"12px 32px 32px 32px"}}>
                    <Header style={{background:"#FFFF"}} />
                    <Content style={{margin: '24px 16px 0',background:""}}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            {children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};
export default SharedLayout;
