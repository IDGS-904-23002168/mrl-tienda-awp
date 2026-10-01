import React, { useState, useEffect } from 'react'
import TarjetaProducto from './TarjetaProducto'

const productos = [
  {
    id: 1,
    titulo: 'Mayonesa Costeña',
    descripcion: 'Mayonesa Light',
    precio: '$35',
    imagen: '../img/imagen1.png',
  },
  {
    id: 2,
    titulo: 'Pepsi',
    descripcion: '500ml',
    precio: '$20',
    imagen: '../img/imagen2.jpg',
  },
  {
    id: 3,
    titulo: 'Oreos',
    descripcion: 'Galletas Oreo',
    precio: '$40',
    imagen: '../img/imagen3.jpg',
  },
  {
    id: 4,
    titulo: 'Sal marina',
    descripcion: '500g',
    precio: '$10',
    imagen: './img/imagen4.jpg',
  },
  {
    id: 5,
    titulo: 'Aceite vegetal',
    descripcion: '1l',
    precio: '$25',
    imagen: '/img/imagen5.jpg',
  },
]

const ListaProductos = () => {
  const [mostrarProducto, setMostrarProducto] = useState(null)

  const _handleVerProducto = (producto) => {
    setMostrarProducto(producto)
  }

  const _filtrarProductosPorPrecio = (minPrecio) => {
    return productos.filter((producto) => {
      const precioNumerico = parseFloat(producto.precio.replace('$', ''))
      return precioNumerico >= minPrecio
    })
  }

  const obtenerProductosPromesa = async () => {
          const respuesta = await Promise.resolve(productos)
      return respuesta
     
  }

  useEffect(() => {
    const cargarProductos = async () => {
      const productosObtenidos = await obtenerProductosPromesa()      
    }
    cargarProductos()
  }, [])

  return (
    <div className="container mt-4">
      <div className="row">
        {productos.map((producto) => {
          const { titulo, descripcion, precio, imagen } = producto
          return (
            <div key={producto.id} className="col-md-3">
              <TarjetaProducto
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
                imagen={imagen}
              />
            </div>
          )
        })}
        {mostrarProducto && (
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="alert alert-info">
                <h4>{mostrarProducto.titulo}</h4>
                <p>{mostrarProducto.descripcion} - {mostrarProducto.precio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaProductos