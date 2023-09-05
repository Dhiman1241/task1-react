import React from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import maskGroup from '../assets/icons/Mask group.png'

const ChatBoxInfo = () => {
	return (
		<div className="bg-gray-200 flex flex-col w-[600px] m-auto mb-3">
			<div className="bg-gray-700 p-1 flex flex-row justify-between">
				<div className="text-gray-700">-</div>
				<div className="text-white text-sm font-bold">
					Notas de Attendionr/20021
				</div>
				<div className="flex flex-row text-white items-center">
					<FaPlus className="mx-2" />
					<FaPen className="mx-2" />
				</div>
			</div>
			<div className="flex flex-row mx-4 my-8 ">
				<div className="w-[40px] h-[40px] rounded-full mx-2">
					<img
						src={maskGroup} alt="avtar"
						className="rounded-full"
					/>
				</div>
				<div className="flex flex-col mx-2 w-[540px]">
					<div className="flex flex-row items-center">
						<div className="text-sm text-gray-500">Marcos Silva</div>
						<div className="text-xs text-gray-500 ml-4">03/12/2022 - 09:00</div>
					</div>
					<div className="text-sm my-2 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxInfo;
