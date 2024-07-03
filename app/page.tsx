import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">🔐 Auth</h1>
        <p className="text-lg text-white drop-shadow-md">Get started by editing&nbsp;</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default page;
