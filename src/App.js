import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { yellow, blue, green, purple, pink } from "./themes";
import Card from "./Card";
import ActivityAdder from "./ActivityAdder";
import { ReactComponent as NextIcon } from "./svg/next.svg";
import { ReactComponent as BackIcon } from "./svg/back.svg";
import { ReactComponent as PlusIcon } from "./svg/plus.svg";

import "./globalStyles.css";

function App() {
  const [isShowCards, setShowCards] = useState(false);

  const onClick = () => setShowCards(!isShowCards);

  return (
    <Fragment>
      <Header>
        <PlusIcon
          onClick={() => onClick()}
          style={{ width: "16px", height: "16px" }}
        />
        <TransitionGroup component={null}>
          {isShowCards && (
            <CSSTransition classNames="dialog" timeout={750}>
              <ContentContainer>
                <Card
                  setShowCards={setShowCards}
                  linkTo="nappy"
                  title="Nappy"
                  theme={blue}
                />
                <Card
                  setShowCards={setShowCards}
                  linkTo="feed"
                  title="Feed"
                  theme={yellow}
                />
                <Card
                  setShowCards={setShowCards}
                  linkTo="activity"
                  title="Activity"
                  theme={green}
                />
                <Card
                  setShowCards={setShowCards}
                  linkTo="sleep"
                  title="Sleep"
                  theme={purple}
                />
                <Card
                  setShowCards={setShowCards}
                  linkTo="media"
                  title="Media"
                  theme={pink}
                />
              </ContentContainer>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Header>
      <DashboardHeader>
        <BackIcon style={{ width: "16px", height: "16px" }} />
        <h1>Today</h1>
        <NextIcon style={{ width: "16px", height: "16px" }} />
      </DashboardHeader>

      <Route
        exact
        path="/nappy"
        component={() => (
          <ThemeProvider theme={blue}>
            <ActivityAdder />
          </ThemeProvider>
        )}
      />
      <Route
        path="/feed"
        component={() => (
          <ThemeProvider theme={yellow}>
            <ActivityAdder />
          </ThemeProvider>
        )}
      />
      <Route
        path="/activity"
        component={() => (
          <ThemeProvider theme={green}>
            <ActivityAdder />
          </ThemeProvider>
        )}
      />
      <Route
        path="/sleep"
        component={() => (
          <ThemeProvider theme={purple}>
            <ActivityAdder />
          </ThemeProvider>
        )}
      />
      <Route
        path="/media"
        component={() => (
          <ThemeProvider theme={pink}>
            <ActivityAdder />
          </ThemeProvider>
        )}
      />
    </Fragment>
  );
}

const ContentContainer = styled.div`
  /* padding: 0 1rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 #eee;
`;

const DashboardHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default App;
