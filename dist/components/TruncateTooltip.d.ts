import React from "react";
import { ITooltipProps } from "react-tooltip-z";
export interface CommonObject {
    [key: string]: any;
}
declare type OmitProps = "trigger" | "shareContext" | "open" | "showSync" | "handleClick" | "handleMouseEnter" | "handleMouseLeave";
export interface ITcTooltipProps extends Omit<ITooltipProps, OmitProps> {
    id?: string;
    className?: string;
    tagTruncate?: string;
    truncateClassName?: string;
    width?: string | number;
}
declare const TruncateTooltip: React.FC<ITcTooltipProps>;
export default TruncateTooltip;
