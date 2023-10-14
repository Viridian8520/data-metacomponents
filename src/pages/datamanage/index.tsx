/* @jsxImportSource @emotion/react */
import { Button, Card, Form, Input, Select, Space, Upload, UploadProps, message } from 'antd';
import { FC, ReactElement, Fragment, useRef, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons'
import { deleteDevice, getDevice, uploadFile } from './service';
import style from './index.module.css'
import AddDeviceModal from './addDeviceModal';

const props: UploadProps = {
  action: 'http://localhost:8080/rest/data/access/file/upload',
  customRequest: (options: any) => {
    let formData = new FormData();
    formData.append("file", options.file);
    uploadFile(formData).then(res => {
      options.onSuccess(res, options.file);
      message.success("上传成功！")
    })
  },
};

const DataManage: FC = (): ReactElement => {
  const currentFormData: any = useRef();
  const [dataSource, setDataSource] = useState({
    total: 0,
    devices: [],
  });
  const addDeviceModalRef: any = useRef();

  const onFinish = (values: any) => {
    currentFormData.current = { ...values };
    const params = {
      ...values,
      offset: 0,
      limit: 999,
    }
    getDevice(params).then((res: any) => {
      setDataSource(res.data);
    })
  }

  return (
    <Fragment>
      <div
        css={{
          border: "1px solid #bbbbbb",
          padding: "20px"
        }}
      >
        <div
          css={{
            display: "flex",
          }}
        >
          <span
            css={{
              flex: "1",
            }}
          >
            已接入设备{dataSource.total}个
          </span>
          <Form
            layout="inline"
            // initialValues={{ granularity: 1, time: 1690946777 }}
            onFinish={onFinish}
            css={{
              display: 'inline-flex'
            }}
          >
            <Form.Item
              name="types"
              css={{
                flex: "1",
              }}
            >
              <Select
                placeholder="请选择"
                css={{
                  width: '100px !important',
                }}
              >
                <Select.Option value={1}>ip地址</Select.Option>
                <Select.Option value={2}>端口号</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="statement"
              css={{
                flex: "1",
              }}
            >
              <Input placeholder='请输入查询内容' />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
            <span
              css={{
                flex: "1",
              }}
            >
              <Button
                type="primary"
                className={style.btnSuccess}
                onClick={() => {
                  addDeviceModalRef.current.open();
                }}
              >
                添加设备
              </Button>
            </span>
          </Form>
        </div>
        <Space size={[8, 16]} wrap>
          {dataSource.devices.map((item: any, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card
              key={index}
              size="small"
              title={`设备${item.id}`}
              extra={
                <Button
                  danger
                  type="text"
                  onClick={() => {
                    deleteDevice([{
                      ip: item.ip,
                      port: item.port,
                    }]).then((res: any) => {
                      if (res.data === -1) {
                        message.error("删除失败！请稍后重试！");
                      } else if (res.data === 1) {
                        message.success("删除成功！");
                        const params = {
                          ...currentFormData.current,
                          offset: 0,
                          limit: 999,
                        }
                        getDevice(params).then((res: any) => {
                          setDataSource(res.data.devices);
                        })
                      }
                    })
                  }}
                >
                  删除
                </Button>
              }
              style={{ width: 350 }}
            >
              <div>ip地址：{item.ip}</div>
              <div>端口号：{item.port}</div>
            </Card>
          ))}
        </Space>
      </div>
      <div
        css={{
          marginTop: "20px",
        }}
      >
        <Card>
          <span
            css={{
              display: 'inline-block',
              width: '100%',
            }}
          >
            <h3>上传文件</h3>
            <div
              css={{
                marginTop: "10px",
              }}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>上传模板格式文件</Button>
              </Upload>
            </div>
          </span>

        </Card>
      </div>
      <AddDeviceModal modalRef={addDeviceModalRef} />
    </Fragment>
  )
}

export default DataManage;