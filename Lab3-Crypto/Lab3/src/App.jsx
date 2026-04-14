import { useState } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';

function App() {
  const [textoPlano, setTextoPlano] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const clave = '12345678';

  const cifrar = (texto) => {
    return CryptoJS.AES.encrypt(texto, clave).toString();
  };

  const descifrar = (texto) => {
    const bytes = CryptoJS.AES.decrypt(texto, clave);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const handleCifrar = () => {
    if (!textoPlano.trim()) {
      alert('Ingresa un texto primero');
      return;
    }

    const resultado = cifrar(textoPlano);
    setTextoCifrado(resultado);
    setTextoDescifrado('');
  };

  const handleDescifrar = () => {
    if (!textoCifrado.trim()) {
      alert('Primero debes cifrar un texto');
      return;
    }

    const resultado = descifrar(textoCifrado);
    setTextoDescifrado(resultado);
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Lab 3 - Cifrado de Seguridad</h1>
        <p className="subtitle">Ingresa un texto, cífralo y luego descífralo</p>

        <div className="form-group">
          <label className="label">Texto</label>
          <input
            type="text"
            value={textoPlano}
            onChange={(e) => setTextoPlano(e.target.value)}
            placeholder="Escribe aquí tu texto"
            className="input"
          />
        </div>

        <div className="button-container">
          <button onClick={handleCifrar} className="primary-button">
            Cifrar
          </button>

          <button onClick={handleDescifrar} className="secondary-button">
            Descifrar
          </button>
        </div>

        <div className="result-box">
          <h3 className="result-title">Texto cifrado</h3>
          <p className="result-text">
            {textoCifrado || 'Aquí aparecerá el texto cifrado'}
          </p>
        </div>

        <div className="result-box">
          <h3 className="result-title">Texto original</h3>
          <p className="result-text">
            {textoDescifrado || 'Aquí aparecerá el texto descifrado'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;