export type GlossaryTerm = {
  label: string;
  definition: string;
};

export const glossary: Record<string, GlossaryTerm> = {
  backlog: {
    label: "Backlog",
    definition:
      "Lista de ideas y tareas pendientes, priorizadas. No es compromiso: es un banco de trabajo para ejecutar cuando haya capacidad."
  },
  awareness: {
    label: "Awareness",
    definition:
      "Etapa en la que la persona descubre el tema o su problema. Aun no busca comprar: busca entender."
  },
  cta: {
    label: "CTA",
    definition: "Llamada a la accion: el siguiente paso concreto que quieres que haga la persona."
  },
  consideration: {
    label: "Consideration",
    definition:
      "Etapa en la que compara enfoques/opciones y valida si esto es para ella. Quiere pruebas y claridad del metodo."
  },
  decision: {
    label: "Decision",
    definition:
      "Etapa en la que esta lista para elegir y actuar (por ejemplo: suscribirse). Necesita una oferta simple y sin friccion."
  },
  marketingInventado: {
    label: "marketing inventado",
    definition:
      "Ganchos o promesas que suenan bien pero no vienen de preguntas reales ni de lo que el contenido sostiene. Se nota forzado y suele bajar la confianza."
  },
  embudo: {
    label: "embudo",
    definition:
      "Recorrido desde descubrirte hasta actuar (por ejemplo: short -> hub -> leccion gratuita -> membresia)."
  },
  implementation: {
    label: "Implementation",
    definition:
      "Etapa en la que ya ha empezado (o ya es miembro) y necesita saber como usarlo: por donde seguir, habito, onboarding y siguiente paso."
  },
  protoVoc: {
    label: "Proto-VOC",
    definition:
      "Version inicial de la voz del cliente: hipotesis de preguntas/objeciones que luego se reescriben con lenguaje real."
  },
  searchable: {
    label: "searchable",
    definition:
      "Contenido pensado para capturar demanda existente: responde una busqueda o pregunta concreta."
  },
  shareable: {
    label: "shareable",
    definition:
      "Contenido pensado para compartirse: idea impactante, mapa o matiz que genera interes aunque no se haya buscado."
  }
};
