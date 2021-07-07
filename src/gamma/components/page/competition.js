import React, { createContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Input,
  Spinner,
  Tr,
  Th,
  p,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const CompetitionPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [leader, setLeader] = useState([]);

  let { id } = useParams();
  useEffect(function loadProducts() {
    setIsLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${id}/standings`, {
      headers: {
        "X-Auth-Token": "caafe13a8fde44ec817b031683d7ca86",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then(
        (result) => {
          console.log(result);
          //   console.log(result.competitions[6]);
          //   setLeader(result[id]);
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
      {/* 
      {leader.rank && (
        <div>
          <p>{leader.user.display_name}</p>
          <p>{leader.rank}</p>
          <p>{leader.running_total.human_readable_daily_average}</p>
          <p>{leader.running_total.human_readable_total}</p>
        </div>
      )} */}
      {/* <p>
          {languages.reduce((a, { name }) => [...a, name], []).join(", ")}
        </p> */}
    </div>
  );
};

export default CompetitionPage;
