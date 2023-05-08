import { useState } from "react";
import { gamesRequestD } from "../api/api";

const GamesDel = ({ value }: any) => {
  const [id, setID] = useState("0");

  const handleInputChange = async (e: any) => {
    const { value } = e.target;
    setID(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (id === "") {
      alert("Ingrese un ID");
      return;
    }
    const resGamesD = await gamesRequestD(id);
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Juego</h1>
      <form action="" method="DELETE" className="form_gamesDel">
        <div className="comp_GamesDel">
          <label htmlFor="">ID:</label>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={id}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="button_formGamesDel"
          onClick={handleSubmit}
        >
          {value}
        </button>
      </form>
    </div>
  );
};

export default GamesDel;