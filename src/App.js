import React from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import FormValidation from './components/FormValidation/FormValidation';
import NumberGuessingGame from './components/NumberGuessingGame/NumberGuessingGame';
import ClickButtons from './components/ClickButtons/ClickButtons';
import NoteApp from './components/NoteApp/NoteApp';

function App() {
  const images = [
    '/images/image1.webp',
    '/images/image2.webp',
    '/images/image3.webp',
    '/images/image4.webp',
  ];

  return (
    <div className="App">
      <h1>React Hooks and Props</h1>
      <h2>La galeria del mas grande!! - 9/12/18 - Moriste en madrid bostero</h2>
      <ImageGallery images={images} />
      <FormValidation />
      <NumberGuessingGame />
      <ClickButtons />
      <NoteApp />
    </div>
  );
}

export default App;
