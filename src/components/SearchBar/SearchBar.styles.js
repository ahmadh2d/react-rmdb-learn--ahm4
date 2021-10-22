import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: var(--darkGrey);
    padding: 0 20px;
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    margin: 0 auto;
    background: var(--medGrey);
    border-radius: 40px;
    color: var(--white);

    img {
        position: relative;
        top: 14px;
        left: 15px;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        color: var(--white);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        height: 40px;
        background: transparent;

        :focus {
            outline: none;
        }
    }
`;