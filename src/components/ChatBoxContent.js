import React from "react";
import ChatBoxCard from "./ChatBoxCard";
import ChatBoxInfo from "./ChatBoxInfo";

const ChatBoxContent = () => {
	return (
		<div className="py-8 bg-white flex flex-col">
			<div className="flex flex-row w-full">
				<div className="w-full text-center">
				<div className="flex flex-row justify-center">
				<div className="absolute top-[140px] right-[500px]">
				<p>_____________________________________</p>
				</div>
				  <div>
			     	<p className="text-center text-xs text-gray-600">
						 Sengunda Fiero - 03/12/2023 
					</p>
				  </div>
				<div className="absolute top-[140px] left-[1000px]">
				<p>_____________________________________</p></div>
				</div>
					<p className="text-center text-sm text-gray-600 my-4 font-bold">
						Encio de attendiminto n 0021
					</p>
				</div>
			</div>
			<ChatBoxCard />
			<ChatBoxInfo />
			<ChatBoxCard />
			<div className="flex flex-row w-full">
				<div className="w-full text-center">
				<div className="flex flex-row justify-center mb-4">
				<div className="absolute bottom-[-7px] right-[525px]">
				<p>__________________________________</p>
				</div>
				<div>
					<p className="text-center text-sm text-red-600 font-bold">
						Attendimento n 000021 encerrado
					</p>
				</div>
				<div className="absolute bottom-[-7px] left-[1040px]">
				     <p>______________________________</p>
				</div>
				  </div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxContent;
