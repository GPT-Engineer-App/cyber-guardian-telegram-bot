import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Spinner, IconButton } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setResults(null);

    // Simulate an API call
    setTimeout(() => {
      setResults(`Results for query: ${query}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Telegram OSINT Bot</Text>
        <Input placeholder="Enter your query" value={query} onChange={(e) => setQuery(e.target.value)} size="lg" />
        <Button leftIcon={<FaTelegramPlane />} colorScheme="teal" size="lg" onClick={handleSearch} isLoading={loading}>
          Search
        </Button>
        {loading && <Spinner size="xl" />}
        {results && (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text>{results}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
