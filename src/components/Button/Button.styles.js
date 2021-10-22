import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    margin: 20px auto;
    font-size: var(--fontBig);
    cursor: pointer;
    outline: none;
    border-radius: 30px;
    border: 0;
    color: var(--white);
    transition: all 0.3s;

    :hover {
        opacity: 0.8;
    }
`;