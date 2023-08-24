function How() {
  return (
    <section className='how' id='how'>
      <h2 className="how__title">КАК ЭТО РАБОТАЕТ?</h2>
      <div className='how__container'>
        <hr className='how__stripe stripe1'></hr>
        <span className='how__text-bright'>1</span>
        <p className='how__text'>Вы заполняете анкету</p>
      </div>
      <div className='how__container'>
        <hr className='how__stripe stripe2'></hr>
        <span className='how__text-bright'>2</span>
        <p className='how__text'>Мы перезваниваем для уточнения деталей</p>
      </div>
      <div className='how__container'>
        <hr className='how__stripe stripe3'></hr>
        <span className='how__text-bright'>3</span>
        <p className='how__text'>Вы выбираете один из предложенных сценариев</p>
      </div>
      <div className='how__container'>
        <hr className='how__stripe stripe4'></hr>
        <span className='how__text-bright'>4</span>
        <p className='how__text'>Мы воплощаем его в жизнь</p>
      </div>
      <div className='how__container'>
        <hr className='how__stripe stripe5'></hr>
        <span className='how__text-bright'>5</span>
        <p className='how__text'>
          Вы получаете WOW-эффект и уже задумываетесь о следующем мероприятии
        </p>
      </div>
    </section>
  );
}

export default How;
