import { useState } from "react";
import styled from "styled-components";

const NumberInput = ({
    callbackVal,
    label,
    placeholder 
}) => {

    const [value, setValue] = useState('');

    function onFormChange(e) {
        callbackVal(e.target.value.replace(/\D/g, ''));
        setValue(e.target.value.replace(/\D/g, ''));
    }
    
    return (
        <FormWrapper>
            <p>{label}</p>
            <input
                type="text"
                value={value}
                onChange={e => onFormChange(e)}
                placeholder={placeholder}
            />
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    margin: 8px 0px;
    
    p {
        margin: 4px 0px;
        font-size: 16px;

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }

    input {
        box-sizing: border-box;
        padding: 8px;
        border: 2px solid var(--form-grey);
        border-radius: 10px;
        width: 100%;
        outline: none;
        font-size: 14px;
        font-family: "Mitr", sans-serif;

        ::placeholder {
            color: var(--form-grey);
            font-weight: 400;
        }

        :focus {
            border-color: var(--button-color);
        }

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
`;

export default NumberInput;