import { Content, Footer } from "antd/lib/layout/layout";
import SharedNavbar from "./SharedNavbar/sharedNavbar";
import { ISharedLayoutProps } from "./interface";
import { Layout } from "antd";
import { useAppMediaQuery } from "@/Hooks/MediaQuery/use-app-media-query";

const SharedLayout: React.FC<ISharedLayoutProps> = ({ children }) => {
  const { isTabletOrMobile } = useAppMediaQuery();

  return (
    <div>
      <Layout className="layout">
        <SharedNavbar />

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};
export default SharedLayout;
