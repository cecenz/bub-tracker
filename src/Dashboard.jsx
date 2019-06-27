import React from "react";
import styled from "styled-components";
import { ReactComponent as NextIcon } from "./svg/next.svg";
import { ReactComponent as BackIcon } from "./svg/back.svg";

const Dashboard = ({ activities }) => {
  console.log("activities", activities);
  activities.map(activity =>
    Object.entries(activity).map(item => console.log(item))
  );

  return (
    <div>
      <DashboardHeader>
        <BackIcon style={{ width: "16px", height: "16px" }} />
        <h1>Today</h1>
        <NextIcon style={{ width: "16px", height: "16px" }} />
      </DashboardHeader>

      <div>
        {activities.map(activityEntry =>
          Object.entries(activityEntry).map(activity => (
            <div key={activity[0]}>
              {Object.entries(activity[1]).map((entry, index) => (
                <div key={index}>
                  <p>
                    {entry[0]}: {entry[1]}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const DashboardHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Dashboard;
