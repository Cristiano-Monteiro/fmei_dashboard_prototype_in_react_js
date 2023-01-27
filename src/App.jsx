import Container from './components/Layout/Container/Container';

import OpeningScreen from './components/ModalBoxes/OpeningScreen/OpeningScreen';
import MainNavbar from './components/Navbar/MainNavbar/MainNavbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';

function App() {
  return (
    <Container>
      <OpeningScreen/>
      <MobileNavbar/>
      {/* = Main Content = */}
      <MainNavbar/>
    </Container>
  );
};

export default App;