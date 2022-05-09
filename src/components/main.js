import Dashboard from "./dashboard";
import Payments from "./payments";

function Main() {
  return (
    <main className="w-[80%] bg-main overflow-scroll">
      <Dashboard />
      <Payments />
    </main>
  );
}

export default Main;
