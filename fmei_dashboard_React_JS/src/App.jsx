import { useState } from 'react';

import Container from './components/Layout/Container/Container';
import MainContent from './components/Layout/MainContent/MainContent';

import OpeningScreen from './components/ModalBoxes/OpeningScreen/OpeningScreen';
import MainNavbar from './components/Navbar/MainNavbar/MainNavbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';

export default function App() {
  const [mainContent, setMainContent] = useState(false);
  const [idModal, setIdModal] = useState('Home');

  function backToHome(){
    setIdModal('Home');
  };

  function selectedModalBox(e){
    if(idModal === e.target.parentNode.id){
      setIdModal('Home');
    } else {
      setIdModal(e.target.parentNode.id);
    };
  };

  function showMainContent(){
    setMainContent(true);
  };

  return (
    <>
      <OpeningScreen 
        showMainContent={showMainContent}
      />
      {mainContent && (
        <Container>
          <MobileNavbar/>
          <MainContent 
            idModal={idModal}
            backToHome={backToHome}
          />
          <MainNavbar
            selectedModalBox={selectedModalBox}
            idModal={idModal}
          />
        </Container>
      )}
    </>
  );
};