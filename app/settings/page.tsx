'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10 space-y-4 md:space-y-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your application preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-lg font-medium">Theme</h3>
              <p className="text-sm text-muted-foreground">
                Select your preferred theme
              </p>
            </div>
            <ThemeSwitcher />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}