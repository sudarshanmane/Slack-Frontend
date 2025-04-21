const { signUpRequest } = require("@/api/auth/index.js");
const { useMutation } = require("@tanstack/react-query");

const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutate: singupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Successfully signed up", data);
    },
    onError: (error) => {
      console.error("Failed to signup", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    mutate: singupMutation,
  };
};
