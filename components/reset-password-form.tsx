import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Find Your Account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email"></Label>
          <Input id="email" type="email" placeholder="Enter Email Address" className="rounded-2xl" required />
        </div>

        <Button className="bg-[#E1FF00] rounded-4xl" type="submit">
          <Link href="/otp"></Link>
          Submit
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
