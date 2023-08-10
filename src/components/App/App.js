import { useState } from 'react';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Formats from '../Formats/Formats';
import './App.css';
import About from '../About/About';
import How from '../How/How';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import PopupForQuestions from '../PopupForQuestions/PopupForQuestions';
import PopupForContacts from '../PopupForContacts/PopupForContacts';

function App() {
  // States
  // Popups
  const [isPopupForQuestionsOpen, setIsPopupForQuestionsOpen] = useState(false);
  const [isPopupForContactsOpen, setIsPopupForContactsOpen] = useState(false);

  // Functions
  // Open popup with questions
  function handleQuestionClick() {
    setIsPopupForQuestionsOpen(true);
  }

  function handleContactsClick() {
    setIsPopupForContactsOpen(true);
  }

  // Close any popup
  function closeAllPopups() {
    setIsPopupForQuestionsOpen(false);
    setIsPopupForContactsOpen(false);
  }

  // Обработка ответа
  function handleAnswersSubmit(answers) {
    console.log(answers);
  }

  return (
    <div className='page'>
      <Header onContactsClick={handleContactsClick} />
      <Intro onQuestionsClick={handleQuestionClick} />
      <Formats />
      <About />
      <How />
      <Gallery />
      <Footer />

      <PopupForQuestions
        isOpen={isPopupForQuestionsOpen}
        onClose={closeAllPopups}
        onAddAnswers={handleAnswersSubmit}
      />

      <PopupForContacts
        isOpen={isPopupForContactsOpen}
        onClose={closeAllPopups}
        onAddAnswers={handleAnswersSubmit}
      />
    </div>
  );
}

export default App;
