import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
const NavShowUp = keyframes`
0%{
	transform: translateY(100px);
	opacity : 0;
}
100%{
	opacity : 1;
}
`;

const HeaderContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	animation-name: ${NavShowUp};
	animation-duration: 2s;
`;

const HeaderTitle = styled.h1`
	color: ${(props) => props.theme.pointColor};
	position: relative;
	font-family: "casc-mono";
	font-size: 92px;
	margin: auto 0;
	@media only screen and (max-width: 480px) {
		font-size: 52px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 78px;
	}
`;

const HeaderSub = styled.p`
	position: relative;
	color: ${(props) => props.theme.textColor};
	font-family: "Noto Sans KR";
	font-size: 20px;
	font-weight: 600;
	margin: auto 0;
	@media only screen and (max-width: 480px) {
		font-size: 16px;
	}
`;
const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>JUST</HeaderTitle>
			<HeaderSub>무모한 도전의 여정</HeaderSub>
		</HeaderContainer>
	);
};

export default Header;
