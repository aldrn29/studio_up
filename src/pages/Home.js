import styled, { keyframes } from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import button from "@mui/material/Button";

function Home() {
    return (
        <Wrapper>
            <Banner>
                <Inner>
                    <Title>Hi, my name is Forty</Title>
                    <Content> 
                        <div>A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED UNDER THE CREATIVE COMMONS.</div>
                        <Button>G E T _ S T A R T E D</Button>
                    </Content>
                </Inner>
            </Banner>
            <Main>
                <Element>
                    <div></div>
                </Element>
                <Generic>
                    <div></div>
                </Generic>
                <Landing>
                    <div></div>
                </Landing>
            </Main>
        </Wrapper>
    );
}

export default Home;

const Reveal = keyframes`

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
    width: 80%;
    animation: ${Reveal} 1s ease;
    z-index: 2;
`;

const Title = styled.h1`
    width: 100%;
	font-size: 3.5em;
    padding-bottom: 50px;
    border-bottom: 3px solid white;
`;

const Content = styled.div`
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
    height: 48vh;
    background-color: tomato;
    display: flex;
    flex-wrap: wrap;
`;

const Element = styled.div`
    width: 40%;
    height: 100%;
    background-image: url("../images/pic01.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    overflow: hidden;
	position: relative;

    & > div {
        display: block;
        width: 100%;
		height: 100%;
		background-color: #6fc3df;
		content: '';
		opacity: 0.85;
	}

    & > div:hover {
        display: none;
    }
`;

const Generic = styled.div`
    width: 60%;
    height: 100%;
    background-image: url("../images/pic06.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

    &:after {
        width: 100%;
        height: 100%;
        display: block;
        background-color: #8d82c4;
        content: '';
	    opacity: 0.85;
	}
`;

const Landing = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("../images/pic07.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

     &:after {
        display: block;
        width: 100%;
		height: 100%;
		background-color: #ec8d81;
		content: '';
		opacity: 0.85;
	}
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