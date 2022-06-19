import React from "react";
const ArticleDetails = () => {
  return (
    <div>
      <h4>Project Details</h4>
    </div>
  );
};

const MemoArticleDetails = React.memo(ArticleDetails);

export default MemoArticleDetails;
