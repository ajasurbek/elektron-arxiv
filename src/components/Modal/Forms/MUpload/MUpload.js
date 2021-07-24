import { Upload, message, Button } from 'antd';
import "./MUpload.css"
import { RiUploadCloudFill } from "react-icons/ri";
const { Dragger } = Upload;



const MUpload = () => {

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };


    return (
        <>
    <div className="andd">
    <Dragger {...props}>
      <div className="upload__wrapper" >
            <RiUploadCloudFill className='upload__icon' />
              <p className="upload__text">
              Файлни шу ерга ташланг ёки
              </p>
              <Button className="upload__btn"  >Файлни танланг</Button>
            </div>
    </Dragger>
    </div>
        </>
    )
} 

export default MUpload