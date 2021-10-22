import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Content, Wrapper } from "./SearchBar.styles";

import searchIcon from "../../images/search-icon.svg";

export const SearchBar = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
        initial.current = false;
        return;
    }

    const timer = setTimeout(() => {
        setSearchTerm(state);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, state]);

  
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setstate(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func
}