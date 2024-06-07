import { imagenPan, imagenPanBlanco, imagenPanTrigo, imagenMarraqueta, imagenPanMolde, imagenPanIntegral, imagenPanMaiz } from "../assets/images";
import { imgUser} from "../assets/icons";

export const navLinks = [
    {href: "/Hero", label: "inicio"},
    {href: "/Maquinaria", label: "maquinaria"},
    {href: "/Recetas", label: "recetas"},
    {href: "/Reportes", label: "reportes"},
    {href: "/Personal", label: "personal"},
    {href: "/Inventario", label: "inventario"}


]

export const breads = [
    {
        id: 1,
        bigBread: imagenPan,
    },
    {
        id: 2,
        bigBread: imagenPanBlanco,
    },
    {
        id: 3,
        bigBread: imagenPanTrigo,
    },
];

export const recetas = [
    {
      id: '1',
      nombre: "Pan Integral",
      imgURL: imagenPanIntegral,
      descripcion: "Salud y sabor en cada rebanada, la opción integral para un día completo.",
      ingredientes: [
        "500 g harina",
        "500 g harina integral",
        "80 g azúcar morena",
        "25 g levadura",
        "600 ml agua",
        "70 g mantequilla"
      ],
      preparacion: [
        "Incorporar en la batidora las harinas, el azúcar, la sal, la levadura y el agua. Mezcla bien en primera velocidad durante 4 minutos",
        "Añade la mantequilla y continua mezclando en segunda velocidad durante 4 minutos más, cubrir con una tela y dejar fermentar por 5 minutos amasado sobre una bandeja engrasada, cubrir con film y dejar fermentar por 3 horas",
        "Precalentar el horno a 200°C durante 5 minutos, hornear las piezas sobre la misma bandeja donde fermentaron a 180°C durante 25 minutos"
      ]
    },
    {
      id: '2',
      nombre: "Pan de maíz",
      imgURL: imagenPanMaiz,
      descripcion: "Dulzura y tradición en cada mordisco, el sabor auténtico del maíz fresco.",
      ingredientes: [
        "1 taza harina",
        "6 elotes o maíz fresco",
        "1 lata leche condensada",
        "4 huevos",
        "1 cucharada polvo de hornear",
        "1 cucharada vainilla",
        "90 gramos mantequilla"
      ],
      preparacion: [
        "Derretir la mantequilla sal y agrega los ingredientes líquidos a la licuadora. Se tritura para integrarlos y preparar la masa en licuadora más fácilmente.",
        "Agrega los ingredientes secos a la licuadora: harina, polvo para hornear y la mitad de los granos de maíz.",
        "Engrasar y enharina un molde para pastel o budín y se vierte en él la masa en licuadora. Hornear a 180 °C durante 50 minutos."
      ]
    },
    {
      id: '3',
      nombre: "Pan marraqueta",
      imgURL: imagenMarraqueta,
      descripcion: "Crocante por fuera, suave por dentro, Crocante por fuera, la marraqueta que acompaña tus comidas.",
      ingredientes: [
        "1/2 kg harina",
        "1 cuchara azúcar",
        "1 cucharilla sal",
        "300 ml agua",
        "1 cucharilla levadura fresca"
      ],
      preparacion: [
        "Mezclar todos los ingredientes secos en un bowl.",
        "Al agua añadirle la levadura y mezclar hasta que se diluya.",
        "Amasar muy bien la masa del pan por lo menos durante 15 minutos. Luego tapar con un secador y dejar reposar por 30 minutos.",
        "Volver a amasar la mezcla y dejar reposar por 2 horas hasta que duplique su volumen.",
        "Formar una tira larga con la masa y dividirla en 7-10 pedazos de pan.",
        "Formar bolitas y luego darle forma de marraqueta (estilo pan francés), dejar reposar por 30 minutos más.",
        "Colocar en el horno precalentado, dejar cocer por 20 minutos hasta que los panes estén dorados."
      ]
    },
    {
      id: '4',
      nombre: "Pan de molde",
      imgURL: imagenPanMolde,
      descripcion: "Perfecto para sándwiches y tostadas, el pan casero que siempre quisiste.",
      ingredientes: [
        "500 g harina integral de trigo (4 tazas)",
        "350 ml agua tibia (1 taza + 2/5)",
        "8 g levadura de panadería seca (1/2 cda)",
        "30 ml aceite (2 cdas)",
        "8 g sal (1/2 cda)"
      ],
      preparacion: [
        "En un bol amplio, colocar la harina y formar un volcán en el centro. Agregar el agua tibia, la levadura, el aceite y la sal en uno de los bordes para que no tenga contacto con la levadura hasta que la misma se integre bien a la masa.",
        "Comenzar a integrar los ingredientes, dejando de último la sal. Cuando ya sea difícil continuar de este modo, transferir la masa a la mesa ligeramente enharinada. Amasar hasta que ya no se pegue más. Amasar como doblando la masa, una y otra vez. Una vez lista, colocar en un bol engrasado o enharinado para dejarla levar por aproximadamente dos horas. Cubrir con papel film o un paño limpio y colocar en un lugar cálido.",
        "Una vez que la masa haya duplicado su tamaño. Luego, enrollar hasta formar un cilindro. Colocar en el molde para pan. Aplanar para que el pan salga parejo en todas las esquinas.",
        "Pasado este tiempo, hornear con calor arriba y abajo a 360 grados."
      ]
    }
  ];

// Constante Actores
  export const actores = [
    {
      id: '1',
      cargo: "Gerente General",
      imgURL: imgUser,
      descripcion: "Planifica, organiza, dirige, controla y coordina todas las actividades de la panadería, también contrata al personal adecuado y evaluar el progreso del negocio.",
    },
    {
      id: '2',
      cargo: "Jefe de Finanzas",
      imgURL: imgUser, 
      descripcion: "Gestiona los recursos financieros de la panadería, realizar consultas bancarias y se asegura de que no haya problemas de sobreendeudamiento."
    },

    {
      id: '3',
      cargo: "Jefe de Producción",
      imgURL: imgUser, 
      descripcion: "Supervisa las líneas de producción, se encarga de la atención a proveedores y garantiza el cumplimiento de trabajo establecido, supervisa al personal y el mantenimiento de maquinaria y equipos."
    },
    {
      id: '4',
      cargo: "Panadero",
      imgURL: imgUser, 
      descripcion: "Elabora masas y panes siguiendo las normas de higiene y calidad establecidas. También se asegura de que el personal a su cargo cumpla con los estándares de la empresa."
    },
    {
      id: '5',
      cargo: "Personal de Almacen",
      imgURL: imgUser, 
      descripcion: "El personal de almacén en una panadería recibe y verifica materias primas y productos, los organiza y almacena adecuadamente, realiza inventarios y prepara pedidos. Mantienen el almacén limpio y ordenado, inspeccionan la calidad de los productos, registran actividades."
    },
    {
      id: '6',
      cargo: "Jefe de Logistica",
      imgURL: imgUser, 
      descripcion: "Coordina el transporte y distribución de productos terminados a puntos de venta o directamente a clientes."
    },
    //Actores secundarios
    {
      id: '7',
      cargo: "Repartidor",
      imgURL: imgUser, 
      descripcion: "Entrega productos a clientes o puntos de venta, Tambien asegura la correcta manipulación y transporte de los productos para mantener su calidad."
    },
    {
      id: '8',
      cargo: "Proveedor",
      imgURL: imgUser, 
      descripcion: "Un proveedor en una panadería suministra materias primas y productos necesarios para la producción, asegura la calidad y puntualidad en las entregas, y mantiene una comunicación constante para coordinar pedidos y resolver cualquier incidencia."
    },
  ];

    
// Constante Inventario
  export const inventario = [
    {
      id: '1',
      nombre: "Harina",
      cantidad: "500 kg",
      unidad: "kilo gramos",
    },
    {
      id: '2',
      nombre: "Harina Integral de Trigo",
      cantidad: "400 kg",
      unidad: "kilo gramos",
    },
    {
      id: '3',
      nombre: "Azúcar",
      cantidad: "200 kg",
      unidad: "kilo gramos",
    },
    {
      id: '4',
      nombre: "Azucar Morena",
      cantidad: "100 kg",
      unidad: "kilo gramos",
    },
    {
      id: '5',
      nombre: "Levadura",
      cantidad: "10 kg",
      unidad: "kilo gramos",
    },
    {
      id: '6',
      nombre: "Levadura Seca",
      cantidad: "5 kg",
      unidad: "kilo gramos",
    },
    {
      id: '7',
      nombre: "Mantequilla",
      cantidad: "50 kg",
      unidad: "kilo gramos",
    },
    {
      id: '8',
      nombre: "Aceite",
      cantidad: "70 L",
      unidad: "Litros",
    },
    {
      id: '9',
      nombre: "Leche Condensada",
      cantidad: "80 lt",
      unidad: "latas",
    },
    {
      id: '10',
      nombre: "Huevos",
      cantidad: "50 paq",
      unidad: "paquetes",
    },
    {
      id: '11',
      nombre: "Vainilla",
      cantidad: "20 kg",
      unidad: "kilo gramos",
    },
    {
      id: '12',
      nombre: "Sal",
      cantidad: "10 kg",
      unidad: "kilo gramos",
    },
    {
      id: '13',
      nombre: "Elote",
      cantidad: "80 uds",
      unidad: "unidades",
    },
    {
      id: '14',
      nombre: "Polvo de Hornear",
      cantidad: "3 kg",
      unidad: "kilo gramos",
    },
    {
      id: '15',
      nombre: "Agua",
      cantidad: "1000 L",
      unidad: "Litros",
    }
  ];

//Constante Reportes
  export const reportes = [
    {
      id: '1',
      tipo: "Reporte de Producción",
      descripcion: "Detalle diario, semanal y mensual sobre la cantidad de cada tipo de pan producido, eficiencia de producción y costos involucrados.",
      campos: [
        "Fecha",
        "Tipo de Pan",
        "Cantidad Producida",
        "Costo de Producción"
      ],
      valores: [
        "06/06/2024",
        "Pan Integral",
        "100",
        "20 $"
      ]
    },
    {
      id: '2',
      tipo: "Reporte de Inventario",
      descripcion: "Niveles de inventario de materias primas y productos terminados, así como la rotación de inventario.",
      campos: [
        "Fecha",
        "Tipo de Inventario",
        "Cantidad Disponible",
        "Valor del Inventario"
      ],
      valores: [
        "06/06/2024",
        "Harina",
        "100 kg",
        "50 $"
      ]
    },
    {
      id: '3',
      tipo: "Reporte de Ventas",
      descripcion: "Información sobre la cantidad de cada tipo de pan vendido, ingresos generados y análisis de productos más vendidos.",
      campos: [
        "Fecha",
        "Tipo de Pan",
        "Cantidad Vendida",
        "Ingresos Generados",
        "Productos Más Vendidos"
      ],
      valores: [
        "06/06/2024",
        "Pan de Maiz",
        "80",
        "30 $",
        "Pan de Maiz"
      ]
    },
    {
      id: '4',
      tipo: "Reporte Financiero",
      descripcion: "Resumen de los ingresos, costos y gastos, mostrando la rentabilidad de la panadería.",
      campos: [
        "Fecha",
        "Ingresos",
        "Costos",
        "Gastos",
        "Rentabilidad"
      ],
      valores: [
        "06/06/2024",
        "1000 $",
        "600 $",
        "500 $",
        "800 $"
      ]
    },
    {
      id: '5',
      tipo: "Reporte de Recursos Humanos",
      descripcion: "Registro de la asistencia y puntualidad de los empleados, así como la evaluación del rendimiento del personal.",
      campos: [
        "Fecha",
        "Empleado",
        "Asistencia",
        "Puntualidad",
        "Evaluación de Rendimiento"
      ],
      valores: [
        "06/06/2024",
        "Alex Baena",
        "Presente",
        "A tiempo",
        "Excelente"
      ]
    },
    {
      id: '6',
      tipo: "Reporte de Marketing",
      descripcion: "Evaluación de la efectividad de promociones y descuentos en las ventas, así como la satisfacción del cliente.",
      campos: [
        "Fecha",
        "Campaña",
        "Ventas Generadas",
        "ROI",
        "Satisfacción del Cliente"
      ],
      valores: [
        "06/06/2024",
        "Descuento de Verano",
        "500",
        "50%",
        "Muy Satisfecho"
      ]
    },
    {
      id: '7',
      tipo: "Reporte de Calidad",
      descripcion: "Resultados de inspecciones y pruebas de calidad en los productos, incluyendo tasas de defectos o productos rechazados.",
      campos: [
        "Fecha",
        "Producto",
        "Inspecciones Realizadas",
        "Defectos Encontrados",
        "Acciones Correctivas"
      ],
      valores: [
        "06/06/2024",
        "Pan Integral",
        "500",
        "5",
        "Ajuste en la temperatura del horno"
      ]
    }
  ];
