import React from "react";
import styled, { keyframes } from "styled-components";

const NavBar = () => {
	const NavShowUp = keyframes`
    0%{
      transform: translateY(100px);
      opacity : 0;
    }
    100%{
      opacity : 1;
    }
  `;

	const NavContainer = styled.div`
		display: flex;
		flex-direction: row;
		animation-name: ${NavShowUp};
		animation-duration: 2s;
	`;

	const SideLogo = styled.div`
		position: absolute;
		left: 80px;
		top: 44px;
		font-size: 40px;
		font-family: "casc-mono";
		font-style: bold;
		color: ${(props) => props.theme.pointColor};
	`;

	const MenuContainer = styled.div`
		position: absolute;
		right: 80px;
		top: 44px;
		display: flex;
		flex-direction: row;
		width: 240px;
		justify-content: space-between;
	`;
	const Menu = styled.div`
		font-size: 16px;
	`;

	return (
		<NavContainer>
			<SideLogo>JUST</SideLogo>
			<MenuContainer>
				<Menu>HOME</Menu>
				<Menu>ABOUT</Menu>
				<Menu>QnA</Menu>
			</MenuContainer>
		</NavContainer>
	);
};

export default NavBar;
