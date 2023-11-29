import { useContext } from 'react';
import { TarjetaNoticia, ImagenTarjetaNoticia, TituloTarjetaNoticia, FechaTarjetaNoticia, DescripcionTarjetaNoticia, BotonLectura } from '../styled'
import { INoticiasNormalizadas } from '../types/noticia.type'
import { NoticiasContext } from '../context/NoticiasContext';


const Tarjeta :React.FC<{ noticia: INoticiasNormalizadas }>= ({ noticia }) => {
  const {toggleModal} = useContext(NoticiasContext)
  return (
    <li>
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => toggleModal(noticia)}>Ver más</BotonLectura>
        </TarjetaNoticia>
    </li>
  )
}

export default Tarjeta
