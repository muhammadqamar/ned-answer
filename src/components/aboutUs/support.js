import React from "react";
import followimg from "./assets/images/follow.svg";

export default function Supoort({ image, detials, title }) {
  return (
    <div className="detials">
      <svg width="142px" height="141px" viewBox="0 0 142 141" version="1.1">
        <defs>
          <path
            d="M21.1911094,20.7438401 C7.49577522,34.5032371 0.977171397,53.2033671 0.649207463,71.1697358 L0.649207463,71.1697358 C0.295226278,90.6061864 0.682187077,140.98821 0.682187077,140.98821 L0.682187077,140.98821 C0.682187077,140.98821 51.7122759,141.082901 70.863171,140.73558 L70.863171,140.73558 C87.7699867,140.428109 108.199758,132.602783 121.055578,119.686463 L121.055578,119.686463 C148.44588,92.1676687 148.294906,47.7094796 120.718819,20.3877447 L120.718819,20.3877447 C106.995636,6.79140581 89.0642533,0 71.138734,0 L71.138734,0 C53.0420872,0 34.950937,6.91900059 21.1911094,20.7438401 L21.1911094,20.7438401 Z"
            id="path-1"
          ></path>
        </defs>
        <g
          id="Round-4"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Experts-2" transform="translate(-271.000000, -1428.000000)">
            <g id="Group-3-Copy" transform="translate(271.000000, 1428.000000)">
              <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
              </mask>
              <g id="Clip-2"></g>
              <path
                d="M70.5090738,-47.4306862 L-67.9392119,91.8990297 L50.4909262,209.430686 L188.939212,70.1009703 L70.5090738,-47.4306862 Z"
                id="Fill-1"
                stroke="#283465"
                stroke-width="19"
                fill={image}
                mask="url(#mask-2)"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <h2>{title}</h2>
      <p>{detials}</p>
    </div>
  );
}
