import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const QuestionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const TitleText = styled.strong`
	color: ${(props) => props.theme.textColor};
	font-size: 2vw;
	margin: 120px 0;

	@media only screen and (max-width: 480px) {
		font-size: 32px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		font-size: 28px;
	}
`;

const Question = styled.div`
	padding: 0px 24px;
	width: 50vw;
	height: 64px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.pointColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 24px;
	color: ${(props) => props.theme.textColor};
	margin-bottom: 8px;
	@media only screen and (max-width: 480px) {
		width: 80vw;
		height: 40px;
		border-radius: 12px;
		font-size: 18px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		width: 60vw;
		height: 52px;
		border-radius: 16px;
		font-size: 20px;
	}
`;
const Answer = styled.div`
	padding: 0px 24px;
	width: 50vw;
	height: 80px;
	border-radius: 20px;
	background-color: #353535;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 20px;
	color: ${(props) => props.theme.pointColor};
	margin-bottom: 32px;
	@media only screen and (max-width: 480px) {
		width: 80vw;
		height: 140px;
		border-radius: 12px;
		font-size: 16px;
	}
	@media only screen and (min-width: 480px) and (max-width: 768px) {
		width: 60vw;
		height: 100px;
		border-radius: 16px;
		font-size: 16px;
	}
`;
const QnA = () => {
	gsap.registerPlugin(ScrollTrigger);
	const answerRef = useRef(null);
	const answerRef2 = useRef(null);
	const answerRef3 = useRef(null);

	useEffect(() => {
		const element = answerRef.current;
		gsap.from(element, {
			xPercent: -30,
			duration: 1,
			scrollTrigger: {
				trigger: element,
			},
		});
	}, []);
	useEffect(() => {
		const element = answerRef2.current;
		gsap.from(element, {
			xPercent: -30,
			duration: 1,
			scrollTrigger: {
				trigger: element,
			},
		});
	}, []);
	useEffect(() => {
		const element = answerRef3.current;
		gsap.from(element, {
			xPercent: -30,
			duration: 1,
			scrollTrigger: {
				trigger: element,
			},
		});
	}, []);
	return (
		<section>
			<QuestionContainer>
				<TitleText>자주 묻는 질문</TitleText>

				<Question>
					<strong>Q : 스타트업 동아리가 무엇인가요?</strong>
				</Question>
				<div ref={answerRef}>
					<Answer>
						<strong>
							A : 쉽게 말해 '창업을 하는 일반동아리'입니다. <br /> Just멤버로써
							합류하게 되면 다양한 창업 프로젝트와 대회에 참여하며 경험을 쌓게
							됩니다.
						</strong>
					</Answer>
				</div>
				<Question>
					<strong>Q : 동아리원 선발 기준이 궁금합니다</strong>
				</Question>
				<div ref={answerRef2}>
					<Answer>
						<strong>
							A : 저스트는 능력이 있는 사람보다는 자신의 일에 열정있는 사람들을
							더욱 원합니다. <br /> 능력이 없더라도 배우고자 하는 의지있는
							사람들을 기다리고 있습니다.
						</strong>
					</Answer>
				</div>
				<Question>
					<strong>Q : 사용될 개발 스택이 궁금해요</strong>
				</Question>
				<div ref={answerRef3}>
					<Answer>
						<strong>
							A : 앱 개발은 Flutter(Getx), 프론트엔드는 React를 쓸 예정입니다.
							백엔드는 협의중에 있습니다
						</strong>
					</Answer>
				</div>
			</QuestionContainer>
		</section>
	);
};

export default QnA;
