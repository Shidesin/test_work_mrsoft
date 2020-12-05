import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styled from 'styled-components';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<DefaultButtonPropsType> = (
    {onClick, disabled, ...restProps}
) => {
    return (
        <button onClick={onClick} disabled={disabled}
            {...restProps}
        />
    );
};

export const StyledButton = styled(Button)`
    display: inline-block;
    background-color: #999999;
    color: white;
    padding: .5em 1em;
    border: 2px solid;
    border-radius: 5px;
    &:hover { background: #06adff;}
    &:disabled { 
        opacity: 50%
    }
   
`;
