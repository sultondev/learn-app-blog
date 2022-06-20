import { atom } from "recoil";
import { followingUserDataType } from "../typing/types/followingUser.type";
import { followingData } from "../constant/followingStateData.constant";
import { articleListData } from "../constant/articlesListData.constant";
import { articlesItemsType } from "../typing/types/articleItems.type";

export const navBarDefaultStateData = atom<string>({
  key: "navBarDefaultStateData",
  default: "-left-1/2",
});

export const followingStateData = atom<followingUserDataType[]>({
  key: "followingStateData",
  default: followingData,
});

export const articleListStateData = atom<articlesItemsType[]>({
  key: "articleListData",
  default: articleListData,
});
