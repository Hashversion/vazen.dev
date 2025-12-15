import { SVGProps } from "react";

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
          <circle cx="128" cy="128" r="128" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_9_7">
            <rect width="256" height="256" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
};
