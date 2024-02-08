import { PlayersList } from "./components";
import { getAllPlayersData, onTeamSizeChange } from "../controller";

function Home() {
  return (
    <div>
      <header> Romitor-ex </header>
      <div className="main-container">
        <PlayersList
          playersList={getAllPlayersData}
          trigger={onTeamSizeChange}
        />
      </div>
      <footer>
        <button className="delete-all-players">DELETE DATA</button>
      </footer>
    </div>
  );
}

export default Home;
