export default function Footer() {
  return (
    <footer className="flex flex-col md:flex md:flex-row text-xs text-[#6C6C6C] gap-x-5 items-center gap-y-5">
      <img className="w-28 md:w-24" src="https://exoonero.org/creative-commons.png" />
      <p>
        Dados públicos extraídos de diários oficiais municipais da Associação
        dos Municípios Alagoanos (AMA). Todo o conteúdo do site está disponível
        sob a licença Creative Commons Atribuição 4.0 Internacional, o que
        significa que pode ser compartilhado e reutilizado para trabalhos
        derivados, desde que citada a fonte.
      </p>
    </footer>
  );
}
