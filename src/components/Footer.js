import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Footer() {

    return (
        <Wrapper>
            <ul>

            </ul>
            <ul>
				<Card>Email</Card>
				<Card>Phone</Card>
				<Card>Address</Card>
			</ul>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #242943;
    display: flex;
    border-top: solid 1px rgba(244,244,255,0.2);
	
    & > ul:first-child {
        padding: 0;
        margin: 0;
        width: 50%;
        height: 100%;
    }

    & > ul:last-child {
        padding: 0;
        margin: 0;
        width: 50%;
        height: 100%;
        border-left: solid 1px rgba(244,244,255,0.2);
    }

`;

const Card = styled.li`
    list-style: none;
    width: 100%;
    height: 200px;
    border-bottom: solid 1px rgba(244,244,255,0.2);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


