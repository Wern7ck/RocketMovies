import styled from "styled-components";

export const Container = styled.div`
    grid-area: Header;

    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({ theme })=> theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    gap: 64px;

    padding: 0 80px;

    >h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 30px;
        font-weight: 700;
    }

    >input{
        height: 56px;
        width: 100%;
        max-width: 630px;

        border-radius: 10px;
        border: none;

        background-color:${({ theme })=> theme.COLORS.BACKGROUND_900};
        color: ${({ theme })=> theme.COLORS.WHITE};

        padding: 19px 24px;

    }

`

export const Profile = styled.div`
    display: flex;
    justify-content:  flex-end;
    align-items: center;
    gap: 9px;

    >img {
        width: 68px;
        height: 68px;
        border-radius: 50%;
    }

    > div{
        text-align: right;
        display: flex;
        flex-direction: column;
    

     strong{
        font-size: 20px;
        white-space: nowrap;
     }

     span{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

 }

`;