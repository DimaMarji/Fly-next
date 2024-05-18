import {useCookies} from "react-cookie";
import {DiveIn} from "../../../Components";
import "./style.scss";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import LoginForm from "./loginFormContainer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../../Assets/Images/Logo/light-zcoderz-logo.svg";
// import { Loading } from "../../Loading";
// import { AuthContext } from "../../../Context/auth/authContext";

const Login = () => {
    const navigate = useNavigate();
    const [tokens] = useCookies();
    const {isMobile, isTablet} = useAppMediaQuery();
//   const { loading } = useContext(AuthContext);


    useEffect(() => {
        if (tokens.accessToken) {
            navigate("../", {
                replace: true,
            });
            // window.open("/", "_self")
            // console.log("access token",tokens.accessToken);
        }
    }, [tokens.accessToken, navigate]);

    // login from
    const loginForm = (
        <div>
            {/* {loading ? (
        <Loading />
      ) : ( */}
            <div className={"loginContainer"}>
                <DiveIn
                    LogoImage={logo}
                    LogoFallback={"Logo"}
                    HeadingMaster={"Login In"}
                    paragraph={"Welcome Back!"}
                    pathToHeadToButton={"/register"}
                    splitDiveIn={isMobile || isTablet ? "none" : undefined}
                >
                    <LoginForm/>
                </DiveIn>
            </div>
            {/* )} */}
        </div>
    );
    return <>{!tokens.accessToken && loginForm}</>;
};
export default Login;
