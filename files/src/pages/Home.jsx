import React from 'react';
import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;

function Home() {
  return (
    <Row
      style={{ textAlign: 'center' }}
    >
      <Col span={24}>
        <Title>
            Green Gaming Studios
        </Title>
        <Text type="secondary">
          Creating Beautiful Digital Solutions
        </Text>
      </Col>
    </Row>
  );
}

export default Home;
