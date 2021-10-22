import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    color: var(--white);
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3 {
        margin: 10px 0 0 0;
    }

    p {
        margin: 5px 0;
    }
`;

export const Image = styled.img`
    display: block;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
`;
