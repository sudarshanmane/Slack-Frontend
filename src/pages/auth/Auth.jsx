import SignupCard from "@/components/organisms/Auth/SignupCard.jsx";

export const Auth = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-[#5c3B58]">
      <div className="md:h-auto md:w-[420px] ">
        <SignupCard></SignupCard>
      </div>{" "}
    </div>
  );
};
