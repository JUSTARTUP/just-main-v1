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
		name: "당장 JUST에 합류하기!",
		profile: JUST,
		job: "JUST 2기",
		comment: "함께 창업의 여정에 도전할 분을 찾고 있어요!",
		link: "https://www.instagram.com/start_just_up/",
	},
];

const Members = () => {
	const [memberIndex, setMemberIndex] = useState(0);

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
		}
		&:nth-child(2) {
			transform: translateY(-150px);
			animation-name: ${ComeIn2};
			animation-duration: 1s;
		}
	`;
	const ProfileJob = styled.div`
		color: ${(props) => props.theme.pointColor};
		font-size: 20px;
	`;
	const ProfileComment = styled.div`
		font-size: 16px;
		font-weight: 300;
		margin-top: 20px;
	`;
	const ProfileName = styled.div`
		font-size: 32px;
	`;
	const ProfileTexts = styled.div`
		margin: 36px;
	`;
	const ProfileContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		padding-left: 200px;
		width: 100vw;
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
	`;

	const ProfileWrapper = styled.div`
		display: grid;
		/* grid-template-columns: repeat(${memberList.length}, 1fr); */
		grid-template-columns: repeat(${memberList.length}, 1fr);
	`;

	const ProfileTitle = styled.div`
		color: ${(props) => props.theme.textColor};
		font-size: 52px;
		font-weight: 600;
		transform: translateX(-100px);
	`;
	const Point = styled.span`
		color: ${(props) => props.theme.pointColor};
	`;

	const OutlinedBtn = styled.div`
		transform: translate(-200px, 280px);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 160px;
		width: 160px;
		border-radius: 50%;
		border: 2px solid white;
	`;

	const ArrowIcon = styled.img`
		width: 48px;
		object-fit: scale-down;
		transition: 0.4s;
		&:hover {
			transform: scale(1.3);
		}
	`;

	const handleClick = () => {
		memberIndex < 6 ? setMemberIndex(memberIndex + 2) : setMemberIndex(0);
		return;
	};
	let i = memberIndex;

	return (
		<section data-scroll-section>
			<ProfileContainer data-scroll-section>
				<ProfileTitle>
					<Point>2022 JUST </Point>1기 크루
				</ProfileTitle>
				<ProfileWrapper>
					<Profile>
						<ProfileCircle src={memberList[i].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[i].name}</ProfileName>
							<ProfileJob>{memberList[i].job}</ProfileJob>
							<ProfileComment>"{memberList[i].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[i + 1].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[i + 1].name}</ProfileName>
							<ProfileJob>{memberList[i + 1].job}</ProfileJob>
							<ProfileComment>"{memberList[i + 1].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<OutlinedBtn onClick={handleClick}>
						<ArrowIcon src={arrow} />
					</OutlinedBtn>
				</ProfileWrapper>
			</ProfileContainer>
		</section>
	);
};

export default Members;
