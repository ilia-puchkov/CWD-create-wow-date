import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormValidation from '../../utils/formValidation';

function PopupForContacts({ isOpen, onClose, onAddAnswers }) {
  const { values, errors, handleChange, isValid, resetForm } = useFormValidation();

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
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <div className='form__input-block'>
        <input
          className='form__input form__input_el_place'
          type='text'
          id='name-input'
          name='name'
          minLength='2'
          placeholder='Ваше имя'
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
          placeholder='Ваш телефон'
          value={values.phone || ''}
          onChange={handleChange}
          required
        />
        <label className='form__input-holder'>Ваше телефон</label>
        <span className='form__input-error phone-input-error form__input-error_visible'>
          {errors.phone}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default PopupForContacts;
