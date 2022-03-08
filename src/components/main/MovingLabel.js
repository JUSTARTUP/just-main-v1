import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

console.clear();

const Point = styled.span`
	color: ${(props) => props.theme.pointColor};
`;

const LabelContainer = styled.div`
	margin: 20vh 0;
`;

const Label = styled.div`
	/* position: absolute; */
	font-family: "Bebas Neue";
	font-size: 100px;
	white-space: nowrap;
	letter-spacing: -2px;
	transform: translateX(-500);
	@media only screen and (max-width: 768px) {
		font-size: 40px;
	}
`;

const MovingLabel = () => {
	gsap.registerPlugin(ScrollTrigger);
	const labelRef = useRef(null);

	useEffect(() => {
		const element = labelRef.current;
		gsap.from(element, {
			x: -800,
			scrollTrigger: {
				trigger: element,
				scrub: true,
				start: "top bottom",
				end: "bottom top",
			},
		});
	}, []);
	return (
		<div ref={labelRef}>
			<LabelContainer>
				<Label>
					<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
					<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
					<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
					<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
					<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
				</Label>
			</LabelContainer>
		</div>
	);
};

export default MovingLabel;
