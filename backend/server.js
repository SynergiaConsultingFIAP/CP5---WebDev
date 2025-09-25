require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const THEMEALDB_URL = process.env.THEMEALDB_URL || "https://www.themealdb.com/api/json/v1/1";

app.use(express.json());
app.use(cors());

app.get('/depoimentos', (req, res) => {
  const depoimentos = [
    {
      id: 1,
      nome: "Maria Oliveira",
      mensagem: "Adorei a experiência! O site é super prático, rápido e fácil de navegar. Consegui encontrar exatamente o que precisava sem complicações. Além disso, o atendimento foi muito atencioso, tirando todas as minhas dúvidas rapidamente. Sem dúvida, recomendo a todos!"
    },
    {
      id: 2,
      nome: "João Silva",
      mensagem: "Fiquei impressionado com a qualidade e a organização. Tudo funciona de maneira simples e objetiva, o que torna a experiência muito agradável. O cuidado com cada detalhe é visível e isso faz toda a diferença. Certamente voltarei a utilizar e indicarei para meus amigos."
    },
    {
      id: 3,
      nome: "Fernanda Costa",
      mensagem: "Minha experiência foi incrível do começo ao fim. O design é bonito e intuitivo, e a navegação é super fluida. Além disso, fiquei muito satisfeita com a rapidez no atendimento e a forma acolhedora como fui tratada. Me senti valorizada como cliente e já virei fã do serviço."
    }
  ];

  res.json(depoimentos);
});

app.get('/comidas', async (req, res) => {
  try {
    const IDS = ["53013", "53065", "53014", "52823", "52770", "52854"];

    const traducoesTitulos = {
      "Big Mac": "Big Mac",
      "Sushi": "Sushi",
      "Pizza Express Margherita": "Pizza Margherita",
      "Salmon Prawn Risotto": "Risoto de Salmão com Camarão",
      "Spaghetti Bolognese": "Espaguete à Bolonhesa",
      "Pancakes": "Panquecas"
    };

    const traducoesCategorias = {
      "Beef": "Carne",
      "Seafood": "Frutos do Mar",
      "Dessert": "Sobremesa",
      "Pasta": "Massa"
    };

    const traducoesAreas = {
      "American": "Americana",
      "Japanese": "Japonesa",
      "Italian": "Italiana",
      "British": "Britânica",
      "Chinese": "Chinesa"
    };

    const promises = IDS.map(id =>
      fetch(`${THEMEALDB_URL}/lookup.php?i=${id}`).then(r => r.json())
    );

    const results = await Promise.all(promises);
    const comidas = results.flatMap(r => r.meals);

    let comidasFormatadas = comidas.map(meal => {
      let categoria = traducoesCategorias[meal.strCategory] || meal.strCategory;

      if (meal.strMeal.includes("Spaghetti") || meal.strMeal.includes("Pizza")) {
        categoria = "Massa";
      }

      return {
        id: meal.idMeal,
        titulo: traducoesTitulos[meal.strMeal] || meal.strMeal,
        image: meal.strMealThumb,
        area: traducoesAreas[meal.strArea] || meal.strArea,
        categoria,
        instructions: meal.strInstructions,
        youtube: meal.strYoutube
      };
    });

    const { nome, categoria } = req.query;

    if (nome) {
      comidasFormatadas = comidasFormatadas.filter(c =>
        c.titulo.toLowerCase().includes(nome.toLowerCase())
      );
    }

    if (categoria) {
      comidasFormatadas = comidasFormatadas.filter(c =>
        c.categoria.toLowerCase().includes(categoria.toLowerCase())
      );
    }

    res.json(comidasFormatadas);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    res.status(500).json({ error: "Erro ao buscar dados da API de comidas." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
