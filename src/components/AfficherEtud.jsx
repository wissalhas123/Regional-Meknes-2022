import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterStg, supprimerStg } from "../Redux/sliceEtudiant";

const DisplayEtud = () => {
  const Etudiants = useSelector((state) => state.etudiants.dbEtudiant);
  // etudiants => C'est le nom déclarer dans l'objet sliceEtudiants
  const dispatch = useDispatch();
  const [etud, setEtud] = useState({ id: "", Nom: "", Filière: "" });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setEtud({ ...etud, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(ajouterStg(etud));
  };

  return (
    <>
      <form
        action=""
        className="container row g-3 m-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Id Etudiant"
          name="id"
          onChange={handleInputs}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Nom Etudiant"
          name="Nom"
          onChange={handleInputs}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Fillière"
          name="Filière"
          onChange={handleInputs}
        />
        <button className="btn btn-primary col-3">Ajouter un Étudiant</button>
      </form>
      <div className="container mt-4">
        {Etudiants.map((Etudiant) => (
          <div key={Etudiant.id} className="border container">
            {Etudiant.id +
              ": " +
              Etudiant.Nom +
              " Filière: " +
              Etudiant.Filière}
            <button
              className="btn btn-danger mx-4"
              onClick={() => dispatch(supprimerStg(Etudiant.id))}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayEtud;
