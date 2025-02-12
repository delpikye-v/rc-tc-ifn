import React from 'react';
import { IFTooltipProps } from 'react-tooltip-z';
declare type TOmitProps = 'trigger' | 'shareContext' | 'open' | 'showSync' | 'handleClick' | 'handleMouseEnter' | 'handleMouseLeave';
export interface IFTooltipTruncateProps extends Omit<IFTooltipProps, TOmitProps> {
    id?: string;
    className?: string;
    tagTruncate?: string;
    truncateClassName?: string;
    width?: string | number;
}
declare const TooltipTruncate: React.FC<IFTooltipTruncateProps>;
export default TooltipTruncate;
