import {FunctionComponent, useState} from "react";
import {Button, Form, FormElement, Title} from "../../../../Components";
import "./style.scss";
import ResetPasswordImage from "../../../../Assets/Images/General/Reset-Password-Image.svg";
import {Image} from "antd";
import {IChangePasswordProps} from "./interfaces";
import {InputRules} from "../../../../Constants/RegExr/InputRules/InputRules";
import LeftDarkArrow from "../../../../Assets/Icons/General/Left-Dark-Arrow.svg";
import {useNavigate} from "react-router";
import {useAppMediaQuery} from "../../../../Hooks/MediaQuery/use-app-media-query";
// import { PasswordStrengthChecker } from "../../../../Components/Molecules/PasswordStrengthChecker";
// import {
//   ILabelsWithColors,
//   IRule,
// } from "../../../../Components/Molecules/PasswordStrengthChecker/interfaces";
import AuthLayout from "../../authLayout";
import {usePatchApi} from "../../../../ReactQuery/SingleApi/UsePatchApi/use-patch-api";
import {useIsAuth} from "../../../../Hooks/use-is-auth";
import {useUrl} from "../../../../Hooks/window/Url";
import {ILabelsWithColors, IRule} from "../../../../Components/Molecules/PasswordStrengthChecker/interfaces";
import PasswordStrengthChecker
    from "../../../../Components/Molecules/PasswordStrengthChecker/passwordStrengthCheckerContainer";

const ChangePassword: FunctionComponent<IChangePasswordProps> = ({
                                                                     // setCurrentStep,
                                                                 }) => {
    const navigate = useNavigate();
    const {isMobileOrTablet} = useAppMediaQuery();
    const [password, setPassword] = useState("");
    const {getParamAsString} = useUrl();
    const userToken = getParamAsString("token");
    const {isAuth} = useIsAuth()
    const {
        greaterThanEight,
        required,
        ContainsLowercase,
        ContainsUppercase,
        containsSymbol,
        containsNumber,
    } = InputRules;

    //   TODO: response handle
    const {mutate: changePassword} = usePatchApi(
        {
            service_name: "users/password/forget-password",
            updateOptions: {
                onSuccess(data) {
                    navigate("../login", {state: {password}});
                },
            },
        },
        // undefined,
        // true
    );

    const imageHeight = isMobileOrTablet ? 70 : 51;
    const imageWidth = isMobileOrTablet ? 108 : 80;
    const title = "Change password";

    const titleSection = (
        <Title
            onClick={() => {
                isMobileOrTablet && navigate("/login");
            }}
            className={"change-password-title"}
            typographyType={{
                type: "semi-bold-semi-bold-semi-bold",
                size: "22px-18px-18px",
            }}
        >
            {isMobileOrTablet && (
                <Image src={LeftDarkArrow} preview={false} draggable={false}/>
            )}
            {title}
        </Title>
    );

    const imageSection = (
        <Image
            src={ResetPasswordImage}
            preview={false}
            draggable={false}
            height={imageHeight}
            width={imageWidth}
        />
    );

    const passwordCheckerRules: IRule[] = [
        greaterThanEight,
        containsNumber,
        containsSymbol,
        ContainsUppercase,
        ContainsLowercase,
    ];

    const passwordCheckerColorsWithLabels: ILabelsWithColors[] = [
        {
            color: "#DFE2E6",
            label: "",
        },
        {
            color: "#9F2039",
            label: "Weak",
        },
        {
            color: "#FFBF38",
            label: "Fair",
        },
        {
            color: "#FFBF38",
            label: "Good",
        },
        {
            color: "#96C87A",
            label: "Strong",
        },
        {
            color: "#96C87A",
            label: "Very Strong",
        },
    ];

    return (
        <AuthLayout>
            <div className={"change-password-container"}>
                {isMobileOrTablet ? (
                    <>
                        {titleSection}
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "56px",
                            }}
                        >
                            {imageSection}
                        </div>
                    </>
                ) : (
                    <>
                        {imageSection}
                        {titleSection}
                    </>
                )}
                <Form
                    layout={"vertical"}
                    style={{margin: "0px", width: "100%", marginTop: "48px"}}
                    size={"large"}
                    requiredMark={false}
                    onFinish={(values) => {
                        // console.log("values", values);
                        changePassword({
                            new_password: values?.password,
                            token: userToken,
                        });
                    }}
                >
                    <div style={{flex: "1", width: "100%"}}>
                        <FormElement
                            name={"password"}
                            placeholder={"A few words you’ll find easy to remember"}
                            type={"password"}
                            label={"Choose a new password"}
                            onChange={(event) => {
                                setPassword(event?.target?.value);
                            }}
                            rules={[required, ...passwordCheckerRules]}
                        />
                        <PasswordStrengthChecker
                            password={password}
                            rules={passwordCheckerRules}
                            labelsWithColors={passwordCheckerColorsWithLabels}
                        />
                        <FormElement
                            label={"Confirm password"}
                            rules={[
                                ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                "The two passwords that you entered do not match!"
                                            )
                                        );
                                    },
                                }),
                            ]}
                            required
                            name={"confirmPassword"}
                            placeholder={"confirm Password"}
                            type={"password"}
                        />
                    </div>

                    <Button
                        className={"change-password-button"}
                        htmlType="submit"
                        type="primary"
                        // onClick={() => {
                        //     navigate('/login')
                        // }}
                    >
                        Continue
                    </Button>
                </Form>
            </div>
        </AuthLayout>
    );
};

export default ChangePassword;
