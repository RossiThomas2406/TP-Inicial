//LLAMADAS A LAS APIS

export const oeePromedio = await fetch('http://localhost:5000/api/oeePromedio', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const cumplimientoPlanData = await fetch('http://localhost:5000/api/planProduccion', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const desperdicioProductosData = await fetch('http://localhost:5000/api/desperdicioProductos', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const datosNoConformidades = await fetch('http://localhost:5000/api/datosNoConformidades', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const ausentismoPorDepartamento = await fetch('http://localhost:5000/api/ausentismoPorDepartamento', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const produccionPorTipo = await fetch('http://localhost:5000/api/produccionPorTipo', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const eficienciaPorProducto = await fetch('http://localhost:5000/api/eficienciaPorProducto', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());
