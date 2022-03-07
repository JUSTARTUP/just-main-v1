import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MovingLabel = () => {
	const Point = styled.span`
		color: ${(props) => props.theme.pointColor};
	`;

	const LabelContainer = styled.div`
		margin: 20vh 0;
	`;

	const Label = styled.div`
		/* position : absolute; */
		font-family: "Bebas Neue";
		font-size: 120px;
		white-space: nowrap;
		letter-spacing: -2px;
	`;

	return (
		<LabelContainer data-scroll-section>
			<Label data-scroll>
				<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
				<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
				<Point>J</Point>o<Point>u</Point>rney <Point>st</Point>arts from me{" "}
			</Label>
		</LabelContainer>
	);
};

export default MovingLabel;
