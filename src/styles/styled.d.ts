import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secudary: string,

            background: string,

            text: string,

            inputColor: string,

            placeholder: string,

            bordercolor: string,

            button: string,
            
            buttonText: string,
            
            border: string,

            repositoryBackgroud: string,

            svgColor: string,

            strong: string,

            liInfoStrong: string,
    
            liInfoSpan: string,
        }
    }
}