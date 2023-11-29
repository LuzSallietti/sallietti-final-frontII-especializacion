import { createContext, useState, FC } from 'react';
import { INoticiasNormalizadas } from '../types/noticia.type';

interface NoticiasContextProps {
	modal: INoticiasNormalizadas | null;
  noticias: INoticiasNormalizadas[] | [];
	toggleModal: (noticia: INoticiasNormalizadas | null) => void;
  guardarNoticias: (noticias : INoticiasNormalizadas []) => void;
  }

interface NoticiasProviderProps {
  children: React.ReactNode;
}


export const NoticiasContext = createContext({} as NoticiasContextProps)

const NoticiasProvider: FC<NoticiasProviderProps>  = ({ children }) => {

  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null)
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]) 
  
  const toggleModal = (noticia : INoticiasNormalizadas | null) => {
    setModal(noticia)
  }

  const guardarNoticias = (noticias: INoticiasNormalizadas[]) => {
    setNoticias(noticias)
  }

  return (
    <NoticiasContext.Provider value={{
      modal,
      noticias,
      toggleModal,
      guardarNoticias
    }}>
      {children}
    </NoticiasContext.Provider>
    )
}

export default NoticiasProvider;