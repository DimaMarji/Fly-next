import {FunctionComponent} from "react";
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";

interface AuthLayoutProps {
    //   child?: any;
}

const AuthLayout: FunctionComponent<any> = (props) => {
    const {isMobileOrTablet} = useAppMediaQuery();

    return (
        <>
            {!isMobileOrTablet ? (
                <div
                    className="auth-layout"
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F1F4FA",
                    }}
                >
                    {props.children}
                </div>
            ) : (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    {props.children}
                </div>
            )}
        </>
    );
};

export default AuthLayout;
