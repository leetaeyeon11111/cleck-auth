import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  const { userId } = auth()

  return (
    <>
      <nav className="bg-yellow-400 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Middle Web</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-black hover:text-white mr-4"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  className="text-black hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/repos"
                  className="text-black hover:text-white mr-4"
                >
                  Repository
                </Link>
                <Link
                  href="/courses"
                  className="text-black hover:text-white mr-4"
                >
                  Courses
                </Link>
                <Link
                  href="/dashboard"
                  className="text-black hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-black hover:text-white mr-4"
                >
                  Profile
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
