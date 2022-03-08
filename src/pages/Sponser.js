import React from "react";
import styled from "styled-components";
import esayspub from "../assets/Image/easyspub.png";
const Title = styled.div`
	font-size: 60px;
	font-weight: 600;
	color: ${(props) => props.theme.pointColor};
	margin-bottom: 40px;
`;

const About = styled.div`
	font-size: 20px;
	margin-bottom: 60px;
`;

const SponserContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 40vh;
	text-align: center;
	justify-content: center;
`;

const Sponser1 = styled.img`
	filter: opacity(0.5) drop-shadow(0 0 0 white);
	height: 32px;
	object-fit: scale-down;
`;

const Sponser = () => {
	return (
		<section data-scroll-section>
			<SponserContainer>
				<Title>후원사</Title>
				<About>
					저스트는 동아리 운영을 위해 후원을 받고 있습니다. <br />
					후원은 동아리원들의 경험 성장과 교육 기회에 사용됩니다.
				</About>
				<Sponser1 src={esayspub} alt="esayspub.com" />
			</SponserContainer>{" "}
		</section>
	);
};

export default Sponser;
