import styled from "styled-components";

export const Container = styled.div`

    >section{
        margin-bottom: 24px;
    }

`;

export const NewFilm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px 0;
    max-width: 1366px;

    >h1 {
    color: ${({theme}) => theme.COLORS.WHITE};

    font-family: "Roboto Slab";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    >button{
        display: inline-flex;
    height: 48px;
    padding: 32px;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 10px;
    flex-shrink: 0;

    border: 0;

    }

`;
