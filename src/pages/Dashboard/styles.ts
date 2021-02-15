import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: #fff
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.colors.text};
    max-width: 500px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        color: #333;
        border: 0;
        border-radius: 5px 0 0 5px;
        border: 3px solid ${props => props.theme.colors.border};
        border-right: 0;

        ${(props) => props.hasError && css `
            border-color: ${props => props.theme.colors.bordercolor};
        `}

        &::placeholder {
            color: ${props => props.theme.colors.placeholder};
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: ${props => props.theme.colors.button};
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: ${props => props.theme.colors.buttonText};
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${props =>shade(0.2, props.theme.colors.button)};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: ${props => props.theme.colors.repositoryBackgroud};
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0,2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: ${props => props.theme.colors.strong};
            }

            p {
                font-size: 18px;
                color: ${props => props.theme.colors.strong};
            }
        }

        svg {
            margin-left: auto;
            color: ${props => props.theme.colors.svgColor};
        }
    }
`;
