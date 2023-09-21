import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormValidation from '../../utils/formValidation';

function PopupForContacts({ isOpen, onClose, onAddAnswers }) {
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
      name='add-contacts'
      title='Заказать звонок'
      buttonText='Заказать'
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
      isButtonShown={true}
    >
      <div className='form__input-block'>
        <input
          className='form__input form__input_el_place'
          type='text'
          id='contacts-name-input'
          name='name'
          minLength='2'
          maxLength='30'
          placeholder='ИМЯ'
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        {/* <label className='form__input-holder'>ИМЯ</label> */}
        <span className='form__input-error name-input-error form__input-error_visible'>
          {errors.name}
        </span>
      </div>
      <div className='form__input-block'>
        <input
          className='form__input form__input_el_place-link'
          type='tel'
          id='contacts-phone-input'
          placeholder='ТЕЛЕФОН'
          name='phone'
          value={values.phone || ''}
          onChange={handleChange}
          required
        />
        {/* <label className='form__input-holder'>ТЕЛЕФОН</label> */}
        <span className='form__input-error phone-input-error form__input-error_visible'>
          {errors.phone}
        </span>
      </div>
      <div className='form__checkbox-block'>
        {/* <button type='checkbox' className='form__checkbox' required></button> */}
        <label className='form__checkbox-text'>
          отправляя свои данные вы соглашаетесь с политикой конфиденциальности
        </label>
      </div>
    </PopupWithForm>
  );
}

export default PopupForContacts;
