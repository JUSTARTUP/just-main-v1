import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "assets/Image/msPark.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SquareImg = styled.img`
	height: 560px;
	width: 600px;
	object-fit: scale-down;
`;

const MumoContainer = styled.section`
	margin: 0px 300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TextContainer = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Point = styled.strong`
	color: ${(props) => props.theme.pointColor};
`;

const MumoDiscription = styled.p`
	font-size: 24px;
	font-weight: 200;
`;

const MumoTitle = styled.div`
	font-size: 40px;
	font-weight: 600;
`;

const Mumo = () => {
	gsap.registerPlugin(ScrollTrigger);
	const imgRef = useRef(null);

	useEffect(() => {
		const element = imgRef.current;
		gsap.from(element, {
			y: -600,
			opacity: -0.2,

			scrollTrigger: {
				trigger: element,
				scrub: true,
				start: "top bottom",
				end: "bottom top",
				// markers: true,
			},
		});
	}, []);
	return (
		<MumoContainer data-scroll-section>
			<div ref={imgRef}>
				<SquareImg src={Image} alt="just picture"></SquareImg>
			</div>
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
		</MumoContainer>
	);
};

export default Mumo;
