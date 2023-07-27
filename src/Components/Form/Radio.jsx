import React from "react";

// Criado um componente chamado Radio que recebe as props(propriedades) pergunta, options, resposta, id, value, setValue e onChange do componente App.
const Radio = ({
  pergunta,
  options,
  resposta,
  id,
  value,
  onChange,
  active,
}) => {
  if (active === false) return null; // Se o active for false, retorna null(que é nada).

  // Retorna um fieldset com uma legenda com o texto da propriedade pergunta, um map que percorre a array options e retorna um label com um input do tipo radio com o value igual ao option, onChange igual ao onChange do componente App, id igual ao id do componente App e checked igual ao value do componente App igual ao option.
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #EEE",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {/* O map percorre o array options e retorna um label com um input do tipo radio com o value igual ao option, onChange igual ao onChange do componente App, id igual ao id do componente App e checked igual ao value do componente App igual ao option. */}
      {options.map((option) => {
        return (
          <label
            // O key é usado para identificar cada elemento da array options.
            key={option}
            style={{ marginBottom: "1rem", fontFamily: "monospace" }}
          >
            <input
              type="radio"
              value={option}
              // O onChange do input Radio recebe o onChange do componente App, tendo como valor a função handleChange.
              onChange={onChange}
              // O id do input Radio recebe o id da pergunta presente dentro da array perguntas.
              id={id}
              // O checked é responsável por marcar o input Radio que está selecionado, se value(que é o valor do estado respostas) for igual ao option(que é o valor da opção atual do map) o input Radio é marcado, se não, não é marcado.
              checked={value === option}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
};

export default Radio; // Está exportando o componente Radio.
