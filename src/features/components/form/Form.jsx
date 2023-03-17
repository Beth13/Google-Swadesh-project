import { useState } from "react";
import "../../styles/form.css";
import { Link } from "react-router-dom";
import { google, swodish } from "../../utils/words";
import { createData } from "../../gateway/gateway";
import countWords from "../../utils/countWords";

const Form = ({ setResultData, setAdvancedData }) => {
  const [formData, setFormData] = useState({
    name: "",
    subnameOfAuthor: "",
    genre: "",
    year: "",
  });

  const [sexData, setSexData] = useState("male");

  const [isOpenRes, setIsOpenRes] = useState(false);

  const [text, setText] = useState();

  const reader = new FileReader();

  const handleTextChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    reader.readAsText(file);

    reader.onload = function () {
      setText(reader.result);
    };

    reader.onerror = function () {
      alert("Загрузіть текст!");
    };
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSex = (event) => {
    setSexData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const counter = countWords(google, swodish, text);
    setAdvancedData(counter);

    const newData = {
      name: formData.name,
      subnameOfAuthor: formData.subnameOfAuthor,
      genre: formData.genre,
      sex: sexData,
      year: formData.year,
      google: Object.values(counter.googleCount).reduce((a, b) => a + b, 0),
      swodish: Object.values(counter.swodishCount).reduce((a, b) => a + b, 0),
    };

    createData(newData);
    setResultData(newData);
    setIsOpenRes(true);
  };

  return (
    <div className="formarea">
      {isOpenRes ? (
        <Link to="/result" className="link__btn">
          <button className="main__section-btn">Побачити результат</button>
        </Link>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="form-title">Провести аналіз</h1>
          <div className="form-control">
            <label className="form-label">Назва твору</label>
            <input
              onChange={handleChange}
              value={formData.name}
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Назва твору англійською мовою"
              required
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Прізвище автора
            </label>
            <input
              onChange={handleChange}
              value={formData.subnameOfAuthor}
              className="form-input"
              type="text"
              name="subnameOfAuthor"
              placeholder="Прізвище автора англійською мовою"
              required
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Оберіть стать автора
            </label>
            <select
              className="form-select"
              onChange={handleSex}
              value={sexData}
            >
              <option value="male">Чоловік</option>
              <option value="female">Жінка</option>
            </select>
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Жанр
            </label>
            <input
              onChange={handleChange}
              value={formData.genre}
              className="form-input"
              type="text"
              name="genre"
              placeholder="Введіть жанр, зазначений автором англійською мовою"
              required
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Рік написання твору
            </label>
            <input
              onChange={handleChange}
              value={formData.year}
              className="form-input"
              type="text"
              name="year"
              placeholder="Введіть рік написання, зазначений автором"
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Текст
            </label>
            <input
              onChange={handleTextChange}
              className="form-input"
              id="file"
              type="file"
              name="file-uploader"
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Провести аналіз
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
