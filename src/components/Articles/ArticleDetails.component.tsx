import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { articleListStateData } from "../../recoil/atoms.state";
import { articlesItemsType } from "../../typing/types/articleItems.type";
import { TagWrapper } from "../../templates/TagWrapper.template";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const ArticleDetails = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState<articlesItemsType>();
  const [allPostData, ,] =
    useRecoilState<articlesItemsType[]>(articleListStateData);

  function makePostRequest(id: number) {
    if (id < 4) {
      setPostData(allPostData[id - 1]);
    }
    return false;
  }
  useEffect(() => {
    if (postId) {
      makePostRequest(Number(postId));
    }
  }, []);

  return (
    <section className="details ex-sm:px-2 ex-sm:pt-10">
      {postData ? (
        <div className="max-w-full">
          <div className="details-wrapper flex justify-between ex-sm:mx-[24px]">
            <header className="details-header flex ex-sm:">
              <img src={postData.authorIMG} alt="Author img" />
              <div className="flex ex-sm:flex-col">
                <div className="flex ex-sm:gap-2 ex-sm:items-center">
                  <h5 className="ex-sm:whitespace-pre-wrap ">
                    {postData.author}
                  </h5>
                  <TagWrapper
                    className="ex-sm:text-base"
                    borderClr="green"
                    color="green"
                    bgClr="none"
                  >
                    Follow
                  </TagWrapper>
                </div>
                <div
                  className="flex
                ex-sm:gap-4 ex-sm:items-center ex-sm:flex-wrap
                "
                >
                  <p className="ex-sm:text-sm ex-sm:text-gray-400">
                    {postData.date}
                  </p>
                  &#183;
                  <p className="ex-sm:text-sm ex-sm:text-gray-400">
                    {postData.readTime} min read
                  </p>
                </div>
              </div>
            </header>
            <button>
              <MoreHorizOutlinedIcon />
            </button>
          </div>
          <div className="max-w-full ex-sm:mx-[24px]">
            <h6 className="max-w-full text-2xl font-bold ex-sm:">
              {postData.title}
            </h6>
            <img src={postData.postPicture} alt="Post Picture" />
            <p className="">{postData.content}</p>
          </div>
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </section>
  );
};

const MemoArticleDetails = React.memo(ArticleDetails);

export default MemoArticleDetails;
