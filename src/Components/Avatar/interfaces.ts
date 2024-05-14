import {AvatarProps} from "antd";
import {defaultColors} from "../../../Constants/colors";
import {TooltipPlacement} from "antd/lib/tooltip";

export interface IAvatarProps extends AvatarProps {
    color?: defaultColors
    userFullName?: string
    withColorizedBorder?: boolean,
    toolTipPlacement?: TooltipPlacement
    withPreview?: boolean
    userId?:string
}

export type AvatarTypes = "primary" | "secondary" | "tertiary"