import { Link } from "react-router-dom";
import "../../styles/main.css";

const MainPage = () => {
  return (
    <section className="main">
      <h1 className="main__title">
        Знаходження закономірності в тематично-параметричних текстах для аналізу
        розподілу частовживаних слів
      </h1>
      <div className="main__section">
        <span className="main__section-span">
          Загрузіть будь який текст: літературу, речення тощо та отримайте
          статистику по кількості найчастіше зустрічуваних слів за версією
          таблиці Сводиша та Google
        </span>
        <Link to="/form" className="link">
          <button className="main__section-btn">Провести аналіз</button>
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
