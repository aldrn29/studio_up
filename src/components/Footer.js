import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import button from "@mui/material/Button";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
function Footer() {

    return (
        <Wrapper>
            <ul>

            </ul>
            <ul>
				<Card>
                    <Inner>
                        <Round>
                            <MailRoundedIcon />
                        </Round>
                        <InfoWrapper>
                            <Title>Email</Title>
                            <Info>studio_up@naver.com</Info>
                        </InfoWrapper>
                    </Inner>
                </Card>
				<Card>
                    <Inner>
                        <Round>
                            <CallRoundedIcon />
                        </Round>
                        <InfoWrapper>
                            <Title>Phone</Title>
                            <Info>010-3187-3087</Info>
                        </InfoWrapper>
                    </Inner>
                </Card>
				<Card>
                    <Inner>
                        <Round>
                            <LocationCityRoundedIcon />
                        </Round>
                        <InfoWrapper>
                            <Title>Location</Title>
                            <Info>용산구 백범로79길 110, 2층</Info>
                        </InfoWrapper>
                    </Inner>
                </Card>
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
    align-items: center;
`;

const Inner = styled.div`
    width: 80%;
    height: auto;
    margin: auto;
    display: flex;
    margin-top: 50px;
`;

const Round = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :first-child {
        width: 30px;
        height: 30px;
        color: #242943;
    }
`;

const InfoWrapper = styled.div`
    margin-left: 30px;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 5px 0;
`;

const Info = styled.div`
    margin-top: 20px;
    font-size: 1.2rem;
`;