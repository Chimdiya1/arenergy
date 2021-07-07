import React, { useEffect, useState } from "react";
import "./page.css";
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
import { Link } from "react-router-dom";

const AlphaPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [leaders, setLeaders] = useState([]);
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
      "https://shrouded-spire-57909.herokuapp.com/https://wakatime.com/api/v1/leaders/?api_key=b123ca6d-f283-411d-b2a2-034d2b3b0dc0"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setLeaders(result.data);
          setSearchResults(result.data);
        },
        (error) => {
          setError(error);
        }
      );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const results = leaders.filter((leader) =>
      leader.user.full_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="alpha-page">
      <h2>ALPHA</h2>
      <Input
        variant="filled"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Total Hours</Th>
            <Th>Daily Average</Th>
            <Th>Languages</Th>
          </Tr>
        </Thead>
        {!searchResults.length > 0 ? (
          <div className="spinner">
            <Spinner size="xl" />
          </div>
        ) : (
          <Tbody>
            {searchResults.length > 0 &&
              searchResults.map(
                (
                  {
                    running_total: {
                      human_readable_daily_average,
                      languages,
                      human_readable_total,
                      total_seconds,
                    },
                    user: { full_name },
                  },
                  index
                ) => (
                  <Tr key={total_seconds}>
                    <Td>
                      <Link to={`/alpha/${index}`}>{full_name}</Link>
                    </Td>
                    <Td>{human_readable_daily_average}</Td>
                    <Td>{human_readable_total}</Td>
                    <Td>
                      {languages
                        .reduce((a, { name }) => [...a, name], [])
                        .join(", ")}
                    </Td>
                  </Tr>
                )
              )}
          </Tbody>
        )}
      </Table>
    </div>
  );
};

export default AlphaPage;
