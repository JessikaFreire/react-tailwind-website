import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import { TopSection } from "./containers/TopSection";
import { ExploreSection } from "./containers/ExploreSection";
import { Footer } from "./components/footer";

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    overflow-hidden
  `}
`;

function App() {
  return ( 
    <AppContainer>
      <TopSection />
      <ExploreSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
