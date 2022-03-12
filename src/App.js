import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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
import Youtube from "pages/Youtube";
import Project from "pages/Project";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const App = () => {
	const [isReady, setIsReady] = useState(1);

	useEffect(() => {
		MySwal.fire({
			title: "IOS기기를 사용중인가요?",
			text: "아이폰/아이패드를 사용중이라면 전용페이지로 이동하세요",
			icon: "info",
			showCancelButton: true,
			confirmButtonColor: "#080808",
			cancelButtonColor: "#feaa00",
			confirmButtonText: "머무르기",
			cancelButtonText: "IOS 페이지 이동",
			background: "#080808",
			color: "#fff",
			iconColor: "#feaa00",
		})
			.then((result) => {
				if (result.isConfirmed) {
					window.open("https://justartup.github.io/JUST-2022-IOS/");
				}
			})
			.then(() => {
				setIsReady(0);
			})
			.then(() => {
				setTimeout(() => {
					setIsReady(2);
				}, 3000);
			});
	}, []);

	const AppStyle = styled.div`
		background-color: ${(props) => props.theme.bgColor};
		width: 100vw;
		min-height: 100vh;
		height: auto;
		color: ${(props) => props.theme.textColor};
		text-overflow: hidden;
		cursor: none;
		display: flex;
		flex-direction: column;
	`;

	return (
		<AppStyle>
			<Cursor />
			{!isReady && <Landing />}
			{isReady == 2 && (
				<>
					<HeaderBack />
					<NavBar />
					<Header />
					<Slogan />
					<Mumo />
					<MovingLabel />
					<JustCards />
					<Members />
					<Project />
					<Youtube />
					<MovingLabel />
					<QnA />
					<Sponser />
					<Footer />
				</>
			)}
		</AppStyle>
	);
};

export default App;
