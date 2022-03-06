import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import locomotiveScroll from "locomotive-scroll";
import Cursor from "./components/cursor/Cursor";
import Landing from "./pages/Landing";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeaderBack from "./pages/HeaderBack";
import gasp from "gsap";

const App = () => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(false);
		setTimeout(() => {
			setIsReady(true);
		}, 3000);
	}, []);

	const AppStyle = styled.div`
		background-color: ${(props) => props.theme.bgColor};
		width: 100vw;
		min-height: 100vh;
		height: auto;
		color: ${(props) => props.theme.textColor};
		text-overflow: hidden;
	`;

	const MainContainer = styled.div`
		padding: 0 4vw;
		section {
			padding: 140px 80px;
		}
	`;

	// const DummyScrollPg = styled.div`
	// 	/* background-color: green;
	// 	height: 100vh;
	// 	width: 100vw; */
	// `;

	return (
		<AppStyle>
			<Cursor />
			{!isReady && <Landing />}
			{isReady && (
				<>
					<HeaderBack />
					<NavBar />
					<Header />
					<Footer />
					<MainContainer>
						<section></section>
						<section></section>
						<section></section>
						<section></section>
						<section></section>
						<section></section>
						<section></section>
					</MainContainer>
				</>
			)}
		</AppStyle>
	);
};

export default App;
