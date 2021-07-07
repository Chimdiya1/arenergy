import React, { createContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Input,
  Spinner,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import "./gamma.css";
const GammaPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [competitions, setCompetitions] = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(function loadProducts() {
    // api.getLeaders().then((res) => {
    //   setIsLoading(true);
    //   console.log(res.data);
    //   setLeaders(res.data);
    setIsLoading(true);
    // });
    fetch(
      "https://shrouded-spire-57909.herokuapp.com/http://api.football-data.org/v2/competitions"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCompetitions(result.competitions);
          console.log(result.competitions);
        },
        (error) => {
          setError(error);
        }
      );
    setIsLoading(false);
  }, []);

  return (
    <div className="gamma-page">
      <h2>GAMMA</h2>

      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
          </Tr>
        </Thead>
        {!competitions.length > 0 ? (
          <div className="spinner">
            <Spinner size="xl" />
          </div>
        ) : (
          <Tbody>
            {competitions.length > 0 &&
              competitions.map(({ id, name }) => (
                <Tr key={id}>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                </Tr>
              ))}
          </Tbody>
        )}
      </Table>
    </div>
  );
};

export default GammaPage;
