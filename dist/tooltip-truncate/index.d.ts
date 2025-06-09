import React from "react";
import { IFTooltipProps } from "react-tooltip-z";
declare type TOmitProps = "trigger" | "shareContext" | "open" | "showSync" | "handleClick" | "handleMouseEnter" | "handleMouseLeave";
export interface IFTooltipIfnProps extends Omit<IFTooltipProps, TOmitProps> {
    id?: string;
    className?: string;
    wrapWidth?: string | number;
    tagTruncate?: string;
    truncateClassName?: string;
    width?: string | number;
}
declare const TooltipIfn: React.FC<IFTooltipIfnProps>;
export default TooltipIfn;
