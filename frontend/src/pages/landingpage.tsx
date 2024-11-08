import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ComponentIcon, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import backgroundImage from "../assets/wallaper.jpeg"


const stackServerApp = {
  urls: {
    signUp: "/signup"
  },
  getProject: async () => ({
    config: {
      clientTeamCreationEnabled: true
    }
  })
}

export default function LandingPage() {
 
  return (
    <div className="flex flex-col">
    <header className="h-14 flex items-center justify-end">
      <nav className="flex gap-4 sm:gap-6">
        <Link className="text-sm hover:underline underline-offset-4" to="#features">
          Features
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" to="https://github.com/vverma022/attendance-tracker">
          GitHub
        </Link>
      </nav>
    </header>
  
    <main className="flex-1 flex flex-col items-center justify-center">
    <section
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              A Smart Attendance System for Educational Institutions
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Built for students, by students. This Smart Attendance System is designed to make the lives of students and teachers easier by streamlining the attendance process.
            </p>
          </div>
          <div className="space-x-4">
            <Link to={stackServerApp.urls.signUp}>
              <Button>Get Started</Button>
            </Link>
            <Link to="https://github.com/stack-auth/stack-template">
              <Button variant="outline">GitHub</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex flex-col items-center">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-lg">
                Unlock powerful capabilities for your Institution with our Smart Attendance System.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card>
                <CardHeader>
                  <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                  <CardTitle className="text-xl font-normal">Next.js 15</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Utilize the latest features: App Router, Layouts, Suspense.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-12 w-12 fill-current"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="208"
                      y1="128"
                      x2="128"
                      y2="208"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="22"
                    ></line>
                    <line
                      x1="192"
                      y1="40"
                      x2="40"
                      y2="192"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="22"
                    ></line>
                  </svg>
                  <CardTitle className="text-xl font-normal">Shadcn UI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Modern and fully customizable UI components based on Tailwind CSS.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <CardTitle className="text-xl font-normal">NextAuth.js</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive Authentication: OAuth, User Management, and more.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12" />
                  <CardTitle className="text-xl font-normal">Multi-tenancy & RBAC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Built-in Teams and Permissions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <GitHubLogoIcon className="h-12 w-12" />
                  <CardTitle className="text-xl font-normal">100% Open-source</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Open-source and self-hostable codebase.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ComponentIcon className="h-12 w-12" />
                  <CardTitle className="text-xl font-normal">Modular Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily extend and customize. No spaghetti code.</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
    </main>
  
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center border-t justify-center">
      <p className="text-xs text-muted-foreground">© 2024 Vasu Verma. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" to="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" to="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </div>
  )
}