import axios from "axios";
import React, {  useEffect, useState } from "react";

const Formulaire = ({ activeFriend, onFriendSelect }) => {
    const [nomFriend, setNomFriend] = useState('');
    const [prenomFriend, setPrenomFriend] = useState('');

    const handleSubmit = (event) => {
        if(activeFriend != null) {
            axios.post('http://localhost:8080/api/v1/friendsUpdate/'+activeFriend.id,
                {
                    id: activeFriend.id,
                    nom: (nomFriend != '' ? nomFriend : activeFriend.nom),
                    prenom: (prenomFriend != '' ? prenomFriend : activeFriend.prenom)
                }
        );
        setNomFriend('');
        setPrenomFriend('');
        onFriendSelect(null);
        } else {
            axios.post('http://localhost:8080/api/v1/friendsAdd',
                    {
                        nom: nomFriend,
                        prenom: prenomFriend
                    }
            );
            setNomFriend('');
            setPrenomFriend('');
        }
    };
       
    return(
        <div className="row justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3">
                        <label className="form-label">{activeFriend != null ? activeFriend.nom : 'Nom'}</label>
                        <input type="text" value={nomFriend} onChange={(e) => setNomFriend(e.target.value)} className="form-control" id="nomInput" name="nom" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">{activeFriend != null ? activeFriend.prenom : 'Prenom'}</label>
                        <input type="text" value={prenomFriend} onChange={(e) => setPrenomFriend(e.target.value)} className="form-control" id="prenomInput" name="prenom" />
                    </div>
                    <button type="submit" className="btn btn-primary">{activeFriend != null ? 'Modifier' : 'Créer'}</button>
                </form>
            </div>
        </div>
    );

};

export default Formulaire;