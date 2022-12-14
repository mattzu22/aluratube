import React from "react";
import { CSSReset } from "../src/StyleReset/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorModeprovider, {ColorModeContext} from "../src/context/ColorMode";
import RegisterVideo from "../src/component/ResgisterVideo";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#DCDCDC",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeprovider initialMode="dark">
      {props.children}
    </ColorModeprovider>
  );
}

const MyApp = ({ Component, pageProps }) => {
  const context = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo />
    </ThemeProvider>
  );
};

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
