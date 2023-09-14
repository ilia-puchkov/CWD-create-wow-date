function ImagePopup(props) {
  return (
    <div className={`popup popup_type_full-image ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}>
      <div className="popup__image-container">
        <img className="popup__image" src={props.image.src} alt={props.image.alt} />
        <p className="popup__signature">{props.image.alt}</p>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;