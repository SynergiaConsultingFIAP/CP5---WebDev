const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Rota de depoimentos
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

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
