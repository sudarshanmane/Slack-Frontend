import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import React, { useState } from "react";
import { cn } from "./../../../lib/utils";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Separator } from "@/components/ui/separator.jsx";

const SignupCard = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  return (
    <Card className={"bg-white "}>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to access your account!</CardDescription>
      </CardHeader>

      <CardContent>
        <form action="" className="space-y-3">
          <Input
            placeholder="Username"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.targert.value })
            }
            value={signupForm.username}
            type="email"
          ></Input>

          <Input
            placeholder="Email"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.targert.value })
            }
            value={signupForm.email}
            type="email"
          ></Input>

          <Input
            placeholder="Password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.targert.value })
            }
            value={signupForm.password}
            type="text"
          ></Input>

          <Input
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, confirmPassword: e.targert.value })
            }
            value={signupForm.confirmPassword}
            type="text"
          ></Input>

          <Button
            size={"lg"}
            type="submit"
            className="w-full bg-black text-white text-sm"
          >
            Continue
          </Button>
        </form>
        <Separator className="bg-black my-5"></Separator>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <span className="text-sky-600 hover:underline cursor-pointer">
            {" "}
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
