import { Button, Form, Icon, Input, Select, Switch, Tooltip, Upload } from 'antd';
import React from 'react';

const FormItem = Form.Item;
const Option = Select.Option;

class UploadDataForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.normFile = this.normFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.props.history.push("/csv");
        });
    }

    normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    colon={false}
                    {...formItemLayout}
                    label="Lab (institution, city)"
                    hasFeedback
                >
                    {getFieldDecorator('lab', {
                        rules: [
                            {
                                required: true,
                                message: 'Please indicate your lab',
                            },
                        ],
                    })(<Input />)}
                </FormItem>

                <FormItem
                    colon={false}
                    {...formItemLayout}
                    label="Magnetic field strength"
                    hasFeedback
                >
                    {getFieldDecorator('magneticFieldStrength', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select a magnetic field strength',
                            },
                        ],
                    })(
                        <Select placeholder="Please select a magnetic field strength">
                            <Option value="3">3</Option>
                            <Option value="1.5">1.5</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    colon={false}
                    {...formItemLayout}
                    label="FreeSurfer version"
                    hasFeedback
                >
                    {getFieldDecorator('freeSurferVersion', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select a FreeSurfer version',
                            },
                        ],
                    })(
                        <Select placeholder="Please select a FreeSurfer version">
                            <Option value="5.0">5.0</Option>
                            <Option value="6.0">6.0</Option>
                            <Option value="7.0">7.0</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    colon={false}
                    {...formItemLayout}
                    label="Brand"
                    hasFeedback
                >
                    {getFieldDecorator('brand', {
                        rules: [
                            { required: true, message: 'Please select a brand' },
                        ],
                    })(
                        <Select placeholder="Please select a brand">
                            <Option value="Siemens">Siemens</Option>
                            <Option value="GE">GE</Option>
                            <Option value="Philips">Philips</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    colon={false}
                    style={{ textAlign: 'left' }}
                    {...formItemLayout}
                    label={
                        <span>
                            Store in our database &nbsp;
                            <Tooltip title="We will only store your data with your consent.">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('switch', { valuePropName: 'checked' })(
                        <Switch />
                    )}
                </FormItem>

                <FormItem colon={false} {...formItemLayout} label="File">
                    <div className="dropbox">
                        {getFieldDecorator('file', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please upload your data',
                                },
                            ],
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">
                                    Click to select a file or drag a file here
                                </p>
                                <p className="ant-upload-hint">
                                    Your data will not be stored in our database
                                    unless you checked the "store in our database"
                                    option
                                </p>
                            </Upload.Dragger>
                        )}
                    </div>
                </FormItem>

                <FormItem colon={false} wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(UploadDataForm);
