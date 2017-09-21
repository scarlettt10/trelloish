import React from 'react';
import { Button, Header, Container, Card } from 'semantic-ui-react';

const Board = () => (
  <div>
    <Card>
      <Card.Content>
        <Header textAlign='center'>Name</Header>
        <Card.Description>Description</Card.Description>
      </Card.Content>
    
      <Button.Group>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Button.Group>
    </Card>
  </div>
)

export default Board;