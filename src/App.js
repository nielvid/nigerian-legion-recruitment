
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PageWrapper from './layouts/PageWrapper';
import Contents from './layouts/Contents';
import Announcement from './components/Announcement';
import Buttons from './common/Buttons';
import { Box} from "@chakra-ui/react"


function App() {
  return (
    <Router>
     <ChakraProvider>
      <PageWrapper>
      <Switch>
        <Route exact path="/">
          <Contents />
          <Announcement />
          <Box  textAlign="center" borderRadius="15px" width="40%" m="45px auto">
          <Buttons p={["0.2em","1em"]} fontSize={["1em", "2em"]} bg="#0ca431"  color="#ffffff"> Start Application</Buttons>
          </Box>
          
        </Route>
        </Switch>
      </PageWrapper>
    </ChakraProvider>
    </Router>
  );
}

export default App;

