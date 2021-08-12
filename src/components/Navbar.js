import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Modal from "react-modal";
import AddLead from "./AddLead";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

function Navbar() {
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="navbar-main flex justify-between pl-9 bg-purple-400 p-3">
			<div className="navbar-brand text-3xl font-semibold ">GOfIDGET</div>
			<div className="navbar-title text-3xl font-semibold text-white">
				DASHBOARD
			</div>
			<div className="navbar-lead mr-9">
				<button className="flex bg-white rounded-3xl p-2" onClick={openModal}>
					<div className="mr-2">
						<AddIcon />
					</div>
					<div className="text-lg pr-1">New Lead</div>
				</button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<AddLead />
			</Modal>
		</div>
	);
}

export default Navbar;
