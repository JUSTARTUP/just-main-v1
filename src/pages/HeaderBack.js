import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderBack = () => {
	const [position, setPosition] = useState(0);

	const onScroll = () => {
		setPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	const BackMotionText = styled.div`
		position: absolute;
		top: 28%;
		left: -6vw;
		font-size: 24vw;
		white-space: nowrap;
		font-family: "casc-mono";
		font-weight: 600;
		opacity: 0.1;
		will-change: transform;
		transform: rotate(-15deg) translateX(${position / 2}px)
			translateY(${(-0.23 * position) / 2}px);
		@media only screen and (max-width: 900px) {
			transform: rotate(-15deg);
		}
	`;

	return <BackMotionText>START-UP</BackMotionText>;
};

export default HeaderBack;
