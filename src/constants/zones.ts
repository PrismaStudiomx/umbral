export type ZonePoint = {
  id: string;
  name: string;
  label: string;
  x: number;
  y: number;
  description: string;
  highlights: string[];
};

export const zonePoints: ZonePoint[] = [
  {
    id: "san-javier",
    name: "Colinas de San Javier",
    label: "Residencial consolidado",
    x: 26,
    y: 32,
    description:
      "Una zona buscada por privacidad, conectividad y propiedades de mayor permanencia.",
    highlights: ["Vida residencial", "Servicios cercanos", "Perfil familiar"],
  },
  {
    id: "providencia",
    name: "Providencia",
    label: "Ubicación práctica",
    x: 58,
    y: 42,
    description:
      "Conecta vida diaria, movilidad y departamentos con demanda constante.",
    highlights: ["Conectividad", "Comercios", "Renta activa"],
  },
  {
    id: "valle-imperial",
    name: "Valle Imperial",
    label: "Crecimiento residencial",
    x: 74,
    y: 68,
    description:
      "Zona con lectura de inversión, terrenos y proyectos de vivienda en expansión.",
    highlights: ["Plusvalía", "Terrenos", "Proyecto propio"],
  },
  {
    id: "ajijic",
    name: "Ajijic",
    label: "Renta premium",
    x: 39,
    y: 72,
    description:
      "Propiedades con atmósfera de descanso, buena para renta vacacional o segunda residencia.",
    highlights: ["Descanso", "Terrazas", "Renta vacacional"],
  },
];

export const zoneContextCards = [
  {
    title: "Vida residencial",
    text: "La zona ayuda a entender ritmo, privacidad y tipo de vecino antes de visitar.",
  },
  {
    title: "Conectividad",
    text: "No solo importa la dirección, sino cómo se mueve una persona desde ahí.",
  },
  {
    title: "Servicios cercanos",
    text: "Escuelas, comercios y puntos diarios hacen más clara la decisión.",
  },
  {
    title: "Potencial",
    text: "En terrenos y preventas, el contexto puede pesar tanto como la propiedad.",
  },
];