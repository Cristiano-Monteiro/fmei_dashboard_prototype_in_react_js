import { useState } from 'react';

import Container from './components/Layout/Container/Container';
import MainContent from './components/Layout/MainContent/MainContent';

import OpeningScreen from './components/ModalBoxes/OpeningScreen/OpeningScreen';
import MainNavbar from './components/Navbar/MainNavbar/MainNavbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';

import ModalBox from './components/ModalBoxes/ModalBox/ModalBox';

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
    <Container>
      <OpeningScreen 
        showMainContent={showMainContent}
      />
      <MobileNavbar/>
      {mainContent && <MainContent/>}
      <MainNavbar
        selectedModalBox={selectedModalBox}
        idModal={idModal}
      />
      <ModalBox 
        idModal={idModal}
        backToHome={backToHome}
      />
    </Container>
  );
};