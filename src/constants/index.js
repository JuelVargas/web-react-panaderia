import { imagenPan, imagenPanBlanco, imagenPanTrigo, imagenMarraqueta, imagenPanMolde, imagenPanIntegral, imagenPanMaiz } from "../assets/images";

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
  