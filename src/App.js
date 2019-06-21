import React, { Fragment, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import ActivityAdder from "./ActivityAdder";
import { yellow, blue, green, purple, pink } from "./themes";
import Card from "./Card";
import styled from "styled-components";
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
                <Card title="Nappy" theme={blue} />
                <Card title="Feed" theme={yellow} />
                <Card title="Activity" theme={green} />
                <Card title="Sleep" theme={purple} />
                <Card title="Media" theme={pink} />
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

      {/* <div>
        <ThemeProvider theme={yellow}>
          <ActivityAdder />
        </ThemeProvider>
      </div> */}
    </Fragment>
  );
}

const ContentContainer = styled.div`
  padding: 1rem;
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
