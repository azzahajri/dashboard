// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #666;
  color: #fff;
  padding: 10px;
  text-align: center;
  padding: 10px 100px; /* Updated padding */

`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Application Livrable</h1>
    </HeaderWrapper>
  );
};

export default Header;
