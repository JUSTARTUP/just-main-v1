import React from "react";
import styled from "styled-components";
import instagram from "assets/icons/instagram.png";
import github from "assets/icons/github.png";
import youtube from "assets/icons/youtube.png";

const Footer = () => {
	const FooterContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`;

	const SideLogo = styled.div`
		font-size: 40px;
		font-family: "casc-mono";
		font-style: bold;
		color: ${(props) => props.theme.pointColor};
	`;
	const BtnContainer = styled.div`
		display: flex;
		flex-direction: row;
		width: 240px;
		justify-content: space-between;
	`;
	const Circle = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		background-color: ${(props) => props.theme.pointColor};
	`;

	const ICON = styled.img`
		height: 34px;
		width: 34px;
		object-fit: scale-down;
	`;
	return (
		<section data-scroll-section style={{ paddingBottom: "60px" }}>
			<FooterContainer>
				<SideLogo>JUST</SideLogo>
				<BtnContainer>
					<a href="https://www.instagram.com/start_just_up/" target="_blank">
						<Circle>
							<ICON src={instagram} alt="instagram" />
						</Circle>
					</a>
					<a href="https://github.com/JUSTARTUP" target="_blank">
						<Circle>
							<ICON src={github} alt="github" />
						</Circle>
					</a>
					<a
						href="https://www.youtube.com/channel/UCX530nuv4miukIcqizrt69w/featured"
						target="_blank"
					>
						<Circle>
							<ICON src={youtube} alt="youtube" />
						</Circle>
					</a>
				</BtnContainer>
			</FooterContainer>
		</section>
	);
};

export default Footer;
