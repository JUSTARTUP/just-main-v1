import React from "react";
import styled from "styled-components";

const YoutubeVideoBox = styled.iframe`
	width: 48vw;
	height: 27vw;
	border: none;
	@media only screen and (max-width: 768px) {
		width: 64vw;
		height: 36vw;
	}
`;
const VideoText = styled.div`
	font-size: 2.4vw;
	font-weight: 600;
	margin: 4vw 0vw;
	@media only screen and (max-width: 480px) {
		font-size: 8vw;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 8vw;
	}
`;
const Youtube = () => {
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				margin: "20vw 0vw",
			}}
		>
			<VideoText>
				<span style={{ color: "#feaa00" }}>V</span>ideo
			</VideoText>
			<YoutubeVideoBox
				src="https://www.youtube.com/embed/au5rw6xajaI"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></YoutubeVideoBox>
		</section>
	);
};

export default Youtube;
