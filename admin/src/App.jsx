import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
			<hr />
			<div className="flex w-full">
				<Sidebar/>
			</div>
    </div>
  );
};

export default App;
