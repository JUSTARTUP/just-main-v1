import React from "react";
import styled from "styled-components";
import Image from "assets/Image/justFinger.png";

const Mumo = () => {
	const SquareImg = styled.img`
		height: 560px;
		width: 520px;
		object-fit: scale-down;
	`;

	const MumoContainer = styled.section`
		margin: 0px 300px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;

	const TextContainer = styled.div`
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	const Point = styled.strong`
		color: ${(props) => props.theme.pointColor};
	`;

	const MumoDiscription = styled.p`
		font-size: 24px;
		font-weight: 200;
	`;

	const MumoTitle = styled.div`
		font-size: 40px;
		font-weight: 600;
	`;

	return (
		<MumoContainer data-scroll-section>
			<SquareImg src={Image} alt="just picture"></SquareImg>
			<TextContainer>
				<MumoTitle>
					"<Point>무모한 도전</Point>을 이어나가자"
				</MumoTitle>
				<MumoDiscription>
					<Point>저스트</Point>는 10대들이 함께
					<br /> <Point>창업</Point>이라는 여정에 도전하여
					<br />
					경험을 쌓고 실력을 키우기 위해 모인 동아리 입니다.
				</MumoDiscription>
			</TextContainer>
		</MumoContainer>
	);
};

export default Mumo;
