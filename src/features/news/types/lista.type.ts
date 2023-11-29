import { INoticiasNormalizadas } from "./noticia.type";

export interface ListaProps {
    noticias : INoticiasNormalizadas []
    render: (noticia: INoticiasNormalizadas ) => React.ReactNode;     
}