import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Footer() {

    return (
        <Wrapper>
            Footer
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    height: 75vh;
	min-height: 30em;
	max-height: 50em;
    z-index: 2;

	&.alt {
		  opacity: 0.75;
	}
`;
