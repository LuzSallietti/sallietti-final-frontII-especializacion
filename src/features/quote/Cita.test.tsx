import {render, screen, fireEvent, waitFor} from "../../test-utils";
import Cita from "./Cita";

describe("Pruebas en App", () => {
	test("Debe verificar que la cita sea del personaje ingresado", async () => {
		render(<Cita />);

		const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
		fireEvent.change(input, {target: {value: "Lisa"}});

		const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    
    await waitFor(() => {
      expect(screen.getByText(/Lisa Simpson/i)).toBeInTheDocument()
    });

  });
  
  test('Obtener cita aleatoria', async() => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    
    // Esperar por un intervalo de tiempo con una promesa
    // await Promise.resolve(setTimeout(resolve, 3000));

    await waitFor(() => {
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    });

    screen.debug();
  
  })

  test('Se renderizan en UI los elementos del componente', ()=>{
    render(<Cita/>)
    const mensaje = screen.getByText(/No se encontro ninguna cita/i)
    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
    const obtenerBoton = screen.getByRole('button', {name:/Obtener cita aleatoria/i})
    const borrarBoton = screen.getByRole('button', {name:/Borrar/i})
 
    
    expect(mensaje).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(obtenerBoton).toBeInTheDocument()
    expect(borrarBoton).toBeInTheDocument()
 })

 test('Renderiza el mensaje CARGANDO...', async () => {
  render(<Cita />);
  const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
  fireEvent.change(input, { target: { value: /lisa/i } })
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i)
  fireEvent.click(obtenerBoton)

  const cargando = await screen.findByText(/CARGANDO.../i)
  expect(cargando).toBeInTheDocument()
});

test('Limpiar input con el botón Borrar', () => {
  render(<Cita />);
  const input= screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
  const borrarBoton = screen.getByLabelText(/Borrar/i);
  fireEvent.change(input, { target: { value: 'Homer' } });
  fireEvent.click(borrarBoton);
  expect(input).toHaveValue('');
});

test('Borrar contenido del input y de la cita con el botón Borrar', () => {
  render(<Cita />);
  const input= screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
  const mensaje = screen.getByText(/No se encontro ninguna cita/i);
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i)
  const borrarBoton = screen.getByLabelText(/Borrar/i);
  fireEvent.change(input, { target: { value: 'Lisa' } })
  fireEvent.click(obtenerBoton)
  fireEvent.click(borrarBoton);
  expect(mensaje).toBeInTheDocument()
  
});

test('Mensaje de error al ingresar un número', async () => {
  render(<Cita />);
  const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i);

  fireEvent.change(input, { target: { value: 5 } });
  fireEvent.click(obtenerBoton);
  await waitFor(() => {
      expect(screen.getByText(/Por favor ingrese un nombre válido/i)).toBeInTheDocument()
    });
});

});
