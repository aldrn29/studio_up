import styled from "styled-components";
import Motion from "../components/Motion";

function About() {
    return (
        <Motion>
        <Wrapper>
            <TitleWrapper>
                <Title>About</Title>
                <SubTitle></SubTitle>
            </TitleWrapper>
            <Content>

            </Content>
        </Wrapper>
        </Motion>
    );
}

export default About;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #242943;
    border-bottom: solid 1px rgba(244,244,255,0.2);
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
    height: 80vh; /*auto 변경*/
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;