import React from "react";
import arrow from "assets/icons/arrow.png";
import "./Project.css";

const Project = () => {
	return (
		<div className="initialPage">
			<div className="titleContainer">
				<div className="initialTitle">PROJECTS</div>
				<div className="initialDiscription">
					JUST 멤버들이 진행한 프로젝트를 확인하세요.
				</div>
			</div>
			<div
				className="btnContainer"
				onClick={() =>
					window.open("https://justartup.github.io/JUST-PROJECTS-2022/")
				}
			>
				<img className="circularBtnIcon" src={arrow}></img>
			</div>
		</div>
	);
};

export default Project;
