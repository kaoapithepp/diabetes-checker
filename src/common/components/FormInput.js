import { useState } from "react";
import styled from "styled-components";

const FormInput = ({
    type,
    label,
    placeholder 
}) => {

    const [value, setValue] = useState('');
    
    return (
        <FormWrapper>
            <p>{label}</p>
            <Form
                value={value}
                onChange={e => setValue(e.target.value)}
                type={type}
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
    }
`;

const Form = styled.input`
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
`

export default FormInput;