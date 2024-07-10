import * as React from 'react'

export function useWindowScroll() {
  const [scrollPos, setScrollPos] = React.useState({
    x: 0,
    y: 0,
  })
  const [isVerticalScrolling, setIsVerticalScrolling] = React.useState(false)

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollPos({ x: window.scrollX, y: window.scrollY })
      setIsVerticalScrolling(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [isVerticalScrolling, scrollPos]
}
