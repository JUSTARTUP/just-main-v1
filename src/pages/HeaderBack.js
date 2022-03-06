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
		font-size: 440px;
		white-space: nowrap;
		font-family: "casc-mono";
		font-style: bold;
		opacity: 0.1;
		transform: rotate(-15deg) translateX(${-position * 1.5}px)
			translateY(${-0.4 * position * 1.5}px);
	`;
	return <BackMotionText>START-UP</BackMotionText>;
};

export default HeaderBack;
