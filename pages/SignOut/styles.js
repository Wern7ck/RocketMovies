import styled from "styled-components";
import BackgroundIMG from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;




> h1{
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: 700;
}

> h2{
    font-size: 24px;
    align-self: flex-start;
    margin-top: 48px;
    margin-bottom: 48px;
}

>p{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    align-self: flex-start;
    font-size: 14px;
    font-weight: 400;
}

> a{
    color: ${({theme}) => theme.COLORS.PINK};
    display: flex;
    font-size: 16px;
    gap: 8px;
    margin-top: 42px;

    svg{
        font-size: 16px;
        align-self: center;
    }

}
`

export const Background = styled.div`
    flex:1;

    background: url(${BackgroundIMG}) no-repeat center center;
    background-size: cover;
`;

;
