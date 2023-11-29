import { INoticiasNormalizadas } from "./noticia.type";

export interface ModalProps {
    noticia: INoticiasNormalizadas;
    onSubscribe: () => void;
    onClose: () => void;
}