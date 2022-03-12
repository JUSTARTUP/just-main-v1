import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "assets/Image/msPark.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SquareImg = styled.img`
	width: 600px;
	object-fit: scale-down;
	margin-right: 160px;
	@media only screen and (max-width: 480px) {
		margin: 40px 120px;

		width: 70vw;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		margin: 40px auto;
		width: 70vw;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		width: 40vw;
		margin-right: 60px;
	}
`;

const MumoContainer = styled.section`
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
		align-items: center;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		margin: 0px auto;
	}
`;

const TextContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (max-width: 480px) {
		height: 100px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		height: 200px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		height: 300px;
	}
`;

const Point = styled.strong`
	color: ${(props) => props.theme.pointColor};
`;

const MumoDiscription = styled.p`
	font-size: 24px;
	font-weight: 200;
	@media only screen and (max-width: 480px) {
		font-size: 16px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 20px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		font-size: 22px;
	}
`;

const MumoTitle = styled.div`
	font-size: 40px;
	font-weight: 600;
	@media only screen and (max-width: 480px) {
		font-size: 20px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 24px;
	}
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		font-size: 32px;
	}
`;

const Mumo = () => {
	gsap.registerPlugin(ScrollTrigger);
	const imgRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const element = imgRef.current;
		gsap.from(element, {
			xPercent: -30,
			duration: 1,
			scrollTrigger: {
				trigger: element,
			},
		});
	}, []);
	useEffect(() => {
		const element = textRef.current;
		gsap.from(element, {
			xPercent: -30,
			duration: 1.6,
			scrollTrigger: {
				trigger: element,
			},
		});
	}, []);
	return (
		<MumoContainer>
			<div ref={imgRef}>
				<SquareImg src={Image} alt="just picture"></SquareImg>
			</div>
			<div ref={textRef}>
				<TextContainer>
					<MumoTitle>
						"<Point>무모한 도전</Point>을 이어나가자"
					</MumoTitle>
					<MumoDiscription>
						<Point>저스트</Point>는 10대들이 함께
						<br /> <Point>창업</Point>이라는 여정에 도전하여
						<br />
						경험을 쌓고 실력을 키우기 위해 모인 동아리 입니다.
					</MumoDiscription>
				</TextContainer>
			</div>
		</MumoContainer>
	);
};

export default Mumo;
