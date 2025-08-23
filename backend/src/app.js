const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// datos simulados de usuarios y contraseñas con rol
const users = [
    { username: 'admin', password: 'admin123', rol: 'Administrador' },
    { username: 'panadero', password: 'pan123', rol: 'Panadero Principal' },
    { username: 'vendedor', password: 'ventas123', rol: 'Vendedor' },
    { username: 'demo', password: 'demo123', rol: 'Usuario Demo' }
];
// Verifica que el usuario exista y que la contraseña sea correcta
app.post('/api/autenticarUsuario', (req, res) => {
    const {username,password} = req.body;

    const user = users.find(u => 
        u.username === username && u.password === password
    );
  
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  
    res.json(user);
});

// datos simulados de produccion planificada vs real con cumplimiento
const cumplimientoPlanData = [
  { producto: 'Pan de Molde', planificado: 1200, real: 1150, cumplimiento: 95.8 },
  { producto: 'Galletas', planificado: 800, real: 720, cumplimiento: 90.0 },
  { producto: 'Tortas', planificado: 500, real: 490, cumplimiento: 98.0 },
  { producto: 'Panes Saborizados', planificado: 950, real: 1020, cumplimiento: 107.4 },
  { producto: 'Facturas', planificado: 650, real: 600, cumplimiento: 92.3 },
  { producto: 'Prepizzas', planificado: 720, real: 680, cumplimiento: 94.4 },
  { producto: 'Budines', planificado: 600, real: 550, cumplimiento: 91.7 },
  { producto: 'Medialunas', planificado: 1000, real: 950, cumplimiento: 95.0 }
];
// obtener datos de produccion planificada
app.get('/api/planProduccion', (req, res) => {
  res.json(cumplimientoPlanData);
});

// datos simulados de desperdicio de productos
const desperdicioProductosData = [
  { producto: 'Pan de Molde', desperdicio: 4.2, tendencia: 'estable'},
  { producto: 'Galletas', desperdicio: 3.1, tendencia: 'estable'},
  { producto: 'Tortas', desperdicio: 6.8, tendencia: 'alerta'},
  { producto: 'Panes Saborizados', desperdicio: 2.9, tendencia: 'estable'},
  { producto: 'Facturas', desperdicio: 5.5, tendencia: 'alerta'},
  { producto: 'Prepizzas', desperdicio: 3.7, tendencia: 'estable'},
  { producto: 'Budines', desperdicio: 7.2, tendencia: 'critica'},
  { producto: 'Medialunas', desperdicio: 4.9, tendencia: 'estable'}
];
// obtener datos de desperdicio de productos
app.get('/api/desperdicioProductos', (req, res) => {
  res.json(desperdicioProductosData);
});

// datos simulados de no conformidades
const datosNoConformidades = [
  { tipo: 'Higiene y Limpieza', cantidad: 15},
  { tipo: 'Temperatura inadecuada', cantidad: 12},
  { tipo: 'Embalaje defectuoso', cantidad: 9},
  { tipo: 'Etiquetado incorrecto', cantidad: 8},
  { tipo: 'Peso irregular', cantidad: 5},
  { tipo: 'Color anómalo', cantidad: 4},
  { tipo: 'Otros', cantidad: 2}
];
// obtener datos de no conformidades
app.get('/api/datosNoConformidades', (req, res) => {
  res.json(datosNoConformidades);
});

const oeePromedio = {
  oee: 78.2,
  disponibilidad: 91.7,
  rendimiento: 89.1,
  calidad: 96.0,
  metaOEE: 85.0
};
app.get('/api/oeePromedio', (req, res) => {
  res.json(oeePromedio);
});

const ausentismoPorDepartamento = [
  { 
    departamento: 'Producción', 
    ausentismo: 9.8, 
    tardanza: 14.2, 
    empleados: 20,
    impactoProduccion: 'Alto',
    productos: ['Pan de Molde', 'Facturas', 'Panes Saborizados']
  },
  { 
    departamento: 'Calidad', 
    ausentismo: 5.2, 
    tardanza: 8.7, 
    empleados: 8,
    impactoProduccion: 'Medio',
    productos: ['Todos']
  },
  { 
    departamento: 'Logística', 
    ausentismo: 7.5, 
    tardanza: 11.3, 
    empleados: 7,
    impactoProduccion: 'Medio',
    productos: ['Distribución']
  },
  { 
    departamento: 'Administración', 
    ausentismo: 4.1, 
    tardanza: 6.9, 
    empleados: 6,
    impactoProduccion: 'Bajo',
    productos: ['Gestión']
  },
  { 
    departamento: 'Limpieza', 
    ausentismo: 12.3, 
    tardanza: 16.8, 
    empleados: 4,
    impactoProduccion: 'Alto',
    productos: ['Áreas de producción']
  }
];
app.get('/api/ausentismoPorDepartamento', (req, res) => {
  res.json(ausentismoPorDepartamento);
});

const produccionPorTipo = [
  { tipo: 'Panificados básicos', produccion: 2850, meta: 3000 },
  { tipo: 'Facturas y bollería', produccion: 1800, meta: 2000 },
  { tipo: 'Tortillas y prepizzas', produccion: 950, meta: 1000 },
  { tipo: 'Productos saludables', produccion: 1200, meta: 1300 },
];
app.get('/api/produccionPorTipo', (req, res) => {
  res.json(produccionPorTipo);
});

const eficienciaPorProducto = [
  { nombre: 'Pan de Molde', eficiencia: 95, produccion: 1200 },
  { nombre: 'Pan Flauta', eficiencia: 89, produccion: 850 },
  { nombre: 'Pan Integral', eficiencia: 92, produccion: 800 },
  { nombre: 'Medialunas', eficiencia: 84, produccion: 950 },
  { nombre: 'Vigilantes', eficiencia: 87, produccion: 850 },
  { nombre: 'Pan sin TACC', eficiencia: 91, produccion: 700 }
];
app.get('/api/eficienciaPorProducto', (req, res) => {
  res.json(eficienciaPorProducto);
});

// ruta de inicio
app.get('/', (req, res) => {
  res.json({ 
    message: '¡Backend Express funcionando!',
    endpoints: {
      users: '/api/users',
      userById: '/api/users/:id'
    }
  });
});

// ruta de salud
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});