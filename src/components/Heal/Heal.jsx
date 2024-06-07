import pivo from "../../image/folder.png"
import doc from "../../image/google-docs.png"

function Heal() {
  return (
    <section className="heal">
      <div className="heal__left">
        <h2 className="heal__title">Приём у врача</h2>
        <a className="heal__link" href="" target="_blanck">
          Запись на приём к врачу
        </a>
        <a className="heal__link" href="" target="_blanck">
          Вызов врача на дом
        </a>
        <a className="heal__link" href="" target="_blanck">
          Прикрепление к поликлинике
        </a>
        <a className="heal__link" href="" target="_blanck">
          Управление полисом РИМа
        </a>
        <h2 className="heal__title">Получение сведений</h2>
        <a className="heal__link" href="" target="_blanck">
          Справка о наличии лишнего веса
        </a>
        <a className="heal__link" href="" target="_blanck">
          Выписка о прохождении игры "С.р.а.л.к.е.р."
        </a>
        <h2 className="heal__title">Людям с инвалидностью</h2>
        <a className="heal__link" href="" target="_blanck">
          Право парковки если есть машина
        </a>
        <a className="heal__link" href="" target="_blanck">
          Обращение в бюро медэкспертизы
        </a>
        <a className="heal__link" href="" target="_blanck">
          Установление ежемесячной денежной выплаты
        </a>
        <a className="heal__link" href="" target="_blanck">
          Выписка из реестра
        </a>
        <a className="heal__link" href="" target="_blanck">
          Технические средства и услуги
        </a>
        <h2 className="heal__title">СКУФ-24</h2>
        <a className="heal__link" href="" target="_blanck">
          Запись на ежегодную скуфизацию
        </a>
        <a className="heal__link" href="" target="_blanck">
          Получить сертификат скуфа
        </a>
        <a className="heal__link" href="" target="_blanck">
          Получить свою альтушку
        </a>
      </div>
      <div className="heal__right">
        <div className="heal__pivo">
          <img className="heal__pivo_img" src={pivo}/>
          <p className="heal__pivo_txt">Пивная папка</p>
        </div>
        <div className="heal__list">
          <img className="heal__list_img" src={doc}/>
          <p className="heal__list_txt">Электронный больничный лист</p>
        </div>
        <div className="heal__sundry">
          <img className="heal__sundry_img" />
          <p className="heal__sundry_txt">Разное</p>
        </div>
        <div className="heal__alt">
          <img className="heal__alt_img" />
          <p className="heal__alt_txt">Госуударственная программа доступных альтушек</p>
        </div>
        <div className="heal__problema">
          <img className="heal__problema_img" />
          <p className="heal__problema_txt">Не нашли услуг? Ваша проблема</p>
        </div>
      </div>
    </section>
  );
}
export default Heal;
