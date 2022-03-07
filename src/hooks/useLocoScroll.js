import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (start) => {
	useEffect(() => {
		if (!start) return;
		let locoScroll = null;

		const scrollEl = document.querySelector(".data-scroll-container");
		locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
		});

		locoScroll.on("scroll", () => {
			ScrollTrigger.update();
		});

		ScrollTrigger.scrollerProxy(scrollEl, {
			scrollTop(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.y;
				}
				return null;
			},
			scrollLeft(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.x;
				}
				return null;
			},
		});
	}, [start]);
};
