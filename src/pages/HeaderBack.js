import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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
		top: 280px;
		left: -120px;
		font-size: 440px;
		white-space: nowrap;
		font-family: "casc-mono";
		font-weight: 600;
		opacity: 0.1;
		will-change: transform;
		transform: rotate(-15deg) translateX(${position / 2}px)
			translateY(${(-0.23 * position) / 2}px);
	`;
	return <BackMotionText data-scroll>START-UP</BackMotionText>;
};

export default HeaderBack;
