// KPIs PARA LAS CARDS (coherentes con los datos anteriores)
export const kpiCardsData = [
  {
    title: "Cumplimiento Plan",
    value: "94.8",
    suffix: "%",
    icon: "🎯",
    color: "#64a37fff",
    descripcion: "Promedio de cumplimiento del plan de producción"
  },

  {
    title: "Tasa de Desperdicio",
    value: "11.0",
    suffix: "%",
    icon: "🗑️",
    color: "#e0ab47ff",
    descripcion: "Productos fuera de especificación"
  },
  
  {
    title: "Tasa de No Conformidades",
    value: "5.6",
    suffix: "%",
    icon: "⛔",
    color: "#FF8042",
    descripcion: "Eficiencia general de equipos"
  },

  {
    title: "Tasa de Ausentismo",
    value: "8.4",
    suffix: "%",
    icon: "👥",
    color: "#cc493dff",
    descripcion: "Tasa promedio de ausencias"
  },

    {
    title: "Tardanza Promedio",
    value: "12.5",
    suffix: "min",
    icon: "⏱️",
    color: "#8b83beff",
    descripcion: "Tasa promedio de ausencias"
  }
];

// DATOS OEE (EFICIENCIA GENERAL)
export const oeePromedio = {
  oee: 78.2,
  disponibilidad: 91.7,
  rendimiento: 89.1,
  calidad: 96.0,
  metaOEE: 85.0
};

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

// DESPERDICIO POR PRODUCTO (%)
export const desperdicioProductosData = [
  { producto: 'Pan de Molde', desperdicio: 4.2, tendencia: 'estable'},
  { producto: 'Galletas', desperdicio: 3.1, tendencia: 'estable'},
  { producto: 'Tortas', desperdicio: 6.8, tendencia: 'alerta'},
  { producto: 'Panes Saborizados', desperdicio: 2.9, tendencia: 'estable'},
  { producto: 'Facturas', desperdicio: 5.5, tendencia: 'alerta'},
  { producto: 'Prepizzas', desperdicio: 3.7, tendencia: 'estable'},
  { producto: 'Budines', desperdicio: 7.2, tendencia: 'critica'},
  { producto: 'Medialunas', desperdicio: 4.9, tendencia: 'estable'}
];

// NO CONFORMIDADES DETECTADAS (cantidad por tipo)
export const datosNoConformidades = [
  { tipo: 'Higiene y Limpieza', cantidad: 15},
  { tipo: 'Temperatura inadecuada', cantidad: 12},
  { tipo: 'Embalaje defectuoso', cantidad: 9},
  { tipo: 'Etiquetado incorrecto', cantidad: 8},
  { tipo: 'Peso irregular', cantidad: 5},
  { tipo: 'Color anómalo', cantidad: 4},
  { tipo: 'Otros', cantidad: 2}
];

// DESEMPEÑO POR DEPARTAMENTO (Ausentismo y Tardanza)
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


