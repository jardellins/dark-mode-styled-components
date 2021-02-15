import styled from 'styled-components';

import ThemeSwitcher from '../../components/ThemeSwitcher';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:nth-child(1){
        margin-left: 20px;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const Title = styled.span `
    font-size: 36px;
    color: ${props => props.theme.colors.strong};
`

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            span {

            }

            p {
                font-size: 18px;
                color: ${props => props.theme.colors.strong};
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left: 80px;
            }
            strong {
                display: block;
                font-size: 36px;
                color: ${props => props.theme.colors.liInfoStrong};
            }

            span {
                display: block;
                margin-top: 4px;
                color: ${props => props.theme.colors.liInfoSpan};
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

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
