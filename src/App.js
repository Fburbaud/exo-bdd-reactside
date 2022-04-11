import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import FriendsList from "./FriendsList";
import Formulaire from "./Formulaire";

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  
  useEffect(() => {
    const getFriends = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/friends');
      setFriends(response.data);
  };
    getFriends();
  }, []);

  const onFriendSelect = (activeFriend) => {
    setSelectedFriend(activeFriend);
  };

  return (
    <div className="container">
      <FriendsList onFriendSelect={onFriendSelect} friends={friends} />
      <Formulaire onFriendSelect={onFriendSelect} activeFriend={selectedFriend} />
    </div>
  );
}

export default App;
