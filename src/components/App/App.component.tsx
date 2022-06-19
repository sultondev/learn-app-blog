import "./App.style.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu.component";
import { MemoDashboard } from "../Dashboard/Dashboard.component";

function App() {
  return (
    <div className="app ex-sm:bg-[linear-gradient(ro right, #16222A, #3A6073 )]">
      <HeaderMenu />
      <MemoDashboard />
    </div>
  );
}

export default App;
