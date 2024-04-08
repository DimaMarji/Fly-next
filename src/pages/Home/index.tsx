import axios from "axios";
import React, {useEffect} from "react";
import {useMutation} from "react-query";
import useTokens from "@/Hooks/Auth/useToken";
import BookFlightsSection from "@/Components/HomeComponents/BookFlightsSection/bookFlightsSection";
import UsersFeedbackSection from "@/Components/HomeComponents/UsersFeedbackSection/usersFeedbackSection";
import CompaniesSection from "@/Components/HomeComponents/CompaniesSection/companiesSectionContainer";
import SecondSection from "@/Components/HomeComponents/SecondSection/secondSectionContainer";
import ReserveSection from "@/Components/HomeComponents/ReserveSection/reserveSectionContainer";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";

// import "./styles.scss"
const Home: React.FC = () => {
    const { t } = useTranslation(['common', 'second-page'])

    const{locale}=useRouter() 
    console.log(locale)

    const {setTokens} = useTokens()
    const {mutate, data} = useMutation(
        async () => {
            const response = await axios.post(
                "https://test.api.amadeus.com/v1/security/oauth2/token",
                "grant_type=client_credentials&client_id=ACSdGp507X2BPm5BEQmPyMrTVCGEEH5X&client_secret=wOzrUr6twNpF3kmx",
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            setTokens(response?.data?.access_token, response?.data?.access_token)
            return response?.data;
        }
    );

    useEffect(() => {
        mutate();
    }, []);


    return <div>
        <ReserveSection/>
        <SecondSection/>
        <CompaniesSection/>
        <UsersFeedbackSection/>
        <BookFlightsSection/>
    </div>
};
export default Home;