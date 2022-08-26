import { TweetsRouter } from "./components/TweetsContext";
import { AccountRouter } from "./components/AccountContext";
import { BrowserRouter } from "react-router-dom";
import Page from "./Page";
function App() {
  return (
    <BrowserRouter>
        <AccountRouter>
            <TweetsRouter>
                <Page />
            </TweetsRouter>
        </AccountRouter>
    </BrowserRouter>
  );
}

export default App;
