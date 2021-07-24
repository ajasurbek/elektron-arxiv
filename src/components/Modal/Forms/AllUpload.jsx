import React, {  useState } from 'react';
import { createWorker } from 'tesseract.js';
import 'antd/dist/antd.css'; 
import UploadJs from './UploadJs';
import { Button } from 'antd';

const AllUpload = () => {
  const [ocr, setOcr] = useState();
  const [file, setFile] = useState(null)
  const worker = createWorker({
    // logger: m => console.log(m),        
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('uzb_cyrl');
    await worker.initialize('uzb_cyrl');
    const { data: { text } } = await worker.recognize(file);
    setOcr(
text

   );
  };
  
  const extract = () => {
      doOCR()
  }

  console.log( 'deeeeee',  ocr);
  return (  
    <div className="App">
      {/* <p>{ocr}</p> */}
      <UploadJs accept=".png, .jpg" ocr={ocr}  multiple={false} maxCount={1} setFile={setFile}>
      </UploadJs>
      <br />
      <Button type="primary" onClick={extract}> Extract text </Button>
    </div>
  );
}

export default AllUpload;
