import { auth } from "@/auth"
import { logoutAction } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { redirect } from "next/navigation"
import { User, LogOut } from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <form action={logoutAction}>
            <Button variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </form>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Your account details and information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Name</span>
                <span className="text-lg">{session.user.name || "Not provided"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Email</span>
                <span className="text-lg">{session.user.email}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              This is your protected dashboard area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You have successfully authenticated! This area is only accessible to logged-in users.
              You can now build additional features and functionality on top of this authentication foundation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
