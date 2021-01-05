import React, { useState } from 'react';
import { Card, Table } from 'antd';
import styled from 'styled-components';

import Content from 'components/Content';
import Loading from 'components/Loading';
import user from './user.json';
import { AddNew } from './components';

const WrapBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
`;

interface User {
    type: string;
    first: string;
    last: string;
    gender: string;
    email: string;
}

const Index: React.FC = () => {
    const [records, setRecords] = useState(user);
    const colums = [
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'First Name',
            dataIndex: 'first',
        },
        {
            title: 'Last Name',
            dataIndex: 'last',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    function addNewRow(user: User): void {
        setRecords([user, ...records]);
    }
    return (
        <Content>
            <Card title="USER" type="inner">
                <WrapBtn>
                    <AddNew addNewRow={addNewRow} />
                </WrapBtn>
                <Table
                    loading={{ spinning: false, indicator: <Loading /> }}
                    pagination={false}
                    bordered
                    size="small"
                    columns={colums}
                    dataSource={records}
                />
            </Card>
        </Content>
    );
};

export default Index;
