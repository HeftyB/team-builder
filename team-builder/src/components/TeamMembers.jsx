import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import myspaceTom from "../MyspaceTom.jpeg"

export default function TeamMembers(props) {
    const {teamMembers} = props;

    const team = teamMembers.map( (item) => {
        return (
            <div className="teamMember" key={item.id}>
                <Card>
                <CardImg className="userImg" top width="10%" src={myspaceTom} alt="IMG of USER" />
                <CardBody>
                    <CardTitle>Name: {item.name}</CardTitle>
                    <CardSubtitle>Role: {item.role}</CardSubtitle>
                    <CardText>Email: {item.email}</CardText>
                    <Button 
                    // git clickevent callback to direct user to git
                    >User's Git</Button>
                </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <div>
            <h1>This is the current Team</h1>
            {team}            
        </div>
    )
}
