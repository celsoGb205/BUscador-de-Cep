import { useState } from "react";
import Container from "./components/Container"; // Importe o novo componente
import './style.css';
import api from "./services/api";

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`); // Uso correto de await
      setCep(response.data)
      setInput("")
    } catch (error) {
      alert("Erro ao buscar o CEP. Tente novamente!");
      setInput("")
    }
  }

  return (
    <Container input={input} setInput={setInput} handleSearch={handleSearch} cep={cep} setCep={setCep} />
  );
}

export default App;