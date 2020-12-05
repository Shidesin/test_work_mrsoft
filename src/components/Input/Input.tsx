import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styled from 'styled-components';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
};

const Input: React.FC<InputTextPropsType> = (
    {
        onChangeText,
        placeholder,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText && onChangeText(e.currentTarget.value);
    }
    return (

        <input
            value={value}
            type={'text'}
            onChange={onChangeCallback}
            placeholder={placeholder}
            {...restProps}
        />
    );
};

export const StyledInput = styled(Input)`
padding: 5px 10px;
    border-style: none;
    border-radius: 15px;
    margin: 10px 0 ;
    box-shadow: 0 0 0 1px #2d2d2d, 0 0 5px 0 #2d2d2d;
    outline: none;
`;
