import React, { useState, useEffect } from "react";

import "./responsiveHome.css";

import { HomeWrapper } from "./styles";

const Home = (props) => {
  const handleSearch = (e) => {
    const searchText = e.target.value;
    if (searchText.length >= 3) {
      console.log(searchText);
    }
  }

  return (
    <HomeWrapper>
      <form>
        <input type="text" name="name" placeholder="Start typing to search .." onChange={handleSearch} />
        <select>
          <option selected value="users">Users</option>
          <option value="repositories">Repositories</option>
          <option value="issues">Issues</option>
        </select>
      </form>
    </HomeWrapper>
  );
};

export default Home;
