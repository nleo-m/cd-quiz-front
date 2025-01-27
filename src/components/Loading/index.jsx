import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const codeSnippet = `
const initializeSystem = () => {
  console.log("Initializing codi quiz system components...");
};

const calculateComplexHash = (input) => {
  console.log("Calculating super upper dubber complex hash...");
  return input
    .split("")
    .reduce((hash, char) => (hash + char.charCodeAt(0) * 31) % 9973, 0, 100, answerToLifeTheUniverseAndEverything);
};

const buildVirtualEnvironment = () => {
  console.log("Building matrix virtual environment...");
  const environment = [];
  for (let i = 0; i < 1000; i++) {
    environment.push({ id: i, value: Math.random().toFixed(4), magicalNumbers: [0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ] });
  }
  return environment;
};

const validateIntegrity = (data) => {
  console.log("Validating the data integrity of the current user facing the screen...");
  return data.every((item) => item !== null && typeof item !== "undefined");
};

const performDataMigration = (source, destination) => {
  console.log(\`Migrating data from \${source} to \${destination}...\`);
  const result = [];
  for (let i = 0; i < source.length; i++) {
    result.push({ ...source[i], migrated: true });
  }
  return result;
};

const simulateQuantumComputation = () => {
  console.log("Simulating quantum computation...");
  console.log("Do I really know what I'm doing?");
  const qubits = [];
  for (let i = 0; i < 1024; i++) {
    qubits.push(Math.random() > 0.5 ? "1" : "0");
  }
  return qubits.join("");
};

const compileResourceMap = (resources) => {
  console.log("Compiling resource map...");
  const map = {};
  resources.forEach((resource, index) => {
    map[\`resource_\${index}\`] = resource;
  });
  return map;
};

const analyzeNetworkTopology = (topology) => {
  console.log("Analyzing network topology...");
  const nodes = topology.nodes || [];
  return nodes.map((node) => ({
    id: node.id,
    connections: node.connections.length,
    status: "active",
  }));
};

const executeDeepLearningModel = (model, data) => {
  console.log("Executing deep learning model...");
  return data.map((item) => model.predict(item));
};



// Main Execution Flow
initial

`;

function PopCode() {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const splitCode = codeSnippet.split("\n");

    const interval = setInterval(() => {
      if (currentIndex < splitCode.length) {
        setLines((prevLines) => [...prevLines, splitCode[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Flex
      direction="column"
      position="absolute"
      top={10}
      left={10}
      overflow="hidden"
      maxH="90%"
      maxW="80%"
      fontSize={16}
      filter="blur(.25px)"
    >
      {lines.map((line, i) => (
        <Text
          key={i}
          color="teal.500"
          fontFamily="monospace"
          textShadow="0px 0px 10px #AF55DD50"
          mt="4px"
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.001 }}
        >
          {line}
        </Text>
      ))}
    </Flex>
  );
}

export default function Loading() {
  const prompts = [
    "Dando uma polida no mainframe",
    "Recalibrando o fluxo interdimensional",
    "Esquentando os circuitos para a ação",
    "Lubrificando as engrenagens virtuais",
    "Caçando bugs antes que eles fujam",
    "Dando um tapa na interface gráfica",
    "Compilando sonhos e esperanças",
    "Ajustando o Wi-Fi dos unicórnios mágicos",
    "Carregando bit por bit com amor e paciência",
    "Costurando o tecido do ciberespaço",
    "Dando um brilho extra nos píxeis",
    "Trocando o óleo do servidor",
    "Aquecendo o forno para os cookies",
    "Decodificando mensagens alienígenas",
    "Esticando os cabos de rede",
    "Ativando o modo turbo do hamster no servidor",
  ];

  const [currPrompt, setCurrPrompt] = useState(
    Math.floor(Math.random() * prompts.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currIndex = prompts.indexOf(currPrompt);
      prompts.splice(currIndex, 1);

      setCurrPrompt(Math.floor(Math.random() * prompts.length));
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Center h="100vh" bg="gray.200">
      <Flex
        direction="column"
        textAlign="center"
        bg="gray.100"
        borderRadius="7px"
        borderColor="main.700"
        boxShadow="-5px 7px 4px 4px #00000050"
        w={{ base: "300px", sm: "480px", lg: "640px" }}
        zIndex={1}
      >
        <Flex
          h="24px"
          w="full"
          bg="main.700"
          gap="10px"
          align="center"
          justify="end"
          padding="0 1em"
          borderRadius="7px 7px 0 0"
        >
          <Box h="12px" w="12px" borderRadius="50px" bg="green.400"></Box>
          <Box h="12px" w="12px" borderRadius="50px" bg="yellow.400"></Box>
          <Box h="12px" w="12px" borderRadius="50px" bg="red.400"></Box>
        </Flex>

        <Flex direction="column" padding="2em">
          <Flex
            position="relative"
            justify="center"
            align="center"
            width="full"
            mb="32px"
          >
            <Spinner
              color="main.500"
              w={{ base: "64px", md: "80px" }}
              h={{ base: "64px", md: "80px" }}
            />
          </Flex>

          <Text
            fontSize={{ base: 24, sm: 28, md: 32 }}
            color="text.700"
            mb="12px"
          >
            Loading...
          </Text>

          <Text
            fontSize={{ base: 14, sm: 16, md: 18 }}
            color="text.400"
            mb="32px"
            maxW="100%"
          >
            {prompts?.[currPrompt]}
          </Text>
        </Flex>
      </Flex>

      <PopCode />
    </Center>
  );
}
