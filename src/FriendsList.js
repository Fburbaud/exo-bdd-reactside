import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const FriendsList = ({ friends, onFriendSelect }) => {

    const deleteFriend = (friend) => {
        axios.post('http://localhost:8080/api/v1/friendsDelete/'+friend.id,
            {headers: {
                'Content-Type': 'application/json'
            }}, {}
        );
    };

    //list of results:
    const renderedFriends = friends.map((friend) => {
        return (
            <tr key={friend.id}>
		        <td>{friend.id}</td>
		        <td>{friend.nom}</td>
		        <td>{friend.prenom}</td>
		        <td>
                    <button type="button" className="btn btn-outline-warning" onClick={() => onFriendSelect(friend)}>
                        Modifier
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-outline-danger" onClick={() => deleteFriend(friend)}>
                        Supprimer
                    </button>
                </td>
		    </tr>
        );
    });

    return(
        <div>
            <h3>Liste d'amis</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedFriends}
                </tbody>
            </table>
        </div>
    );
};

export default FriendsList;