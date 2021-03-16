import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{cursor: 'pointer', width: 150}}
                border={'light'}
            >
                <Image width={150} height={150} src={device.img}/>
                <div className="mt-1 text-black-50 d-flex justify-content-between align-items-center">
                    <div>Brand...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={15} height={15}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;