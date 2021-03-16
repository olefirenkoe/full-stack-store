import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card
                style={{cursor: 'pointer', width: 150}}
                border={'light'}
            >
                <Image width={150} height={150} src={device.img}/>
                <div>
                    <div>{device.name}</div>
                    <div>
                        <div>{device.rating}</div>
                        <Image src={star}/>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;