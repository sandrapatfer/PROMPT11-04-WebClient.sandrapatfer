# Trabalho Final #

## Parte 1 ##

1. Apresentação de Filmes(directoria Final-Work\Part-1\WebApp\Movies)

O ficheiro movies.html mostra uma lista de filmes com um CSS, clicando na pagina o CSS muda.

2. Formulario

3. Templates HTML
(directoria Final-Work\Part-1\WebApp\Scripts\template.js)

A função template lê a tag template na pagina e consoante o segundo argumento pode retornar a função, executar a função sobre um objecto ou um array de objectos.

O ficheiro movies.html foi alterado para testar a funcionalidade dos templates.

4. Linq
(directoria Final-Work\Part-1\WebApp\Scripts\linq.js)

Implementação dos vários metodos linq. O ficheiro test_linq.htm (não tem interface) exemplifica os metodos atraves de alguns testes simples.

## Parte 2 ##

Aplicação web

### Publicação de desenhos

A publicação pode ser realizada usando um ficheiro em disco ou desenhando no canvas.

### Apresentação dos desenhos mais recentes

A lista de desenhos mais recentes usa AJAX para pedir os ultimos 3 desenhos da lista.
Usa-se um timer para pedir os 3 desenhos mais recentes e através da definição de templates preenche-se uma lista.

Foi definida uma vista parcial, _LastDrawings, que configura o updater com o url a ler, o template a usar e o id do elemento a escrever com o texto final. Este objecto está definido no ficheiro updater.js.

### Apresentação de todos os desenhos

A pagina de indice mostra todos os desenhos, com uma interface simples de paginação.
A paginação faz um pedido AJAX ao servidor que responde com uma vista parcial que contem o conteudo da tabela.

### Procura de desenhos

A pagina de indice inclui uma area de filtro que permite restringir a lista por titulo. O pedido AJAX que é realizado é o mesmo que na paginação, pelo que é igualmente retornada a vista parcial com o novo conteudo da tabela.

## Notas

   * O formulário, o segundo exercicio de CSS, não foi realizado
   * A apresentação de todos os desenhos apenas tem um modo de visualização
   * A funcionalidade de paginação apenas funciona com AJAX. Como é que se consegue que a mesma funcionalidade funcione com e sem AJAX? Não descobri...
   * A funcionalidade de app cache para funcionar offline seria interessante para permitir desenhar no canvas sem rede, mas não consegui testar, apenas inclui o ficheiro cache.manifest. Sendo as views sempre geradas não há nenhuma maneira de a app funcionar offline?
   * A funcionalidade de apresentação dos desenhos mais recentes deveria suportar um mecanismo para informar o servidor de qual o ultimo desenho obtido

