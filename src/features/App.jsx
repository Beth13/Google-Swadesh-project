import MainPage from "./components/mainpage/MainPage";
import Form from "./components/form/Form";
import Navigation from "./components/navigation/Navigation";
import Analythic from "./components/analychic/Analythic";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Words from "./components/analychic/Words";

function App() {
  const [resultData, setResultData] = useState({
    name: "",
    subnameOfAuthor: "",
    genre: "",
    sex: "",
    google: 0,
    swodish: 0,
  });

  const [advancedData, setAdvancedData] = useState({});

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/form"
          element={
            <Form
              setAdvancedData={setAdvancedData}
              setResultData={setResultData}
              resultData={resultData}
            />
          }
        ></Route>
        <Route
          path="/result"
          element={<Analythic resultData={resultData} />}
        ></Route>
        <Route
          path="/words"
          element={<Words advancedData={advancedData} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
