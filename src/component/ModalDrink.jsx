import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './card.scss';

const ModalDrink = (props) => {
  const { bebidaSeleccionada } = useSelector((state) => state.drinks);
  const [bebidaData] = bebidaSeleccionada;
  const { show, onHide, onCancel } = props;

  return (
    <Modal show={show} onHide={onHide} onCancel={onCancel}>
      <Modal.Header closeButton className="modalH">
        <Modal.Title>{bebidaData?.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-image-modal">
          <img src={bebidaData?.strDrinkThumb} alt="Imagen de bebidaData" />
        </div>
        <div>
          <p className="p-instructions">Instrucciones:</p>
          <span className="span-instructions">
            {bebidaData?.strInstructions}
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCancel} className="button-modal">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDrink;

ModalDrink.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onCancel: PropTypes.func,
  strDrink: PropTypes.string,
};
