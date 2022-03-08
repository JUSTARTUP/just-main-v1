import React from "react";
import styled, { keyframes } from "styled-components";

const TextUp = keyframes`
from {
	transform: translateY(70%);

}
to {
	transform: translateY(0%);
}
`;

const ChgOpacity = keyframes`
from{
	opacity: 1;
}
to {
	opacity : 0;
}
`;

const TextContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: "casc-mono";
	animation-timing-function: ease;
	font-size: 80px;
	animation-name: ${ChgOpacity};
	animation-delay: 2.6s;
	animation-duration: 0.3s;
	animation-fill-mode: forwards;

	@media only screen and (max-width: 480px) {
		font-size: 36px;
	}
	@media only screen and(min-width: 480px) and (max-width: 768px) {
		font-size: 60px;
	}
`;

const JustText = styled.div`
	position: relative;
	display: inline-block;
	color: ${(props) => props.theme.pointColor};

	&:nth-child(2) {
		transform: translateY(70%);
		animation-timing-function: ease;
		animation-name: ${TextUp};
		animation-delay: 0s;
		animation-duration: 0.6s;
		animation-fill-mode: forwards;
	}
	&:nth-child(3) {
		transform: translateY(70%);
		animation-timing-function: ease;
		animation-name: ${TextUp};
		animation-duration: 0.6s;
		animation-delay: 1s;
		animation-fill-mode: forwards;
	}
	&:nth-child(4) {
		transform: translateY(70%);
		animation-timing-function: ease;
		animation-name: ${TextUp};
		animation-duration: 0.8s;
		animation-delay: 1.7s;
		animation-fill-mode: forwards;
	}
`;
function Landing() {
	return (
		<TextContainer>
			<JustText>J</JustText>
			<JustText>U</JustText>
			<JustText>S</JustText>
			<JustText>T</JustText>
		</TextContainer>
	);
}

export default Landing;
