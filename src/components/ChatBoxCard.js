import React from "react";
import iconwhatsapp from '../assets/icons/x-whatsapp.png'
import maskGroup from '../assets/icons/Mask group.png'

const ChatBoxCard = () => {
	return (
		<div className="flex flex-row justify-evenly my-4">
			<div className="w-[40px] h-[40px] rounded-full ml-4">
				<img
					src={maskGroup}
					className="rounded-full"
				/>
			</div>
			<div className="flex flex-col mx-4 w-[540px]">
				<div className="flex flex-row items-center">
					<div className="text-sm text-gray-500">Marcos Silva</div>
					<div className="text-xs text-gray-500 ml-4">03/12/2022 - 09:00</div>
				</div>
				<div className="text-sm my-4 text-gray-700 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
			</div>
			<div className="flex flex-row items-start">
				<div className="text-gray-500 text-xs my-1 mr-2">
					Lorem ipdum dewo dwoiw:
				</div>
				<div className="text-2xl text-blue-500  mr-2 ">
					<img src={iconwhatsapp} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ChatBoxCard;
