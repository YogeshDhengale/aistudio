import React from 'react'

const EnterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
    {...props}
  >
    <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
  </svg>
  )
}

export default EnterIcon