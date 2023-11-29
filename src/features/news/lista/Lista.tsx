import React from 'react'
import { ListaProps } from '../types/lista.type';
import { ListaNoticias } from '../styled';



const Lista = ({ noticias, render }: ListaProps) => {

  return (    
    <ListaNoticias>        
        {noticias.map((noticia) => {
         return render(noticia)
        })}
    </ListaNoticias>    
  )
}

export default Lista