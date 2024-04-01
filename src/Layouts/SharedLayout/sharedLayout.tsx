import { Content, Footer } from "antd/lib/layout/layout";
import SharedNavbar from "./SharedNavbar/sharedNavbar";
import { ISharedLayoutProps } from "./interface";
import { Layout } from "antd";
import { useAppMediaQuery } from "@/Hooks/MediaQuery/use-app-media-query";
import SharedFooter from "./Footer/sharedFooter";
import { useCreate } from "@/ReactQuery/CreateQuery";
import { useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const SharedLayout: React.FC<ISharedLayoutProps> = ({ children }) => {
 
  // const { mutate } = useCreate(`security/oauth2/token`,{},
  // {"Content-Type": "application/x-www-form-urlencoded"}
  // );


  
  return (
    <div>
      <Layout className="layout">
        <SharedNavbar />

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <SharedFooter/>
      </Layout>
    </div>
  );
};
export default SharedLayout;
