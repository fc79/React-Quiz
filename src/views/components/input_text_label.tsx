import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value?: any;
    title: string;
    placeholder: string;
    type: string;
    showDropDown: boolean;
    disabled?:boolean;
    errortext?:string;
    border?: "green" | "gray";
}

export function InputTextLabel({ showDropDown, value, onChange, title, placeholder, type, border , errortext , disabled}: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    return (
        <div className="input-text-label">
            <div className="input-text-label-title">
                <h6 className="input-text-label-title-text">
                    {title}
                </h6>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleOnChange}
                disabled={disabled ? true : false }
                className={ border === "gray" ? "input-text-label-input-gray" : "input-text-label-input-green"}
                value={value}
            />
            {showDropDown === true ? (
                value === "" ? (null) : (
                    <div className="input-text-label-dropdown">

                    </div>
                )
            ) : (null)}
            <span className="input-text-label-error">
        {errortext}
      </span>
        </div>
    )
}
export default memo(InputTextLabel);