import { Upload, Modal } from "antd";
import React from "react";

function getBase64(file:any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWall extends React.Component<any, any>  {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: this.props?.images,
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file:any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }:any) => this.props.setimages(fileList);

  render() {
    const { previewVisible, previewImage, previewTitle } = this.state;
    const uploadButton = (
      <div>
        +
        <div style={{ marginTop: 8 }}>Yuklash</div>
      </div>
    );

    return (
      <>
        <Upload
          action=""
          listType="picture-card"
          maxCount={this.props.maxCount}
          fileList={this.props.images}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          customRequest={({ onSuccess }:any) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
        >
          {this.props.images.length >= this.props.maxCount ? null : uploadButton}
        </Upload>
        <Modal
          open={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
}
export default PicturesWall;