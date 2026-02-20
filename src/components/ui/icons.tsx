import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
export const Icons = {
  Logo: (props: IconProps) => {
    return (
      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_9_7)">
          <circle cx="128" cy="128" r="128" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_9_7">
            <rect width="256" height="256" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
  Copy: (props: IconProps) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <title>Copy</title>
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    );
  },
  Check: (props: IconProps) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <title>Copied</title>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  },
};
