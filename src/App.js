
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PageWrapper from './layouts/PageWrapper';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
     <ChakraProvider>
      <PageWrapper>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        </Switch>
      </PageWrapper>
    </ChakraProvider>
    </Router>
  );
}

export default App;

