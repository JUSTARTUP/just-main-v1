import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (start) => {
	useEffect(() => {
		if (!start) return;

		const scrollEl = document.querySelector("#data-scroll-container");

		const locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
			class: "is-reveal",
		});
	}, [start]);
};
