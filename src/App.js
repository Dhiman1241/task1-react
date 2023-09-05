import ChatList from "./components/ChatList";
import ChatBox from "./components/ChatBox";

function App() {
	return (
		<div className="App bg-gray-200 flex flex-row">
			<ChatList />
			<ChatBox />
		</div>
	);
}

export default App;
