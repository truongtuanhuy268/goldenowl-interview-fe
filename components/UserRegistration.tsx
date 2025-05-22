import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function UserRegistration({handleSbdSubmit}: { handleSbdSubmit: (newSbd: string) => void}) {
  
  const handleOnSubmit = () => {
    const inputSBD = document.getElementById("registration") 
    const sbdValue = (inputSBD as HTMLInputElement).value
    handleSbdSubmit(sbdValue)
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <label htmlFor="registration" className="block mb-2 font-medium">
            Registration Number:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input id="registration" placeholder="Enter registration number" className="w-full sm:max-w-md" />
            <Button className="bg-black hover:bg-gray-800 w-full sm:w-auto" onClick={handleOnSubmit}>Submit</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
