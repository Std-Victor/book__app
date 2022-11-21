import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [stagiaires, setStagiaires] = useState([
    { Nom: "Ali", NoteBac: 13, Option: "DEV" },
    { Nom: "Ahmed", NoteBac: 11, Option: "ID" },
    { Nom: "Yassine", NoteBac: 16, Option: "ID" },
    { Nom: "Mohammed", NoteBac: 14, Option: "DEV" },
    { Nom: "Alae", NoteBac: 10, Option: "Multimedia" },
    { Nom: "Mohammed", NoteBac: 15, Option: "DEV" },
  ]);
  const [minNote, setMinNote] = useState();
  const [moyenne, setMoyenne] = useState(0);
  const [txt, setTxt] = useState("");
  const [error, setError] = useState();

  const handleNote = (e) =>
    setMinNote(
      stagiaires
        .filter((item) => item.Option === e.target.value)
        .sort((a, b) => a.NoteBac - b.NoteBac)[0].NoteBac
    );

  return (
    <div className="container__">
      <div className="stagiaire__table">
        <table border={1}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Node Bac</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {stagiaires.map((stg, index) => (
              <tr key={index}>
                <td>{stg.Nom}</td>
                <td>{stg.NoteBac}</td>
                <td>{stg.Option}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="stagiaire__action">
        <div className="stagiaire__min_note">
          <label htmlFor="note">
            La plus petite note de bac pout l'option :{" "}
          </label>
          <select name="" id="note" onChange={handleNote}>
            <option value="">Chose option...</option>
            {[...new Set(stagiaires.map((item) => item.Option))].map(
              (item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            )}
          </select>
          <span className="min__note">{minNote}</span>
        </div>
        <div className="stagiaire__name_upper">
          <label htmlFor="upper">
            Transformer les noms des stagiaires en majuscule :
          </label>
          <input
            type="button"
            value="to Upper Case"
            onClick={() =>
              setStagiaires(
                stagiaires.map((stg) => ({
                  ...stg,
                  Nom: stg.Nom.toUpperCase(),
                }))
              )
            }
          />
        </div>
        <div className="stagiaire__add_stg">
          <label htmlFor="add">Ajouter stagiaire</label>
          <input
            type="button"
            value="Add Stg"
            onClick={() =>
              setStagiaires([
                ...stagiaires,
                { Nom: "Fatima", NoteBac: 14, Option: "ID" },
              ])
            }
          />
        </div>
        <div className="stagiaire__moyenne">
          <label htmlFor="moyenne">la moyenne des notes des stagiaires </label>
          <input
            type="button"
            value="Moyenne"
            onClick={() =>
              setMoyenne(
                stagiaires.reduce(
                  (total, item) =>
                    item.NoteBac > 12 ? total + item.NoteBac : total,
                  0
                ) / stagiaires.length
              )
            }
          />
          {moyenne.toFixed(2)}
        </div>
      </div>
      <div className="validation__input">
        <div className="input__fields">
          <input type="text" onChange={(e) => setTxt(e.target.value)} />
          <input type="button" value="Valider" onClick={() => setError(txt)} />
        </div>
        {txt.trim().length >= 10 && (
          <span className="green">Vous avez bien saisi 10 lettres</span>
        )}
        {txt.trim().length < 10 && (
          <span className="red">Saisir au moins 10 lettres</span>
        )}
        <p className="error">{error}</p>
      </div>
    </div>
  );
}
