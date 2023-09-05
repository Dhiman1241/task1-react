import React from "react";
import { BiSolidMessage, BiSearch } from "react-icons/bi";
import ChatListCard from "./ChatListCard";

const ChatList = () => {
	return (
		<div className="flex flex-col w-2/5 bg-gray-200 h-screen pl-12 pr-4 pt-2 pb-0">
			<div className="flex flex-row justify-between py-2 px-2">
				<div className="flex flex-row justify-start items-center">
					<div className="text-2xl text-gray-400">
						<BiSolidMessage />
					</div>
					<div className="ml-2">
						<p className="text-gray-600 text-xs font-bold">
							Converses Recenters
						</p>
					</div>
				</div>
				<div>
					<div className="text-2xl text-gray-400">
						<BiSearch />
					</div>
				</div>
			</div>
			<div className="px-2 ">
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xemail"}/>
				<ChatListCard icon={"xsms"}/>
				<ChatListCard icon={"xwhatsapp"}/>
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xintercom"}/>
			</div>
		</div>
	);
};

export default ChatList;
