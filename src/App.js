import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import locomotiveScroll from "locomotive-scroll";
import Cursor from "./components/cursor/Cursor";
import Landing from "./pages/Landing";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeaderBack from "./pages/HeaderBack";
import Slogan from "./components/main/Slogan";
import Mumo from "./components/main/Mumo";
import MovingLabel from "components/main/MovingLabel";
import JustCards from "pages/JustCards";
import QnA from "pages/QnA";
import Members from "pages/Members";
import Sponser from "pages/Sponser";

const App = () => {
	const [isReady, setIsReady] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		setIsReady(false);
		setTimeout(() => {
			setIsReady(true);
		}, 0); // 원래 3000
	}, []);

	const AppStyle = styled.div`
		background-color: ${(props) => props.theme.bgColor};
		width: 100vw;
		min-height: 100vh;
		height: auto;
		color: ${(props) => props.theme.textColor};
		text-overflow: hidden;
	`;

	return (
		<AppStyle>
			<Cursor />
			{!isReady && <Landing />}
			{isReady && (
				<>
					<HeaderBack />
					<NavBar />
					<Header />
					<Slogan />
					<Mumo />
					<MovingLabel />
					<JustCards />
					<Members />
					<QnA />
					<Sponser />
					<Footer />
				</>
			)}
		</AppStyle>
	);
};

export default App;
