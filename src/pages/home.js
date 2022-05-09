import Header from "../components/header";
import Main from "../components/main";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <>
      <Header />
      <main className="flex h-screen overflow-hidden">
        <Sidebar />
        <Main />
      </main>
    </>
  );
}

export default Home;
