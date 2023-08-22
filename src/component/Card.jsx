import PropTypes from 'prop-types';
import './card.css';
import ModalDrink from './ModalDrink';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { consultReceta } from '../redux/thunks';

const Card = ({ bebida }) => {
  const { idDrink, strDrink, strDrinkThumb } = bebida;
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={strDrinkThumb} alt="Imagen de bebida" />
        </div>
        <div className="card-title">{strDrink}</div>
        <div className="card-button">
          <button
            onClick={() => {
              setModalShow(true);
              dispatch(consultReceta(idDrink));
            }}
          >
            Receta
          </button>
        </div>
      </div>
      <ModalDrink
        show={modalShow}
        onHide={handleClose}
        onCancel={handleClose}
      />
    </>
  );
};

export default Card;

Card.propTypes = {
  bebida: PropTypes.object,
};
