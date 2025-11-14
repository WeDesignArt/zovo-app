import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Signup to account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="fullName"></Label>
          <Input id="fullName" type="text" className="rounded-2xl" placeholder="Full Name" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email"></Label>
          <Input id="email" type="email" className="rounded-2xl" placeholder="Enter Email Address" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone"></Label>
          <Input id="phone" type="text" className=" rounded-2xl" placeholder="Enter Phone Number" required />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password"></Label>
          </div>
          <Input id="password" type="password" placeholder="Enter Password" className=" rounded-2xl" required />
        </div>

        <Button asChild className="bg-[#E1FF00] rounded-4xl">
          <Link href="/dashboard">Submit</Link>
        </Button>
      </div>

      <div className="text-center text-white opacity-75 text-sm ">
        Already have an{" "}
        <a href="/login" className="underline underline-offset-4">
          account?
        </a>
      </div>
    </form>
  );
}
