import * as React from 'react'

type SVGProps = React.HTMLProps<SVGSVGElement>

const XLogo = React.forwardRef<SVGSVGElement, SVGProps>((props, ref) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      ref={ref}
      viewBox="0 0 300 271"
      {...props}
    >
      <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
    </svg>
  )
})

XLogo.displayName = 'XLogo'

export default XLogo
