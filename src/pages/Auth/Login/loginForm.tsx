import {FunctionComponent, useContext} from "react";
import {Button, Col, FormElement, Image, Row, Title,} from "../../../Components";
import "./style.scss";
import loginLaptop from "../../../Assets/Images/Auth/loginImage.png";
// import loginMobile from "../../../Assets/Images/Auth/loginMobile.svg";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {InputRules} from "../../../Constants/RegExr/InputRules/InputRules";
import {AuthContext} from "../../../Context/auth/authContext";
import Form, {useForm} from "antd/lib/form/Form";
import {Link, useLocation} from "react-router-dom";


interface LoginProps {
}

const LoginForm: FunctionComponent<LoginProps> = () => {
    const {isMobileOrTablet} = useAppMediaQuery();
    let loginImage = isMobileOrTablet ? loginLaptop : loginLaptop;
    const [formInstance] = useForm();
    const {actions, loading} = useContext(AuthContext);
    const {login} = actions;
    const location = useLocation();



    const onFinish = (values: any) => {
        login(values, formInstance);
    };

    let initialValues =
        // location?.state?.email &&
        location?.state?.password && {
            // email: location?.state?.email,
            password: location?.state?.password,
        };
    const completeUserInformationForm = (
        <Row justify="center" align="middle">
            <Col
                span={19}
                offset={5}
                xs={{span: 22, offset: 2}}
                style={{margin: "0 auto"}}
            >
                <div className="Login-form">
                    <div className="Login-title">
                        <Title
                            // className={"hero-section-card-title"}
                            typographyType={{
                                type: "semi-bold-semi-bold-semi-bold",
                                size: "40px-32px-32px",
                            }}
                            color="#42526D"
                        >
                            Login
                        </Title>
                    </div>

                    <Form
                        size={"large"}
                        form={formInstance}
                        onFinish={onFinish}
                        style={{margin: "0px"}}
                        layout={"vertical"}
                        initialValues={initialValues}
                    >
                        <FormElement
                            name={"email"}
                            placeholder={"example@example.com"}
                            type={"input"}
                            inputType="email"
                            rules={[{ type: "email" }, ]}
                            label={"Email"}
                            required
                        />

                        <FormElement
                            name={"password"}
                            placeholder={"input password"}
                            type={"password"}
                            label={"Password"}
                            required
                            rules={[
                                InputRules.greaterThanEight,
                                InputRules.ContainsLowercase,
                                InputRules.ContainsUppercase,
                                InputRules.containsSymbol,
                                InputRules.containsNumber,
                            ]}
                        />

                        <Link
                            style={{
                                display: "flex",
                                justifyContent:'flex-end',
                                marginBottom: "10px",
                                fontSize: "16px",
                                color: "#1C77DE",
                                fontWeight:'bold'
                            }}
                            to={"/forget-password"}
                        >
                            Forget password
                        </Link>

                        <Button
                            htmlType="submit"
                            type="primary"
                            className={" Login-button"}
                            loading={loading}
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
    return (
        <>
            <Row style={{height: "100%"}} justify={"center"} align={"middle"}>
                <Col
                    span={19}
                    offset={5}
                    xs={{span: 22, offset: 2}}
                    className="Login-mobile-title"
                    style={{margin: "0 auto"}}
                >
                    <div>
                        <Title
                            typographyType={{
                                type: "semi-bold-semi-bold-semi-bold",
                                size: "40px-32px-32px",
                            }}
                        >
                            Login
                        </Title>
                    </div>
                </Col>
                <Col
                    xs={{span: 24, order: 2}}
                    lg={{span: 8, order: 1}}
                >
                    {completeUserInformationForm}
                </Col>

                <Col
                    xs={{span: 24, order: 1}}
                    lg={{span: 16, order: 2}}
                    className={"Login-image"}
                >
                    <Image
                        preview={false}
                        style={{width: "", height: "100%",objectFit:'cover'}}
                        src={loginImage}
                        
                    />
                </Col>
            </Row>
        </>
    );
};

export default LoginForm;
