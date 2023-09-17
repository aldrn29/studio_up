import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function Header() {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <Logo onClick={() => navigate("/")}>STUDIO_UP</Logo>
            <Menu>MENU</Menu>
        </Wrapper>
    )
}

export default Header;

const Reveal = keyframes`
	0% { top: -4em; opacity: 0; }
	100% { top: 0; opacity: 1; }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 3.25em;
	position: fixed;
	top: 0;
    left: 0;
	margin: 0;
    //box-shadow: 0 0 0.25em 0 rgba(0,0,0,0.15);
	//line-height: 3.25em;
    color: white;
    background-color: #242943;
    animation: ${Reveal} 1s ease;
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    z-index: 2;
`;

const Logo = styled.div`
    padding: 20px;
    cursor: pointer;
    
    &:hover {
        //opacity: 0.75 ease;
        //filter: blur(0.02em);
        color: #6fc3df;
    }
`;

const Menu = styled.div`
    padding: 20px;
    cursor: pointer;

    &:hover {
        color: #6fc3df;
    }
`;
