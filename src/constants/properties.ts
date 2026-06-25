export type Property = {
  code: string;
  name: string;
  zone: string;
  price: string;
  operation: string;
  area: string;
  bedrooms?: string;
  bathrooms?: string;
  parking?: string;
  availability: string;
  image: string;
  description: string;
  details?: {
    label: string;
    image: string;
  }[];
};

export const properties: Property[] = [
  {
    code: "UM-024",
    name: "Casa Caliza",
    zone: "Colinas de San Javier",
    price: "$8,950,000 MXN",
    operation: "Venta",
    area: "312 m²",
    bedrooms: "3 recámaras",
    bathrooms: "3.5 baños",
    parking: "2 estacionamientos",
    availability: "Disponible para visita esta semana",
    image: "/images/properties/casa-caliza-main.jpg",
    description:
      "Luz natural, materiales sobrios y una distribución pensada para habitarse con calma.",
    details: [
      {
        label: "Sala",
        image: "/images/properties/casa-caliza-sala.jpg",
      },
      {
        label: "Cocina",
        image: "/images/properties/casa-caliza-cocina.jpg",
      },
      {
        label: "Terraza",
        image: "/images/properties/casa-caliza-terraza.jpg",
      },
    ],
  },
  {
    code: "UM-031",
    name: "Departamento Niebla",
    zone: "Providencia",
    price: "$42,000 MXN / mes",
    operation: "Renta",
    area: "148 m²",
    bedrooms: "2 recámaras",
    bathrooms: "2 baños",
    parking: "2 estacionamientos",
    availability: "Disponible con cita previa",
    image: "/images/properties/departamento-niebla.jpg",
    description:
      "Una opción silenciosa y bien conectada para quien prioriza ubicación y claridad espacial.",
  },
  {
    code: "UM-044",
    name: "Lote Ciprés",
    zone: "Valle Imperial",
    price: "$3,200,000 MXN",
    operation: "Terreno",
    area: "280 m²",
    availability: "Documentación lista para revisión",
    image: "/images/properties/lote-cipres.jpg",
    description:
      "Terreno con lectura simple de zona, superficie y potencial de proyecto.",
  },
  {
    code: "UM-052",
    name: "Villa Umbral",
    zone: "Ajijic",
    price: "$6,700,000 MXN",
    operation: "Venta vacacional",
    area: "240 m²",
    bedrooms: "3 recámaras",
    bathrooms: "3 baños",
    parking: "2 estacionamientos",
    availability: "Disponible para visita este mes",
    image: "/images/properties/villa-umbral.jpg",
    description:
      "Privacidad, terraza y una atmósfera más pausada para descanso o renta premium.",
  },
];

export const featuredProperty = properties[0];