import "./App.scss";
import { useState } from "react";

interface IState {
  userName: string;
  isOnline: boolean;
  daysReportsDue: number;
}
const _state = {
  userName: "Harlad Lingren",
  isOnline: false,
  daysReportsDue: 1,
};

function App() {
  const [state, setState] = useState<IState>(_state);

  const handleTOggleLogin = () => {
    setState({
      ...state,
      isOnline: !state.isOnline,
    });
  };
  const handleReportsDays = () => {
    setState({
      ...state,
      daysReportsDue: state.daysReportsDue + 1,
    });
  };
  return (
    <div className="App">
      <h1>Dynamic styling</h1>
      <div className={state.isOnline ? "isLogged" : "isNotLogged"}>
        <p>{_state.userName}</p>
      </div>
      <div
        style={{
          fontSize: `${1 + state.daysReportsDue / 10}rem`,
          color: state.daysReportsDue < 5 ? "orange" : "red",
          backgroundColor: state.daysReportsDue > 8 ? "tomato" : "transparent",
        }}
      >
        Report is due in {state.daysReportsDue}
      </div>

      <hr />
      <h3>Emulate State Change</h3>
      <div>
        <button className="toggleLog" onClick={() => handleTOggleLogin()}>
          toggle logged in
        </button>
        <button className="changeDays" onClick={() => handleReportsDays()}>
          change days due
        </button>
      </div>
    </div>
  );
}

export default App;
