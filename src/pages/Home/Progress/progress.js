import React from 'react';
import axios from "axios";

// antd 
import { Row, Col } from 'antd';
 import CheckboxCard from '../../../components/Card/Card'

export const Progress = () => {

    return(
        <div className="progress">
        <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <CheckboxCard/>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
            </Col>
        </Row>

        </div>
        
    );
}


export default Progress;

