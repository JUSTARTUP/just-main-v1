import React from "react";
import styled from "styled-components";

const HeaderBack = () => {
	const BackMotionText = styled.div`
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		position: absolute;
		top: 200px;
		font-size: 440px;
		white-space: nowrap;
		font-family: "casc-mono";
		font-style: bold;
		opacity: 0.1;
		transform: rotate(-15deg);
	`;
	return <BackMotionText>START-UP</BackMotionText>;
};

export default HeaderBack;
