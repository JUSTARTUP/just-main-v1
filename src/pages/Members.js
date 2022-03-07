import React from "react";
import styled from "styled-components";
import P1 from "../assets/profile/minsung.png";
import P2 from "../assets/profile/jahoon.jpg";
import P3 from "../assets/profile/heewon.jpg";
import P4 from "../assets/profile/minyong.jpg";
import P5 from "../assets/profile/eunchai.jpg";
import P6 from "../assets/profile/inhwa.png";
import P7 from "../assets/profile/dogo.jpg";

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
	},
	{
		name: "주자훈",
		profile: P2,
		job: "Project Manager",
		comment: "항상 긍정의 힘을 믿으며 앞으로 나아갑니다",
	},
	{
		name: "윤희원",
		profile: P3,
		job: "Project Manager",
		comment: "일단 해보자!",
	},
	{
		name: "오민용",
		profile: P4,
		job: "ML/APP Developer",
		comment: "개발을 합시다",
	},

	{
		name: "장인화",
		profile: P6,
		job: "APP Developer",
		comment: "예술을 합시다",
	},
	{
		name: "박두고",
		profile: P7,
		job: "Developer",
		comment: "허심탄회하게 살자",
	},
];

const Members = () => {
	const Profile = styled.div`
		display: flex;
		align-items: center;
		/* background-color: red; */
		height: 300px;
		width: 700px;
		&:nth-child(1) {
			transform: translateY(150px);
		}
		&:nth-child(3) {
			transform: translateY(150px);
		}
		&:nth-child(5) {
			transform: translateY(150px);
		}
		&:nth-child(7) {
			transform: translateY(150px);
		}
		&:nth-child(2) {
			transform: translateY(-150px);
		}
		&:nth-child(4) {
			transform: translateY(-150px);
		}
		&:nth-child(6) {
			transform: translateY(-150px);
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

	return (
		<section>
			<ProfileContainer>
				<ProfileTitle>
					<Point>2022 JUST </Point>1기 크루
				</ProfileTitle>
				<ProfileWrapper>
					<Profile>
						<ProfileCircle src={memberList[0].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[0].name}</ProfileName>
							<ProfileJob>{memberList[0].job}</ProfileJob>
							<ProfileComment>"{memberList[0].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[1].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[1].name}</ProfileName>
							<ProfileJob>{memberList[1].job}</ProfileJob>
							<ProfileComment>"{memberList[1].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[2].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[2].name}</ProfileName>
							<ProfileJob>{memberList[2].job}</ProfileJob>
							<ProfileComment>"{memberList[2].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[3].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[3].name}</ProfileName>
							<ProfileJob>{memberList[3].job}</ProfileJob>
							<ProfileComment>"{memberList[3].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[4].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[4].name}</ProfileName>
							<ProfileJob>{memberList[4].job}</ProfileJob>
							<ProfileComment>"{memberList[4].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[5].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[5].name}</ProfileName>
							<ProfileJob>{memberList[5].job}</ProfileJob>
							<ProfileComment>"{memberList[5].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
					<Profile>
						<ProfileCircle src={memberList[6].profile} alt="" />
						<ProfileTexts>
							<ProfileName>{memberList[6].name}</ProfileName>
							<ProfileJob>{memberList[6].job}</ProfileJob>
							<ProfileComment>"{memberList[6].comment}"</ProfileComment>
						</ProfileTexts>
					</Profile>
				</ProfileWrapper>
			</ProfileContainer>
		</section>
	);
};

export default Members;
