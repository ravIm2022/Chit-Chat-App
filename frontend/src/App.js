import "./App.css";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
