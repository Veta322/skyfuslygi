import done from "../../image/shield-check.svg";
import megafon from "../../image/megaphone.svg";
import mail from "../../image/envelope.svg";
import ok from "../../image/9079484.png";
function Notifications() {
  return (
    <section className="notif__content">
      <div className="content__left">
        <h1 className="notif__title">Уведомления и платежи</h1>
        <div className="notif">
          <div className="notif__el">
            <img className="notif__el_image" src={done} />
            <div className="notif__el_info">
              <p className="notif__el_type">Заявление</p>
              <p className="notif__el_time">28.03.24 в 10:37</p>
            </div>
            <div>
              <div className="notif__el_info">
                <p className="notif__el_text">
                  Подача заявления о замене общегражданского паспорта
                </p>
                <p className="notif__el_status">Заявление учтено</p>
              </div>
            </div>
          </div>
          <div className="notif__el">
            <img className="notif__el_image" src={megafon} />
            <div className="notif__el_info">
              <p className="notif__el_type">Новости</p>
              <p className="notif__el_time">05.02.24 в 14:50</p>
            </div>
            <div>
              <div className="notif__el_info">
                <p className="notif__el_text">
                  Решайте вопросы в официальном чате дома
                </p>
                <p className="notif__el_status">Скуфуслуги</p>
              </div>
            </div>
          </div>
          <div className="notif__el">
            <img className="notif__el_image" src={mail} />
            <div className="notif__el_info">
              <p className="notif__el_type">Скуфпочта</p>
              <p className="notif__el_time">03.01.24 в 07:00</p>
            </div>
            <div>
              <div className="notif__el_info">
                <p className="notif__el_text">
                  Подтверждение расторжения брака
                </p>
                <p className="notif__el_status">Портал Скуфуслуг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content__right">
        <p className="right__title">Все уведомления</p>
        <div className="right__el">
          <img className="right__el_icon" src={ok} />
          <h2 className="right__el_title">Ура, вы скуф!</h2>
          <p className="right__el_subtitle">Это официально</p>
        </div>
        <div className="right__el_alt"></div>
      </div>
    </section>
  );
}

export default Notifications;
