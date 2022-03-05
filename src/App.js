import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import locomotiveScroll from "locomotive-scroll";
import Cursor from "./components/cursor/Cursor";
import Landing from "./pages/Landing";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";

const App = () => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(false);
		setTimeout(() => {
			setIsReady(true);
		}, 4000);
	}, []);

	const AppStyle = styled.div`
		background-color: ${(props) => props.theme.bgColor};
		width: 100vw;
		height: 100vh;
		color: ${(props) => props.theme.textColor};
	`;

	return (
		<AppStyle>
			<Cursor />
			{!isReady && <Landing />}
			{isReady && <></>}
		</AppStyle>
	);
};

export default App;
