import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormValidation from '../../utils/formValidation';
import { useState } from 'react';

function PopupForQuestions({ isOpen, onClose, onAddAnswers }) {
  const { values, errors, handleChange, isValid, resetForm } =
    useFormValidation();

  const [currentQuestion, setCurrentQuestion] = useState(1);

  function handleClose() {
    resetForm();
    setCurrentQuestion(1);
    onClose();
  }

  function newQuestion() {
    let nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    onAddAnswers(values);
    setCurrentQuestion(1);
    resetForm();
    onClose();
  }

  return (
    <PopupWithForm
      name='questions'
      title='Заполнить анкету'
      buttonText='Отправить анкету'
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
      isButtonShown={currentQuestion === 8 ? true : false}
      isHeaderShown={
        currentQuestion === 1 || currentQuestion === 8 ? true : false
      }
    >
      <div
        className={`form__question-block ${
          currentQuestion === 1 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block'>
          <label className='form__question'>
            Узнаем ваши предпочтения и организуем уникальное мероприятие!
          </label>
        </div>
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>

      <div
        className={`form__question-block ${
          currentQuestion === 2 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block block-question'>
          <label className='form__question form__question-big'>
            1. По какому поводу мероприятие?
          </label>
          <input
            className='form__input form__input_el_question1'
            type='text'
            id='question1-input'
            name='question1'
            placeholder='Ваш ответ'
            minLength='2'
            // maxLength='30'
            value={values.question1 || ''}
            onChange={handleChange}
          />
          <span className='form__input-error question-input-error form__input-error_visible'>
            {errors.question1}
          </span>
        </div>
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>
      <div
        className={`form__question-block ${
          currentQuestion === 3 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block block-question'>
          <label className='form__question form__question-big'>
            2. Желаемая дата и время мероприятия
          </label>
          <input
            className='form__input form__input_el_question2'
            type='text'
            id='question2-input'
            name='question2'
            placeholder='Ваш ответ'
            minLength='2'
            // maxLength='30'
            value={values.question2 || ''}
            onChange={handleChange}
          />
          <span className='form__input-error question-input-error form__input-error_visible'>
            {errors.question2}
          </span>
        </div>
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>

      <div
        className={`form__question-block ${
          currentQuestion === 4 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block block-question'>
          <label className='form__question form__question-big'>
            3. Бюджетные рамки
          </label>
          <input
            className='form__input form__input_el_question3'
            type='text'
            id='question3-input'
            name='question3'
            placeholder='Ваш ответ'
            minLength='2'
            // maxLength='30'
            value={values.question3 || ''}
            onChange={handleChange}
          />
          <span className='form__input-error question-input-error form__input-error_visible'>
            {errors.question3}
          </span>
        </div>
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>

      <div
        className={`form__question-block ${
          currentQuestion === 5 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block block-question'>
          <label className='form__question form__question-big'>
            4. Какую атмосферу праздника вы бы хотели создать?
          </label>
          <input
            className='form__input form__input_el_question4'
            type='text'
            id='question4-input'
            name='question4'
            placeholder='Ваш ответ'
            minLength='2'
            // maxLength='30'
            value={values.question4 || ''}
            onChange={handleChange}
          />
          <span className='form__input-error question-input-error form__input-error_visible'>
            {errors.question4}
          </span>
        </div>
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>

      <div
        className={`form__question-block ${
          currentQuestion === 6 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block block-question'>
          <label className='form__question form__question-big'>
            5. Увлечения/хобби и то, что очень любит человек, для которого
            устраиваем мероприятие
          </label>
          <input
            className='form__input form__input_el_question5'
            type='text'
            id='question5-input'
            name='question5'
            placeholder='Ваш ответ'
            minLength='2'
            // maxLength='30'
            value={values.question5 || ''}
            onChange={handleChange}
          />
          <span className='form__input-error question-input-error form__input-error_visible'>
            {errors.question5}
          </span>
        </div>
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>

      <div
        className={`form__question-block ${
          currentQuestion === 7 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block block-question'>
          <label className='form__question form__question-big'>
            6. Что-то важное, что по вашему мнению нам нужно знать
            <br />
            <span className='form__question-extra'>
              (аллергия, фобии, личные травмы, физические ограничения...)
            </span>
          </label>
          <input
            className='form__input form__input_el_question6'
            type='text'
            id='question6-input'
            name='question6'
            placeholder='Ваш ответ'
            minLength='2'
            // maxLength='30'
            value={values.question6 || ''}
            onChange={handleChange}
          />
          <span className='form__input-error question-input-error form__input-error_visible'>
            {errors.question6}
          </span>
        </div>{' '}
        <button
          className='questions__button'
          onClick={newQuestion}
          type='button'
        >
          Далее
        </button>
      </div>

      <div
        className={`form__question-block ${
          currentQuestion === 8 ? 'form__question-visible' : ''
        }`}
      >
        <div className='form__input-block'>
          <input
            className='form__input form__input_el_place'
            type='text'
            id='name-input'
            name='name'
            minLength='2'
            maxLength='30'
            placeholder='Ваше имя'
            value={values.name || ''}
            onChange={handleChange}
            required
          />
          {/* <label className='form__input-holder'>Ваше имя</label> */}
          <span className='form__input-error name-input-error form__input-error_visible'>
            {errors.name}
          </span>
        </div>
        <div className='form__input-block'>
          <input
            className='form__input form__input_el_place-link'
            type='tel'
            id='phone-input'
            name='phone'
            placeholder='Ваш телефон'
            value={values.phone || ''}
            onChange={handleChange}
            required
          />
          {/* <label className='form__input-holder'>Ваш телефон</label> */}
          <span className='form__input-error phone-input-error form__input-error_visible'>
            {errors.phone}
          </span>
        </div>
      </div>
    </PopupWithForm>
  );
}

export default PopupForQuestions;
