import { rest } from 'msw'
import { API_URL } from '../app/constants'

export const citaPersonaje = [
  {
      quote: "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: "Lisa Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
      characterDirection: "Right"
    
  }
]


export const citaRandom = [
  {    
      quote: "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort." ,
      character: "Homer Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
      characterDirection: "Right",
     
  }
]

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
     const data = req.url.searchParams.get('character') ? citaPersonaje : citaRandom
     console.log('Ejecutando desde msw', data)       
     
      return res(
          ctx.status(200),
          ctx.json(data)
      )
  })
]