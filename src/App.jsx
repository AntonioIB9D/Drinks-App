import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { consultBebidas, consultaCategoria } from './redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Components/Card';

function App() {
  const { categoria, bebidas } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(consultBebidas(data));
  };

  useEffect(() => {
    dispatch(consultaCategoria());
  }, [dispatch]);

  return (
    <>
      <header>
        <h1>Bebidas</h1>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contenedorForm">
            <div className="inputbebidan">
              <label htmlFor="bedidaN">Nombre de bebida: </label>
              <input {...register('BebidaN', { required: true })} />
            </div>
            <div className="inputbebidan">
              <label htmlFor="bedidaE">Categoría de bebida: </label>
              <select {...register('CategoriaB', { required: true })}>
                <option value="">Seleccione una categoría</option>
                {categoria?.map((cat) => (
                  <option key={cat.strCategory} value={cat.strCategory}>
                    {cat.strCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="button-form">
            <input type="submit" />
          </div>
        </form>
      </div>

      <div className="containerDrinks">
        {bebidas?.map((bebida) => (
          <Card bebida={bebida} key={bebida.idDrink} />
        ))}
      </div>
    </>
  );
}

export default App;
