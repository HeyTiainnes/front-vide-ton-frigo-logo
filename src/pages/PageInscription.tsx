import BtnRougeVert from "../components/BtnRougeVert";
import "./PageInscription.css";

const Inscription = () => {
  return (
    <div>
      <label htmlFor="basic-url" className="form-label">
        Entrez vos coordonnées
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Prénom
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Philippe (Exemple)"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          NOM
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="DUPOND (Exemple)"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>

      <label htmlFor="basic-url" className="form-label">
        LOGIN
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Adresse E.m@il
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="philippe.dupond@cocorico.com (Exemple)"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Mot de Passe
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="(Obligatoire)"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div>
        <BtnRougeVert />
      </div>
    </div>
  );
};

export default Inscription;
