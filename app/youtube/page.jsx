import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold">Youtube channel information</h1>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.traversymedia.com/"
          className="text-xl text-blue-700 font-bold"
        >
          Traversy media Courses
        </Link>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.instagram.com/traversymedia/"
          className="text-xl text-blue-700 font-bold"
        >
          Traversy media Instagram
        </Link>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://twitter.com/traversymedia"
          className="text-xl text-blue-700 font-bold"
        >
          Traversy media Twitter
        </Link>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@TraversyMedia/featured"
          className="text-xl text-blue-700 font-bold"
        >
          유튜브 채널로 바로가기
        </Link>
      </div>
    </>
  )
}
