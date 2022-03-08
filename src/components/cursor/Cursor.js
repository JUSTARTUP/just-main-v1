import React, { useRef, useEffect } from "react";
import styled from "styled-components";
const CustomCursor = styled.div`
	z-index: 1000;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	border: none;
	pointer-events: none;
	overflow: hidden;
	opacity: 0.8;
	background-color: ${(props) => props.theme.cursorColor};
	transform: translate3d(0, 0, 0);
	position: fixed;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
const BlackBox = styled.div`
	position: absolute;
	height: 20px;
	width: 20px;
	top: 0px;
	left: 0px;
	color: "#080808";
`;
const Cursor = () => {
	const cursorRef = useRef(null);

	useEffect(() => {
		document.addEventListener("mousemove", (event) => {
			const { clientX, clientY } = event;
			const mouseX = clientX - cursorRef.current.clientWidth / 2;
			const mouseY = clientY - cursorRef.current.clientHeight / 2;
			cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
		});
	}, []);

	return (
		<>
			<BlackBox></BlackBox>
			<CustomCursor ref={cursorRef}></CustomCursor>
		</>
	);
};

export default Cursor;
