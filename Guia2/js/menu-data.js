/* ==========================================================
   LA PANETIÈRE — Datos del menú
   Generado a partir del contenido real del sitio original.
   Cada item: { name, desc, img, prices }
   - img: nombre de archivo dentro de img/menu/ (vacío si no hay foto)
   - prices: arreglo de strings, ej. ["\.25 - Grande"]
   ========================================================== */

const MENU_DATA = {
  "comidas": {
    "title": "Comidas",
    "eyebrow": "Desayunos · Almuerzos · Cenas · Menú Ejecutivo",
    "tabs": [
      {
        "key": "desayunos",
        "label": "Desayunos",
        "groups": [
          {
            "heading": "Desayunos",
            "items": [
              {
                "name": "El Vikingo",
                "desc": "Huevos con vegetales salteados, fajitas de carne acompañado de frijoles salteados y plátanos.",
                "img": "vikingo.jpg",
                "prices": [
                  "$10.50"
                ]
              },
              {
                "name": "El Artesano",
                "desc": "Huevos revueltos con vegetales y queso, sobre pan tres semillas, acompañado de frijoles guisados y plátanos.",
                "img": "artesano.jpg",
                "prices": [
                  "$8.75"
                ]
              },
              {
                "name": "Burrito Campesino",
                "desc": "Dos suavecitas tortillas de harina rellenas de huevo, cebolla y chile verde, y una deliciosa combinación de quesos, en una base de salsa ranchera, una excelente opción para arrancar con energía el día.",
                "img": "campesino.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Burrito Campesino con Loroco",
                "desc": "Dos suavecitas tortillas de harina rellenas de huevo, loroco, cebolla y chile verde, y una deliciosa combinación de quesos, en una base de salsa ranchera, una excelente opción para arrancar con energía el día.",
                "img": "burritocampesino.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "El Completo",
                "desc": "Huevos revueltos con cebolla, chile verde, tomate, acompañados de frijol, salsa roja, chorizo, plátano y pan horneado de la casa.",
                "img": "completo.jpg",
                "prices": [
                  "$9.25"
                ]
              },
              {
                "name": "Panetiere Croissant",
                "desc": "Suave y delicioso croissant de mantequilla con huevo, jamón de pavo y una combinación de quesos derretidos acompañado de tomates frescos con pesto y parmesano.",
                "img": "croissant.jpg",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Cuscatleco",
                "desc": "Dos huevos estrellados sobre dos pupusas de queso, bañadas en salsa roja, acompañadas de frijoles y plátanos.",
                "img": "cuscatleco.jpg",
                "prices": [
                  "$10.25"
                ]
              },
              {
                "name": "Chilaquiles de la doña",
                "desc": "Un huevo estrellado montado sobre chilaquiles de queso, bañadas en salasa roja, crema, cebolla morada, queso rallado",
                "img": "dona.jpg",
                "prices": [
                  "$9.25"
                ]
              },
              {
                "name": "Fritata Napolitana",
                "desc": "Claras de huevos, tomate, albahaca y queso feta, acompañado con pan integral de la casa.",
                "img": "fritata.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Omelette Jambón Fromage",
                "desc": "Omelette con jamón y queso gratinado con salsa bechamel y parmesano, acompañado de papas provenzal , frijoles y fruta fresca, servido con pan baguette y pan dulce.",
                "img": "fromage.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Huevo con Loroco",
                "desc": "Huevos revueltos con loroco, cebolla y queso mozarella derretido, acompañado con frijoles, queso y fruta fresca.",
                "img": "huevoloroco.jpg",
                "prices": [
                  "$9.00"
                ]
              },
              {
                "name": "Omelette Jamón Light (348 calorías)",
                "desc": "Omelette de 2 claras rellena de jamón de pavo, una lasca de queso mozarella, frijoles guisados, una rebanada de pan integral 100%.",
                "img": "ojamon.jpg",
                "prices": [
                  "$9.00"
                ]
              },
              {
                "name": "Omelette",
                "desc": "Omelette con dos opciones a elegir: vegetales ó loroco, acompañado de frijoles, crema y plátano.",
                "img": "omeletteloroco.jpg",
                "prices": [
                  "$9.65"
                ]
              },
              {
                "name": "Perico al Azteca",
                "desc": "Dos huevos revueltos con cebolla, chile verde y tomate, acompañados de frijol, queso fresco y plátanos servidos con pan de la casa y pan dulce.",
                "img": "perico.jpg",
                "prices": [
                  "$9.25"
                ]
              },
              {
                "name": "Desayuno Típico",
                "desc": "Dos huevos revueltos o estrellados, acompañados de salsa ranchera, plátanos, frijoles fritos, queso o crema y nuestro delicioso pan de la casa recién horneado.",
                "img": "tipico.jpg",
                "prices": [
                  "$9.25"
                ]
              },
              {
                "name": "Chilaquiles de la Nona",
                "desc": "Deliciosa combinación de nachos acompañados de pollo mechado, bañados en salsa roja y verde con dos huevos estrellados, cebolla blanca y cilantro.",
                "img": "nona.jpg",
                "prices": [
                  "$10.00"
                ]
              },
              {
                "name": "Huevos cama separadas",
                "desc": "Huevos estrellados montados en tortillas, bañados con salsa verde y roja, acompañadas de nachos enfrijolados con cebolla, crema y cilantro, servidos con pan baguette y pan dulce.",
                "img": "huevosencama.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Croq desayuno",
                "desc": "Croissant relleno de huevos revueltos gratinados con salsa bechamel, acompañados con frijoles, servidos con pan baguette y pan dulce.",
                "img": "croq.jpg",
                "prices": [
                  "$8.00"
                ]
              },
              {
                "name": "Desayuno Mañanero",
                "desc": "Huevos a su gusto, frijoles volteados, acompañados de salsa ranchera y nuestro delicioso pan recién horneado",
                "img": "mananero2.jpg",
                "prices": [
                  "$7.25"
                ]
              },
              {
                "name": "Americano",
                "desc": "Dos huevos estrellados acompañado de dos pancakes y tocino, servidos con pan baguette y pan dulce.",
                "img": "americano2.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Bechamel Deluxe",
                "desc": "Deliciosos huevos estrellados sobre pan ciabatta, gratinados con una mezcla de quesos, provolone, mozzarella y cheddar, acompañados con frijoles fritos y salsa bechamel",
                "img": "bechamel.jpg",
                "prices": [
                  "$8.75"
                ]
              },
              {
                "name": "Pigly",
                "desc": "Pan ciabatta con gratin de mezcla de quesos provolone, mozzarella, cheddar, tocino, montados con huevos estrellados, acompañados con plátano frijol frito y salsa bechamel",
                "img": "pigly.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Omelette Piperade",
                "desc": "Omelette con claras relleno con queso mozzarella y peperonata, frijoles guisados y requesón acompañado con pan integral.",
                "img": "omelette.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Desayuno de la casa",
                "desc": "Un huevo estrellado sobre una lasca de jamón de pavo, frijoles guisados, opción de salsa verde o roja una rebanada de pan 100% integral, café o té",
                "img": "delacasa.jpg",
                "prices": [
                  "$7.75"
                ]
              }
            ]
          },
          {
            "heading": "Desayunos Dulces",
            "items": [
              {
                "name": "Bon jour",
                "desc": "Deliciosas tostadas con nuestro pan integral canela y pasas, acompañado con banano y fresas.",
                "img": "bonjour.jpg",
                "prices": [
                  "$8.70"
                ]
              },
              {
                "name": "Banana Strawberry Pancakes",
                "desc": "Dos gigantescos pancakes rellenos de fresas frescas y banano, bañados en chocolate y cubiertos con crema batida.",
                "img": "pancake.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Tostadas Nevadas a la francesa",
                "desc": "Tostadas a la francesa con nuestros pan integral canela y pasas, rellenas de requesón, montadas con fresas, banano y dulce de leche.",
                "img": "tostadafrancesa.jpg",
                "prices": [
                  "$9.20"
                ]
              },
              {
                "name": "Pancake tres leches",
                "desc": "Pancakes bañados con nuestra deliciosa salsa de la casa de caramelo, leche condensada y crema chantilly.",
                "img": "tresleches.jpg",
                "prices": [
                  "$8.70"
                ]
              },
              {
                "name": "Set sante con yogurt",
                "desc": "Una copa de combinación de frutas de estación, acompañada de pan baguette y mermelada, con yogurt y granola",
                "img": "yogurt.jpg",
                "prices": [
                  "$10.25"
                ]
              },
              {
                "name": "Set Sante",
                "desc": "Una copa de combinación de frutas de estación, acompañada de pan baguette y mermelada.",
                "img": "set.jpg",
                "prices": [
                  "$8.75"
                ]
              }
            ]
          },
          {
            "heading": "Desayunos KETO",
            "items": [
              {
                "name": "Keto 1",
                "desc": "Tocino, huevos, aguacate, fresas y tomatada de la casa.",
                "img": "keto1.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Keto 2",
                "desc": "Queso a la plancha, aguacate, fajitas de res, huevos y tomatada de la casa.",
                "img": "keto2.jpg",
                "prices": [
                  "$1000"
                ]
              },
              {
                "name": "Keto 3",
                "desc": "Chorizo argentino, queso a la plancha, tomates, huevos y salsa roja y verde.",
                "img": "keto3.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Keto 4",
                "desc": "Aguacate, chorizo argentino, omelette con hongos, espinaca y salsa verde y roja.",
                "img": "keto4.jpg",
                "prices": [
                  "$9.50"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "almuerzos",
        "label": "Almuerzos y Cenas",
        "groups": [
          {
            "heading": "Entradas",
            "items": [
              {
                "name": "Queso Planchado",
                "desc": "Queso mantequilla a la plancha con aceite de oliva y albahaca, en una cama de tomate.",
                "img": "planchado.jpg",
                "prices": [
                  "$9.00"
                ]
              },
              {
                "name": "Pan con Ajo",
                "desc": "Pan baguette con mantequilola y ajo.",
                "img": "",
                "prices": [
                  "$5.00"
                ]
              }
            ]
          },
          {
            "heading": "Ensaladas",
            "items": [
              {
                "name": "Mikonos",
                "desc": "Lechuga romana, peperonatta, queso feta, pechuguitas de pollo, aceitunas kalamata, aderezo griego, acompañada con pan baguette.",
                "img": "mikonos.jpg",
                "prices": [
                  "$10.00"
                ]
              },
              {
                "name": "Malibu",
                "desc": "Fresas frescas, queso feta, mix de lechuga con arúgula y espinaca, almendras, maní caramelizado y aderezo balsámico, acompañado con pan baguette.",
                "img": "malibu.jpg",
                "prices": [
                  "$11.00"
                ]
              },
              {
                "name": "Ensalada de Pollo",
                "desc": "Combinación de lechuga, ensalada de pollo con almendras, tomate fresco y tostadas.",
                "img": "ensaladapollo.jpg",
                "prices": [
                  "$10.00"
                ]
              },
              {
                "name": "César con pollo",
                "desc": "Combinación de lechuga, croutons, aderezo cesar y queso parmesano",
                "img": "ensaladacesar.jpg",
                "prices": [
                  "$10.50"
                ]
              },
              {
                "name": "Capresse",
                "desc": "Rebanadas de tomate fresco, tomates cherry, albahaca fresca y queso mozarella.",
                "img": "capresse.jpg",
                "prices": [
                  "$7.00"
                ]
              }
            ]
          },
          {
            "heading": "Quiche",
            "items": [
              {
                "name": "Tres Quesos",
                "desc": "Mozarella, suizo y parmesano.",
                "img": "tresquesos.jpg",
                "prices": [
                  "$10.50 - Combo",
                  "$8.00 - Porción"
                ]
              },
              {
                "name": "Tocino",
                "desc": "Tocino y cebolla.",
                "img": "tocino.jpg",
                "prices": [
                  "$10.50 - Combo",
                  "$8.00 - Porción"
                ]
              },
              {
                "name": "Esparragos",
                "desc": "Mozzarella y esparragos.",
                "img": "",
                "prices": [
                  "$10.50 - Combo",
                  "$8.00 - Porción"
                ]
              }
            ]
          },
          {
            "heading": "Sopas y Cremas",
            "items": [
              {
                "name": "Sopa de tomate",
                "desc": "",
                "img": "tomate.jpg",
                "prices": [
                  "$8.00 - Entera",
                  "$7.50 - Media"
                ]
              },
              {
                "name": "Sopa de Lentejas",
                "desc": "",
                "img": "lentejas.jpg",
                "prices": [
                  "$9.00 - Entera",
                  "$8.50 - Media"
                ]
              },
              {
                "name": "Crema de Esparragos",
                "desc": "",
                "img": "",
                "prices": [
                  "$8.00 - Entera",
                  "$7.50 - Media"
                ]
              }
            ]
          },
          {
            "heading": "Pizzas",
            "items": [
              {
                "name": "Jamón y queso",
                "desc": "Salsa de tomates, queso mozarella, jámon virginia.",
                "img": "jamonyqueso.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Champi Queso",
                "desc": "Salsa de tomates, queso mozarella, hongos al vino, aceite de oliva y queso parmesano.",
                "img": "",
                "prices": [
                  "$10.00"
                ]
              },
              {
                "name": "Margarita",
                "desc": "Salsa de tomates, queso mozarella, tomates frescos, albahaca fresca.",
                "img": "margarita.jpg",
                "prices": [
                  "$10.00"
                ]
              },
              {
                "name": "Hawaii 5-0",
                "desc": "Salsa de tomates, queso mozarella, jamón virginia, piña en trocitos.",
                "img": "",
                "prices": [
                  "$10.50"
                ]
              },
              {
                "name": "Bowl de Ensalada",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.25"
                ]
              },
              {
                "name": "Formula Italiana",
                "desc": "2 Pizzas + 2 bowl de ensalada + 2 te helado con refil.",
                "img": "",
                "prices": [
                  "$21.99*"
                ]
              }
            ]
          },
          {
            "heading": "Crepas Saladas",
            "items": [
              {
                "name": "Normando",
                "desc": "Jamón de pavo, queso cheddar y salsa bechamel.",
                "img": "",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Forestiere",
                "desc": "Hongos al vino blanco, salsa bechamel y queso suizo.",
                "img": "",
                "prices": [
                  "$9.00"
                ]
              },
              {
                "name": "Breton",
                "desc": "Pechugas de pollo, salsa bechamel, queso zuizo y parmesano.",
                "img": "breton.jpg",
                "prices": [
                  "$9.00"
                ]
              }
            ]
          },
          {
            "heading": "Sándwiches",
            "items": [
              {
                "name": "Capresse",
                "desc": "Tomate, queso parmesano y mozarella, albahaca, salsa marinara y pesto en pan baguette, acompañado con ensalada de papa o ensalada fresca.",
                "img": "capressesand.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Positano",
                "desc": "Trocitos de pechuga de pollo, queso mozarella, salsa marinara y pesto, servido en pan baguette, acompañado con ensalada de papa o ensalada fresca.",
                "img": "positano.jpg",
                "prices": [
                  "$9.50"
                ]
              },
              {
                "name": "Super K",
                "desc": "Deliciosa combinación de jamón de pavo, jamón virginia, salami y queso suizo, lechuga, cebolla, tomate y aderezo de la casa, servido en pan flauta con ajonjolí, acompañado con ensalada de papas o ensalada fresca.",
                "img": "superk.jpg",
                "prices": [
                  "$12.00"
                ]
              },
              {
                "name": "Pollo",
                "desc": "Flauta rellena con nuestra ensalada de pollo, cebolla y lechuga, acompañado con ensalada de papa o ensalada fresca.",
                "img": "sandwichpollo.jpg",
                "prices": [
                  "$12.00"
                ]
              },
              {
                "name": "Steak",
                "desc": "Baguette con aderezo balsámico, steak de carne, cebolla caramelizada con hongos, queso suizo, bañado con una salsa de hongos, servido en pan baguette, acompañado con ensalada de papa o ensalada fresca.",
                "img": "steak.jpg",
                "prices": [
                  "$11.00"
                ]
              },
              {
                "name": "Media Noche",
                "desc": "Jamón virginia, queso cheddar fundido en pan baguette, acompañado con ensalada de papa o ensalada fresca.",
                "img": "",
                "prices": [
                  "$9.00"
                ]
              },
              {
                "name": "Vegetariano",
                "desc": "Flauta rellena de queso mozarella y queso cheddar acompañado de lechuga, palmito, tomate, aros de cebolla morada, aceitunas, aguacate y aderezo de la casa, acompañado con ensalada de papas o ensalada fresca.",
                "img": "",
                "prices": [
                  "$10.00"
                ]
              }
            ]
          },
          {
            "heading": "Pastas",
            "items": [
              {
                "name": "Lasagna Tres Quesos",
                "desc": "Mezcla de tres quesos con salsa bechamel, acompañado con ensalada fresca.",
                "img": "lasagnatresquesos.jpg",
                "prices": [
                  "$7.25"
                ]
              },
              {
                "name": "Lasagna con Hongos",
                "desc": "Mezcla de tres quesos con salsa bechamel y hongos, acompañado con ensalada fresca.",
                "img": "",
                "prices": [
                  "$8.00"
                ]
              },
              {
                "name": "Lasagna con Loroco",
                "desc": "Mezcla de tres quesos con salsa bechamel y loroco, acompañado con ensalada fresca.",
                "img": "lasagnaloroco.jpg",
                "prices": [
                  "$7.25"
                ]
              },
              {
                "name": "Lasagna con Pollo",
                "desc": "Mezcla de tres quesos con salsa bechamel y pollo, acompañado con ensalada fresca.",
                "img": "lasagnapollo.jpg",
                "prices": [
                  "$8.00"
                ]
              },
              {
                "name": "Fetuccini en Salsa Bechamel y Alcaparras",
                "desc": "Fetuccini en salsa bechamel, acompañado de alcaparras.",
                "img": "fetuccini.jpg",
                "prices": [
                  "$7.00"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "ejecutivo",
        "label": "Menú Ejecutivo",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Lasagna Tres Quesos",
                "desc": "Acompañado con ensalada fresca + soda o té helado",
                "img": "lasagna1.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Crepa Normando",
                "desc": "Acompañado con ensalada fresca + sopa de tomate + soda o té helado",
                "img": "normando.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Kaiser Roll de Pollo",
                "desc": "Acompañado con ensalada fresca + sopa de tomate + soda o té helado",
                "img": "kaiser.jpg",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Kaiser Roll Vegetariano",
                "desc": "Acompañado con ensalada fresca + sopa de tomate + soda o té helado",
                "img": "",
                "prices": [
                  "$9.75"
                ]
              },
              {
                "name": "Kaiser Roll con Jamón y Queso",
                "desc": "Acompañado con ensalada fresca + sopa de tomate + soda o té helado",
                "img": "",
                "prices": [
                  "$9.75"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "bebidas": {
    "title": "Bebidas",
    "eyebrow": "Calientes · Frías · Naturales",
    "tabs": [
      {
        "key": "bebidas-calientes",
        "label": "Bebidas Calientes",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Americano",
                "desc": "",
                "img": "americano.jpg",
                "prices": [
                  "$2.75 - Pequeño",
                  "$4.25 - Grande"
                ]
              },
              {
                "name": "Capuccino",
                "desc": "",
                "img": "capuccino1.jpg",
                "prices": [
                  "$4.20 - Pequeño",
                  "$4.75 - Grande"
                ]
              },
              {
                "name": "Cortadito",
                "desc": "",
                "img": "cortadito.jpg",
                "prices": [
                  "$2.75 - Pequeño",
                  "$3.35 - Grande"
                ]
              },
              {
                "name": "Espresso",
                "desc": "",
                "img": "",
                "prices": [
                  "$2.50 - Pequeño",
                  "$3.25 - Grande"
                ]
              },
              {
                "name": "Chai Latté Caliente",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.50 - Pequeño",
                  "$4.75 - Grande"
                ]
              },
              {
                "name": "Latté",
                "desc": "",
                "img": "latte.jpg",
                "prices": [
                  "$3.75 - Pequeño",
                  "$4.25 - Grande"
                ]
              },
              {
                "name": "Cappuccino Moccha",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.25 - Pequeño",
                  "$4.75 - Grande"
                ]
              },
              {
                "name": "Cappuccino Royal",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.25 - Pequeño",
                  "$4.75 - Grande"
                ]
              },
              {
                "name": "Caramel Latté",
                "desc": "",
                "img": "",
                "prices": [
                  "$3.75 - Pequeño",
                  "$4.75 - Grande"
                ]
              },
              {
                "name": "Té Caliente",
                "desc": "",
                "img": "",
                "prices": [
                  "$2.50 - Pequeño",
                  "$5.00 - Grande"
                ]
              },
              {
                "name": "Mokalatté Swiss",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.25 - Pequeño",
                  "$5.50 - Grande"
                ]
              },
              {
                "name": "Chocolate Caliente",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.00 - Pequeño",
                  "$4.50 - Grande"
                ]
              },
              {
                "name": "Chocolate Swiss",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.50 - Pequeño",
                  "$5.00 - Grande"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "bebidas-frías-de-café",
        "label": "Bebidas Frías de Café",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Caramel Latté Frío",
                "desc": "",
                "img": "frappecaramel.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Vainilla Latté Frío",
                "desc": "$5.25",
                "img": "",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Icekaffe",
                "desc": "Cappuccino helado triturado con hielo, selección de sabores Moka, vainilla, caramelo.",
                "img": "mokalatte.jpg",
                "prices": [
                  "$5.40"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "bebidas-frías",
        "label": "Bebidas Frías",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Té Helado instantaneo",
                "desc": "",
                "img": "",
                "prices": [
                  "$4.75"
                ]
              },
              {
                "name": "Horchata Frozen",
                "desc": "$4.85",
                "img": "",
                "prices": [
                  "$4.85"
                ]
              },
              {
                "name": "Chai Tea Especies",
                "desc": "",
                "img": "chaitea.jpg",
                "prices": [
                  "$4.25"
                ]
              },
              {
                "name": "Botella con Agua",
                "desc": "",
                "img": "",
                "prices": [
                  "$1.50"
                ]
              },
              {
                "name": "Sodas",
                "desc": "",
                "img": "",
                "prices": [
                  "$2.00"
                ]
              },
              {
                "name": "Smoothie de Taro",
                "desc": "",
                "img": "taro.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Frozen de Coco",
                "desc": "",
                "img": "frozencoco.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Frozen de Maracuyá",
                "desc": "",
                "img": "frozenmaracuya.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Frozen de Arrayán",
                "desc": "",
                "img": "arrayan.jpg",
                "prices": [
                  "$5.25"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "bebidas-naturales",
        "label": "Bebidas Naturales",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Jugo de Naranja",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.00"
                ]
              },
              {
                "name": "Limonada Natural",
                "desc": "$4.75",
                "img": "albahaca.jpg",
                "prices": [
                  "$4.75"
                ]
              },
              {
                "name": "Rosa de Jamaica",
                "desc": "",
                "img": "jamaica.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Limonada con Soda",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Jugo de Zanahoria",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Combinado",
                "desc": "Zanahoria y Naranja",
                "img": "",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Batido",
                "desc": "Fruta, leche y hielo",
                "img": "jugopapaya.jpg",
                "prices": [
                  "$5.00"
                ]
              },
              {
                "name": "Jugo Natural",
                "desc": "",
                "img": "naturales.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Frozen",
                "desc": "",
                "img": "frozenfresa.jpg",
                "prices": [
                  "$5.00"
                ]
              },
              {
                "name": "Smoothie",
                "desc": "Yogurt, hielo y frutas",
                "img": "",
                "prices": [
                  "$5.00"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "postres": {
    "title": "Postres",
    "eyebrow": "Individuales · Línea 0 Azúcar · Crepas Dulces",
    "tabs": [
      {
        "key": "postres-individuales",
        "label": "Postres Individuales",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Cardenalito",
                "desc": "",
                "img": "cardenalito.jpg",
                "prices": [
                  "$6.75"
                ]
              },
              {
                "name": "Creme Brulee",
                "desc": "",
                "img": "cremebrulee_.jpg",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Red Velvet Chocoflan",
                "desc": "",
                "img": "chocoflan.jpg",
                "prices": [
                  "$12.00"
                ]
              },
              {
                "name": "Pecan Pie",
                "desc": "",
                "img": "pecan1.jpg",
                "prices": [
                  "$6.25"
                ]
              },
              {
                "name": "Galleta Chilena",
                "desc": "",
                "img": "galletachillena.jpg",
                "prices": [
                  "$6.50"
                ]
              },
              {
                "name": "Tartaleta de fresas",
                "desc": "",
                "img": "tartaletafresas.jpg",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Tartaleta de frutas",
                "desc": "",
                "img": "tartaletafrutas.jpg",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Tartaleta de Lemoncello",
                "desc": "",
                "img": "lemon.jpg",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Petit Imperial",
                "desc": "",
                "img": "petit.jpg",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Tartaleta de Manzana con Queso",
                "desc": "",
                "img": "manzana.jpg",
                "prices": [
                  "$6.25"
                ]
              },
              {
                "name": "Banoffee Tart",
                "desc": "",
                "img": "Banoffeetart.jpg",
                "prices": [
                  "$5.00"
                ]
              },
              {
                "name": "Cheesecake Brigadeiros",
                "desc": "",
                "img": "brigadeiros.jpg",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Cheesecake Caramelo",
                "desc": "",
                "img": "caramelo.jpg",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Egoista de caramelo",
                "desc": "",
                "img": "egoista.jpg",
                "prices": [
                  "$7.25"
                ]
              },
              {
                "name": "Key lime pie",
                "desc": "",
                "img": "pielimon.jpg",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Pie de Higo",
                "desc": "",
                "img": "higo.jpg",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Tartaleta de Maracuyá",
                "desc": "",
                "img": "maracuya.jpg",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Banana Cream Pie",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Banoffe Pie Porción",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Kahlúa",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.75"
                ]
              },
              {
                "name": "Media Noche de Caramelo",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.75"
                ]
              },
              {
                "name": "N.Y. Cheesecake con Fresas Individual",
                "desc": "",
                "img": "",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Perverso de Chocolate",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.75"
                ]
              },
              {
                "name": "Seducción de Chocolate Blanco",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.75"
                ]
              },
              {
                "name": "Suspiro La Limeña",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.00"
                ]
              },
              {
                "name": "Tiramizu",
                "desc": "",
                "img": "",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Zanahoria",
                "desc": "",
                "img": "",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Pecan Pie Individual",
                "desc": "",
                "img": "pecan1.jpg",
                "prices": [
                  "$6.25"
                ]
              },
              {
                "name": "Tartaletas de maracuyá",
                "desc": "",
                "img": "",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Chiclosito Individual",
                "desc": "",
                "img": "",
                "prices": [
                  "$6.75"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "línea-0-ázucar",
        "label": "Línea 0 ázucar",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Cheesecake 0/A",
                "desc": "",
                "img": "cheesecake.jpg",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Tartaleta de Manzana 0/A",
                "desc": "",
                "img": "manzana.jpg",
                "prices": [
                  "$7.25"
                ]
              },
              {
                "name": "Zanahoria 0/A",
                "desc": "",
                "img": "cakezanahoria.jpg",
                "prices": [
                  "$8.50"
                ]
              },
              {
                "name": "Caja de Galletas Chocoavena Chip 0/A",
                "desc": "",
                "img": "cajagalletas.jpg",
                "prices": [
                  "$7.00"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "crepas-dulces",
        "label": "Crepas Dulces",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Nutella con Banano",
                "desc": "Pasta de avellana y chocolate.",
                "img": "crepabanano.jpg",
                "prices": [
                  "$6.00"
                ]
              },
              {
                "name": "Mont Blanc",
                "desc": "Fresas, crema chantilly y ron.",
                "img": "montblanc.jpg",
                "prices": [
                  "$6.50"
                ]
              },
              {
                "name": "La Crepa del Cardenal",
                "desc": "Caramelo, espumillas, fresas, canela y crema chantilly.",
                "img": "crepacardenal.jpg",
                "prices": [
                  "$8.00"
                ]
              },
              {
                "name": "Crema Pastelera",
                "desc": "Banano, crema pastelera, caramelo.",
                "img": "crepapastelera.jpg",
                "prices": [
                  "$7.00"
                ]
              },
              {
                "name": "Crepa Royal",
                "desc": "Dulce de leche, macadamia, crema de caramelo.",
                "img": "creparoyal.jpg",
                "prices": [
                  "$8.00"
                ]
              },
              {
                "name": "Bola de Sorbete",
                "desc": "",
                "img": "",
                "prices": [
                  "$1.25"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "cakes": {
    "title": "Cakes",
    "eyebrow": "Clásicos · Especiales · Línea Cero Azúcar · Pies",
    "tabs": [
      {
        "key": "cakes-clásicos",
        "label": "Cakes Clásicos",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Almond Crunch",
                "desc": "Torta envinada, relleno de crema chantilly, maní crocante, con dulce caramelizado.",
                "img": "almond.jpg",
                "prices": [
                  "$38.00 - Grande"
                ]
              },
              {
                "name": "Brownie Mousse de Chocolate",
                "desc": "Merengue horneado con nueces, brownie y mousse de chocolate.",
                "img": "mousse.jpg",
                "prices": [
                  "$43.00 - Grande"
                ]
              },
              {
                "name": "Caramelo Suave Especial",
                "desc": "Bizcocho de vainilla, humedecido con vino, relleno de caramelo suave especial con macadamias.",
                "img": "caramelosuave.jpg",
                "prices": [
                  "$39.00 - Grande",
                  "$32.00 - Pequeño"
                ]
              },
              {
                "name": "Imperial",
                "desc": "Merengue horneado, relleno de mousse de chocolate y decorado con almendras.",
                "img": "imperial.jpg",
                "prices": [
                  "$40.00 - Grande"
                ]
              },
              {
                "name": "Mokasupreme",
                "desc": "Merengue horneado, con almendras, cubierto con crema crema chantilly ,con un toque de café.",
                "img": "moka.jpg",
                "prices": [
                  "$40.00 - Grande"
                ]
              },
              {
                "name": "Shortcake Tropical",
                "desc": "Bizcocho de vainilla relleno de crema chantilly, cubierto con frutas tropicales y coco rallado alrededor.",
                "img": "tropical.jpg",
                "prices": [
                  "$40.00 - Grande",
                  "$33.00 - Pequeño"
                ]
              },
              {
                "name": "Torta Chilena",
                "desc": "Capas de galleta de mantequilla, relleno con dulce de leche y turrón alrededor.",
                "img": "tortachilena.jpg",
                "prices": [
                  "$38.00"
                ]
              },
              {
                "name": "Tartaleta Tropical",
                "desc": "Galleta de mantequilla, relleno de babarua, con fresa, kiwi, uva y melocotón.",
                "img": "tartaleta.jpg",
                "prices": [
                  "$29.00 - Grande"
                ]
              },
              {
                "name": "Chocomacadamia",
                "desc": "Bizcocho de chocolate, relleno con chocolate y macadamias.",
                "img": "chocomacadamia.jpg",
                "prices": [
                  "$39.00 - Grande",
                  "$30.00 - Pequeño"
                ]
              },
              {
                "name": "Choco Supreme",
                "desc": "Bizcocho de chocolate, relleno con chocolate, cubierto con ralladura de chocolate.",
                "img": "chocosupreme.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Choco Rainbow",
                "desc": "Bizcocho de chocolate, relleno con fudge de chocolate y galleta oreo, cubierto con ganache de chocolate, decorado con My M.",
                "img": "rainbow.jpg",
                "prices": [
                  "$35.00 - Grande",
                  "$26.00 - Pequeño"
                ]
              },
              {
                "name": "Selva Negra",
                "desc": "Bizcocho de chocolate, relleno con crema chantilly y cereza, humedecido con licor de cerezas.",
                "img": "selvanegra.jpg",
                "prices": [
                  "$38.00 - Grande",
                  "$31.00 - Pequeño"
                ]
              },
              {
                "name": "Saint Honoré",
                "desc": "Profiteroles rellenos con crema pastelera, con mousse de chocolate blanco, fesas y caramelo crocante.",
                "img": "saint.jpg",
                "prices": [
                  "$37.00"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "cakes",
        "label": "Cakes",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Cake de Fresas",
                "desc": "Bizcocho de vainilla, relleno con jalea de fresas y crema pastelera, cubierto con fresas y turrón flameado alrededor.",
                "img": "cakefresas.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Cake de Fresas con crema",
                "desc": "Bizcocho de vainilla, relleno con jalea de fresas y crema pastelera, cubierto con fresas y turrón flameado alrededor.",
                "img": "cake-fresas-crema.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Cardenal de fresas",
                "desc": "Espumilla, crema chantilly, y fresas.",
                "img": "cardenal.jpg",
                "prices": [
                  "$48.00 - Grande",
                  "$41.00 - Pequeño"
                ]
              },
              {
                "name": "Cardenal de extras fresas y extra crema",
                "desc": "Espumilla, crema chantilly, y fresas.",
                "img": "",
                "prices": [
                  "$52.00 - Grande",
                  "$45.00 - Pequeño"
                ]
              },
              {
                "name": "Crema Silvestre",
                "desc": "Torta de vainilla relleno, con crema chantilly de mora y crema chantilly de piña, cubierto con kiwi, fresas y coco rallado alrededor.",
                "img": "silvestre.jpg",
                "prices": [
                  "$36.00 - Grande"
                ]
              },
              {
                "name": "Garabato de Nutella",
                "desc": "Torta enrollada de vainilla, relleno de nutella, cubierto con turrón flameado.",
                "img": "garabato.jpg",
                "prices": [
                  "$25.00 - Pequeño"
                ]
              },
              {
                "name": "Dolchefetti",
                "desc": "Bizcocho de vainilla, relleno con dulce de leche, cubierto con betún de mantequilla y queso, y dulces de colores.",
                "img": "dolchefetti2.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Kahlúa",
                "desc": "Torta de chocolate, rellena de crema chantilly, mojada con licor de kalua, cubierto con chocolate blanco.",
                "img": "kahlua.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Media Noche de caramelo",
                "desc": "Torta de vainilla, y torta de chocolate, relleno de caramelo y crema chantilly.",
                "img": "medianoche1.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "N.Y. Cheesecake",
                "desc": "Pastel de queso decorado con fresas o caramelo.",
                "img": "ny.jpg",
                "prices": [
                  "$49.00 - Grande",
                  "$38.00 - Pequeño"
                ]
              },
              {
                "name": "Pionono",
                "desc": "Bizcocho enrollada de vainilla rellena de caramelo, bañado con turrón y caramelo.",
                "img": "pionono.jpg",
                "prices": [
                  "$25.00 - Pequeño"
                ]
              },
              {
                "name": "Pionono con almendras",
                "desc": "Bizcocho enrollada de vainilla rellena de caramelo, bañado con turrón y caramelo.",
                "img": "pionono-almond.jpg",
                "prices": [
                  "$26.00 - Pequeño"
                ]
              },
              {
                "name": "Pionono con fresas",
                "desc": "Bizcocho de vainilla, relleno con jalea de fresas y crema pastelera, cubierto con fresas y turrón flameado alrededor.",
                "img": "pionono-fresas-crema.png",
                "prices": [
                  "$25.00 - Pequeño"
                ]
              },
              {
                "name": "Seducción de Chocolate",
                "desc": "Bizcocho de vainilla relleno con mousse de fresas cubierta de seductor ganache de chocolate blanco y trozos de espumilla.",
                "img": "seduccion-blanco.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Tiramizu",
                "desc": "Torta de vainilla bañada con licor de café, relleno de mousse de queso, cubierto con cocoa y suspiros alrededor.",
                "img": "tiramisu.jpg",
                "prices": [
                  "$38.00 - Grande"
                ]
              },
              {
                "name": "Tres Leches con Baileys",
                "desc": "Bizcocho de vainilla, humedecido con tres leches y baileys.",
                "img": "bayleis.jpg",
                "prices": [
                  "$12.00 - Pequeño"
                ]
              },
              {
                "name": "Tres Leches con Dulce de leche",
                "desc": "",
                "img": "",
                "prices": [
                  "$25.00"
                ]
              },
              {
                "name": "Tres Leches con Turron",
                "desc": "",
                "img": "",
                "prices": [
                  "$25.00"
                ]
              },
              {
                "name": "Zanahoria",
                "desc": "Torta de zanahori, relleno con betun de mantequilla y queso, cubierto con betun de mantequilla y queso con almendras alrededor.",
                "img": "zanahoria.jpg",
                "prices": [
                  "$39.00 - Grande",
                  "$31.00 - Pequeño"
                ]
              },
              {
                "name": "Cardenal Tropical",
                "desc": "Espumilla, crema chantilly, uva, fresas, kiwi, melocoton, piña y arandanos.",
                "img": "cardenal-tropical.jpg",
                "prices": [
                  "$52.00 - Grande",
                  "$45.00 - Pequeño"
                ]
              },
              {
                "name": "Cardenal de melocotón",
                "desc": "Espumilla, crema chantilly, melocoton.",
                "img": "cardenal-melocoton.jpg",
                "prices": [
                  "$52.00 - Grande",
                  "$45.00 - Pequeño"
                ]
              },
              {
                "name": "Cardenal con caramelo",
                "desc": "Espumilla, crema chantilly, fresas y caramelo.",
                "img": "cardenal-caramelo.png",
                "prices": [
                  "$52.00 - Grande",
                  "$45.00 - Pequeño"
                ]
              },
              {
                "name": "Merengon de fresas",
                "desc": "Merengue horneado con almendras, caramelo , crema chantilly, fresas.",
                "img": "merengon.jpg",
                "prices": [
                  "$30.00 - Grande"
                ]
              },
              {
                "name": "Choco fresas",
                "desc": "Bizcocho de vainilla, relleno con mousse de fresas y jalea de fresas, cubierto con crema de chocolate, decorado con fresas.",
                "img": "chocofresas.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Red Velvet",
                "desc": "Bizcocho rojo, relleno con betun de mantequi y queso, decorado con ralladura de chocolate blanco, fresas, brigadiros y arandanos.",
                "img": "redvelvet.jpg",
                "prices": [
                  "$37.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Perverso de chocolate",
                "desc": "Bizcocho de chocolate, relleno con fudge de chocolate, cubierto con crema de chocolate y ganache de chocolate.",
                "img": "perverso3.jpg",
                "prices": [
                  "$36.00 - Grande",
                  "$28.00 - Pequeño"
                ]
              },
              {
                "name": "Chiclosito",
                "desc": "Torta de queso y mantequilla, centro chicloso, decorado con fresas y arandanos.",
                "img": "chiclosito.jpg",
                "prices": [
                  "$28.00 - Pequeño"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "cakes-línea-cero-azucar",
        "label": "Cakes Línea Cero Azucar",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Cheesecake 0/A",
                "desc": "8 porciones.",
                "img": "cheesefresas.jpg",
                "prices": [
                  "$49.00 - Grande",
                  "$38.00 - Pequeños"
                ]
              },
              {
                "name": "Fressiere 0/A",
                "desc": "8 Porciones",
                "img": "fresiere.jpg",
                "prices": [
                  "$31.00"
                ]
              },
              {
                "name": "Shorcake Tropical 0/A",
                "desc": "",
                "img": "short.jpg",
                "prices": [
                  "$43.00 - Grande",
                  "$33.00 - Pequeño"
                ]
              },
              {
                "name": "Pie de Manzana y Queso 0/A",
                "desc": "",
                "img": "piemanzana0a.jpg",
                "prices": [
                  "$30.00"
                ]
              },
              {
                "name": "Tartaleta de Manzana 0/A",
                "desc": "",
                "img": "tartaletamanzana.jpg",
                "prices": [
                  "$33.00"
                ]
              },
              {
                "name": "Strawberry Shortcake 0/A",
                "desc": "",
                "img": "shortfresas.jpg",
                "prices": [
                  "$40.00 - Grande",
                  "$30.00 - Pequeño"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "pies",
        "label": "Pies",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Banana Cream Pie",
                "desc": "Base de galleta de mantequilla rellena de crema de banano decorada con crema chantilli.",
                "img": "piebanana.jpg",
                "prices": [
                  "$26.00"
                ]
              },
              {
                "name": "Key Lime Pie",
                "desc": "Base de galleta de mantequilla rellena de crema de limón con queso.",
                "img": "pielimon2.jpg",
                "prices": [
                  "$26.00"
                ]
              },
              {
                "name": "Pie de Higo",
                "desc": "Galleta de mantequilla rellena de higos cremas y especies.",
                "img": "pie-higo.jpg",
                "prices": [
                  "$29.00"
                ]
              },
              {
                "name": "Pie de Manzana Queso",
                "desc": "Galleta de mantequilla, relleno con queso cubierto con manzana.",
                "img": "piemanzana0a.jpg",
                "prices": [
                  "$29.00"
                ]
              },
              {
                "name": "Pie Pecana",
                "desc": "Descripcion",
                "img": "pie-pecan.jpg",
                "prices": [
                  "$24.00"
                ]
              },
              {
                "name": "Banoffee Pie",
                "desc": "Relleno con dulce de leche, rodajas de banano, decorado con crema y almendras.",
                "img": "banoffee.jpg",
                "prices": [
                  "$23.00"
                ]
              },
              {
                "name": "Pecan Apple pie",
                "desc": "Base de pecanas caramelizadas, relleno con manzana",
                "img": "pecan-apple-pie.png",
                "prices": [
                  "$20.00"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "panaderia": {
    "title": "Panadería y Repostería",
    "eyebrow": "Repostería · Panadería · Línea Keto",
    "tabs": [
      {
        "key": "reposteria",
        "label": "Reposteria",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Caja Alfajores",
                "desc": "",
                "img": "alfajores.jpg",
                "prices": [
                  "$7.00 - 12 unid."
                ]
              },
              {
                "name": "Galleta avena y pasas",
                "desc": "",
                "img": "galletaavena.jpg",
                "prices": [
                  "$2.00"
                ]
              },
              {
                "name": "Galleta Pretzel",
                "desc": "",
                "img": "galletapretzel.jpg",
                "prices": [
                  "$3.75"
                ]
              },
              {
                "name": "Pichardines",
                "desc": "",
                "img": "pichardines.jpg",
                "prices": [
                  "$2.00",
                  "$10.00 - Caja"
                ]
              },
              {
                "name": "Quesadillas",
                "desc": "",
                "img": "quesadillas.jpg",
                "prices": [
                  "$3.00"
                ]
              },
              {
                "name": "Mini Tartaleta de Guayaba o Piña",
                "desc": "",
                "img": "tartaletas.jpg",
                "prices": [
                  "$2.75"
                ]
              },
              {
                "name": "Caja de Tronaditas",
                "desc": "",
                "img": "tronaditas.jpg",
                "prices": [
                  "$1.75"
                ]
              },
              {
                "name": "Caja de Vittas Honradas",
                "desc": "",
                "img": "vitas.jpg",
                "prices": [
                  "$6.65"
                ]
              },
              {
                "name": "Bolsa Salpores",
                "desc": "",
                "img": "",
                "prices": [
                  "$3.00"
                ]
              },
              {
                "name": "Caja Orejitas",
                "desc": "",
                "img": "",
                "prices": [
                  "$3.25"
                ]
              },
              {
                "name": "Fun Fetty",
                "desc": "",
                "img": "",
                "prices": [
                  "$3.00"
                ]
              },
              {
                "name": "Galleta Media Luna",
                "desc": "",
                "img": "",
                "prices": [
                  "$2.00"
                ]
              },
              {
                "name": "Madeleine",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Chocomonkey",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.50"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "panadería",
        "label": "Panadería",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Bolsa de Crosstinis",
                "desc": "",
                "img": "crosstinis.jpg",
                "prices": [
                  "$3.00"
                ]
              },
              {
                "name": "Bolsa de Croutones",
                "desc": "",
                "img": "",
                "prices": [
                  "$3.00"
                ]
              },
              {
                "name": "Campesino Integral",
                "desc": "",
                "img": "campesinointegral.jpg",
                "prices": [
                  "$4.50"
                ]
              },
              {
                "name": "Chocomonkey",
                "desc": "",
                "img": "chocomonkey.jpg",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Croissant precocido",
                "desc": "",
                "img": "croasaint.jpg",
                "prices": [
                  "$2.00"
                ]
              },
              {
                "name": "Pan Canela y Pasas",
                "desc": "",
                "img": "canelaypasas.jpg",
                "prices": [
                  "$5.00"
                ]
              },
              {
                "name": "Torta de Banano",
                "desc": "",
                "img": "tortadebanano.jpg",
                "prices": [
                  "$5.95"
                ]
              },
              {
                "name": "Torta de Naranja",
                "desc": "",
                "img": "tortanaranja.jpg",
                "prices": [
                  "$6.50"
                ]
              },
              {
                "name": "Tres Semillas con Miel",
                "desc": "",
                "img": "tressemillas.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Tres Semillas Cero Azúcar",
                "desc": "",
                "img": "tressemillassinmiel.jpg",
                "prices": [
                  "$5.25"
                ]
              },
              {
                "name": "Flauta con Ajonjoli",
                "desc": "",
                "img": "",
                "prices": [
                  "$1.00"
                ]
              },
              {
                "name": "Nudo de leche",
                "desc": "",
                "img": "",
                "prices": [
                  "$1.00"
                ]
              },
              {
                "name": "Pan Cheddar",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.95"
                ]
              },
              {
                "name": "Baguette precocido",
                "desc": "",
                "img": "",
                "prices": [
                  "$1.25"
                ]
              },
              {
                "name": "Caja de Vitta honradas",
                "desc": "",
                "img": "",
                "prices": [
                  "$5.75"
                ]
              },
              {
                "name": "Caja de Pichardinas",
                "desc": "",
                "img": "",
                "prices": [
                  "$10.00"
                ]
              },
              {
                "name": "Francesitos",
                "desc": "",
                "img": "",
                "prices": [
                  "$0.25"
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "linea-keto",
        "label": "Linea Keto",
        "groups": [
          {
            "heading": null,
            "items": [
              {
                "name": "Brownie de Chocolate",
                "desc": "",
                "img": "brownie-chocolate.jpg",
                "prices": [
                  "$3.75"
                ]
              },
              {
                "name": "Chocochip Cookies",
                "desc": "",
                "img": "chocochip-cookie.jpg",
                "prices": [
                  "$3.00"
                ]
              },
              {
                "name": "Chocochip Sandwich Cookie",
                "desc": "",
                "img": "sandwich-cookie.jpg",
                "prices": [
                  "$4.00"
                ]
              },
              {
                "name": "Cinnamon Butter Loaf",
                "desc": "",
                "img": "cinnamon-loaf.jpg",
                "prices": [
                  "$4.75"
                ]
              },
              {
                "name": "Mini Donut Coconut",
                "desc": "",
                "img": "mini-donut.jpg",
                "prices": [
                  "$4.75"
                ]
              },
              {
                "name": "Pan Blanco Keto",
                "desc": "",
                "img": "pan-blanco.jpg",
                "prices": [
                  "$5.50"
                ]
              },
              {
                "name": "Pumpkin Mini Donut",
                "desc": "",
                "img": "pumpkin-donut.jpg",
                "prices": [
                  "$4.75"
                ]
              },
              {
                "name": "Coconut Dream Bar",
                "desc": "",
                "img": "coconut-dream.jpg",
                "prices": [
                  "$4.75"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
