import React from "react";
import styled from "styled-components";

const Header = () => {
	const HeaderContainer = styled.div`
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	`;

	const HeaderTitle = styled.h1`
		color: ${(props) => props.theme.pointColor};
		position: relative;
		font-family: "casc-mono";
		font-size: 100px;
		margin: auto 0;
	`;

	const HeaderSub = styled.p`
		position: relative;
		color: ${(props) => props.theme.textColor};
		font-family: "Noto Sans KR";
		font-size: 20px;
		font-style: bold;
		margin: auto 0;
	`;

	return (
		<>
			<HeaderContainer>
				<HeaderTitle>JUST</HeaderTitle>
				<HeaderSub>무모한 도전의 여정</HeaderSub>
			</HeaderContainer>
		</>
	);
};

export default Header;
