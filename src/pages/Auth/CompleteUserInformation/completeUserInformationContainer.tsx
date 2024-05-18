import { CSSProperties, FunctionComponent } from "react";
import { Button, Form, FormElement, Title, Row, Col, Image } from "../../../Components";
import PhoneInput from "../../../Components/Atoms/PhoneNumber";
import { InputRules } from "../../../Constants/RegExr/InputRules/InputRules";
import { inputStyle } from "../../../Components/Molecules/CRUDForm/style";
import imageSrc from "../../../Assets/Images/Auth/loginImage.png";
import { useForm } from "antd/lib/form/Form";
import "./style.scss";

interface CompleteUserInformationProps {
}

const CompleteUserInformation: FunctionComponent<CompleteUserInformationProps> = () => {
    const [formInstance] = useForm();
    const { required } = InputRules;

    const onFinish = (values: any) => {
        // console.log(values)
        // do something
    };

    const completeUserInformationForm = (
        <Row justify="center" align="middle">
            <Col
                span={19}
                offset={5}
                xs={{ span: 22, offset: 2 }}
                style={{ margin: "0 auto" }}
            >
                <div className="Complete-info-form">
                    <div className="Complete-info-title">
                        <Title
                            typographyType={{
                                type: "semi-bold-semi-bold-semi-bold",
                                size: '32px-24px-32px',
                            }}
                            color="#42526D"
                        >
                            Please complete this information
                        </Title>
                    </div>

                    <Form
                        size={"large"}
                        form={formInstance}
                        onFinish={onFinish}
                        style={{ margin: "0px" }}
                        layout={"vertical"}
                    >
                        <FormElement
                            name={"Full_name"}
                            placeholder={"example"}
                            type={"input"}
                            inputType="text"
                            label={"Full name"}
                        />

                        <FormElement
                            name={"phone_number"}
                            label={"Phone number"}
                            children={
                                <PhoneInput
                                    dropdownStyle={{
                                        width: "100%"
                                    }}

                                    country={"sy"}
                                    placeholder='000'
                                    inputStyle={{ ...inputStyle }}
                                    enableSearch={true}
                                    countryCodeEditable={false}
                                    searchPlaceholder="Search for countries"
                                    disableSearchIcon={true}
                                    searchStyle={{ border: "none" }}
                                />
                            }
                            type={"customElement"}
                        />

                        <FormElement
                            name={"new_password"}
                            placeholder={"input password"}
                            type={"password"}
                            label={<>Change password <span style={{ fontWeight: 'normal' }}>{"(optional)"}</span></>}
                        />
                        <FormElement
                            name={"remember_client"}
                            type={"checkbox"}
                            label={"Remember me"}
                            defaultValue={"false"}
                            style={{
                                display: 'flex'
                            }}
                            className={`remember-me-checkbox`}
                        />
                        <Button
                            htmlType="submit"
                            type="primary"
                            className={" Complete-info-button"}
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            Continue
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );

    return (
        <>
            <Row style={{ height: "100%" }} justify={"center"} align={"middle"}>
                <Col
                    span={19}
                    offset={5}
                    xs={{ span: 22, offset: 2 }}
                    className="Complete-info-mobile-title"
                    style={{ margin: "0 auto" }}
                >
                    <div>
                        <Title
                            typographyType={{
                                type: "semi-bold-semi-bold-semi-bold",
                                size: "32px-24px-32px",
                            }}
                        >
                            Please complete this information
                        </Title>
                    </div>
                </Col>
                <Col
                    xs={{ span: 24, order: 2 }}
                    lg={{ span: 8, order: 1 }}
                >
                    {completeUserInformationForm}
                </Col>

                <Col
                    xs={{ span: 24, order: 1 }}
                    lg={{ span: 16, order: 2 }}
                    className={"Complete-info-image"}
                >
                    <Image
                        preview={false}
                        style={{ width: "", height: "100%", objectFit: 'cover' }}
                        src={imageSrc}
                    />
                </Col>
            </Row>
        </>
    );
}

export default CompleteUserInformation;