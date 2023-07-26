import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const carritoLS = typeof window!== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [] // ?? por si es la primera vez que el usuario entra para que el carrito esté vacío y no NULL
    //console.log(carritoLS)
  
    const [carrito, setCarrito] = useState(carritoLS)
    const [whatsapp, setWhatsapp]= useState('')
  
    useEffect(()=> {
      localStorage.setItem('carrito', JSON.stringify(carrito))
      const pedidoWhatsapp = () => {
        const chain = carrito.map (articulo => `%0A •${articulo.cantidad} ${articulo.nombre} `)
        const convertURL = chain.toString().replace(/\s/g, "%20")
        console.log(convertURL)
        setWhatsapp(convertURL)
      }
      pedidoWhatsapp()
    },[carrito])
  
    //funcion - funciones globales, states, etc...
    const agregarCarrito = guitarra => {
      // Comprobar si la guitarra ya esta en el carrito...
      if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
          // Iterar para actualizar la cantidad
          const carritoActualizado = carrito.map( guitarraState => {
              if( guitarraState.id === guitarra.id ) {
                  guitarraState.cantidad = guitarra.cantidad;
              } 
              return guitarraState;
          });
          // Se asigna al array
          setCarrito([...carritoActualizado]);
          localStorage.setItem('carrito', JSON.stringify( carrito ));
      } else {
          // En caso de que el articulo no exista, es nuevo y se agrega
          setCarrito([...carrito, {...guitarra, cantidad:1}]);
          localStorage.setItem('carrito', JSON.stringify( carrito ));
      }
    }

    const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id ) {
        guitarraState.cantidad = parseInt( guitarra.cantidad )
        } 
        return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    return(
        <CartContext.Provider
            value={{
                carrito,
                agregarCarrito,
                eliminarProducto,
                actualizarCantidad,
                whatsapp
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export const useCart = () => useContext(CartContext)