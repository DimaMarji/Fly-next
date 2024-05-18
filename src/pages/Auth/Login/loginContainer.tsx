import {useCookies} from "react-cookie";
import "./style.scss";
import LoginForm from "./loginForm";
import {useEffect, useTransition} from "react";
import {useNavigate} from "react-router-dom";
import {useIsAuth} from "../../../Hooks/use-is-auth";

const Login = () => {
    const navigate = useNavigate()
    const [tokens] = useCookies();
    const [isPending, startTransition] = useTransition();
    const {isAuth} = useIsAuth()

    useEffect(() => {
        if (tokens.accessToken) {
            startTransition(() => {
                navigate("../", {
                    replace: true,

                })
            });
        }
    }, [tokens.accessToken, navigate]);

    // login from 
    const loginForm = <LoginForm/>;

    return (
        <>
            {!tokens.accessToken && !isPending && (
                loginForm
            )}
        </>
    );
};
export default Login;
