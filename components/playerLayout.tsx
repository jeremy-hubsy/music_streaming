import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box className="w-screen h-screen">
      <Box className="absolute top-0 ml-0 w-60">
        <Sidebar />
      </Box>
      <Box className="ml-60 mb-28">{children}</Box>
      <Box className="absolute bottom-0">player</Box>
    </Box>
  );
};

export default PlayerLayout;
