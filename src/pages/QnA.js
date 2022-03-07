import React from "react";
import styled, { keyframes } from "styled-components";

const QnA = () => {
	const QuestionContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	`;

	const TitleText = styled.strong`
		color: ${(props) => props.theme.textColor};
		font-size: 40px;
		margin: 120px 0;
	`;

	const Question = styled.div`
		padding-left: 24px;
		width: 1000px;
		height: 64px;
		border-radius: 20px;
		background-color: ${(props) => props.theme.pointColor};
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 24px;
		color: ${(props) => props.theme.textColor};
		margin-bottom: 8px;
	`;
	const Answer = styled.div`
		padding-left: 24px;
		width: 1000px;
		height: 80px;
		border-radius: 20px;
		background-color: #353535;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 20px;
		color: ${(props) => props.theme.pointColor};
		margin-bottom: 32px;
	`;

	return (
		<section>
			<QuestionContainer>
				<TitleText>자주 묻는 질문</TitleText>
				<Question>
					<strong>Q : 스타트업 동아리가 무엇인가요?</strong>
				</Question>
				<Answer>
					<strong>
						A : 쉽게 말해 '창업을 하는 일반동아리'입니다. <br /> Just멤버로써
						합류하게 되면 다양한 창업 프로젝트와 대회에 참여하며 경험을 쌓게
						됩니다.
					</strong>
				</Answer>
				<Question>
					<strong>Q : 동아리원 선발 기준이 궁금합니다</strong>
				</Question>
				<Answer>
					<strong>
						A : 저스트는 능력이 있는 사람보다는 자신의 일에 열정있는 사람들을
						더욱 원합니다. <br /> 능력이 없더라도 배우고자 하는 의지있는
						사람들을 기다리고 있습니다.
					</strong>
				</Answer>
				<Question>
					<strong>Q : 사용될 개발 스택이 궁금해요</strong>
				</Question>
				<Answer>
					<strong>
						A : 앱 개발은 Flutter(Getx), 프론트엔드는 React를 쓸 예정입니다.
						백엔드는 협의중에 있습니다
					</strong>
				</Answer>
			</QuestionContainer>
		</section>
	);
};

export default QnA;
