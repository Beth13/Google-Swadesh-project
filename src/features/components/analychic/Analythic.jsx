import { Link } from "react-router-dom";
import "../../styles/analythic.css";

const Analythic = ({ resultData }) => {
  return (
    <section className="res">
      <h1 className="res__title">Ось результат аналізу</h1>
      <div className="res__main">
        <table>
          <thead>
            <tr>
              <th>Значення</th>
              <th>Результат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Назва книги</td>
              <td>{resultData.name}</td>
            </tr>
            <tr>
              <td>Прізвище автора</td>
              <td>{resultData.subnameOfAuthor}</td>
            </tr>
            <tr>
              <td>Стать автора</td>
              <td>{resultData.sex}</td>
            </tr>
            <tr>
              <td>Жанр твору</td>
              <td>{resultData.genre}</td>
            </tr>
            <tr>
              <td>Рік написання твору</td>
              <td>{resultData.year}</td>
            </tr>
            <tr>
              <td>Підраховано слів за таблицею від Google</td>
              <td>{resultData.google}</td>
            </tr>
            <tr>
              <td>Підраховано слів за таблицею Сводиша</td>
              <td>{resultData.swodish}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to="/words" className="link__btn">
        <button className="res__btn">
          Побачити кількість кожного слова за таблицями
        </button>
      </Link>

      <Link to="/" className="link__btn">
        <button className="res__btn">На головну</button>
      </Link>
    </section>
  );
};

export default Analythic;
