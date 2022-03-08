import React from "react";
import styled, { keyframes } from "styled-components";
const NavShowUp = keyframes`
    0%{
      transform: translate(-6px,100px);
      opacity : 0;
    }
    100%{
      opacity : 1;
      transform: translate(-6px,0px);
    }
  `;

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	animation-name: ${NavShowUp};
	animation-duration: 1.4s;
	animation-timing-function: ease;
	animation-fill-mode: forwards;
`;

const SideLogo = styled.div`
	position: absolute;
	left: 80px;
	top: 44px;
	font-size: 40px;
	font-family: "casc-mono";
	font-style: bold;
	color: ${(props) => props.theme.pointColor};
	@media only screen and (max-width: 480px) {
		left: 30px;
		top: 24px;
		flex-direction: column;
		align-items: end;
		font-size: 32px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		top: 36px;
		left: 40px;
		font-size: 36px;
	}
`;

const MenuContainer = styled.div`
	position: absolute;
	right: 86px;
	top: 44px;
	display: flex;
	flex-direction: row;
	width: 240px;
	justify-content: space-between;
	@media only screen and (max-width: 480px) {
		right: 20px;
		top: 24px;
		flex-direction: column;
		align-items: end;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		top: 32px;
		right: 20px;
	}
`;
const Menu = styled.div`
	font-size: 16px;

	@media only screen and (max-width: 480px) {
		font-size: 12px;
	}
`;

const NavBar = () => {
	return (
		<NavContainer>
			<SideLogo>JUST</SideLogo>
			<MenuContainer>
				<Menu>HOME</Menu>
				<Menu>ABOUT</Menu>
				<Menu>Team</Menu>
			</MenuContainer>
		</NavContainer>
	);
};

export default NavBar;
