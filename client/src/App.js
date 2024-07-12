/* src/index.css */


import  History  from "./components/history";
import NavB from "./components/Navbar";
import MyComponent from "./components/Mycomponent";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container>
        <div className="App">
     
      <MyComponent/>
      <History/>
    </div>
    </Container>
    
  );
}
export default App;
