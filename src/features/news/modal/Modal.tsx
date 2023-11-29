import { ContenedorModal } from '../styled';
import ContenidoModal from './ContenidoModal';
import { INoticiasNormalizadas } from '../Noticias';

interface ModalProps {
  noticia: INoticiasNormalizadas;
  setModal: (noticia: INoticiasNormalizadas | null) => void;
}
/*Refactorización sigue el Principio de Responsabilidad única
dividiendo la lógica de presentación del modal en un componente separado
(Contenido) y el componente principal (Modal) que maneja el estado y la lógica de suscripción.
Separa las responsabilidades en dos componentes.*/

const Modal = ({ noticia, setModal }: ModalProps) => {
  const handleSubscription = () => {
    setTimeout(() => {
      alert('¡Suscripto!');
      setModal(null);
    }, 1000);
  };

  const handleClose = () => {
    setModal(null);
  };
  
  

  return (
    <ContenedorModal>
      <ContenidoModal noticia={noticia} onSubscribe={handleSubscription} onClose={handleClose} />
    </ContenedorModal>
  );
};

export default Modal;