import React from "react";
import { BiPencil, BiBookAdd, BiSmile } from "react-icons/bi";
import iconArchive from '../assets/icons/archive.png';
import iconGroup from '../assets/icons/Group 275.png';
import iconintercome from '../assets/icons/icone-intercom.png';
import iconVector from '../assets/icons/Vector.png';

const ChatBoxFooter = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row justify-between items-center text-gray-700 p-2">
					<BiPencil />
					<div className="text-xs ml-2">Inseir nova Nota</div>
				</div>
				<div className="flex flex-row justify-between items-center bg-gray-400 text-gray-700 p-2 ">
					<BiBookAdd />
					<div className="text-xs ml-2">Encerrar Attendimento</div>
				</div>
			</div>
			<div className="flex flex-col bg-white h-36 justify-between">
				<div className="flex flex-row text-gray-500 items-center py-2">
					<img src={iconVector} alt="" className="mx-4 text-2xl" />
					<BiSmile className="mx-4 text-xl" />
					<img src={iconArchive} alt="" className="mx-4 text-xl" />
				</div>
				<div className="flex flex-row justify-between">
					<div>
						<input
							type="text"
							className="border border-b-gray-300 border-t-white text-sm border-l-white border-r-white px-2 py-3 ml-4 w-96"
							placeholder="Clique para escrever"
						/>
					</div>
					<div className="flex flex-col items-end mr-2 w-30 ">
						<div className="bg-indigo-700 flex flex-row items-center ">
							<div className="text-white flex flex-row items-center mx-2 ">
								<div className="text-white text-sm">
								<img src={iconintercome} alt="" />
								</div>
								<div className="text-sm mx-2">Envoir</div>
							</div>
							<div className="text-white text-sm ">
								<img src={iconGroup} alt="" className="border border-l-white"/>
							</div>
						</div>
						<div className="text-gray-600 mb-2 mt-2 text-sm">Responded via : chat intercon</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxFooter;
