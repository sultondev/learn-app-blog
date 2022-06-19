import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useRecoilState } from "recoil";
import { followingStateData } from "../../recoil/atoms.state";
import { followingUserDataType } from "../../typing/types/followingUser.type";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Notifications = () => {
  const [notifications, ,] =
    useRecoilState<followingUserDataType[]>(followingStateData);
  return (
    <section className="flex items-center gap-2 py-4">
      <button className="text-2xl">
        <NotificationsNoneOutlinedIcon fontSize="large" />
      </button>
      <ul className="flex justify-between gap-4">
        {notifications.map((notification, index) => {
          return (
            <li key={index + notification.userName} className="">
              <AccountCircleRoundedIcon />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Notifications;
