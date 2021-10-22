import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Styles
import { Content, Wrapper } from "./BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
};

BreadCrumb.propType = {
    movieTitle: PropTypes.string
};

export default BreadCrumb;
