import { useEffect, useContext } from "react";
import { NoticiasContext } from "./context/NoticiasContext";
import Tarjeta from "./tarjeta/Tarjeta";
import Modal from "./modal/Modal";
import Lista from "./lista/Lista";
import { obtenerInformacion } from "./helpers/helpers";
import { ContenedorNoticias, TituloNoticias } from "./styled";


const Noticias = () => {
  
  const {modal, noticias, guardarNoticias} = useContext(NoticiasContext);

  useEffect(() => {    
    obtenerInformacion()
    .then(response => guardarNoticias(response))
    .catch(error => console.error(error))    
  }, []);

  return (    
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <Lista noticias={noticias} render={(noticia) => {
        return(
        <Tarjeta key={noticia.id} noticia={noticia}/>        
        )}}/>
        { modal && <Modal noticia={modal}/>}
    </ContenedorNoticias>    
  );
};

export default Noticias;