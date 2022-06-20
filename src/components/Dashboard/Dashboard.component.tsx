import { memo } from "react";
import MemoArticleList from "../Articles/ArticleList.component";
import Notifications from "./Notifications.component";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Notifications />
      <div className="h-[2px] bg-black w-full"></div>
      <div className="md:container mx-auto">
        <MemoArticleList />
      </div>
    </section>
  );
};

export const MemoDashboard = memo(Dashboard);
