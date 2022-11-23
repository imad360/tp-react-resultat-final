import React, { useState } from "react";
import "./styles.css";

function NewPeople2() {
  const [nom, afficherNom] = useState("");
  const [prenom, afficherPrenom] = useState("");

  function handleChangeNom(event) {
    afficherNom(event.target.value);
  }
  function handleChangePrenom(event) {
    afficherPrenom(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        id="nom"
        value={nom}
        placeholder="nom"
        className="input"
        onChange={(e) => handleChangeNom(e)}
      />
      <input
        type="text"
        id="prenom"
        value={prenom}
        placeholder="prenom"
        className="input"
        onChange={(e) => handleChangePrenom(e)}
      />
      <p>
        bienvenue : {nom} {prenom}
      </p>
    </div>
  );
}
export default NewPeople2;
