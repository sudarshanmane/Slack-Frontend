import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] text-black">
      <Card className="shadow-lg max-w-lg flex w-full justify-center items-center">
        <CardHeader className="w-full flex flex-col justify-center items-center">
          <CardTitle>404 Not Found</CardTitle>
          <p>Page you are looking for does not exists</p>
        </CardHeader>

        <CardContent className="flex  flex-col m-auto">
          <img
            className="shadow-lg"
            src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
            alt=""
          />
          <Button
            variant="outline"
            className="w-fit m-auto mt -3"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
