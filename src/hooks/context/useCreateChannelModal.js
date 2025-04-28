import CreateChannelContext from "@/context/CreateChannelContext.jsx";
import { useContext } from "react";

const useCreateChannelModal = () => {
  return useContext(CreateChannelContext);
};

export default useCreateChannelModal;
