import React, { useState } from 'react'

import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ThemNguoiDung from './ThemNguoiDung';

const { Option } = Select;


export default function ThemPhimTemplate() {

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
        <div className="" >
            <Button type="primary" onClick={showDrawer} className="rounded">
                <i class="fa fa-plus mr-2"></i><i class="fa fa-user mx-2"></i>Thêm người dùng
            </Button>
            <Drawer
                title="Thêm người dùng mới"
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

                    </div>
                }

            >
                <Form layout="vertical" hideRequiredMark>
                    <ThemNguoiDung />
                </Form>
            </Drawer>
        </div>
    )
}
