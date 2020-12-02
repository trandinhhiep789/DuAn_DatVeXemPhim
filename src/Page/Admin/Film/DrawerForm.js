import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;


export default function DrawerForm() {

    // state = { visible: false };
    const [state, setState] = useState({
        visible: false
    })

    const showDrawer = () => {
        setState({
            visible: true,
        });
    };

    const onClose = () => {
        setState({
            visible: false,
        });
    };

    return (
        <div className="w-100">
            {/* <Button type="primary" onClick={showDrawer}>
                <PlusOutlined /> New account
            </Button>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                visible={state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
              </Button>
                        <Button onClick={onClose} type="primary">
                            Submit
              </Button>
                    </div>
                }
            > */}
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="dateTime"
                            label=""
                            rules={[{ required: true, message: 'Please choose the dateTime' }]}

                        >
                            <DatePicker.RangePicker
                                style={{ width: '100%' }}
                                getPopupContainer={trigger => trigger.parentElement}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            {/* </Drawer> */}
        </div>
    )
}


// ReactDOM.render(<DrawerForm />, mountNode);


