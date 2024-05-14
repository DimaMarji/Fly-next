import {Avatar as AntdAvatar, Image, Tooltip} from 'antd';
import {IAvatarProps} from "./interfaces";
import {EyeOutlined} from "@ant-design/icons";
import {getFirstLetterOfFirstAndLastWord} from "../../Helpers/String/helpers";

const Avatar = ({...props}: IAvatarProps) => {

    const {
        className: avatarClassName,
        color,
        src: avatarSrc,
        userFullName,
        withColorizedBorder,
        toolTipPlacement,
        withPreview,
        ...remainingAvatarProps
    } = props
    let fullNameAlias = userFullName && getFirstLetterOfFirstAndLastWord(userFullName)
    let isValidSrc = (avatarSrc == undefined ?? false) ? "without-profile-image" : "with-profile-image"
    let withBorder = withColorizedBorder ? "with-border" : "without-border"
    let defaultClassName = `default-avatar ${color ?? "blue"} ${isValidSrc}`
    return (
        <Tooltip title={userFullName} placement={toolTipPlacement ? toolTipPlacement : 'top'}>
            <div className={`avatar-div ${color ?? "blue"} ${withBorder}`}>
                {(!avatarSrc && fullNameAlias) || !withPreview ?
                    <AntdAvatar

                        size={40}
                        src={avatarSrc}
                        gap={5}
                        className={avatarClassName ? `${defaultClassName} ${avatarClassName}` : `${defaultClassName}`} {...remainingAvatarProps}>
                        {(avatarSrc == undefined ?? false) && fullNameAlias}
                    </AntdAvatar>
                    :
                    <Image preview={{mask: <EyeOutlined/>}}
                           onClick={(e)=>e.stopPropagation()}
                           className={"avatar-image-with-preview"}
                           src={avatarSrc as string}/>
                }

            </div>
        </Tooltip>
    );
};

export default Avatar;
