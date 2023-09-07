import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormValidation from '../../utils/formValidation';

function PopupForQuestions({ isOpen, onClose, onAddAnswers }) {
  const { values, errors, handleChange, isValid, resetForm } =
    useFormValidation();

  function handleClose() {
    resetForm();
    onClose();
  }

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    onAddAnswers(values);

    resetForm();
    onClose();
  }

  return (
    <PopupWithForm
      name='questions'
      title='Новая анкета'
      buttonText='Отправить'
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <div className='form__input-block'>
        <p className='form__question'>1. По какому поводу мероприятие?</p>
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
          required
        />
        <span className='form__input-error question-input-error form__input-error_visible'>
          {errors.question1}
        </span>
      </div>
      <div className='form__input-block'>
      <p className='form__question'>1. По какому поводу мероприятие?</p>
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
          required
        />
        <span className='form__input-error question-input-error form__input-error_visible'>
          {errors.question2}
        </span>
      </div>
      <div className='form__input-block'>
      <p className='form__question'>1. По какому поводу мероприятие?</p>
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
          required
        />
        <span className='form__input-error question-input-error form__input-error_visible'>
          {errors.question3}
        </span>
      </div>
      <div className='form__input-block'>
      <p className='form__question'>1. По какому поводу мероприятие?</p>
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
          required
        />
        <span className='form__input-error question-input-error form__input-error_visible'>
          {errors.question4}
        </span>
      </div>
      <div className='form__input-block'>
      <p className='form__question'>1. По какому поводу мероприятие?</p>
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
          required
        />
        <span className='form__input-error question-input-error form__input-error_visible'>
          {errors.question5}
        </span>
      </div>
      <div className='form__input-block'>
      <p className='form__question'>1. По какому поводу мероприятие?</p>
        <input
          className='form__input form__input_el_question6'
          type='text'
          id='question1-input'
          name='question6'
          placeholder='Ваш ответ'
          minLength='2'
          // maxLength='30'
          value={values.question6 || ''}
          onChange={handleChange}
          required
        />
        <span className='form__input-error question-input-error form__input-error_visible'>
          {errors.question6}
        </span>
      </div>
      <div className='form__input-block'>
        <input
          className='form__input form__input_el_place'
          type='text'
          id='name-input'
          name='name'
          minLength='2'
          maxLength='30'
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        <label className='form__input-holder'>Ваше имя</label>
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
          value={values.phone || ''}
          onChange={handleChange}
          required
        />
        <label className='form__input-holder'>Ваш телефон</label>
        <span className='form__input-error phone-input-error form__input-error_visible'>
          {errors.phone}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default PopupForQuestions;
