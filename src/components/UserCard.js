import React from "react";


const UserCard = ({ userData }) => {
  return (
    <div>
      <img src={userData.avatar_url} alt="Profile" style={{ width: "70px", borderRadius: "50%" , paddingTop:"30px" }} />
      <h2>{userData.name}</h2>
      <p>@{userData.login}</p>
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers} | Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
    </div>
  );
};

export default UserCard;
