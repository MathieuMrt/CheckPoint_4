import React from "react";
import { useNavigate } from "react-router-dom";

function PathError() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="pathError_container">
      <button type="button" onClick={handleClick}>
        Retour
      </button>
      <div className="pathError">
        <h1>Erreur 404: Page non trouvée.</h1>
        <h3>
          Désolé, la page que vous recherchez n'existe pas. Veuillez vérifier
          l'URL que vous avez saisie et assurez-vous qu'elle est correcte.
        </h3>
      </div>
    </div>
  );
}

export default PathError;
