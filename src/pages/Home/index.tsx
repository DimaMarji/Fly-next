import axios from "axios";
import React, {useEffect} from "react";
import {useMutation} from "react-query";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import useTokens from "../../Hooks/Auth/useToken";

// import "./styles.scss"
const Home: React.FC = () => {
    const { t } = useTranslation(['common', 'second-page'])

    const{locale}=useRouter() 
    console.log(locale)

    const {setTokens} = useTokens()



    return <div>

    </div>
};
export default Home;