const listaRestaurantes = [
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['Mediterráneo', 'Romántico'],
      titulo    : 'Antigua',
      nota      : [9, 4],
      dobleYums : false,
      insider   : true,
      pay       : true,
      parrafo   : '08006 Barcelona',
      precio    : 30,
      descuento : '-50%',
      enlace    : 'antigua',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : ['Mediterráneo', 'Creativo'],
      titulo    : 'Artilleria',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '41018 Sevilla',
      precio    : 25,
      descuento : '-50%',
      enlace    : 'artilleria',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['Italiano', 'Gastronómico'],
      titulo    : 'Madre Vita',
      nota      : [9, 5],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '03015 Alicante (Alacant)',
      precio    : 15,
      descuento : '-50%',
      enlace    : 'madrevita',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Japonés', 'Romántico'],
      titulo    : 'Kippu',
      nota      : [9, 4],
      dobleYums : false,
      insider   : true,
      pay       : false,
      parrafo   : '28006 Madrid',
      precio    : 30,
      descuento : '-30%',
      enlace    : 'kippu',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Japonés', 'Para niños'],
      titulo    : 'Sumo Princesa',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '28008 Madrid',
      precio    : 17,
      descuento : '-50%',
      enlace    : 'sumoprincesa',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Mediterráneo', 'Romántico'],
      titulo    : 'Küche',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '28008 Madrid',
      precio    : 25,
      descuento : '-40%',
      enlace    : 'kuche',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : ['Mexicano', 'tipico'],
      titulo    : 'Cómete México General Pardiñas',
      nota      : [9, 1],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '28001 Madrid',
      precio    : 18,
      descuento : '-30%',
      enlace    : 'generalpardinas',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Internacional'],
      titulo    : 'Titi y la Tormenta',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '28260 Galapagar',
      precio    : 25,
      descuento : '-50%',
      enlace    : 'titiylatormenta',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : ['Asiático', 'Familia'],
      titulo    : 'Tangchu',
      nota      : [9, 5],
      dobleYums : true,
      insider   : false,
      pay       : true,
      parrafo   : '28008 Madrid',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'tangchu',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['De fusión', 'Vida nocturna'],
      titulo    : 'WELKHOME Club',
      nota      : [9, 1],
      dobleYums : true,
      insider   : false,
      pay       : true,
      parrafo   : '28010 Madrid',
      precio    : 23,
      descuento : '-50%',
      enlace    : 'welkhomeclub',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Español', 'Vida nocturna'],
      titulo    : 'Diurno - Madrid',
      nota      : [9, 2],
      dobleYums : true,
      insider   : false,
      pay       : false,
      parrafo   : '28004 Madrid',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'diurno',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Italiano'],
      titulo    : 'Bresca Fuencarral',
      nota      : [9, 0],
      dobleYums : true,
      insider   : false,
      pay       : true,
      parrafo   : '28004 Madrid',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'brescafuencarral',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Italiano'],
      titulo    : 'Bresca Virgen',
      nota      : [9, 1],
      dobleYums : true,
      insider   : false,
      pay       : true,
      parrafo   : '28013 Madrid',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'brescavirgen',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : ['Español', 'Vida nocturna'],
      titulo    : 'Mercado de la reina',
      nota      : [9, 2],
      dobleYums : true,
      insider   : false,
      pay       : false,
      parrafo   : '28013 Madrid',
      precio    : 25,
      descuento : '-50%',
      enlace    : 'mercadodelareina',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Asiático', 'Familia'],
      titulo    : 'Tangchu',
      nota      : [9, 5],
      dobleYums : true,
      insider   : false,
      pay       : true,
      parrafo   : '28008 Madrid',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'tangchu',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['Español', 'Vida nocturna'],
      titulo    : 'Diurno - Madrid',
      nota      : [9, 2],
      dobleYums : true,
      insider   : false,
      pay       : false,
      parrafo   : '28004 Madrid',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'diurno',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['Japonés'],
      titulo    : 'Kippu',
      nota      : [9, 4],
      dobleYums : false,
      insider   : true,
      pay       : false,
      parrafo   : '',
      precio    : 30,
      descuento : '-30%',
      enlace    : 'kippu',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Japonés'],
      titulo    : 'Sumo Grill',
      nota      : [9, 2],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 17,
      descuento : '-50%',
      enlace    : 'sumogrill',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Japonés'],
      titulo    : 'Sumo Princesa',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 17,
      descuento : '-50%',
      enlace    : 'sumoprincesa',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Küche',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 25,
      descuento : '-40%',
      enlace    : 'kuche',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : ['Japonés'],
      titulo    : 'MACAO',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 20,
      descuento : '-30%',
      enlace    : 'macao',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Japonés'],
      titulo    : 'Sumo Juan Bravo',
      nota      : [9, 1],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 18,
      descuento : '-40%',
      enlace    : 'sumojuanbravo',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['Mexicano'],
      titulo    : 'Cómete México General Pardiñas',
      nota      : [9, 1],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 18,
      descuento : '-30%',
      enlace    : 'generalpardinas',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : ['Asiático'],
      titulo    : 'Asia Gallery - Hotel The Westin Palace',
      nota      : [9, 3],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 40,
      descuento : '-40%',
      enlace    : 'asiagallery',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Antigua',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 30,
      descuento : '-50%',
      enlace    : 'antigua',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Mirandoalmar',
      nota      : [8, 5],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 24,
      descuento : '-50%',
      enlace    : 'mirandoalmar',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Catalán'],
      titulo    : 'Calabrasa',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 30,
      descuento : '-50%',
      enlace    : 'calabrasa',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : ['Mexicano'],
      titulo    : 'La Adelita Botanero',
      nota      : [8, 9],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 20,
      descuento : '-50%',
      enlace    : 'laadelitabotanero',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Japonés'],
      titulo    : 'Tsukimi',
      nota      : [8, 9],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 18,
      descuento : '-50%',
      enlace    : 'tsukimi',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['Japonés'],
      titulo    : 'Honkaku II',
      nota      : [8, 8],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 15,
      descuento : '-50%',
      enlace    : 'honkakuii',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : [],
      titulo    : 'Sagués "Il Ristorante"',
      nota      : [9, 2],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 30,
      descuento : '-40%',
      enlace    : 'ilristorante',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['Japonés'],
      titulo    : 'Sushi Nori',
      nota      : [9, 8],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 20,
      descuento : '-20%',
      enlace    : 'sushinori',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Español'],
      titulo    : 'El Coso del Mar - Hotel El Coso',
      nota      : [9, 8],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 22,
      descuento : 'MENU',
      enlace    : 'elcosodelmar',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Español'],
      titulo    : 'The Orange Club',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 15,
      descuento : '-30%',
      enlace    : 'theorangeclub',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : ['De fusión'],
      titulo    : 'VERA Restaurante',
      nota      : [8, 7],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 15,
      descuento : '-50%',
      enlace    : 'verarestaurante',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Americano'],
      titulo    : 'Circo',
      nota      : [9, 3],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 18,
      descuento : '-30%',
      enlace    : 'circo',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Submarino',
      nota      : [8, 6],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 45,
      descuento : 'MENU',
      enlace    : 'submarino',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : ['Arrocería'],
      titulo    : 'Albufera',
      nota      : [8, 6],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 20,
      descuento : '-30%',
      enlace    : 'albufera',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['Japonés'],
      titulo    : 'Miss Sushi - Canovas',
      nota      : [8, 9],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 16,
      descuento : '-30%',
      enlace    : 'misssushi',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Italiano'],
      titulo    : 'Gusto di Roma',
      nota      : [9, 1],
      dobleYums : true,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 15,
      descuento : '-30%',
      enlace    : 'gustodiroma',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Artillería',
      nota      : [9, 1],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 25,
      descuento : '-50%',
      enlace    : 'artilleria',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Casa Manolo León',
      nota      : [9, 3],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 37,
      descuento : 'MENU',
      enlace    : 'casamanololeon',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Andaluz'],
      titulo    : 'Tabanco La Duquesa',
      nota      : [9, 2],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 15,
      descuento : '-30%',
      enlace    : 'tabancoladuquesa',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['De Fusión'],
      titulo    : 'Seni Gastrobar',
      nota      : [9, 1],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 15,
      descuento : '-30%',
      enlace    : 'senigastrobar',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Manolo León Plaza del Duque',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 30,
      descuento : 'MENU',
      enlace    : 'manololeonplazadelduque',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Taberna del Alabardero Sevilla',
      nota      : [9, 0],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 48,
      descuento : 'MENU',
      enlace    : 'tabernadelalabarderosevilla',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'Azahar - Hospes Las casas del Rey de Baeza',
      nota      : [9, 3],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 29,
      descuento : 'MENU',
      enlace    : 'azahar',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Andaluz'],
      titulo    : 'Restaurante La Casapuerta',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 18,
      descuento : '-20%',
      enlace    : 'restaurantelacasapuerta',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
      categoria : [],
      titulo    : 'Café Meccano Gastrobrasa',
      nota      : [9, 3],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 25,
      descuento : '-30%',
      enlace    : 'cafemeccanogastrobrasa',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
      categoria : ['Americano'],
      titulo    : 'Tommy Mels - Zaragoza',
      nota      : [8, 7],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 16,
      descuento : '-50%',
      enlace    : 'tommymelszaragoza',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
      categoria : ['Internacional'],
      titulo    : 'Mas Torres',
      nota      : [8, 4],
      dobleYums : true,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 24,
      descuento : '',
      enlace    : 'mastorres',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
      categoria : ['Mediterráneo'],
      titulo    : 'El Windsor',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 22,
      descuento : '',
      enlace    : 'elwindsor',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
      categoria : ['Internacional'],
      titulo    : 'Mai Tai Food & Cocktail Bar',
      nota      : [9, 4],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 23,
      descuento : '',
      enlace    : 'maitaifoodandcocktailbar',
      aceptaYums: true,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
      categoria : ['Español'],
      titulo    : 'Capricho',
      nota      : [8, 8],
      dobleYums : true,
      insider   : false,
      pay       : false,
      parrafo   : '',
      precio    : 35,
      descuento : '',
      enlace    : 'capricho',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
      categoria : ['Español'],
      titulo    : 'El Cachirulo',
      nota      : [9, 6],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 38,
      descuento : '',
      enlace    : 'elcachirulo',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    },
    {
      tipo      : 'restaurante',
      imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
      categoria : ['Gallego'],
      titulo    : 'Taberna 1941',
      nota      : [8, 6],
      dobleYums : false,
      insider   : false,
      pay       : true,
      parrafo   : '',
      precio    : 28,
      descuento : '',
      enlace    : 'taberna1941',
      aceptaYums: false,
      imagenes  : ['/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp', '/assets/imgs/restaurantes/slider/slider-1.webp', '/assets/imgs/restaurantes/slider/slider-2.webp', '/assets/imgs/restaurantes/slider/slider-3.webp', '/assets/imgs/restaurantes/slider/slider-4.webp'],
      detalles  : [
        { boton : 'Descripción',
          texto : [
            {parrafo : 'Recetas mediterráneas, con firma de autor y toques personales, eso es lo que te vas a encontrar en Antigua Barcelona. A este restaurante vienes a comer bien, sí. Pero también a disfrutar de su ambiente romántico con luz tenue y música de fondo que invita a degustar cada plato de forma pausada. ¿En su carta? Creaciones del chef, que siempre deja volar su imaginación, para sorprenderte con propuestas tan deliciosas como rompedoras: arroz de rabo de toro, steak tartar de Black Angus, sopa de coco y langosta, pulpo (meloso, crujiente y tierno a la vez), centollo envuelto en hojas con huevas de salmón, corte de buey francés onglet, cochinillo lechal confitado al romero… y así un montón de delicias más para deleitar al paladar.'}
          ],
          insider : true},
        {
          boton  : ' Menú',
          texto  : [
            {
              parrafo : 'FALSO CANELON DE RICOTTA, LAMINAS TRUFA NEGRA, CEPS DORADOS A LA PARRILLA Y ESPINACAS FRESCAS',
              precio : 12
            },
            {
              parrafo : 'SARTEN DE CROCANTE Y JUGOSA MORCILLA DE CEBOLLA, COMPOTA DE MANZANA, CEBOLLA CARAMELIZADA,',
              precio : 12
            },
            {
              parrafo  : 'CALDO CONCENTRADO DE LANGOSTA Y GAMBA ROJA, BOMBON RELLENO DE CANGREJO REAL, LAGOSTINOS DE VINAROS, VAPOROSAS BURBUJAS AFINES Y AROMAS DE JARDIN',
              precio : 13
            },
            {
              parrafo  : 'MENU DEGUSTACIÓN SAN VALENTÍN 60 €'
            },
          ],
          enlace : '#',
          tipo   : 'menu'
        }
      ]
    }
] 
/*----------- */
const slidersTop = [
  {
    titulo     : 'Selecciones de TheFork',
    cuantosVeo : 3,
    tipoSlider : 'large',
    contenido  : [
      {
        tipo         : 'oferta',
        imagen       : '/assets/imgs/selecciones/extrayums.webp',
        titulo       : '¡200 YUMS EXTRA!',
        parrafo      : 'Por tiempo limitado, paga con la App y gana Yums extra.',
        enlace       : 'yumsextra',
        routing      : false,
        textoEnlace  : 'VER LOS RESTAURANTES'
      },
      {
        tipo         : 'oferta',
        imagen       : '/assets/imgs/selecciones/insider.webp',
        titulo       : 'Selección INSIDER',
        parrafo      : 'Restaurantes que marcan la diferencia y con los que siempre acertarás',
        enlace       : 'seleccioninsider',
        routing      : false,
        textoEnlace  : 'VER LOS RESTAURANTES'
      },
      {
        tipo         : 'oferta',
        imagen       : '/assets/imgs/selecciones/tarjetaregalo.webp',
        titulo       : 'Tarjeta Regalo TheFork',
        parrafo      : 'Porque el regalo perfecto no existe...',
        enlace       : 'terjetaregalo',
        routing      : false,
        textoEnlace  : '¿O QUIZÁS SÍ?'
      },
      {
        tipo         : 'oferta',
        imagen       : '/assets/imgs/selecciones/michelin.webp',
        titulo       : 'Guía MICHELIN',
        parrafo      : '¡Reserva ya en los restaurantes de la Guía MICHELIN en solo tres clicks!',
        enlace       : 'guiamichelin',
        routing      : false,
        textoEnlace  : 'VER LOS RESTAURANTES'
      },
      {
        tipo         : 'oferta',
        imagen       : '/assets/imgs/selecciones/dobleyums.webp',
        titulo       : 'El doble siempre es mejor',
        parrafo      : 'Gana el doble de Yums por reservar en la selecciónde restaurantes DOBLE YUMS',
        enlace       : 'dobleyums',
        routing      : false,
        textoEnlace  : 'VER LOS RESTAURANTES'
      },
      {
        tipo         : 'oferta',
        imagen       : '/assets/imgs/selecciones/favoritos.webp',
        titulo       : 'Los favoritos',
        parrafo      : 'Saborea los restaurantes que han llegado a lo más alto gracias a miles de opiniones',
        enlace       : 'losfavoritos',
        routing      : false,
        textoEnlace  : 'RESERVA'
      }
    ]
  },
  {
    titulo     : 'Seleccionados para ti',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
  
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['Mediterráneo', 'Romántico'],
        titulo    : 'Antigua',
        nota      : [9, 4],
        dobleYums : false,
        insider   : true,
        pay       : true,
        parrafo   : '08006 Barcelona',
        precio    : 30,
        descuento : '-50%',
        enlace    : 'antigua',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : ['Mediterráneo', 'Creativo'],
        titulo    : 'Artilleria',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '41018 Sevilla',
        precio    : 25,
        descuento : '-50%',
        enlace    : 'artilleria',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['Italiano', 'Gastronómico'],
        titulo    : 'Madre Vita',
        nota      : [9, 5],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '03015 Alicante (Alacant)',
        precio    : 15,
        descuento : '-50%',
        enlace    : 'madrevita',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Japonés', 'Romántico'],
        titulo    : 'Kippu',
        nota      : [9, 4],
        dobleYums : false,
        insider   : true,
        pay       : false,
        parrafo   : '28006 Madrid',
        precio    : 30,
        descuento : '-30%',
        enlace    : 'kippu',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Japonés', 'Para niños'],
        titulo    : 'Sumo Princesa',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '28008 Madrid',
        precio    : 17,
        descuento : '-50%',
        enlace    : 'sumoprincesa',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Mediterráneo', 'Romántico'],
        titulo    : 'Küche',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '28008 Madrid',
        precio    : 25,
        descuento : '-40%',
        enlace    : 'kuche',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : ['Mexicano', 'tipico'],
        titulo    : 'Cómete México General Pardiñas',
        nota      : [9, 1],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '28001 Madrid',
        precio    : 18,
        descuento : '-30%',
        enlace    : 'generalpardinas',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Internacional'],
        titulo    : 'Titi y la Tormenta',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '28260 Galapagar',
        precio    : 25,
        descuento : '-50%',
        enlace    : 'titiylatormenta',
        aceptaYums: false
      }
    
    ]
  },
  {
    titulo     : '¿Dónde puedo ganar más Yums?',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
  
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : ['Asiático', 'Familia'],
        titulo    : 'Tangchu',
        nota      : [9, 5],
        dobleYums : true,
        insider   : false,
        pay       : true,
        parrafo   : '28008 Madrid',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'tangchu',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['De fusión', 'Vida nocturna'],
        titulo    : 'WELKHOME Club',
        nota      : [9, 1],
        dobleYums : true,
        insider   : false,
        pay       : true,
        parrafo   : '28010 Madrid',
        precio    : 23,
        descuento : '-50%',
        enlace    : 'welkhomeclub',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Español', 'Vida nocturna'],
        titulo    : 'Diurno - Madrid',
        nota      : [9, 2],
        dobleYums : true,
        insider   : false,
        pay       : false,
        parrafo   : '28004 Madrid',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'diurno',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Italiano'],
        titulo    : 'Bresca Fuencarral',
        nota      : [9, 0],
        dobleYums : true,
        insider   : false,
        pay       : true,
        parrafo   : '28004 Madrid',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'brescafuencarral',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Italiano'],
        titulo    : 'Bresca Virgen',
        nota      : [9, 1],
        dobleYums : true,
        insider   : false,
        pay       : true,
        parrafo   : '28013 Madrid',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'brescavirgen',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : ['Español', 'Vida nocturna'],
        titulo    : 'Mercado de la reina',
        nota      : [9, 2],
        dobleYums : true,
        insider   : false,
        pay       : false,
        parrafo   : '28013 Madrid',
        precio    : 25,
        descuento : '-50%',
        enlace    : 'mercadodelareina',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Asiático', 'Familia'],
        titulo    : 'Tangchu',
        nota      : [9, 5],
        dobleYums : true,
        insider   : false,
        pay       : true,
        parrafo   : '28008 Madrid',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'tangchu',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['Español', 'Vida nocturna'],
        titulo    : 'Diurno - Madrid',
        nota      : [9, 2],
        dobleYums : true,
        insider   : false,
        pay       : false,
        parrafo   : '28004 Madrid',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'diurno',
        aceptaYums: false
      }
    
    ]
  },
  {
    titulo     : 'Restaurantes populares en Madrid',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['Japonés'],
        titulo    : 'Kippu',
        nota      : [9, 4],
        dobleYums : false,
        insider   : true,
        pay       : false,
        parrafo   : '',
        precio    : 30,
        descuento : '-30%',
        enlace    : 'kippu',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Japonés'],
        titulo    : 'Sumo Grill',
        nota      : [9, 2],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 17,
        descuento : '-50%',
        enlace    : 'sumogrill',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Japonés'],
        titulo    : 'Sumo Princesa',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 17,
        descuento : '-50%',
        enlace    : 'sumoprincesa',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Küche',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 25,
        descuento : '-40%',
        enlace    : 'kuche',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : ['Japonés'],
        titulo    : 'MACAO',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 20,
        descuento : '-30%',
        enlace    : 'macao',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Japonés'],
        titulo    : 'Sumo Juan Bravo',
        nota      : [9, 1],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 18,
        descuento : '-40%',
        enlace    : 'sumojuanbravo',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['Mexicano'],
        titulo    : 'Cómete México General Pardiñas',
        nota      : [9, 1],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 18,
        descuento : '-30%',
        enlace    : 'generalpardinas',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : ['Asiático'],
        titulo    : 'Asia Gallery - Hotel The Westin Palace',
        nota      : [9, 3],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 40,
        descuento : '-40%',
        enlace    : 'asiagallery',
        aceptaYums: false
      }
    
    ]
  },
  {
    titulo     : 'Restaurantes populares en Barcelona',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
  
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Antigua',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 30,
        descuento : '-50%',
        enlace    : 'antigua',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Mirandoalmar',
        nota      : [8, 5],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 24,
        descuento : '-50%',
        enlace    : 'mirandoalmar',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Catalán'],
        titulo    : 'Calabrasa',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 30,
        descuento : '-50%',
        enlace    : 'calabrasa',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : ['Mexicano'],
        titulo    : 'La Adelita Botanero',
        nota      : [8, 9],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 20,
        descuento : '-50%',
        enlace    : 'laadelitabotanero',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Japonés'],
        titulo    : 'Tsukimi',
        nota      : [8, 9],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 18,
        descuento : '-50%',
        enlace    : 'tsukimi',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['Japonés'],
        titulo    : 'Honkaku II',
        nota      : [8, 8],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 15,
        descuento : '-50%',
        enlace    : 'honkakuii',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : [],
        titulo    : 'Sagués "Il Ristorante"',
        nota      : [9, 2],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 30,
        descuento : '-40%',
        enlace    : 'ilristorante',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['Japonés'],
        titulo    : 'Sushi Nori',
        nota      : [9, 8],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 20,
        descuento : '-20%',
        enlace    : 'sushinori',
        aceptaYums: false
      }
    
    ]
  },
  {
    titulo     : 'Restaurantes populares en Valencia',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
  
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Español'],
        titulo    : 'El Coso del Mar - Hotel El Coso',
        nota      : [9, 8],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 22,
        descuento : 'MENU',
        enlace    : 'elcosodelmar',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Español'],
        titulo    : 'The Orange Club',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 15,
        descuento : '-30%',
        enlace    : 'theorangeclub',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : ['De fusión'],
        titulo    : 'VERA Restaurante',
        nota      : [8, 7],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 15,
        descuento : '-50%',
        enlace    : 'verarestaurante',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Americano'],
        titulo    : 'Circo',
        nota      : [9, 3],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 18,
        descuento : '-30%',
        enlace    : 'circo',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Submarino',
        nota      : [8, 6],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 45,
        descuento : 'MENU',
        enlace    : 'submarino',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : ['Arrocería'],
        titulo    : 'Albufera',
        nota      : [8, 6],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 20,
        descuento : '-30%',
        enlace    : 'albufera',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['Japonés'],
        titulo    : 'Miss Sushi - Canovas',
        nota      : [8, 9],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 16,
        descuento : '-30%',
        enlace    : 'misssushi',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Italiano'],
        titulo    : 'Gusto di Roma',
        nota      : [9, 1],
        dobleYums : true,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 15,
        descuento : '-30%',
        enlace    : 'gustodiroma',
        aceptaYums: false
      }
    
    ]
  },
  {
    titulo     : 'Restaurantes populares en Sevilla',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
  
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Artillería',
        nota      : [9, 1],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 25,
        descuento : '-50%',
        enlace    : 'artilleria',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Casa Manolo León',
        nota      : [9, 3],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 37,
        descuento : 'MENU',
        enlace    : 'casamanololeon',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Andaluz'],
        titulo    : 'Tabanco La Duquesa',
        nota      : [9, 2],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 15,
        descuento : '-30%',
        enlace    : 'tabancoladuquesa',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['De Fusión'],
        titulo    : 'Seni Gastrobar',
        nota      : [9, 1],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 15,
        descuento : '-30%',
        enlace    : 'senigastrobar',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Manolo León Plaza del Duque',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 30,
        descuento : 'MENU',
        enlace    : 'manololeonplazadelduque',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Taberna del Alabardero Sevilla',
        nota      : [9, 0],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 48,
        descuento : 'MENU',
        enlace    : 'tabernadelalabarderosevilla',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'Azahar - Hospes Las casas del Rey de Baeza',
        nota      : [9, 3],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 29,
        descuento : 'MENU',
        enlace    : 'azahar',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Andaluz'],
        titulo    : 'Restaurante La Casapuerta',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 18,
        descuento : '-20%',
        enlace    : 'restaurantelacasapuerta',
        aceptaYums: false
      }
    
    ]
  },
  {
    titulo     : 'Restaurantes populares en Zaragoza',
    cuantosVeo : 4,
    tipoSlider : 'small',
    contenido  : [
  
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante7.webp',
        categoria : [],
        titulo    : 'Café Meccano Gastrobrasa',
        nota      : [9, 3],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 25,
        descuento : '-30%',
        enlace    : 'cafemeccanogastrobrasa',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante8.webp',
        categoria : ['Americano'],
        titulo    : 'Tommy Mels - Zaragoza',
        nota      : [8, 7],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 16,
        descuento : '-50%',
        enlace    : 'tommymelszaragoza',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante1.webp',
        categoria : ['Internacional'],
        titulo    : 'Mas Torres',
        nota      : [8, 4],
        dobleYums : true,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 24,
        descuento : '',
        enlace    : 'mastorres',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante2.webp',
        categoria : ['Mediterráneo'],
        titulo    : 'El Windsor',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 22,
        descuento : '',
        enlace    : 'elwindsor',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante3.webp',
        categoria : ['Internacional'],
        titulo    : 'Mai Tai Food & Cocktail Bar',
        nota      : [9, 4],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 23,
        descuento : '',
        enlace    : 'maitaifoodandcocktailbar',
        aceptaYums: true
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante4.webp',
        categoria : ['Español'],
        titulo    : 'Capricho',
        nota      : [8, 8],
        dobleYums : true,
        insider   : false,
        pay       : false,
        parrafo   : '',
        precio    : 35,
        descuento : '',
        enlace    : 'capricho',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante5.webp',
        categoria : ['Español'],
        titulo    : 'El Cachirulo',
        nota      : [9, 6],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 38,
        descuento : '',
        enlace    : 'elcachirulo',
        aceptaYums: false
      },
      {
        tipo      : 'restaurante',
        imagen    : '/assets/imgs/restaurantes/restaurante6.webp',
        categoria : ['Gallego'],
        titulo    : 'Taberna 1941',
        nota      : [8, 6],
        dobleYums : false,
        insider   : false,
        pay       : true,
        parrafo   : '',
        precio    : 28,
        descuento : '',
        enlace    : 'taberna1941',
        aceptaYums: false
      }
    
    ]
  }
]
const slidersBot = [
  {
    titulo     : 'Otras ciudades en España',
    cuantosVeo : 6,
    tipoSlider : 'x-s',
    contenido  : [
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/madrid.webp',
        titulo    : 'Madrid',
        enlace    : 'madrid'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/barcelona.webp',
        titulo    : 'Barcelona',
        enlace    : 'madrid'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/valencia.webp',
        titulo    : 'Valencia',
        enlace    : 'valencia'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/sevilla.webp',
        titulo    : 'Sevilla',
        enlace    : 'sevilla'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/zaragoza.webp',
        titulo    : 'Zaragoza',
        enlace    : 'zaragoza'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/bilbao.webp',
        titulo    : 'Bilbao',
        enlace    : 'bilbao'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/granada.webp',
        titulo    : 'Granada',
        enlace    : 'granada'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/malaga.webp',
        titulo    : 'Málaga',
        enlace    : 'malaga'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/alicante.webp',
        titulo    : 'Alicante',
        enlace    : 'alicante'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/gijon.webp',
        titulo    : 'Gijón',
        enlace    : 'gijon'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/toledo.webp',
        titulo    : 'Toledo',
        enlace    : 'toledo'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/ciudades/mallorca.webp',
        titulo    : 'Palma de Mallorca',
        enlace    : 'palmademallorca'
      }
      
    ]
  },
  {
    titulo     : 'TheFork por el mundo',
    cuantosVeo : 3,
    tipoSlider : 'small',
    contenido  : [
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/paris.webp',
        titulo    : 'Paris',
        enlace    : 'paris'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/lyon.webp',
        titulo    : 'Lyon',
        enlace    : 'lyon'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/marsella.webp',
        titulo    : 'Marseille',
        enlace    : 'marseille'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/roma.webp',
        titulo    : 'Roma',
        enlace    : 'roma'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/milan.webp',
        titulo    : 'Milán',
        enlace    : 'milan'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/turin.webp',
        titulo    : 'Turín',
        enlace    : 'turin'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/amsterdam.webp',
        titulo    : 'Ámsterdam',
        enlace    : 'amsterdam'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/rotterdam.webp',
        titulo    : 'Róterdam',
        enlace    : 'roterdam'
      },
      {
        tipo      : 'ciudad',
        imagen    : '/assets/imgs/mundo/utretch.webp',
        titulo    : 'Utrecht',
        enlace    : 'utrecht'
      }    
    ]
  }
]
/*----------- */

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const yargs = require('yargs').argv

let {} = yargs
let {} = process.env

const app = express()


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : false}))


app.get('/', (req, res)=>{
    res.status(200).json(listaRestaurantes)
})
app.get('/sliderstop', (req, res)=>{
    res.status(200).json(slidersTop)
})
app.get('/slidersbot', (req, res)=>{
    res.status(200).json(slidersBot)
})
app.get('/restaurante/:enlace', (req, res)=>{
  let enlace = req.params.enlace
  let [buscar] = listaRestaurantes.filter( restaurante => restaurante.enlace == enlace)
  res.status(200).json(buscar)
})
app.get('/restaurantes', (req, res)=>{
  let buscar = listaRestaurantes.filter( restaurante => restaurante.tipo == 'restaurante')
  res.status(200).json(buscar)
})
app.get('/insider', (req, res)=>{
  let buscar = listaRestaurantes.filter( restaurante => restaurante.insider == true)
  res.status(200).json(buscar)
})
app.get('/dobleyums', (req, res)=>{
  let buscar = listaRestaurantes.filter( restaurante => restaurante.dobleYums == true)
  res.status(200).json(buscar)
})

app.listen(4000)