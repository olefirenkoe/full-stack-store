import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device =  {id: 1, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'};
    const description = [
        {id: 1, title: 'RAM', description: '5GB'},
        {id: 2, title: 'Camera', description: '12mp'},
        {id: 3, title: 'CPU', description: 'SnapDragon'},
        {id: 4, title: 'AMR', description: '5GB'},
        {id: 5, title: 'Accumulator', description: '4000 MAh'},

    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h1>{device.name}</h1>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontsize: 32, border: '5px solid lightgrey'}}
                    >
                        <span>{device.price} UAH</span>
                        <Button variant={"outline-danger"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Description</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;