import Link from "next/link"
import { UserButton, auth } from "@clerk/nextjs"
import { ArrowRight, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId

  return (
    <div className="w-screen min-h-screen bg-custom-image">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">
              Seamless PDF Interaction
            </h1>
            <div className="mt-2">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>View your Workspace</Button>}
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Embark on an experience where every interaction with your PDFs
            becomes a discovery. Join a vibrant community of learners,
            researchers, and professionals who are reshaping the way we engage
            with PDFs.
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <h1>fileupload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
