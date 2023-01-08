import { SpashContainer, Loader } from "./Splash.styles"

const Splash = ({ loading }: { loading: boolean }) => {
  return (
    <SpashContainer loading={`${loading}`}>
      <Loader></Loader>
    </SpashContainer>
  );
}

export default Splash
