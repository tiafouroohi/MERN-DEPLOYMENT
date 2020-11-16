import logo from './logo.svg';
import {Router} from '@reach/router';
import HomePage from './views/HomePage';
import CreatePet from './views/CreatePet';
import ViewPet from './views/ViewPet';
import EditPet from './views/EditPet';

function App() {
  return (
    <>
    <h1>Pet Shelter</h1>
    <Router>
      <HomePage path = "/allpets" />
      <CreatePet path ="/create/pet" />
      <ViewPet path ="/pet/:id" />
      <EditPet path ="/pet/edit/:id" />
    </Router>
    </>
    
  );
}

export default App;
