import {
  ChakraProvider,
  Container
} from '@chakra-ui/react'
import { Navbar } from './components/Navbar';
import { LoginAlert } from './services/login';
import { Login } from './components/Login';

function App() {
  return (
    <ChakraProvider>
        <Navbar />
        <Container>
          <Login/>
        </Container>
    </ChakraProvider>
  );
}

export default App;
