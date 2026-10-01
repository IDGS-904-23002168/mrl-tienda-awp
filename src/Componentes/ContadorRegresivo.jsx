import React, { useState, useEffect } from 'react'
import ListaProductos from './ListaProductos'

const ContadorRegresivo = ({ tiempoInicial = 3 }) => {
  const [tiempo, setTiempo] = useState(tiempoInicial)
  const [productosCargados, setProductosCargados] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setTiempo((t) => {
        if (t <= 1) {
          clearInterval(id)
          setProductosCargados(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const tiempoFormateado = `${tiempo} segundos`

  if (productosCargados) {
    return <ListaProductos />
  }

  return (
    <div className="container text-center py-5">
      <h2>Bienvenido a la tienda</h2>
      <div className="display-1 fw-bold">{tiempoFormateado}</div>
      <p>El catalogo se cargara en seguida...</p>
    </div>
  )
}

export default ContadorRegresivo