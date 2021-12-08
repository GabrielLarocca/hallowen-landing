import React from 'react';
import styles from './Button.module.css'

export default function Button({ title, onClick, className, children }) {
	const materialEvent = (e) => {
		const button = e.currentTarget;

		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
		circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
		circle.classList.add("ripple");

		const ripple = button.getElementsByClassName("ripple")[0];

		if (ripple) ripple.remove();

		button.appendChild(circle);

		const buttons = document.getElementsByTagName("button");

		for (const button of buttons) button.addEventListener("click", materialEvent);
	}


	return (
		<button className={`${styles.btnBorder} ${className && className}`} onClick={e => { materialEvent(e), onClick ? onClick() : alert('Anexe um evento ao botão') }}>{children}</button>
	)
}
