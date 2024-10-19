import { useState } from "react";
const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function saveChange(event) {
    setPlayerName(event.target.value);
  }
  let editPlayerName = <span className="player-name"> {playerName}</span>;
  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={saveChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "save" : "edit"}</button>
      </span>
    </li>
  );
};

export default Player;
