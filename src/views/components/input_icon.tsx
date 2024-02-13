import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactElement,
  useCallback,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: any;
  title: string;
  placeholder: string;
  type: string;
  icon?: ReactElement;
  errortext?:string;
}

export function InputIcon({
  icon,
  value,
  onChange,
  placeholder,
  type,
  errortext
}: Props): ReactElement {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <div className="input-icon">
      <label className="input-icon-label">{placeholder}</label>
      <div className="input-icon-container">
        {icon && 
        <div className="icon">{icon}</div>
        }
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleOnChange}
          className="input"
          value={value}
        />
      </div>
      {errortext && 
      <span className="input-icon-error">
        {errortext}
      </span>
      }
    </div>
  );
}
export default memo(InputIcon);
