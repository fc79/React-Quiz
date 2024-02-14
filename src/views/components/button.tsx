import {
  ReactElement,
  useCallback,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?:any;
  route?:string;
  myStyle?:string;
  loading?:boolean
  disabled?:boolean;
  textStyle?:string;
}

const ButtonComponent=({ onClick,loading, textStyle, icon, title,route , myStyle , disabled}: Props): ReactElement=> {
  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onClick?.(event);
    },
    [onClick]
  );
  return (
    <button
      className={`button-component handle-loading-btn  ${myStyle}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <h3 className={`button-component-text ${textStyle}`}>
        <div className="button-component-title">
          {route && <Link to={route} target="_blank"></Link>}
           {icon && icon}
           {title}  
        </div>
      </h3>
    </button>
  )
}

export default ButtonComponent;
