import { useInView } from '../hooks/useInView'

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${inView ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}