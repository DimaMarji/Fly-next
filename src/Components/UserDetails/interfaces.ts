import {IGetAllUsersResponse} from "../../API/ZcoderzApi/Interfaces/User/interfaces";

export interface IUserDetailsProps extends Partial<IGetAllUsersResponse> {
    toggle?: (value: boolean) => boolean
}