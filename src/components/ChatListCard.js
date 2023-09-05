import React from "react";
 import iconIntercom from '../assets/icons/x-intercom.png';
 import iconEmail from '../assets/icons/x-email.png';
 import iconSms from '../assets/icons/x-sms.png';
 import iconWhatsapp from '../assets/icons/x-whatsapp.png';

const ChatListCard = ({icon}) => {
	return (
		<div className="w-full flex flex-col bg-white rounded my-2 p-2 ">
			<div className="flex flex-row justify-between">
				<div className="text-gray-500 font-bold text-sm">Name de Uitilzor</div>
				<div className="text-gray-500 text-xs">03/12/2022 - 09:00</div>
			</div>
			<div className="mt-2 flex flex-row justify-between ">
				<div className="w-3/5 text-sm text-gray-500">
					It is a long established fact that a reader will be distracted by the
					readable
				</div>
				<div className="flex flex-row items-end m-2">
					<div className="text-gray-500 text-xs ">Lorem ipdum dewo dwoiw:</div>
					<div className="text-2xl text-blue-500 ml-1 mb-1 pt-2">
						{icon === "xintercom" ? <img src={iconIntercom} alt=""/> : ""}
						{icon === "xemail" ? <img src={iconEmail} alt=""/> :""}
						{icon === "xsms" ? <img src={iconSms} alt=""/> :""}
						{icon === "xwhatsapp" ? <img src={iconWhatsapp} alt=""/> :""}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatListCard;
