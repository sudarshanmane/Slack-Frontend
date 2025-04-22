export default function combineContextProvider(...providers) {
  return ({ children }) => {
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{children}</CurrentProvider>;
    }, children);
  };
}
