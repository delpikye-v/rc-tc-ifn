import { TooltipProps } from "react-tooltip-z";
type OmitProps = "trigger" | "open";
export interface TooltipIfnProps extends Omit<TooltipProps, OmitProps> {
    width?: string | number;
    wrapperWidth?: string | number;
    tagTruncate?: string;
    truncateClassName?: string;
}
declare function TooltipIfn({ children, content, width, wrapperWidth, tagTruncate, truncateClassName, ...props }: TooltipIfnProps): JSX.Element;
export default TooltipIfn;
