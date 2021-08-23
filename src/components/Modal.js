import { Modal as ModalBoost } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

export default function Modal(props) {
  const { children } = props;

  // Dispatch para ejecutar nuestras acciones.
  const dispatch = useDispatch();

  const closeAddTweetModal = (state) =>
    dispatch(openCloseAddTweetModalAction(state));

  const closeModal = () => {
    closeAddTweetModal(false);
  };

  // useSelector para acceder a un valor en el stores
  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

  return (
    <ModalBoost show={isOpenModal} onHide={closeModal} size="lg" centered>
      {children}
    </ModalBoost>
  );
}
