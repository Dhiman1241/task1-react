import React from "react";
import { BiAlarmSnooze, BiMessageAlt } from "react-icons/bi";

const ChatBoxHeader = () => {
	return (
		<div className="flex flex-row justify-between bg-white p-4 border border-b-gray-400">
			<div className="flex flex-col">
				<div className="text-sm text-gray-700 font-bold my-1">
					Name do Utilizer | <span className="text-gray-400">Pingo Doce</span>
				</div>
				<div className="text-xs text-gray-400 my-1">ID DO CLIENTE: 12345</div>
				<div className="text-xs text-gray-400 my-1">
					Status de tendskdsd:{" "}
					<span className="text-blue-400 font-bold">Em Berto</span>
				</div>
			</div>
			<div className="flex flex-col my-1">
				<div className="flex flex-row justify-end">
					<div className="text-xs text-gray-400 mr-1 mb-4">
						Arquirr bests sjs
					</div>
					<div className="text-lg text-gray-600">
						<BiAlarmSnooze />
					</div>
				</div>
				<div className="flex flex-row justify-end">
					<div className="text-xs text-gray-400 mr-1 mb-4">
						Arquirr Arquirr bests sjs
					</div>
					<div className="text-lg text-gray-600">
						<BiMessageAlt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxHeader;
