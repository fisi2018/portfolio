import { useEffect, useRef } from 'react'

export const useScroll = () => {
  const component = useRef<HTMLDivElement>()
  const callback = (entries:IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.classList.replace('opacity-0', 'opacity-100') : entry.target.classList.replace('opacity-100', 'opacity-0')
    })
  }
  const cb = (entries:IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.classList.replace('-translate-x-full', 'translate-x-0') : entry.target.classList.replace('translate-x-0', '-translate-x-full')
    })
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callback)
    const observerTransform = new IntersectionObserver(cb)
    const targets = document.querySelectorAll('[block-scroll]')
    observerTransform.observe(component.current)
    targets.forEach((target) => {
      observer.observe(target)
    })
  }, [])
  return {
    component
  }
}
