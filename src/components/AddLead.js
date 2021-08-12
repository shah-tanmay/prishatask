import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function AddLead() {
	const [{ details }, dispatch] = useStateValue();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [prevSales, setPrevSales] = useState("");
	const [sales, setSales] = useState("");
	const confirmSubmission = () => {
		if (!name && !email && !phone && !address && !prevSales && !sales) {
			alert("Please Fill all the details");
		}
		dispatch({
			type: "SET_DETAILS",
			details: {
				name,
				email,
				phone,
				address,
				prevSales: parseInt(prevSales),
				sales: parseInt(sales),
			},
		});
		alert("Lead Added Successfully!");
	};
	return (
		<div className="space-y-3 p-2">
			<h2 className="font-bold text-3xl flex justify-center mb-4">New Lead</h2>
			<div className="flex">
				<p className="text-xl font-semibold mt-1 mr-8">Name: </p>
				<input
					type="text"
					placeholder="Name"
					autoComplete="false"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border-2 border-purple-200 outline-none text-lg p-1 rounded-xl pl-2"
				/>
			</div>
			<div className="flex">
				<p className="text-xl font-semibold mt-1 mr-8">Phone: </p>
				<input
					value={phone}
					autoComplete="false"
					type="text"
					placeholder="Phone"
					onChange={(e) => setPhone(e.target.value)}
					className="border-2 border-purple-200 outline-none text-lg p-1 rounded-xl pl-2"
				/>
			</div>
			<div className="flex">
				<p className="text-xl font-semibold mt-1 mr-10">Email: </p>
				<input
					autoComplete="false"
					type="text"
					value={email}
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					className="border-2 border-purple-200 outline-none text-lg p-1 rounded-xl pl-2"
				/>
			</div>
			<div className="flex">
				<p className="text-xl font-semibold mt-1 mr-10">Prev Sales: </p>
				<input
					autoComplete="false"
					type="text"
					value={prevSales}
					placeholder="Prev Sales"
					onChange={(e) => setPrevSales(e.target.value)}
					className="border-2 border-purple-200 outline-none text-lg p-1 rounded-xl pl-2"
				/>
			</div>
			<div className="flex">
				<p className="text-xl font-semibold mt-1 mr-10">Current Sales: </p>
				<input
					autoComplete="false"
					type="text"
					value={sales}
					placeholder="Sales"
					onChange={(e) => setSales(e.target.value)}
					className="border-2 border-purple-200 outline-none text-lg p-1 rounded-xl pl-2"
				/>
			</div>
			<div className="flex">
				<p className="text-xl font-semibold mt-1 mr-4">Address: </p>
				<input
					value={address}
					autoComplete="false"
					onChange={(e) => setAddress(e.target.value)}
					type="text"
					placeholder="Address"
					className="border-2 border-purple-200 outline-none text-lg p-1 rounded-xl pl-2 h-32"
				/>
			</div>
			<div className="flex justify-center">
				<button
					className="bg-purple-400 font-semibold text-xl p-3 rounded-3xl"
					onClick={confirmSubmission}
				>
					Confirm
				</button>
			</div>
		</div>
	);
}

export default AddLead;
