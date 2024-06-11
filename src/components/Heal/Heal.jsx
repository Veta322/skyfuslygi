import pivo from "../../image/folder.png";
import doc from "../../image/google-docs.png";

function Heal() {
  return (
    <section className="heal categories-content">
      <div className="categories-content__left">
        <h2 className="categories-content__title">Приём у врача</h2>
        <a className="categories-content__link" href="" target="_blanck">
          Запись на приём к врачу
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Вызов врача на дом
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Прикрепление к поликлинике
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Управление полисом РИМа
        </a>
        <h2 className="categories-content__title">Получение сведений</h2>
        <a className="categories-content__link" href="" target="_blanck">
          Справка о наличии лишнего веса
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Выписка о прохождении игры "С.р.а.л.к.е.р."
        </a>
        <h2 className="categories-content__title">Людям с инвалидностью</h2>
        <a className="categories-content__link" href="" target="_blanck">
          Право парковки если есть машина
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Обращение в бюро медэкспертизы
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Установление ежемесячной денежной выплаты
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Выписка из реестра
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Технические средства и услуги
        </a>
        <h2 className="categories-content__title">СКУФ-24</h2>
        <a className="categories-content__link" href="" target="_blanck">
          Запись на ежегодную скуфизацию
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Получить сертификат скуфа
        </a>
        <a className="categories-content__link" href="" target="_blanck">
          Получить свою альтушку
        </a>
      </div>
      <div className="heal__right">
        <div className="heal__pivo">
          <img className="heal__pivo_img" src={pivo} />
          <p className="heal__pivo_txt heal-txt">Пивная папка</p>
        </div>
        <div className="heal__list">
          <img className="heal__list_img" src={doc} />
          <p className="heal__list_txt heal-txt">Электронный больничный лист</p>
        </div>
        <div className="heal__sundry">
          <p className="heal__sundry_txt heal-txt">Разное</p>
        </div>
        <a className="heal__alt" href="https://store.steampowered.com/app/2901520/An_alt_girl_for_skoof/" target="_blanck">
          <p className="heal__alt_txt heal-txt">
            Госуударственная программа доступных альтушек
          </p>
        </a>
        <div className="heal__problema">
          <p className="heal__problema_txt heal-txt">
            Не нашли услугу? Ваша проблема
          </p>
        </div>
      </div>
    </section>
  );
}
export default Heal;
