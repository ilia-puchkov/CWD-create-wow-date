import popupBackground from '../../images/about-background.png';

function PopupWithForm({
  name,
  title,
  onSubmit,
  buttonText,
  onClose,
  isDisabled,
  isOpen,
  children,
  isButtonShown,
  isHeaderShown,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          className={`popup__close-button`}
          type='button'
          onClick={onClose}
        ></button>
        <h2 className={`popup__header ${isHeaderShown ? 'header_shown' : ''}`}>
          {title}
        </h2>
        <form className='form popup__form' name={name} onSubmit={onSubmit}>
          {children}
          <label className='form__checkbox-text'>
            отправляя свои данные вы соглашаетесь с политикой конфиденциальности
          </label>
          <button
            className={`form__save-button ${
              isDisabled ? 'form__save-button_disabled' : ''
            } ${isButtonShown ? 'popup__save-button-visible' : ''}`}
            disabled={isDisabled ? true : false}
            type='submit'
          >
            {buttonText}
          </button>
        </form>

        <img className='popup__background' src={popupBackground} />
      </div>
    </div>
  );
}
export default PopupWithForm;
