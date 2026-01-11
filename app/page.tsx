import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, UserPlus } from "lucide-react"

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
          <CardDescription className="text-lg">
            A modern Next.js application with authentication
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Get started by signing in to your account or creating a new one
          </p>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full">
              <Link href="/login">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/register">
                <UserPlus className="mr-2 h-5 w-5" />
                Create Account
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

