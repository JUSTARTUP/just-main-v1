import React from "react";
import styled from "styled-components";

const Footer = () => {
	const FooterContainer = styled.div`
		display: flex;
		flex-direction: row;
	`;

	const SideLogo = styled.div`
		font-size: 40px;
		font-family: "casc-mono";
		font-style: bold;
		color: ${(props) => props.theme.pointColor};
	`;
	return (
		<section data-scroll-section style={{ paddingBottom: "60px" }}>
			<FooterContainer>
				<SideLogo>JUST</SideLogo>
			</FooterContainer>
		</section>
	);
};

export default Footer;
