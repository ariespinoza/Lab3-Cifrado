import CryptoJS from 'crypto-js';

const cifrar = (texto) => {
  const textoCifrado = CryptoJS.AES.encrypt(texto, '12345678').toString();
  return textoCifrado;
};

const descifrar = (texto) => {
  const bytes = CryptoJS.AES.decrypt(texto, '12345678');
  const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
  return textoDescifrado;
};

function App() {
  return (
    <div className="App">
      <h2>Texto Cifrado: {cifrar("JORGE")}</h2>
      <br />
      <h2>
        Texto Descifrado:{" "}
        {descifrar("U2FsdGVkX1/Np7vIIk/kbWaQlA6kX3zJLOqFQWxggWU=")}
      </h2>
      <br />
    </div>
  );
}

export default App;