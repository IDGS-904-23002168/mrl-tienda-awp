import React from 'react'

const TarjetaProducto = ({ titulo, descripcion, precio, imagen }) => {
  const estilo = {
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    padding: '12px',
    textAlign: 'center',
    margin: '12px',
    maxWidth: '200px',
  }

  const imagenStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    marginBottom: '8px',
  }

  return (
    <div style={estilo}>
      <img src={imagen} alt={titulo} style={imagenStyle} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p><strong>Precio: {precio}</strong></p>
    </div>
  )
}

export default TarjetaProducto