import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Header = () => {
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
		font-size: 100px;
		margin: auto 0;
	`;

	const HeaderSub = styled.p`
		position: relative;
		color: ${(props) => props.theme.textColor};
		font-family: "Noto Sans KR";
		font-size: 20px;
		font-weight: 600;
		margin: auto 0;
	`;

	return (
		<HeaderContainer>
			<HeaderTitle>JUST</HeaderTitle>
			<HeaderSub>무모한 도전의 여정</HeaderSub>
		</HeaderContainer>
	);
};

export default Header;
