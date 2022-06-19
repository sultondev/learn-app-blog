import { articlesItemsType } from "../../typing/types/articleItems.type";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { TagWrapper } from "../../templates/TagsWrapper.template";
import { memo } from "react";
import "./styles/ArticleSummary.style.css";
const ArticleSummary = (props: articlesItemsType) => {
  const {
    title,
    authorIMG,
    author,
    date,
    content,
    postPicture,
    tags,
    readTime,
  } = props;
  return (
    <li
      className="article-list__item 
      flex p-4
      ex-sm:flex-col ex-sm:justify-between ex-sm:items-start 
      "
    >
      <div className="w-full">
        <div className="article-list__info flex ex-sm:gap-2">
          <img src={authorIMG} alt="avatar" className="ex-sm:w-6 ex-sm:h-6" />
          <h5 className="">{author}</h5>
          <p className="text-gray-400 font-bold">&#183;</p>
          <p className="text-gray-400 ex-sm:">{date}</p>
        </div>
        <div className="flex justify-between my-4">
          <div className="flex ex-sm:flex-col ex-sm:max-w-[70%] ">
            <h6
              className="text-2xl article-list__title 
              ex-sm:text-[16px] ex-sm:leading-62
              "
            >
              {title}
            </h6>
            <p className="article-list__content ex-sm:hidden md:block">
              {content}
            </p>
          </div>
          <img
            src={postPicture}
            className="object-cover ex-sm:max-w-[56px] ex-sm:h-[56px] "
          />
        </div>
        <div className="flex ex-sm:gap-4 ex-sm:items-center">
          <p className="article-list__tags">
            <TagWrapper>{tags[0]}</TagWrapper>
          </p>

          <p
            className="article-list__date 
            ex-sm:text-sm ex-sm:text-gray-600
            "
          >
            {readTime} min
          </p>
          <button>
            <BookmarkAddOutlinedIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export const MemoArticleSummary = memo(ArticleSummary);
