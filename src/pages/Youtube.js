import React from "react";
import styled from "styled-components";

const YoutubeVideoBox = styled.iframe`
	width: 48vw;
	height: 27vw;
	border: none;
`;

const Youtube = () => {
	return (
		<section
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
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
