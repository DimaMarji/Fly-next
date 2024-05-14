import {Content, Footer} from "antd/lib/layout/layout";
import {ISharedLayoutProps} from "./interface";
import {Layout, Menu, Typography} from "antd";

const SharedLayout: React.FC<ISharedLayoutProps> = ({children}) => {

    // const { mutate } = useCreate(`security/oauth2/token`,{},
    // {"Content-Type": "application/x-www-form-urlencoded"}
    // );
    const {Content, Footer, Header, Sider} = Layout
    const {Title} = Typography

    const items = [{
        key: "String(index + 1)",
        icon: "React.createElement(icon)",
        label: "nav ${index + 1}",
    }, {
        key: "String(index + 1)",
        icon: "React.createElement(icon)",
        label: "nav ${index + 1}",
    }, {
        key: "String(index + 1)",
        icon: "React.createElement(icon)",
        label: "nav ${index + 1}",
    },]

    return (
        <div>
            <Layout>
                <Sider
                    className={"sidebar-container"}
                    breakpoint="lg"
                    collapsedWidth="0"

                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <Title style={{fontSize:"16px"}}>الجولات الاستشارية</Title>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items}/>
                </Sider>
                <Layout>
                    <Header theme={"light"}/>
                    <Content style={{margin: '24px 16px 0'}}>
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
