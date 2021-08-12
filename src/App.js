import { Doughnut } from "react-chartjs-2";
import "./App.css";
import AddLead from "./components/AddLead";
import LeadCard from "./components/LeadCard";
import Navbar from "./components/Navbar";
import { useStateValue } from "./components/StateProvider";

function App() {
	const [{ details }, dispatch] = useStateValue();
	return (
		<div className="App">
			<Navbar />
			<div className="flex justify-between flex-wrap mr-10">
				{details.name && (
					<LeadCard
						name={details.name}
						prevSales={details.prevSales}
						sales={details.sales}
					/>
				)}
				<LeadCard name="Tanmay Shah" prevSales={140} sales={20} />
				<LeadCard name="Vaibhav Chopra" prevSales={130} sales={10} />
				<LeadCard name="Deep Gandhi" prevSales={180} sales={30} />
				<LeadCard name="Aneesh Panda" prevSales={120} sales={20} />
				<LeadCard name="Prerit Ratwani" prevSales={140} sales={20} />
				<LeadCard name="Samarth Singh" prevSales={200} sales={30} />
				<LeadCard name="Prateek" prevSales={140} sales={20} />
			</div>
		</div>
	);
}

export default App;
