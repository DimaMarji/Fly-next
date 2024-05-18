import {FunctionComponent, useEffect, useState} from "react";
import {Button, Form, FormElement, Text, Title} from "../../../../Components";
import {useAppMediaQuery} from "../../../../Hooks/MediaQuery/use-app-media-query";
import ReCaptcha from "react-google-recaptcha";
import "./style.scss";
import {Checkbox, Image} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import LeftBlueArrow from "../../../../Assets/Icons/General/Left-Blue-Arrow.svg";
import LeftDarkArrow from "../../../../Assets/Icons/General/Left-Dark-Arrow.svg";
import {useNavigate} from "react-router";
import {IForgetPasswordProps} from "./interfaces";
import AuthLayout from "../../authLayout";
import {usePostApi} from "../../../../ReactQuery/SingleApi/UsePostApi/use-post-api";
import {useIsAuth} from "../../../../Hooks/use-is-auth";

const ForgetPassword: FunctionComponent<IForgetPasswordProps> = (
    {
        // setCurrentStep,
    }
) => {
    const [isReCaptcha, setIsReCaptcha] = useState<boolean>(false);
    const {isMobileOrTablet} = useAppMediaQuery();
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
    const [isReCaptchaChecked, setIsReCaptchaChecked] = useState(false);
    const [emailHasBeenSent, setEmailHasBeenSent] = useState<boolean>(false);
    const {isAuth} = useIsAuth();
    //   const [resetPasswordData, setresetPasswordData] = useState({});
    useEffect(() => {
        setShowRecaptcha(false);
        setRecaptchaToken(null);
    }, []);

    const navigate = useNavigate();
    const formElementNames = {
        email: "email",
    };

    const {email} = formElementNames;

    const onChange = (e: CheckboxChangeEvent) => {
        setIsReCaptchaChecked(e.target.checked);
    };

    const emailValidator = (_: any, value: any) => {
        if (
            !value ||
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\s*$/.test(value)
        ) {
            return Promise.resolve();
        }
        return Promise.reject(new Error("Please enter a valid email address."));
    };

    //  constants
    const endPoint = "change-password";
    const changePasswordPage = import.meta.env.VITE_REACT_APP_FRONT_END_URL + endPoint;
    const title = "Forget password?";
    const description =
        "Don’t worry. happens to the best of us, We’ll send a recovery link to";
    const checkYourEmail =
        "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.";
    const reCaptchaDescription =
        "Please complete the security check to prove you are not a robot";

    // post
    // {{url}}/api/v1/users/reset-password-link
    // {email,recaptcha_token}
    //  TODO:  handle onSu case
    const {mutate} = usePostApi(
        {
            // TODO: forget password check on end point
            service_name: "users/password/reset-password-link",
            createOptions: {
                onSuccess(data) {
                    setEmailHasBeenSent(true);
                },
            },
        }
        // undefined,
        // true
    );

    const _ForgetPassordForm = (
        <Form
            size={"large"}
            onFinish={(values) => {
                // setresetPasswordData(values);
                // mutate(values);
                mutate({...values, forget_password_page: changePasswordPage});
            }}
        >
            <FormElement
                placeholder="example@example.com"
                required
                name={email}
                type={"input"}
                rules={[
                    {required: true, message: "Please enter an email address."},
                    {validator: emailValidator},
                ]}
                inputType={"email"}
                className={"email-form-item"}
            />
            <div className={"recaptcha-wrapper"}>
                <Checkbox checked={isReCaptchaChecked} onChange={onChange}>
                    <Text
                        typographyType={{
                            type: "regular-regular-regular",
                            size: "14px-14px-14px",
                        }}
                    >
                        {reCaptchaDescription}
                    </Text>
                </Checkbox>
                {isReCaptchaChecked && (
                    <FormElement
                        className={"recaptcha-form-item"}
                        name={"recaptcha_token"}
                        rules={[
                            {
                                validator: (_, isReCaptcha) => {
                                    if (isReCaptcha) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(
                                            new Error("Please verify that you are not a robot.")
                                        );
                                    }
                                },
                            },
                        ]}
                        children={
                            <ReCaptcha
                                className={"recaptcha"}
                                onChange={() => setIsReCaptcha(true)}
                                onExpired={() => setIsReCaptcha(false)}
                                sitekey="6Lcs5dAhAAAAANpVqmZO98KkfcUWDcw3iwJQQi2p"
                            />
                        }
                        type={"customElement"}
                    />
                )}
            </div>
            <div className={"buttons-section"}>
                <Button
                    className={"account-submit-button"}
                    htmlType="submit"
                    type="primary"
                    onClick={() => {
                        setIsReCaptchaChecked(true);
                        // setCurrentStep(2);
                    }}
                >
                    Send a recovery Link
                </Button>
                {!isMobileOrTablet && (
                    <Button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className={"back-to-login-button"}
                        type={"link"}
                        icon={
                            <Image src={LeftBlueArrow} preview={false} draggable={false}/>
                        }
                    >
                        Back to login
                    </Button>
                )}
            </div>
        </Form>
    );

    const ForgetPassordForm = (
        <AuthLayout>
            <div className={"forget-password-container"}>
                {/* title */}
                <Title
                    onClick={() => {
                        isMobileOrTablet && navigate("/login");
                    }}
                    className={"forget-password-title"}
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

                <Text
                    className={"forget-password-description"}
                    typographyType={{
                        type: "regular-semi-bold-semi-bold",
                        size: "14px-14px-14px",
                    }}
                >
                    {description}
                </Text>
                {_ForgetPassordForm}
            </div>
        </AuthLayout>
    );

    //   Check Your Email Content
    const CheckYourEmailContent = (
        <>
            <AuthLayout>
                <div className={"forget-password-container"} style={{height: "auto"}}>
                    {/* title */}
                    <Title
                        className={"forget-password-title"}
                        typographyType={{
                            type: "semi-bold-semi-bold-semi-bold",
                            size: "22px-18px-18px",
                        }}
                    >
                        {title}
                    </Title>

                    <Text
                        className={"forget-password-description"}
                        typographyType={{
                            type: "regular-semi-bold-semi-bold",
                            size: "14px-14px-14px",
                        }}
                    >
                        {checkYourEmail}
                    </Text>
                    <Button
                        className={"account-submit-button go-to-login-btn"}
                        htmlType="submit"
                        type="primary"
                        onClick={() => {
                            navigate("../login");
                        }}
                    >
                        Back to login
                    </Button>
                </div>
            </AuthLayout>
        </>
    );

    return (
        <>
            {emailHasBeenSent ? (
                <>{CheckYourEmailContent}</>
            ) : (
                <>
                    <>{ForgetPassordForm}</>
                </>
            )}
        </>
    );
};

export default ForgetPassword;
