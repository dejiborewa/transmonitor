import Header from "../components/header";
import Main from "../components/main";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Home;
