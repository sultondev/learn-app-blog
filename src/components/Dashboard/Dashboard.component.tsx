import { memo } from "react";
import Notifications from "./Notifications.component";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Notifications />
      <div className="container mx-auto">Dashboard</div>
    </section>
  );
};

export const MemoDashboard = memo(Dashboard);
