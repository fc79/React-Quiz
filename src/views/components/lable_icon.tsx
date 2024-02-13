import { memo, ReactElement , HTMLAttributes,
} from "react";
import 'react-circular-progressbar/dist/styles.css';

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
  }
  
  export function LableIcon({
    title,
  }: Props): ReactElement {
       
    return (
        <div className="lable-icon">
           <span className="lable-icon-title">
            {title}
           </span>
        </div>
    )
}
export default memo(LableIcon);