import {FunctionComponent, useContext} from "react";
import Form, {useForm} from "antd/lib/form/Form";
import {Link} from "react-router-dom";
import {Button, FormElement} from "../../../Components";
import {AuthContext} from "../../../Context/auth/authContext";
import "./style.scss"
import {InputRules} from "../../../Constants/RegExr/InputRules/InputRules";

interface LoginFormProps {

}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
    const [formInstance] = useForm();
    const {actions, loading} = useContext(AuthContext)
    const {login} = actions

    const {greaterThanEight, required, email} = InputRules

    const onFinish = (values: any) => {
        login(values, formInstance);
    };
    return (<>
        <Form
            size={"large"}
            form={formInstance}
            onFinish={onFinish}
        >
            <FormElement
                name={"email"}
                placeholder={"email"}
                type={"input"}
                inputType="email"
                rules={[
                    {type: "email"},
                    required,
                ]}
            />

            <FormElement
                name={"password"}
                placeholder={"password"}
                type={"password"}
                rules={[
                    required,
                    greaterThanEight,
                ]}
            />

            <Link
                style={{display: "flex", marginBottom: "10px", fontSize: "16px", color: "#35ACFE"}}
                to={"/forget-password"}>Forget password ?</Link>

            <Button
                htmlType="submit"
                type="primary"
                className={"account-submit-button"}
                loading={loading}
                style={{
                    marginBottom: "20px",
                }}
            >
                Login
            </Button>
        </Form>
    </>);
}

export default LoginForm;