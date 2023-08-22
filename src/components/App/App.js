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
import emailjs from 'emailjs-com';
import {
  contactService,
  contactTemplate,
  publicKey,
} from '../../utils/mailUtils';

// images
import testSlides from '../../utils/galleryImages';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {
  // States
  // Popups
  const [isPopupForQuestionsOpen, setIsPopupForQuestionsOpen] = useState(false);
  const [isPopupForContactsOpen, setIsPopupForContactsOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  // Functions
  // Open popup with questions
  function handleQuestionClick() {
    setIsPopupForQuestionsOpen(true);
  }

  function handleContactsClick() {
    setIsPopupForContactsOpen(true);
  }

  function handleImageClick(imageData) {
    setSelectedImage(imageData);
    setIsImagePopupOpen(true);
  }

  // Close any popup
  function closeAllPopups() {
    setIsPopupForQuestionsOpen(false);
    setIsPopupForContactsOpen(false);
    setIsImagePopupOpen(false);
  }

  // Обработка ответа
  function handleAnswersSubmit(answers) {
    emailjs
      .send(contactService, contactTemplate, answers, publicKey)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    console.log(answers);
  }

  return (
    <div className='page'>
      <Header onContactsClick={handleContactsClick} />
      <Intro onQuestionsClick={handleQuestionClick} />
      <Formats />
      <About />
      <How />
      <Gallery slides={testSlides} onImageClick={handleImageClick} />
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

      <ImagePopup
        image={selectedImage}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
