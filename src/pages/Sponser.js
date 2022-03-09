import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import esayspub from "../assets/Image/easyspub.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Title = styled.div`
	font-size: 3vw;
	font-weight: 600;
	color: ${(props) => props.theme.pointColor};
	margin-bottom: 40px;
	@media only screen and (max-width: 480px) {
		font-size: 8vw;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 6 vw;
	}
`;

const About = styled.div`
	font-size: 1vw;
	margin-bottom: 60px;
	@media only screen and (max-width: 480px) {
		font-size: 4vw;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 3vw;
	}
`;

const SponserContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 40vh;
	text-align: center;
	justify-content: center;
	@media only screen and (max-width: 480px) {
		height: 16vh;
	}
`;

const Sponser1 = styled.img`
	filter: opacity(0.5) drop-shadow(0 0 0 white);
	height: 32px;
	object-fit: scale-down;
`;

const Sponser = () => {
	gsap.registerPlugin(ScrollTrigger);
	const sponserRef = useRef(null);
	useEffect(() => {
		const element = sponserRef.current;
		gsap.from(element, {
			opacity: 0,
			duration: 2,
			scrollTrigger: {
				trigger: element,
			},
		});
	}, []);
	return (
		<section ref={sponserRef}>
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
