import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import ReactCardFlip from "react-card-flip";
import { Height } from "@material-ui/icons";

function LeadCard({ name, prevSales, sales }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const data = {
		labels: ["Past Sales", "Current Sales"],
		options: {
			maintainAspectRatio: false,
		},
		datasets: [
			{
				label: "Comparision",
				data: [prevSales, sales],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<div className="bg-purple-400 mt-10 ml-10 rounded-2xl min-width-min">
				<div className="font-semibold flex justify-center text-3xl text-white">
					{name}
				</div>
				<div className="font-semibold text-xl p-2 mt-2">
					Prev Sales(in ₹10000) :{" "}
					<span className="text-white">{prevSales}</span>
				</div>
				<div className="font-semibold text-xl p-2">
					This Month Sales(in ₹10000):{" "}
					<span className="text-white">{sales}</span>
				</div>
				<div className="font-semibold text-xl p-2">
					Total Sales(in ₹10000):{" "}
					<span className="text-white">{prevSales + sales}</span>
				</div>
				<div className="font-semibold text-xl p-2">
					Commission: <span className="text-white">15%</span>
				</div>
				<div className="flex justify-center">
					<button
						className="bg-white text-xl rounded-2xl p-2 mb-5 mt-4"
						onClick={() => setIsFlipped(!isFlipped)}
					>
						View Chart
					</button>
				</div>
			</div>
			<div className="bg-purple-400 mt-10 ml-10 rounded-2xl p-10">
				<div className="font-semibold flex justify-center text-3xl text-white mb-4">
					Tanmay Shah
				</div>
				<div>
					<Doughnut
						data={data}
						width={"40%"}
						options={{ maintainAspectRatio: false }}
					/>
				</div>
				<div className="flex justify-center">
					<button
						onClick={() => {
							setIsFlipped(!isFlipped);
						}}
						className="bg-white text-xl rounded-2xl p-2 mb-5 mt-10"
					>
						View Details
					</button>
				</div>
			</div>
		</ReactCardFlip>
	);
}

export default LeadCard;
