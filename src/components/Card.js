import styled from "styled-components";

function Card({ title, content }) {
    return (
        <Wrapper>
            <Inner>
                <Title>{title}</Title>
                <Content>{content.map((data, index) =>
                    <li key={index}>{data}</li>
                )}</Content>
            </Inner>
        </Wrapper>
    );
}

export default Card;

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

const Inner = styled.div`
    width: auto;
    display: inline-block;
`;

const Title = styled.div`
    width: auto;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 2px solid white;
    white-space: pre;
`;

const Content = styled.div`
    margin: 20px 0;
    font-size: 1rem;
`;