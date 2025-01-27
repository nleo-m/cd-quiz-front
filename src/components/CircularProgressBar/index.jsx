import { Box, Center, CircularProgress, Text } from "@chakra-ui/react";

export default function CircularProgressBar({ percentage }) {
  const getColor = () => {
    if (percentage >= 30 && percentage < 50) return "yellow.400";
    if ((percentage >= 50) & (percentage < 100)) return "green.400";
    if (percentage >= 100) return "main.500";

    return "red.400";
  };

  return (
    <Center position="relative">
      <CircularProgress
        value={percentage}
        size="240px"
        thickness="12px"
        color={getColor()}
        trackColor="main.100"
        capIsRound
      >
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="28px"
          fontWeight="bold"
          color="main.500"
        >
          {percentage}%
        </Text>
      </CircularProgress>
    </Center>
  );
}
