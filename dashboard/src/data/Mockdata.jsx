//LLAMADAS A LAS APIS

//const baseUrl = 'http://localhost:5000';
const baseUrl = 'https://tp-inicial-backend.onrender.com';

export const oeePromedio = await fetch(`${baseUrl}/api/oeePromedio`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const cumplimientoPlanData = await fetch(`${baseUrl}/api/planProduccion`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const desperdicioProductosData = await fetch(`${baseUrl}/api/desperdicioProductos`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const datosNoConformidades = await fetch(`${baseUrl}/api/datosNoConformidades`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const ausentismoPorDepartamento = await fetch(`${baseUrl}/api/ausentismoPorDepartamento`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const produccionPorTipo = await fetch(`${baseUrl}/api/produccionPorTipo`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());

export const eficienciaPorProducto = await fetch(`${baseUrl}/api/eficienciaPorProducto`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json());
