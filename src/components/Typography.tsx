import { PropsWithChildren } from 'react'

export default function Typography(
  props: PropsWithChildren<{ className?: string }>
) {
  const { className } = props
  return (
    <div
      className={
        'format lg:format-lg format-cyan dark:format-invert ' + className
      }
    >
      {props.children}
    </div>
  )
}
