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
import { TravelContextProvider } from "@/Context/travelContext";
import { useRouter } from "next/router";

const SharedLayout: React.FC<ISharedLayoutProps> = ({ children }) => {
 
const router=useRouter()


useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  
  return (
    <div>
      <Layout className="layout">
        <SharedNavbar />
        <TravelContextProvider>
        <Content >
          <div className="site-layout-content">{children}</div>
        </Content>
        </TravelContextProvider>
        <SharedFooter/>
      </Layout>
    </div>
  );
};
export default SharedLayout;
