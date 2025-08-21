// PRODUCTOS DE LA PYME ALIMENTICIA
export const productos = {
  panificados: ['Pan de Molde', 'Pan Flauta', 'Pan Integral', 'Pan Saborizado'],
  facturas: ['Medialunas', 'Vigilantes', 'Facturas Comunes'],
  especiales: ['Pan sin TACC', 'Tortas', 'Budines', 'Prepizzas', 'Galletas']
};

// PRODUCCIÓN AGRUPADA POR CATEGORÍA (kg por semana)
export const produccionPorTipo = [
  { tipo: 'Panificados básicos', produccion: 2850, meta: 3000 },
  { tipo: 'Facturas y bollería', produccion: 1800, meta: 2000 },
  { tipo: 'Tortillas y prepizzas', produccion: 950, meta: 1000 },
  { tipo: 'Productos saludables', produccion: 1200, meta: 1300 },
];

// EFICIENCIA POR PRODUCTO (% real vs planificado)
export const eficienciaPorProducto = [
  { nombre: 'Pan de Molde', eficiencia: 95, produccion: 1200 },
  { nombre: 'Pan Flauta', eficiencia: 89, produccion: 850 },
  { nombre: 'Pan Integral', eficiencia: 92, produccion: 800 },
  { nombre: 'Medialunas', eficiencia: 84, produccion: 950 },
  { nombre: 'Vigilantes', eficiencia: 87, produccion: 850 },
  { nombre: 'Pan sin TACC', eficiencia: 91, produccion: 700 }
];

// CUMPLIMIENTO DEL PLAN DE PRODUCCIÓN
export const cumplimientoPlanData = [
  { producto: 'Pan de Molde', planificado: 1200, real: 1150, cumplimiento: 95.8 },
  { producto: 'Galletas', planificado: 800, real: 720, cumplimiento: 90.0 },
  { producto: 'Tortas', planificado: 500, real: 490, cumplimiento: 98.0 },
  { producto: 'Panes Saborizados', planificado: 950, real: 1020, cumplimiento: 107.4 },
  { producto: 'Facturas', planificado: 650, real: 600, cumplimiento: 92.3 },
  { producto: 'Prepizzas', planificado: 720, real: 680, cumplimiento: 94.4 },
  { producto: 'Budines', planificado: 600, real: 550, cumplimiento: 91.7 },
  { producto: 'Medialunas', planificado: 1000, real: 950, cumplimiento: 95.0 }
];

// DATOS OEE (EFICIENCIA GENERAL)
export const oeePromedio = {
  oee: 78.2,
  disponibilidad: 91.7,
  rendimiento: 89.1,
  calidad: 96.0,
  metaOEE: 85.0
};

// DESPERDICIO POR PRODUCTO (%)
export const desperdicioProductosData = [
  { producto: 'Pan de Molde', desperdicio: 4.2, meta: 5.0, tendencia: 'baja', produccion: 1150 },
  { producto: 'Galletas', desperdicio: 3.1, meta: 4.0, tendencia: 'estable', produccion: 720 },
  { producto: 'Tortas', desperdicio: 6.8, meta: 6.0, tendencia: 'alerta', produccion: 490 },
  { producto: 'Panes Saborizados', desperdicio: 2.9, meta: 4.5, tendencia: 'baja', produccion: 1020 },
  { producto: 'Facturas', desperdicio: 5.5, meta: 5.0, tendencia: 'alerta', produccion: 600 },
  { producto: 'Prepizzas', desperdicio: 3.7, meta: 4.0, tendencia: 'estable', produccion: 680 },
  { producto: 'Budines', desperdicio: 7.2, meta: 6.5, tendencia: 'critica', produccion: 550 },
  { producto: 'Medialunas', desperdicio: 4.9, meta: 5.0, tendencia: 'estable', produccion: 950 }
];

// CALIDAD - NO CONFORMIDADES
export const calidadData = {
  totalControles: 245,
  conformes: 218,
  noConformes: 27,
  tasaNoConformidad: 11.0,
  meta: 8.0,
  detallesNoConformes: [
    { tipo: 'Temperatura', cantidad: 8, porcentaje: 29.6, productosAfectados: ['Pan de Molde', 'Tortas'] },
    { tipo: 'Peso', cantidad: 6, porcentaje: 22.2, productosAfectados: ['Galletas', 'Facturas'] },
    { tipo: 'Envase', cantidad: 5, porcentaje: 18.5, productosAfectados: ['Prepizzas', 'Budines'] },
    { tipo: 'Color', cantidad: 4, porcentaje: 14.8, productosAfectados: ['Panes Saborizados'] },
    { tipo: 'Sabor', cantidad: 3, porcentaje: 11.1, productosAfectados: ['Medialunas'] },
    { tipo: 'Otros', cantidad: 1, porcentaje: 3.7, productosAfectados: ['Varios'] }
  ]
};

// ASISTENCIA Y TARDANZA
export const ausentismoData = [
  { semana: 'Sem 1', ausentismo: 8.2, ausencias: 37, produccionTotal: 5200, eficiencia: 88.5 },
  { semana: 'Sem 2', ausentismo: 6.8, ausencias: 31, produccionTotal: 5800, eficiencia: 92.3 },
  { semana: 'Sem 3', ausentismo: 10.5, ausencias: 47, produccionTotal: 4800, eficiencia: 85.1 },
  { semana: 'Sem 4', ausentismo: 7.3, ausencias: 33, produccionTotal: 5600, eficiencia: 90.7 },
  { semana: 'Sem 5', ausentismo: 9.1, ausencias: 41, produccionTotal: 5100, eficiencia: 87.2 }
];

export const tardanzaData = [
  { semana: 'Sem 1', tardanza: 12.5, tardanzas: 28, desperdicio: 5.2, cumplimiento: 88.5 },
  { semana: 'Sem 2', tardanza: 9.8, tardanzas: 22, desperdicio: 4.1, cumplimiento: 92.3 },
  { semana: 'Sem 3', tardanza: 15.2, tardanzas: 35, desperdicio: 6.8, cumplimiento: 85.1 },
  { semana: 'Sem 4', tardanza: 11.1, tardanzas: 25, desperdicio: 4.7, cumplimiento: 90.7 },
  { semana: 'Sem 5', tardanza: 13.7, tardanzas: 31, desperdicio: 5.5, cumplimiento: 87.2 }
];

// ESTADÍSTICAS GENERALES
export const statsAsistencia = {
  promedioAusentismo: 8.4,
  promedioTardanza: 12.5,
  totalEmpleados: 45,
  totalSemanas: 5,
  produccionPromedio: 5300, // kg por semana
  eficienciaPromedio: 88.8  // %
};

// DATOS POR DEPARTAMENTO
export const ausentismoPorDepartamento = [
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

// KPIs PARA LAS CARDS (coherentes con los datos anteriores)
export const kpiCardsData = [
  {
    title: "Cumplimiento Plan",
    value: "94.8",
    suffix: "%",
    icon: "🎯",
    color: "#4A90E2",
    descripcion: "Promedio de cumplimiento del plan de producción"
  },

  {
    title: "No Conformidades",
    value: "11.0",
    suffix: "%",
    icon: "✅",
    color: "#8B5CF6",
    descripcion: "Productos fuera de especificación"
  },
  
  {
    title: "OEE General",
    value: "78.2",
    suffix: "%",
    icon: "⚡",
    color: "#F59E0B",
    descripcion: "Eficiencia general de equipos"
  },
  {
    title: "Ausentismo",
    value: "8.4",
    suffix: "%",
    icon: "👥",
    color: "#EF4444",
    descripcion: "Tasa promedio de ausencias"
  }
];