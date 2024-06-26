import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-width: 1358px;
    padding: 32px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    background-color: ${({ theme }) => theme.COLORS.HOME_CONTENT};
    border-radius: 16px;
    border: 0;

    > h1{
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color:${({ theme }) => theme.COLORS.WHITE};
    }

    >p{
        overflow: hidden;
    color: var(--Gray, #999591);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
    }

    >footer{
        width: 100%;
        display: flex;
        margin-top: 24px;

    }

`;
