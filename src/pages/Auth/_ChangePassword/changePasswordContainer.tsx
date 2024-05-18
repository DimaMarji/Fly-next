import {Button, Form} from "antd"
import {useNavigate} from "react-router";
;

import {FormElement} from "../../../Components";
import {indicatorSetting, validatorSetting} from "./constants";
import {useMutation} from "react-query";
import {UseHandle} from "../../../Hooks/ReactQuery/use-handle-response";
import accountService from "../../../API/ZcoderzApi/Services/Account/accountServices";

const ChangePassword = () => {

    // const { uidb64, token, apiKey } = useParams();

    const navigate = useNavigate();
    const {handleError} = UseHandle()

    const changePassword = useMutation(accountService.resetPassword, {
        onSuccess: (res: any) => {
            navigate("/login", {
                replace: true
            })
        },
        onError: (error: any) => {
            // console.log("error", error);
            handleError(error);
        },
    });

    return (
        <Form
            onFinish={(values) => {

                changePassword.mutate({
                    // TODO:  apiKey ...
                    ...values
                    // apiKey: apiKey,
                    // uidb64: uidb64,
                    // token: token,
                })
            }}>

            <FormElement
                validatorSetting={validatorSetting}
                indicatorSetting={indicatorSetting}
                required name={"new_password"}
                placeholder={"A few words you’ll find easy to remmeber"}
                type={"password"}/>

            <FormElement
                dependencies={['new_password']}
                rules={[
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('new_password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },

                    }),

                ]}
                required name={"confirm_new_password"}
                placeholder={"input password"}
                type={"password"}/>

            <Button htmlType="submit" type={"primary"} loading={changePassword.isLoading}> Continue</Button>
        </Form>
    )

}
export default ChangePassword