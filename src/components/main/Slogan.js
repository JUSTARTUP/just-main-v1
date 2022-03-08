import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SloganSentence = styled.div`
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 48px;
`;

const Point = styled.span`
	color: ${(props) => props.theme.pointColor};
`;

const BBolong = styled.span`
	transition: 0.4s;
	&:hover {
		transform: scale(1.4);
	}
`;

const Slogan = () => {
	gsap.registerPlugin(ScrollTrigger);
	const sloganRef = useRef(null);
	useEffect(() => {
		const element = sloganRef.current;
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
		<section
			style={{
				height: "700px",
				margin: "100vh 0 20vh 0",
				display: "flex",
				justifyContent: "center",
			}}
			ref={sloganRef}
		>
			<SloganSentence>
				<BBolong>"</BBolong>
				<BBolong>
					<Point>J</Point>
				</BBolong>
				<BBolong>
					<Point>o</Point>
				</BBolong>
				<BBolong>
					<Point>u</Point>
				</BBolong>
				<BBolong>
					<Point>r</Point>
				</BBolong>
				<BBolong>
					<Point>n</Point>
				</BBolong>
				<BBolong>
					<Point>e</Point>
				</BBolong>
				<BBolong>
					<Point>y</Point>
				</BBolong>
				<BBolong>
					<Point>_</Point>
				</BBolong>
				<BBolong>
					<Point> s</Point>
				</BBolong>
				<BBolong>
					<Point>t</Point>
				</BBolong>
				<BBolong>
					<Point>a</Point>
				</BBolong>
				<BBolong>
					<Point>r</Point>
				</BBolong>
				<BBolong>
					<Point>t</Point>
				</BBolong>
				<BBolong>
					<Point>s</Point>
				</BBolong>
				<BBolong>_</BBolong>
				<BBolong>f</BBolong>
				<BBolong>r</BBolong>
				<BBolong>o</BBolong>
				<BBolong>m</BBolong>
				<BBolong>
					<Point>_</Point>
				</BBolong>
				<BBolong>
					<Point>m</Point>
				</BBolong>
				<BBolong>
					<Point>e</Point>
				</BBolong>
				<BBolong>"</BBolong>
			</SloganSentence>
		</section>
	);
};

export default Slogan;
