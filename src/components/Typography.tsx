import { PropsWithChildren } from 'react'

export default function Typography(props: PropsWithChildren) {
  return (
    <div className="format lg:format-lg format-cyan dark:format-invert">
      {props.children}
    </div>
  )
}
