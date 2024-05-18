import {FunctionComponent} from "react";
import {Form, FormElement} from "../../../Components";

interface ForgetPasswordProps {
}

const ForgetPassword: FunctionComponent<ForgetPasswordProps> = () => {

    // const {actions} = useContext(AuthContext)

    const formElementNames = {}

    const {} = formElementNames;

    const sendResetPasswordLink = (values: any) => {
        // TODO: API accountVerify
        // console.log("account Verify: ", values)
    }

    return (
        <>
            <Form
                onFinish={sendResetPasswordLink}
            >
                <FormElement
                    placeholder="_"
                    required
                    name={"digit1"}
                    type={"number"}

                />

            </Form>
        </>);
}

export default ForgetPassword;