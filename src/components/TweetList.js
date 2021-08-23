import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTweetActions } from "../actions/tweetsActions";

export default function TweetList() {
  const tweets = useSelector((state) => state.tweets.tweets);
  return tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
}

function Tweet(props) {
  const { tweet } = props;

  const dispatch = useDispatch();
  const deleteTweet = (id) => dispatch(deleteTweetActions(id));

  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title>{tweet.name}</Card.Title>
        <Card.Text>{tweet.tweet}</Card.Text>
        <Button variant="danger" onClick={() => deleteTweet(tweet.id)}>
          Eliminar tweet
        </Button>
      </Card.Body>
    </Card>
  );
}