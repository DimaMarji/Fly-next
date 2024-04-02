import axios from "axios";
import ReserveSection from "./ReserveSection/reserveSectionContainer";
import SecondSection from "./SecondSection/secondSectionContainer";
import React, {useEffect} from "react";
import {useMutation} from "react-query";
import useTokens from "@/Hooks/Auth/useToken";
import CompaniesSection from "./CompaniesSection/companiesSectionContainer";
import UsersFeedbackSection from "./UsersFeedbackSection/usersFeedbackSection";
import BookFlightsSection from "./BookFlightsSection/bookFlightsSection";

// import "./styles.scss"
const Home: React.FC = () => {

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