import {
  memo,
  ReactElement,
  useCallback,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./loading_spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  route?:string;
  myStyle?:string;
  loading?:boolean
}

export function ButtonComponent({ onClick,loading, title,route , myStyle}: Props): ReactElement {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if(route){
        navigate(route)
      }
    },
    [onClick]
  );

  return (
    <button
      className={`button-component handle-loading-btn w-100 ${myStyle}`}
      onClick={handleOnClick}
    >
      <h3 className="button-component-text">
        {loading ? 
        <LoadingSpinner />
        :
        `${title}`
        }
      </h3>
    </button>
  )
}

export default memo(ButtonComponent);
