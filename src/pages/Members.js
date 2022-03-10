import React from "react";
import styled, { keyframes } from "styled-components";
import P1 from "../assets/profile/minsung.png";
import P2 from "../assets/profile/jahoon.jpg";
import P3 from "../assets/profile/heewon.jpg";
import P4 from "../assets/profile/minyong.jpg";
import P5 from "../assets/profile/eunchai.jpg";
import P6 from "../assets/profile/inhwa.png";
import P7 from "../assets/profile/dogo.jpg";
import JUST from "assets/profile/5justGradation.jpg";
import arrow from "assets/icons/arrow.png";
import { useState } from "react";

const memberList = [
	{
		name: "권은채",
		profile: P5,
		job: "Chairman & Designer",
		comment: [
			"되고자 하는 모습을 구체적으로 상상해라,",
			<br />,
			"상상하는 만큼 실현 된다",
		],
		link: "https://www.instagram.com/_01527/",
	},
	{
		name: "김민성",
		profile: P1,
		job: "FE/APP developer",
		comment: [
			<del>인생은 마음대로 되지 않는 법이란다</del>,
			<br />,
			"모든 경험은 나를 위한 양분이 된다",
		],
		link: "https://www.instagram.com/mingsung_521/",
	},
	{
		name: "장인화",
		profile: P6,
		job: "APP Developer",
		comment: "예술을 합시다",
		link: "https://www.instagram.com/uglyonlytoday/",
	},

	{
		name: "윤희원",
		profile: P3,
		job: "Project Manager",
		comment: "일단 해보자!",
		link: "https://www.instagram.com/uniony721/",
	},
	{
		name: "오민용",
		profile: P4,
		job: "ML/APP Developer",
		comment: "개발을 합시다",
		link: "https://www.instagram.com/minyong4992/",
	},
	{
		name: "박두고",
		profile: P7,
		job: "Developer",
		comment: "허심탄회하게 살자",
		link: "https://www.instagram.com/start_just_up/",
	},
	{
		name: "주자훈",
		profile: P2,
		job: "Project Manager",
		comment: "항상 긍정의 힘을 믿으며 앞으로 나아갑니다",
		link: "https://www.instagram.com/ja_hoon_05/",
	},
	{
		name: ["JUST에", <div />, "합류하기!"],
		profile: JUST,
		job: "JUST 2기",
		comment: "함께 창업의 여정에 도전할 분을 찾고 있어요!",
		link: "https://www.instagram.com/start_just_up/",
	},
];
const ComeIn = keyframes`
		0% {
			transform: translate(400px,150px);
			opacity : 0;
		}
		70% {
			opacity : 1;
		}
		100% {
			transform : translate(0px,150px);

		}
	`;
const ComeIn2 = keyframes`
		0% {
			transform: translate(400px,-150px);
			opacity : 0;

		}
		70% {
			opacity : 1;
		}
		100% {
			transform : translate(0px,-150px);
		}
	`;
const ComeInX = keyframes`
		0% {
			transform: translate(400px,0px);
			opacity : 0;

		}
		70% {
			opacity : 1;
		}
		100% {
			transform : translate(0px,0px);
		}
	`;
const ComeInX2 = keyframes`
		0% {
			transform: translate(400px,0px);
			opacity : 0;

		}
		70% {
			opacity : 1;
		}
		100% {
			transform : translate(0px,0px);
		}
	`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	/* background-color: red; */
	height: 300px;
	width: 700px;
	&:nth-child(1) {
		transform: translateY(150px);
		animation-name: ${ComeIn};
		animation-duration: 1s;
		@media only screen and (max-width: 768px) {
			transform: translateY(0px);
			margin-top: 60px;
			animation: ${ComeInX};
			width: 90vw;
			height: 160px;
		}
		@media only screen and (min-width: 768px) and (max-width: 1500px) {
			transform: translateY(0px);
			margin-top: 60px;
			animation: ${ComeInX};
			width: 90vw;
		}
	}
	&:nth-child(2) {
		transform: translateY(-150px);
		animation-name: ${ComeIn2};
		animation-duration: 1s;
		@media only screen and (max-width: 768px) {
			transform: translateY(0px);
			margin-top: 60px;
			animation-name: ${ComeInX2};
			width: 90vw;
			height: 160px;
		}
		@media only screen and (min-width: 768px) and (max-width: 1500px) {
			margin-top: 60px;
			transform: translateY(0px);
			animation-name: ${ComeInX2};
			width: 90vw;
		}
	}
`;
const ProfileJob = styled.div`
	color: ${(props) => props.theme.pointColor};
	font-size: 20px;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const ProfileComment = styled.div`
	font-size: 16px;
	font-weight: 300;
	margin-top: 20px;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const ProfileName = styled.div`
	font-size: 32px;
	@media only screen and (max-width: 480px) {
		font-size: 20px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 20px;
	}
`;
const ProfileTexts = styled.div`
	margin: 36px;
`;
const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	margin: 40vw 0vw;
	padding: 10vw;
	@media only screen and (max-width: 1500px) {
		padding: 0vw 2vw;
	}
	@media only screen and (min-width: 1500px) and (max-width: 1700px) {
		padding: 0vw 6vw;
	}
	@media only screen and (min-width: 1700px) and (max-width: 3000px) {
		padding: 0vw 12vw;
	}
	@media only screen and (min-width: 3000px) {
		padding: 0vw 20vw;
	}
`;

const ProfileCircle = styled.img`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	object-fit: cover;
	transition: 0.4s;
	&:hover {
		transform: scale(1.1);
	}

	@media only screen and (max-width: 480px) {
		height: 160px;
		width: 160px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		height: 200px;
		width: 200px;
	}
`;

const ProfileTitle = styled.div`
	color: ${(props) => props.theme.textColor};
	font-size: 2.6vw;
	font-weight: 600;
	@media only screen and (max-width: 480px) {
		/* transform: translate(-50px, 100px); */
		font-size: 20px;
		text-align: center;
		/* display: none; */
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 2.3vw;
		text-align: center;
		/* display: none; */
	}
	@media only screen and (min-width: 768px) and (max-width: 1500px) {
		text-align: center;
	}
`;
const Point = styled.span`
	color: ${(props) => props.theme.pointColor};
`;

const OutlinedBtn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 10vw;
	min-height: 24px;
	width: 10vw;
	min-width: 24px;
	border-radius: 50%;
	border: 2px solid white;
`;

const ArrowIcon = styled.img`
	min-width: 12px;
	width: 3vw;
	object-fit: scale-down;
	transition: 0.4s;
	&:hover {
		transform: scale(1.3);
	}
`;

const BtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: end;
	width: 1400px;
	@media only screen and (max-width: 768px) {
		width: 90vw;
	}
	@media only screen and (min-width: 768px) and (max-width: 1500px) {
		width: 90vw;
	}
`;

const Members = () => {
	const [memberIndex, setMemberIndex] = useState(0);

	const ProfileWrapper = styled.div`
		display: flex;
		flex-direction: row;
		position: relative;
		@media only screen and (max-width: 1500px) {
			flex-direction: column;
			/* align-items: center; */
		}
	`;
	const handleClick = () => {
		memberIndex < 6 ? setMemberIndex(memberIndex + 2) : setMemberIndex(0);
		return;
	};
	let i = memberIndex;

	return (
		<ProfileContainer>
			<ProfileTitle>
				<Point>2022 JUST </Point>1기 크루
			</ProfileTitle>
			<ProfileWrapper>
				<Profile>
					<a
						href={memberList[i].link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ProfileCircle src={memberList[i].profile} alt="" />
					</a>
					<ProfileTexts>
						<ProfileName>{memberList[i].name}</ProfileName>
						<ProfileJob>{memberList[i].job}</ProfileJob>
						<ProfileComment>"{memberList[i].comment}"</ProfileComment>
					</ProfileTexts>
				</Profile>
				<Profile>
					{" "}
					<a
						href={memberList[i + 1].link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ProfileCircle src={memberList[i + 1].profile} />
					</a>
					<ProfileTexts>
						<ProfileName>{memberList[i + 1].name}</ProfileName>
						<ProfileJob>{memberList[i + 1].job}</ProfileJob>
						<ProfileComment>"{memberList[i + 1].comment}"</ProfileComment>
					</ProfileTexts>
				</Profile>
			</ProfileWrapper>
			<BtnContainer>
				<OutlinedBtn onClick={handleClick}>
					<ArrowIcon src={arrow} />
				</OutlinedBtn>
			</BtnContainer>
		</ProfileContainer>
	);
};

export default Members;
