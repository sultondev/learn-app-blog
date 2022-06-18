import { atom } from "recoil";
import { followingUserDataType } from "../typing/types/followingUser.type";
import { followingData } from "../constant/followingStateData.constant";

export const navBarDefaultStateData = atom<string>({
  key: "navBarDefaultStateData",
  default: "-left-1/2",
});

export const followingStateData = atom<followingUserDataType[]>({
  key: "followingStateData",
  default: followingData,
});
