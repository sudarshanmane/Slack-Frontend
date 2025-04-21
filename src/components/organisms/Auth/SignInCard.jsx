import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import React, { useState } from "react";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Separator } from "@/components/ui/separator.jsx";

const SigninCard = () => {
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  return (
    <Card className={"bg-white "}>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign In to access your account!</CardDescription>
      </CardHeader>

      <CardContent>
        <form action="" className="space-y-3">
          <Input
            placeholder="Email"
            required
            onChange={(e) =>
              setSigninForm({ ...signinForm, email: e.targert.value })
            }
            value={signinForm.email}
            type="email"
          ></Input>

          <Input
            placeholder="Password"
            required
            onChange={(e) =>
              setSigninForm({ ...signinForm, password: e.targert.value })
            }
            value={signinForm.password}
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
          Dont have an account?{" "}
          <span className="text-sky-600 hover:underline cursor-pointer">
            {" "}
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SigninCard;
