import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweetAction } from "../actions/tweetsActions";
import moment from "moment";

//Componente encargado de mostrar la lista de Tweets
const TweetList = () => {
  const tweets = useSelector(state => state.tweets.tweets);

  if (!tweets || tweets.length === 0) {
    return <h3 className="mt-3 pt-3 text-center">Sin Tweets...</h3>;
  }

  return tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />);
};

//Componente interno que muestra cada Tweet individual
const Tweet = ({ tweet }) => {
  //Ejecución de las acciones para eliminar el Tweet
  const dispatch = useDispatch();
  const deleteTweet = id => dispatch(deleteTweetAction(id));
  const time = moment(tweet.date).format("DD/MM/YY, h:mm a");

  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title>{tweet.name}</Card.Title>
        <Card.Text>{tweet.tweet}</Card.Text>
        <Button variant="danger" onClick={() => deleteTweet(tweet.id)}>
          Eliminar
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted text-right">{time}</Card.Footer>
    </Card>
  );
};

export default TweetList;
