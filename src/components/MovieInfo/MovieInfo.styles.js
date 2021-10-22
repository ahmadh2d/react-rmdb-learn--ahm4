import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
    background: ${({ backdrop }) =>
        backdrop
            ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
            : "#000"};
    background-position: center;
    background-size: cover;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: var(--maxWidth);
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    overflow: hidden;
    color: var(--white);

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        border-radius: 50%;
        font-weight: 800;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;
