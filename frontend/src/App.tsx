import { useState } from "react";
import logo from "@/assets/images/logo-universal.png";
import "@/index.css";
import { Greet } from "../wailsjs/go/main/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [resultText, setResultText] = useState("Enter your name to get started!");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function greet() {
    if (!name.trim()) {
      setResultText("Please enter a name first! 🙏");
      return;
    }

    setIsLoading(true);
    try {
      const result = await Greet(name);
      setResultText(result);
    } catch (error) {
      setResultText("Oops! Something went wrong. 😕");
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      greet();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <img
            src={logo}
            className="w-32 h-32 object-contain mx-auto drop-shadow-lg hover:scale-105 transition-transform"
            alt="Wails Logo"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Welcome to Wails!
            </h1>
            <p className="text-slate-600 text-lg">
              React + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui
            </p>
          </div>
        </div>

        {/* Main Card */}
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">Greet Function Demo</CardTitle>
            <CardDescription>
              Try out the Go backend integration by entering your name below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="text-base h-11"
              />
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 min-h-20 flex items-center justify-center">
              <p className="text-center font-medium text-slate-900 text-lg">
                {resultText}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button
              onClick={greet}
              disabled={isLoading}
              className="flex-1 h-11 text-base"
            >
              {isLoading ? "Greeting..." : "Greet Me! 👋"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setName("");
                setResultText("Enter your name to get started!");
              }}
              disabled={isLoading}
              className="h-11"
            >
              Clear
            </Button>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-slate-600">
            Built with ❤️ using Wails v2.11.0
          </p>
          <p className="text-xs text-slate-500">
            Go backend • React frontend • Native desktop app
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
