import React, { useEffect, useState } from "react";
import "./profile.css";

import { useParams, Link } from "react-router-dom";

const ProfilePage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [leader, setLeader] = useState([]);

  let { id } = useParams();
  useEffect(function loadProducts() {
    setIsLoading(true);
    fetch(
      "https://shrouded-spire-57909.herokuapp.com/https://wakatime.com/api/v1/leaders/?api_key=b123ca6d-f283-411d-b2a2-034d2b3b0dc0"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(result.data[id]);
          setLeader(result.data[id]);
        },
        (error) => {
          setError(error);
        }
      );
    setIsLoading(false);
  }, []);

  //   const leader = leaders.filter((item) => item.rank == id);
  return (
    <div className="profile-page">
      <h2>PROFILE</h2>

      {leader.rank && (
        <div>
          <p>Name: {leader.user.display_name}</p>
          <p>Rank: {leader.rank}</p>
          <p>
            Daily Average: {leader.running_total.human_readable_daily_average}
          </p>
          <p>Total hours: {leader.running_total.human_readable_total}</p>
          <p>Hireable: {leader.user.is_hireable ? "Yes" : "No"}</p>
          <p>Location: {leader.user.location}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
