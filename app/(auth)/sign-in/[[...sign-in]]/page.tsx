import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="shadow-xl">
        <SignIn />
      </div>
    </div>
  );
}