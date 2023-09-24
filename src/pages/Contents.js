import styled, { keyframes } from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import button from "@mui/material/Button";

function Landing() {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Contents</Title>
                <SubTitle></SubTitle>
            </TitleWrapper>
            <Content>

            </Content>
        </Wrapper>
    );
}

export default Landing;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background-color: #242943;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrapper = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h2`
    width: 100%;
    margin: 0;
    margin-left: 100px;
    color: white;
    font-size: 2.5em;
`;

const SubTitle = styled.p`
    width: 20%;
    border-top: 3px solid white;
    margin-left: 100px;
`;

const Content = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;