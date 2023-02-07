import { useState } from 'react';

import Container from './components/Layout/Container/Container';
import MainContent from './components/Layout/MainContent/MainContent';

import OpeningScreen from './components/ModalBoxes/OpeningScreen/OpeningScreen';
import MainNavbar from './components/Navbar/MainNavbar/MainNavbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';

import InputFileBox from './components/ModalBoxes/InputFileBox/InputFileBox';
import CalendarBox from './components/ModalBoxes/CalendarBox/CalendarBox';

function App() {
  const [inputFileBox, setInputFileBox] = useState(false);
  const [calendarBox, setCalendarBox] = useState(false);
  const [mainContent, setMainContent] = useState(false);

  function showInputFileBox(){
    setInputFileBox(!inputFileBox);
    setCalendarBox(false);
  };

  function showCalendarBox(){
    setCalendarBox(!calendarBox);
    setInputFileBox(false);
  };

  function backToHome(){
    setInputFileBox(false);
    setCalendarBox(false);
  };

  const showMainContent = () => setMainContent(true);

  return (
    <Container>
      <OpeningScreen 
        showMainContent={showMainContent}
      />
      <MobileNavbar/>
      {mainContent && <MainContent/>}
      <MainNavbar
        showInputFileBox={showInputFileBox}
        showCalendarBox={showCalendarBox}
        backToHome={backToHome}
      />
      {inputFileBox && <InputFileBox backToHome={backToHome}/>}
      {calendarBox && <CalendarBox backToHome={backToHome}/>}
    </Container>
  );
};

export default App;