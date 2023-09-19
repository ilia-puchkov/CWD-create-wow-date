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
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <img className='popup__background' src={popupBackground} />
        <h2 className='popup__header'>{title}</h2>
        <form
          className='form popup__form'
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
          className={`form__save-button ${isDisabled ? 'form__save-button_disabled' : ''}`}
          disabled={isDisabled ? true : false} type='submit'>
            {buttonText}
          </button>
        </form>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
export default PopupWithForm;
