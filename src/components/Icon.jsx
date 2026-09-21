import * as Icons from 'lucide-react'

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.75 }) {
  const Cmp = Icons[name] || Icons.Circle
  return <Cmp className={className} strokeWidth={strokeWidth} />
}
