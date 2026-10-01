import React, { useState, useEffect } from 'react'
import TarjetaProducto from './TarjetaProducto'

const productos = [
  {
    id: 1,
    titulo: 'Arroz blanco',
    descripcion: 'Sacode de 1kg',
    precio: '$15',
    imagen: '../img/imagen1.png',
  },
  {
    id: 2,
    titulo: 'Frijoles negros',
    descripcion: 'Sacode de 500g',
    precio: '$12',
    imagen: '../img/imagen2.jpg',
  },
  {
    id: 3,
    titulo: 'Azúcar blanca',
    descripcion: 'Sacode de 1kg',
    precio: '$10',
    imagen: '../img/imagen3.jpg',
  },
  {
    id: 4,
    titulo: 'Sal marina',
    descripcion: 'Envase de 500g',
    precio: '$4',
    imagen: './img/imagen1.png',
  },
  {
    id: 5,
    titulo: 'Aceite vegetal',
    descripcion: 'Botella de 1l',
    precio: '$25',
    imagen: '/img/imagen2.jpg',
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
    try {
      const respuesta = await Promise.resolve(productos)
      return respuesta
    } catch (error) {
      console.error('Error al obtener productos:', error)
      return []
    }
  }

  useEffect(() => {
    const cargarProductos = async () => {
      const productosObtenidos = await obtenerProductosPromesa()
      console.log('Productos cargados:', productosObtenidos.length)
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