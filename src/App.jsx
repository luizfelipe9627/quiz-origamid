// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Radio from "./Components/Form/Radio";

// Criado uma array chamada perguntas com 4 objetos dentro.
const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

// Criado um componente chamado App.
const App = () => {
  // Criado um estado chamado respostas e uma função chamada setRespostas que atualiza o estado respostas. Inicializado com um objeto com as chaves p1, p2, p3 e p4 e valores vazios.
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = React.useState(0); // Criado um estado chamado slide e uma função chamada setSlide que atualiza o estado slide. Inicializado com o valor 0.
  const [result, setResult] = React.useState(null); // Criado um estado chamado result e uma função chamada setResult que atualiza o estado result. Inicializado com o valor null.

  // Criado uma função chamada handleChange que recebe o target como parâmetro, responsável por atualizar o estado respostas conforme o usuário vai selecionando as respostas.
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value }); // Atualiza o estado respostas pegando os valores antigos e atualizando o valor da chave que tem o mesmo nome do id do target com o valor do target.
  }

  // Função responsável por atualizar o estado slide conforme o usuário vai clicando no botão próximo.
  function handleClick() {
    // Se o slide for menor que o tamanho da array perguntas, o slide recebe o valor atual somado a 1.
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1); // Atualiza o estado slide somando 1 ao valor atual.
    } else {
      setSlide(slide + 1); // Se não, atualiza o estado slide somando 1 ao valor atual para que o fieldset seja escondido.
      finalResult(); // Se não, chama a função finalResult.
    }
  }

  // Função responsável por verificar se o usuário acertou ou não as respostas e atualizar o estado result com a quantidade de respostas corretas.
  function finalResult() {
    // O filter percorre a array perguntas e retorna um novo array somente com as perguntas que o usuário acertou, pegando a resposta e o id da pergunta e comparando com o valor da chave que tem o mesmo nome do id da pergunta dentro do estado respostas, se for igual, retorna a pergunta no novo array.
    const correct = perguntas.filter(
      ({ resposta, id }) => respostas[id] === resposta,
    );
    // O setState atualiza o estado result com uma string com a quantidade de respostas corretas e o tamanho da array perguntas.
    setResult(`Você acertou: ${correct.length} de ${perguntas.length}`);
  }

  // Retorna um form com um map que percorre a array perguntas e retorna um componente Radio com as props pergunta, options, resposta, id, value, setValue e onChange do componente App.
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {perguntas.map((pergunta, index) => {
        return (
          <Radio
            // O active verifica se o slide é igual ao index, se for, o componente Radio recebe a classe active, se não, não recebe.
            active={slide === index}
            // O key é usado para identificar cada elemento da array perguntas.
            key={pergunta.id}
            // O onChange do componente Radio recebe a função handleChange.
            onChange={handleChange}
            // O value do componente Radio recebe o valor da chave que tem o mesmo nome do id da pergunta dentro do estado respostas.
            value={respostas[pergunta.id]}
            // O setValue do componente Radio recebe a função setRespostas que atualiza o estado respostas.
            setValue={setRespostas}
            // O spread operator está passando todas as props(propriedades) do objeto pergunta para o componente Radio.
            {...pergunta}
          />
        );
      })}

      {/* Se o estado result for verdadeiro, retorna um parágrafo com o estado result, se não, retorna um botão com a função handleClick. */}
      {result ? (
        <p>{result}</p>
      ) : (
        <button onClick={handleClick}>Próximo</button>
      )}
    </form>
  );
};

export default App; // Está exportando o componente App.
