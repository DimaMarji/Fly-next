import {IUserDetailsProps} from "./interfaces";
import {getUserAvatarColor} from "../../Helpers/Colors/colorsHelpers";
import { Space, Typography} from "antd"
import {Avatar} from "../Avatar/index";

const {Text, Title} = Typography

const UserDetails = (props: IUserDetailsProps) => {
    const {email, first_name, last_name, avatar, id} = props
    const userFullName = `${first_name} ${last_name}`

    return (
        <>
            {
                email && userFullName ?
                    <Space className={"user-details-container"}>
                        <Avatar withColorizedBorder={true}
                                color={getUserAvatarColor(id)}
                                withPreview={true}
                                userFullName={userFullName}
                                src={avatar}
                                className="created-by-crud-tempate-avatar"
                        />
                        <Space style={{display: "grid", justifyItems: "start"}} direction={"vertical"}>
                            <Text typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}>
                                {userFullName}
                            </Text>
                            <Text className={"user-details-email"}
                                  typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}>
                                {email}
                            </Text>
                        </Space>
                    </Space>
                    :
                    "__"
            }


        </>


    );
};

export default UserDetails;
