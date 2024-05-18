import {FunctionComponent, useEffect, useState} from "react";
import {Button, Form, FormElement, Link} from "../../../Components";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import ReCaptcha from "react-google-recaptcha";
import "./style.scss"

interface ForgetPasswordFormProps {
    setLinkSend?: any
}

const ForgetPasswordForm: FunctionComponent<ForgetPasswordFormProps> = ({setLinkSend}) => {
    const [isReCaptcha, setIsReCaptcha] = useState<boolean>(false)
    const {isMobile, isTablet} = useAppMediaQuery();
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);

    useEffect(() => {
            setShowRecaptcha(false)
            setRecaptchaToken(null)

        }, [],
        //  [isSuccess]
    )

    // const {actions} = useContext(AuthContext)
    const formElementNames = {
        email: "email",
        // privacyPolicyCheckBox = "privacy_policy_check_box",
    }

    const {email} = formElementNames;

    const sendResetPasswordLink = (values: any) => {
        // TODO: API sendResetPasswordLink and context
    }

    return (<>
        <Form
            onFinish={sendResetPasswordLink}
        >
            <FormElement
                placeholder="example@example.com"
                required
                name={email}
                type={"input"}
            />

            {/* check label */}
            <FormElement
                name={"Captcha"}
                rules={[
                    {
                        validator: (_: any, isReCaptcha: any) =>
                            isReCaptcha
                                ? Promise.resolve()
                                : Promise.reject(
                                    new Error("Please verify that you are not a robot.")
                                ),
                    },
                ]}
                children={
                    <ReCaptcha
                        onChange={() => setIsReCaptcha(true)}
                        onExpired={() => setIsReCaptcha(false)}
                        sitekey="6Lcs5dAhAAAAANpVqmZO98KkfcUWDcw3iwJQQi2p"
                    />
                }
                type={"customElement"}
            />


            {/* <div
                    style={{
                        display: "flex"
                    }}>
                    <FormElement
                        name={formElementNames.privacyPolicyCheckBox}
                        onChange={(e) => {
                            setShowRecaptcha(!showRecaptcha);
                        }}
                        defaultChecked={showRecaptcha}

                        type={"checkbox"}

                        rules={[
                            {
                                message: <div style={validationStyle}><InfoCircleOutlined style={{
                                    marginRight: 2,
                                }} /> Please verify that you are a Human.</div>,
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('')),
                            },
                        ]}

                        label={
                            <Row>
                                <Col {...responsiveFormWidth} style={{
                                    textAlign: "left",
                                    paddingTop: 5,
                                    paddingLeft: 5
                                }}>
                                    <span
                                        ref={ref}
                                        id={"reCAPTCHA-terms"}>
                                        This site is protected by reCAPTCHA and the Google <a

                                            href={"https://policies.google.com/privacy?hl=en-GB"}
                                            target={"_blank"}
                                            style={{
                                                zIndex: 2,
                                                color: "#35ACFE"
                                            }}> Privacy Policy</a> and Terms of Service apply.
                                    </span>
                                </Col>
                            </Row>
                        }
                    />


                </div>
                {showRecaptcha && (
                    <FormElement
                        name={formElementNames.humanTest}
                        rules={[
                            {
                                message: <div style={validationStyle}><InfoCircleOutlined style={{
                                    marginRight: 2,
                                }} /> Please verify that you are not a robot!.</div>,
                                validator: (_: any, userRecaptchaPass: any) =>
                                    recaptchaToken
                                        ? Promise.resolve()
                                        : Promise.reject(
                                            new Error("")
                                        ),
                            },
                        ]}
                        children={
                            <div style={{
                                marginTop: 10,
                                display: "flex",
                                justifyContent: "left"
                            }}>
                                <ReCAPTCHA
                                    onChange={(token) => {
                                        setRecaptchaToken(token)
                                    }}
                                    sitekey={String(process.env.REACT_APP_RECAPTCHA_SIZE_KEY)}
                                />

                            </div>
                        }
                        type={"customElement"}
                    />
                )} */}
            <Button
                className={"account-submit-button"}
                htmlType="submit"
                type="primary"
                // buttonType="primary"
            >
                Send a recovery Link
            </Button>
            {(isMobile || isTablet) &&
                <Link style={{display: "flex", marginBottom: "10px", fontSize: "16px", color: "#35ACFE"}}
                      href={"/login"}> Back to login</Link>}
        </Form>
    </>);
}

export default ForgetPasswordForm;