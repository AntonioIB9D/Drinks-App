import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './card.scss';

const ModalDrink = (props) => {
  const { bebidaSeleccionada = [], isLoading } = useSelector(
    (state) => state.drinks
  );
  console.log(bebidaSeleccionada);
  const { show, onHide, onCancel } = props;

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (bebidaSeleccionada[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {bebidaSeleccionada[`strIngredient${i}`]} {'-'}{' '}
            {bebidaSeleccionada[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    !isLoading && (
      <Modal show={show} onHide={onHide} onCancel={onCancel}>
        <Modal.Header closeButton className="modalH">
          <Modal.Title>{bebidaSeleccionada?.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-image-modal">
            <img
              src={bebidaSeleccionada?.strDrinkThumb}
              alt="Imagen de bebidaData"
            />
          </div>
          <div>
            <p className="p-instructions">Ingredientes: </p>
            <p>{mostrarIngredientes()}</p>
          </div>
          <br></br>
          <div>
            <p className="p-instructions">Instrucciones:</p>
            <span className="span-instructions">
              {bebidaSeleccionada?.strInstructions}
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCancel} className="button-modal">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default ModalDrink;

ModalDrink.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onCancel: PropTypes.func,
  strDrink: PropTypes.string,
};
