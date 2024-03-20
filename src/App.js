import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';

function App() {
  const [text, setText] = useState('');

  const generateQRCode = () => {
    const canvas = document.querySelector("canvas");
    canvas.toBlob(function(blob) {
      saveAs(blob, "QRCode.png");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl mt-auto mb-4 font-bold text-center">QR Code Generator</h1>
        <input
          type="text"
          placeholder="Enter text for QR Code"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-400 mt-10  px-4 py-2 mb-4 rounded-lg w-full focus:outline-none focus:border-blue-500"
        />
        {text && (
          <div className="flex justify-center mt-10 mb-4">
            <QRCode value={text} />
          </div>
        )}
        <button onClick={generateQRCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Download QR Code
        </button>
      </div>
    </div>
  );
}

export default App;
