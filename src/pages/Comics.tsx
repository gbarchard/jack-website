import { RangeSlider } from 'flowbite-react'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Typography from '../components/Typography'

export default function Comics() {
  return (
    <Routes>
      <Route path="/" element={<ComicBooks />} />
      <Route path=":comic" element={<ChaptersPage />} />
      <Route path=":comic/:chapter" element={<ComicsPages />} />
    </Routes>
  )
}

function ComicBooks() {
  const comics = useComics()
  return (
    <PanelsContainer>
      {comics?.map((comic) => (
        <ClickableImage key={comic.route} to={comic.route} src={comic.image} />
      ))}
    </PanelsContainer>
  )
}

function ChaptersPage() {
  const { comic } = useParams()
  const chapters = useChapters(comic ?? '')
  return (
    <PanelsContainer>
      {chapters?.map((chapter) => (
        <ClickableImage
          key={chapter.image}
          src={chapter.image}
          to={chapter.route}
        />
      ))}
    </PanelsContainer>
  )
}

function ComicsPages() {
  const { comic, chapter } = useParams()
  const pages = usePages(comic ?? '', chapter ?? '')

  return (
    <>
      <DesktopComicViewer comicPages={pages} />
      <MobileComicViewer comicPages={pages} />
    </>
  )
}

function MobileComicViewer(props: { comicPages: ComicImage[] | undefined }) {
  return (
    <div className="sm:hidden grid grid-cols-1 gap-4">
      {props.comicPages?.map((page) => (
        <img src={page.image} />
      ))}
    </div>
  )
}

function DesktopComicViewer(props: { comicPages: ComicImage[] | undefined }) {
  const { comicPages: pages } = props
  const [page, setPage] = useState(0)

  useEffect(() => {
    const changePage = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (pages && page >= pages.length) return
        setPage((page) => page + 2)
      }
      if (e.key === 'ArrowLeft') {
        if (page <= 0) return
        setPage((page) => page - 2)
      }
    }

    window.addEventListener('keydown', changePage)
    return () => {
      window.removeEventListener('keydown', changePage)
    }
  }, [setPage, page, pages])

  return (
    <div className="grow sm:flex flex-col bg-white dark:bg-gray-900 hidden">
      <div className="flex grow justify-center">
        <div className="h-full grow flex flex-col place-items-end">
          <img
            className="grow h-0 object-contain"
            src={pages?.[page - 1]?.image}
          />
        </div>
        <div className="h-full grow flex flex-col place-items-start">
          <img className="grow h-0 object-contain" src={pages?.[page]?.image} />
        </div>
      </div>
      <RangeSlider
        className="w-full max-w-sm place-self-center"
        min={0}
        max={pages?.length}
        step={2}
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
        tabIndex={-1}
      />
      <Typography className="max-w-none">
        <p className="text-center">
          Page {page} / {pages?.length}
        </p>
      </Typography>
    </div>
  )
}

function PanelsContainer(props: PropsWithChildren) {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {props.children}
    </div>
  )
}

function ClickableImage(props: { src: string; to: string }) {
  const { src, to } = props
  return (
    <Link to={to}>
      <img
        className="ease-in-out duration-150 rounded-xl active:scale-95 sm:hover:scale-105 sm:hover:active:scale-95"
        src={src}
      />
    </Link>
  )
}

type ComicImage = {
  image: string
}

type GoogleStorageApi = {
  items: {
    name: string
    // and other keys...
  }[]
}

function useComics() {
  const data = useFetch<GoogleStorageApi>(
    'https://storage.googleapis.com/storage/v1/b/jack-website/o?matchGlob=comics%2F*%2Fcover.png'
  )
  return data?.items.map((comic) => ({
    route: `/${comic.name.replace('/cover.png', '')}`,
    image: `https://storage.googleapis.com/jack-website/${comic.name}`,
  }))
}

function useChapters(comic: string) {
  const data = useFetch<GoogleStorageApi>(
    `https://storage.googleapis.com/storage/v1/b/jack-website/o?matchGlob=comics%2F${comic}%2F*%2Fcover.png`
  )
  return data?.items.map((chapter) => ({
    route: `/${chapter.name.replace('/cover.png', '')}`,
    image: `https://storage.googleapis.com/jack-website/${chapter.name}`,
  }))
}

function usePages(comic: string, chapter: string) {
  const data = useFetch<GoogleStorageApi>(
    `https://storage.googleapis.com/storage/v1/b/jack-website/o?matchGlob=comics%2F${comic}%2F${chapter}%2F*.png`
  )
  return data?.items.map((page) => ({
    image: `https://storage.googleapis.com/jack-website/${page.name}`,
  }))
}

function useFetch<T = unknown>(url: string) {
  const [res, setRes] = useState<T>()
  const fetchData = useCallback(async () => {
    const data = await fetch(url)
    const json = await data.json()
    setRes(json)
  }, [url])

  useEffect(() => {
    fetchData()
  })

  return res
}
