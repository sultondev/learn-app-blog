import "./App.style.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu.component";
import { MemoDashboard } from "../Dashboard/Dashboard.component";
import { Route, Routes } from "react-router-dom";
import MemoArticleDetails from "../Articles/ArticleDetails.component";
import CreateArticle from "../Articles/CreateArticle.component";
// import SignUp from "../Auth/SignUp.component";
// import SignIn from "../Auth/SignIn.component";

function App() {
  return (
    <div className="app ex-sm:bg-[linear-gradient(ro right, #16222A, #3A6073 )]">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<MemoDashboard />} />
        <Route path="/posts/:postId" element={<MemoArticleDetails />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </div>
  );
}

export default App;
