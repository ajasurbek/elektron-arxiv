import { Upload, message, Button } from 'antd';
import React, { Children, useState, useEffect } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { BaseUrl } from '../../../BaseUrl';

const UploadJs = ({setFile, ocr}) => {
  console.log(ocr)
  const [info, setInfo] = useState([])
  
  useEffect(() => {
    setInfo ({
      ocr: ocr,
      ...info,
     
    })
  
  }, [])
  console.log(info);
const props = {
    name: 'avatar',
    multiple:false,
    action: `${BaseUrl}/photo`,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
        setFile(BaseUrl + info.file.response.slice(1))
      // console.log(info.file, info.fileList);
      var fileName = info.fileList[0].name;
var fileExtension = fileName.split('.').pop();
// if (fileExtension == "jpg" || fileExtension == "jpeg") {
// console.log('salom')
// } else {
//   console.log('boshqa format  ekan');
// }
setInfo({
  nomi: info.fileList[0].name,
path: info.fileList[0].response,
})

    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

    return (<>
    <Upload {...props}>
       <Button icon={<UploadOutlined />}>Click to Upload</Button>
   </Upload>
   </>
    )
}
export default UploadJs
