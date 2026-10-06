// Importation mtee3 lhooks el st3mlnehom  ml React
import React, { useState, useContext } from 'react';
// Importation mte3 fichier CSS 
import './LoginPopup.css';
// Importation mta3 tsawer
import { assets } from '../../assets/assets';
// ompotation ta3 url
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
// reçoit la fonction setShowLogin pour fermer la popup
const LoginPopup = ({ setShowLogin }) => {
  // l'URL de l'API
  const { url, setToken } = useContext(StoreContext);

  // t3rf el  mode "Login" ou "Sign Up"
  const [currState, setCurrState] = useState("Login");

  // État pour stocker el ma3loumet
  const [data, setData] = useState({
    name: "",       // champ nom
    email: "",      // champ email
    password: "",   // champ mot de passe
    agreed: false   // etha obligaotoire
  });

  // ay ma3louma ttbdl fel formulaire tt9ayed
  const onChangeHandler = (event) => {
    const name = event.target.name;      // nom du champ 
    const value = event.target.value;    // valeur saisie 
    // mise a jour ll champ
    setData(data => ({ ...data, [name]: value }));
  };

  // Fonction appelée lors de la soumission du formulaire
  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"

    }
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
    }
  }

  return (
    // el chakl ta3 popup
    <div className='login-popup'>
      {/* Formulaire avec la fonction onLogin appelée à la soumission */}
      <form onSubmit={onLogin} className="login-popup-container">

        {/* En-tête de la popup avec titre et icône de fermeture */}
        <div className="login-popup-title">
          <h2>{currState}</h2> {/* Affiche "Login" ou "Sign Up" */}
          {/* Bouton de fermeture (croix) */}
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        {/* Champs du formulaire */}
        <div className='login-popup-inputs'>
          {/* Champ nom visible uniquement en mode "Sign Up" */}
          {currState === "Login" ? <></> : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}

          {/* Champ email */}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />

          {/* Champ mot de passe */}
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {/* Bouton de validation du formulaire */}
        <button type='submit'>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Case à cocher pour accepter les conditions */}
        <div className="login-popup-condition">
          <input
            type="checkbox"
            name="agreed"
            onChange={onChangeHandler}
            checked={data.agreed}
            required
          />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>

        {/* Lien pour basculer entre Login et Sign Up */}
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

// Exportation du composant pour l’utiliser ailleurs
export default LoginPopup;