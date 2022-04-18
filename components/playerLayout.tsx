import {Box} from "@chakra-ui/layout";
import SideBar from "./sidebar";


const PlayerLayout= ({children})=>{
  return (
    <Box width="100vw" height="100vh">
      <Box top="0" width="250px" left="0" position="absolute">
        <SideBar></SideBar>
      </Box>
      <Box marginLeft="250px" marginBottom="250">
        {children}
      </Box>
      <Box left="0" bottom="0">
        player
      </Box>
    </Box>
  );
}

export default PlayerLayout;
