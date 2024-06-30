import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height || 512}
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
    viewBox="0 0 512.000000 512.000000"
    width={size || width || 512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g
      fill="currentColor"
      stroke="none"
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    >
      <path d="M1324 4052 c-11 -4 -139 -99 -283 -212 -232 -180 -261 -205 -240 -211 45 -13 3488 -10 3530 2 21 7 54 25 74 41 99 82 103 240 8 330 -64 61 25 58 -1592 57 -812 -1 -1485 -4 -1497 -7z" />
      <path d="M781 2765 c-87 -27 -141 -106 -141 -205 0 -100 58 -181 149 -209 55 -16 3487 -16 3542 0 21 7 54 25 74 41 99 82 103 240 8 330 -65 62 51 58 -1852 57 -1437 0 -1744 -3 -1780 -14z" />
      <path d="M775 1484 c-84 -31 -135 -108 -135 -204 0 -100 58 -181 149 -209 28 -8 390 -11 1337 -10 715 1 1291 3 1281 6 -21 6 505 419 543 426 14 2 -686 5 -1555 5 -1358 0 -1586 -1 -1620 -14z" />
    </g>
  </svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const EditIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M2.5 18.3333H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

export const DeleteIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const EyeIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const PrivateIcon = ({
  size = 512,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width={width || size}
    height={height || size}
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M2420 5114 c-208 -27 -407 -101 -580 -217 -96 -64 -273 -241 -337 -337 -92 -137 -155 -282 -195 -450 -19 -77 -21 -125 -25 -497 l-5 -413 -107 0 c-64 0 -131 -6 -166 -15 -172 -45 -305 -179 -350 -352 -22 -86 -22 -2380 0 -2466 45 -173 178 -307 350 -352 52 -13 244 -15 1555 -15 1646 0 1549 -4 1671 61 115 62 214 197 239 328 6 35 10 469 10 1220 0 1270 2 1218 -56 1333 -36 71 -123 159 -193 197 -84 45 -159 61 -282 61 l-107 0 -5 413 c-4 372 -6 420 -25 497 -62 257 -170 450 -351 631 -185 185 -380 293 -631 350 -83 19 -331 33 -410 23z m310 -438 c94 -20 215 -69 289 -118 194 -127 339 -342 380 -563 7 -35 11 -205 11 -427 l0 -368 -850 0 -850 0 0 373 c0 406 4 440 59 582 100 260 336 459 616 520 80 18 264 18 345 1z m-24 -2357 c148 -56 249 -180 275 -338 23 -145 -42 -304 -161 -395 l-49 -37 -3 -279 -3 -278 -30 -44 c-97 -138 -306 -118 -370 34 -12 31 -15 86 -15 302 l0 264 -51 38 c-118 90 -183 250 -160 393 36 226 234 384 456 364 33 -3 83 -14 111 -24z" />
    </g>
  </svg>
);

export const WebIcon = (props: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="1em"
    height="1em"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M1830 5114 c-514 -63 -902 -246 -1240 -584 -304 -304 -491 -669 -567 -1105 -24 -139 -24 -471 0 -610 76 -436 263 -801 567 -1105 304 -304 669 -491 1105 -567 139 -24 471 -24 610 0 275 48 530 142 733 270 l64 40 691 -691 c746 -744 729 -729 861 -753 265 -49 506 192 457 457 -24 132 -9 115 -753 861 l-691 691 40 64 c128 203 222 458 270 733 24 139 24 471 0 610 -76 436 -263 801 -567 1105 -302 303 -674 494 -1100 565 -91 16 -407 28 -480 19z m431 -214 c722 -109 1309 -641 1483 -1345 34 -138 45 -224 52 -383 22 -516 -206 -1046 -601 -1394 -452 -399 -1047 -546 -1630 -402 -319 79 -600 239 -835 474 -277 277 -448 617 -511 1015 -16 103 -16 407 0 510 63 398 234 738 511 1015 308 308 676 478 1135 524 66 7 316 -2 396 -14z m1433 -3189 l139 -140 -69 -73 c-38 -41 -102 -105 -142 -143 l-73 -69 -141 141 -140 141 138 140 c77 77 141 141 144 141 3 1 68 -62 144 -138z m1194 -1205 c23 -33 27 -50 27 -106 0 -54 -5 -73 -25 -103 -53 -78 -140 -111 -230 -87 -41 11 -90 57 -507 472 l-461 460 141 143 142 143 443 -442 c243 -242 455 -459 470 -480z" />
      <path d="M1834 4710 c-361 -38 -704 -202 -963 -461 -431 -431 -579 -1063 -384 -1639 80 -237 208 -442 384 -619 431 -431 1063 -579 1639 -384 237 80 442 208 619 384 431 431 579 1063 384 1639 -160 474 -529 843 -1003 1003 -220 75 -450 101 -676 77z m350 -205 c309 -41 577 -174 802 -399 550 -550 550 -1422 0 -1972 -550 -550 -1422 -550 -1972 0 -550 550 -550 1422 0 1972 315 314 734 457 1170 399z" />
      <path d="M1964 4311 c-32 -14 -64 -60 -64 -92 0 -38 44 -87 83 -93 18 -3 76 -10 129 -15 291 -32 551 -192 725 -446 12 -17 41 -71 66 -120 25 -50 54 -98 64 -106 47 -41 124 -24 148 34 17 42 8 81 -43 182 -191 381 -580 639 -997 660 -49 3 -100 1 -111 -4z" />
      <path d="M3064 3210 c-32 -13 -64 -59 -64 -91 0 -40 46 -88 91 -95 31 -5 42 -1 70 24 28 25 34 37 34 72 0 35 -6 47 -33 71 -33 29 -60 35 -98 19z" />
    </g>
  </svg>
);
