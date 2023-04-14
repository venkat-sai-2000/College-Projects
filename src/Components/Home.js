import { Tab } from "bootstrap";
import React, { useEffect, useState } from "react";
import {Table, Container, Button, Row, Col, Badge, ListGroup, ListGroupItem} from 'react-bootstrap';


const Home = (props) => {
    const propList= ["Who would win in General Elections","Who is capable as CM","Who is more capable as leader"]
    const previousList = ["Student elections 2021", "President elections 2021"]
    const upcomingList = ["Student elections 2022", "President elections 2022"]
  return (
    <div>
        <Container>
            <Table style={{margin: "5vh"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Polls</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        propList.map( (el, index) =>{
                            return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el}</td>
                                <td><Button onClick={() => props.changeCandidates(el)}>Go to Poll</Button></td>
                            </tr>
                        )})
                    }

                </tbody>
            </Table>
        </Container>

        <Container style={{marginLeft: "20vw"}}>
            <Row>
                <Col>
                    <Badge bg="primary" style={{marginBottom: "2vh"}}><h5>Upcoming Elections</h5></Badge> 
                </Col>
                <Col><Badge bg="secondary" style={{marginBottom: "2vh"}}><h5>Previous Elections</h5></Badge></Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                            {
                                upcomingList.map((index) => {
                                    return(
                                           <p>{index}</p>               //upcoming election list
                                    )})
                            }
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                            {
                                previousList.map((index) => {
                                    return(
                                           <p>{index}</p>               //previous election list
                                    )})
                            }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>
    
  )

}
export default Home
