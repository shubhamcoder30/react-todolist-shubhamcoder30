import React from 'react';
import { ListGroup } from 'react-bootstrap';


const List = props => {
  return <ListGroup.Item  variant="dark">{props.text} </ListGroup.Item>;
};
export default List;
