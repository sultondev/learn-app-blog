import { memo } from "react";
import "./styles/ArticleList.style.css";
import { articleListStateData } from "../../recoil/atoms.state";
import { articlesItemsType } from "../../typing/types/articleItems.type";
import { useRecoilState } from "recoil";
import { MemoArticleSummary } from "./ArticleSummary.component";
const ArticleList = () => {
  const [articles, ,] =
    useRecoilState<articlesItemsType[]>(articleListStateData);

  return (
    <section className="article ex-sm:px-4 ex-sm:py-6">
      <ul className="article-list flex ex-sm:flex-col ex-sm:justify-between ex-sm:gap-5">
        {articles.map((article) => {
          return (
            <MemoArticleSummary {...article} key={article.id + article.title} />
          );
        })}
      </ul>
    </section>
  );
};

const MemoArticleList = memo(ArticleList);

export default MemoArticleList;
