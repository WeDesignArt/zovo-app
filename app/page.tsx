import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Next.js + Tailwind + ShadCN UI</h1>
        <p className="text-muted-foreground">
          This is your default page.tsx — ready to customize!
        </p>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
