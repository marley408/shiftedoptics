import React from "react"

function Icon({ name }) {
  switch (name) {
    case "youtube":
      return (
        <svg
          width="25"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            clipPath="url(#clip0)"
            stroke="#06052B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.71 6.42a2.78 2.78 0 0 0-1.94-2C19.05 4 12.17 4 12.17 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2 29 29 0 0 0-.46 5.29 29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.57 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.313-1.732.467-3.49.46-5.25a28.996 28.996 0 0 0-.46-5.33z" />
            <path d="M9.92 15.02l5.75-3.27-5.75-3.27v6.54z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" transform="translate(.17)" d="M0 0H24V24H0z" />
            </clipPath>
          </defs>
        </svg>
      )
    case "instagram":
      return (
        <svg
          width="25"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.17 2h-10a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"
            stroke="#06052B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.17 11.37a4 4 0 1 1-7.913 1.174 4 4 0 0 1 7.914-1.174zm1.5-4.87h.01"
            stroke="#06052B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    default:
      return
  }
}

export default Icon
