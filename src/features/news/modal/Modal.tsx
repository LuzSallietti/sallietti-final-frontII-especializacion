import { useContext } from 'react';
import { ContenedorModal } from '../styled';
import ContenidoModal from './ContenidoModal';
import { INoticiasNormalizadas } from '../types/noticia.type';
import { NoticiasContext } from '../context/NoticiasContext';

/*Refactorización sigue el Principio de Responsabilidad única
dividiendo la lógica de presentación del modal en un componente separado
(Contenido) y el componente principal (Modal) que maneja el estado y la lógica de suscripción.
Separa las responsabilidades en dos componentes.*/

const Modal:React.FC<{ noticia: INoticiasNormalizadas }>= ({ noticia }) => {
  
  const {toggleModal} = useContext(NoticiasContext)

  const handleSubscription = () => {
    setTimeout(() => {
      alert('¡Suscripto!');
      toggleModal(null);
    }, 1000);
  };

  const handleClose = () => {
    toggleModal(null);
  };
   
  return (
    <ContenedorModal>
      <ContenidoModal noticia={noticia} onSubscribe={handleSubscription} onClose={handleClose} />
    </ContenedorModal>
  );
};

export default Modal;