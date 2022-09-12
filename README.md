# NG SSR

Esse projeto tem como objetivo o estudo do SSR do Angular Universal, principalmente o uso do objeto window nele, já que foram encontrados problemas ao utilizar em um projeto profissional.

É uma projeto simples:
- Usando router.
- 2 rotas: home e images.
- - A página `home` contém o conteúdo inicial criado com o Angular + uma lista de imagens.
- - A página `images` contém apenas as imagens.
- Para as imagens foram usadas o ngOptimizedImages, reaproveitado de outro componente.

## Solução para o Window.

Primeiro preciso trazer um ponto: Nesse projeto, usando o window convencionalmente, não houve problema. Não sei se é a versão do Angular, ou se é por que mudaram a biblioteca que fazia o SSR
em alguma versão mais recente do Angular, mas não houve mais problemas com o window.

Tanto que resolve fazer de duas formas:
- Para a `home`, criei um serviço que retorna o window após alguns passos (não fui tão a fundo sobre os passos, mas quis tentar uma solução diferente só para ver se trazer o window de outra forma
e injeta-lo funcionaria), injeto esse window no constructor e tudo certo.
- Para a `images`, uso o window normalmente.

Sei que há uma oura forma de só injetar o window diretamente no constructor usando um @Inject(), e talvez só ela já funcione sem o serviço (não lembro a solução, usei no projeto, esqueci agora).

## Conclusões

Saber que o window funcionou normalmente, mesmo depois de fazer o build da aplicação e servir ela, me deixou confuso. Das duas opções, uma:
- Ou o que acusa erros é o build pelo Gitlab, em algum dos passos feito pelo DevOps.
- Ou o problema foi solucionado nas versões recentes do Angular.

Não lembro também se a biblioteca que adicionavamos para uso do ngUniversal era `@nguniversal/express-engine`. Pode ser que houve uma mudança que agora entende o window. Apesar que na [documentação](https://angular.io/guide/universal#universal-template-engine) eles dizem explicitamente que uma aplicação SSR não entende APIs do Browser e que o Angular disponibiliza abstrações para essas APIs e que podemos escrever as nossas.
Mas se preciso de abstrações, por que tanto serve quanto build funcionaram perfeitamente?

Podemos criar um novo projeto de SSR e tentar novamente agora com a v14 do Angular.

obs: o `ng-ssr` nos scripts do `package` é o nome do projeto.
