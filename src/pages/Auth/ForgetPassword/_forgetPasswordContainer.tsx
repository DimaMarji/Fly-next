import {FunctionComponent, useState} from "react";
import ForgetPasswordForm from "./_forgetPasswordFormContainer";
import {DiveIn} from "../../../Components";
import {Result} from "antd";
import logo from '../../../Assets/Images/Logo/Hooud-Logo.svg'
import imageSideTwo from '../../../Assets/Images/General/image 65.svg'
import './style.scss'
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";


interface ForgetPasswordProps {
}

const ForgetPassword: FunctionComponent<ForgetPasswordProps> = () => {

    const [isLinkSend, setLinkSend] = useState<boolean>(false)

    const {isMobile, isTablet} = useAppMediaQuery();

    return (
        <>
            <div className={"forgetPasswordContainer"}>
                <DiveIn
                    // imageToShowInSideTwo={letToTalkVideo}
                    LogoImage={logo}
                    LogoFallback={"Logo"}
                    HeadingMaster={isLinkSend ? "" : "Forget Password"}
                    paragraph={isLinkSend ? "" : "Enter Your email and we`ll send you a link to reset your password"}
                    ButtonToHeadToName={"Log in"}
                    pathToHeadToButton={"/login"}
                    splitDiveIn={isMobile || isTablet ? "none" : undefined}
                    imageToShowInSideTwo={imageSideTwo}
                >
                    {isLinkSend ? <>
                        <Result
                            status="success"
                            title="Password reset link sent successfully"
                            subTitle="Please check your email and click on the reset link."
                        />

                    </> : <ForgetPasswordForm setLinkSend={setLinkSend}/>}
                </DiveIn>
            </div>

        </>);
}

export default ForgetPassword;