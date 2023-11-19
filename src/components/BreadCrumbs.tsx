import { Breadcrumb } from 'flowbite-react'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const paths = useMemo(() => {
    return pathname.split('/').slice(1)
  }, [pathname])
  const navigate = useNavigate()
  if (!paths?.[0]) return null
  return (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item
        href="/"
        onClick={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        Home
      </Breadcrumb.Item>
      {paths.map((p, i) => {
        const href = `/${paths.slice(0, i + 1).join('/')}`
        return (
          <Breadcrumb.Item
            key={p}
            href={href}
            onClick={(e) => {
              e.preventDefault()
              navigate(href)
            }}
          >
            {title(p.replace('-', ' '))}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

/** Capitalizes the first letter of every word */
function title(s: string) {
  return s.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
