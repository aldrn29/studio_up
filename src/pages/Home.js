import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import button from "@mui/material/Button";

function Home() {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <Banner>
                <Inner>
                    <Intro>Hi, my name is Forty</Intro>
                    <Brief> 
                        <div>A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED UNDER THE CREATIVE COMMONS.</div>
                        <Button>G E T _ S T A R T E D</Button>
                    </Brief>
                </Inner>
            </Banner>
            <Main>
                <About onClick={() => navigate("/about")}>
                    <div>
                        <TitleWrapper>
                            <Title>About</Title>
                            <SubTitle></SubTitle>
                        </TitleWrapper>
                    </div>
                </About>
                <Works onClick={() => navigate("/works")}>
                    <div>
                        <TitleWrapper>
                            <Title>Works</Title>
                            <SubTitle></SubTitle>
                        </TitleWrapper>
                    </div>
                </Works>
                <Contents onClick={() => navigate("/contents")}>
                    <div>
                        <TitleWrapper>
                            <Title>Contents</Title>
                            <SubTitle></SubTitle>
                        </TitleWrapper>
                    </div>
                </Contents>
                <Bottom onClick={() => navigate("/")}>

                </Bottom>
            </Main>
        </Wrapper>
    );
}

export default Home;

const Reveal = keyframes`
    from {
        left: -50px;
        opacity: 0;
    }
    to {
        left: 0px;
        opacity: 1;
    }
`;

const Trans = keyframes`
	0% { opacity: 0.85; }
	100% { opacity: 0; }
`;

const Idle = keyframes`
	0% { opacity: 0; }
	100% { opacity: 0.85; }
`;

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
`;

const Banner = styled.div`
    width: 100%;
    height: 75vh;
    min-height: 30em;
	max-height: 50em;
	position: relative;
    background-image: url("../images/banner.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	cursor: default;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:after {
        width: 100%;
		height: 100%;
		position: absolute;
		background-color: #242943;
		content: '';
		opacity: 0.85;
	}

    &:hover {
        &:after: none; 
    }
`;

const Inner = styled.div`
    position: relative;
    left: 0;
    width: 80%;
    z-index: 2;
    animation: ${Reveal} 1.5s;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;
    animation-timing-function: ease_in_out;
`;

const Intro = styled.h1`
    width: 100%;
	font-size: 3.5em;
    padding-bottom: 50px;
    border-bottom: 3px solid white;
`;

const Brief = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    item-align: center;
    text-align: left;
    font-size: 1.2em;
    
	& > div {
        width: 40%;
        height: 100%;
        margin-right: 10px;
	}
`; 

const Main = styled.div`
    height: auto;
    background-color: tomato;
    display: flex;
    flex-wrap: wrap;
`;

const About = styled.div`
    width: 40%;
    height: 48vh;
    background-image: url("../images/pic01.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    overflow: hidden;
	position: relative;

    & > div {
        background-color: #6fc3df;
        content: '';
        display: block;
        width: 100%;
		height: 100%;
        animation: ${Idle} ease 1s;
        animation-fill-mode: forwards;
    }

    & > div:hover {
        animation: ${Trans} ease 1s;
        animation-fill-mode: forwards;
    }
`;

const Works = styled.div`
    width: 60%;
    height: 48vh;
    background-image: url("../images/pic06.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

    & > div {
        background-color: #8d82c4;
        content: '';
        display: block;
        width: 100%;
		height: 100%;
        animation: ${Idle} ease 1s;
        animation-fill-mode: forwards;
	}

    & > div:hover {
        animation: ${Trans} ease 1s;
        animation-fill-mode: forwards;
    }
`;

const Contents = styled.div`
    width: 100%;
    height: 48vh;
    background-image: url("../images/pic07.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

     & > div {
		background-color: #ec8d81;
		content: '';
        display: block;
        width: 100%;
		height: 100%;
        animation: ${Idle} ease 1s;
        animation-fill-mode: forwards;
	}

    & > div:hover {
        animation: ${Trans} ease 1s;
        animation-fill-mode: forwards;
    }
`;

const Bottom = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #2a2f4a;
`;

const TitleWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h2`
    margin: 0;
    width: 100%;
    color: white;
    font-size: 2.5em;
`;

const SubTitle = styled.p`
    width: 40%;
    border-top: 3px solid white;
`;

const Button = materialStyled(button)(() => ({
    width: "245px",
    height: "60px",
    color: "white",
    marginTop: "2px",
    border: "3px solid white",
    borderRadius: "0",
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": { 
        color: "#6fc3df",
        border: "3px solid #6fc3df",
    },
}));