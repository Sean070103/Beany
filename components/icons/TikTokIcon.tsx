import { SVGProps } from "react";

/**
 * TikTok logo icon — outline style (stroke, no fill).
 * Uses currentColor so it inherits text color.
 */
export default function TikTokIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88 6.24A2.92 2.92 0 0 1 8 15.58V2H4.5A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5V9.94a4.83 4.83 0 0 1-2.41 4.25z" />
    </svg>
  );
}
