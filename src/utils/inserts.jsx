export var iniciar = [
'DROP TABLE IF EXISTS checkpoint',

`create table if not exists checkpoint (
  id integer primary key autoincrement unique not null,
  titulo text,
  descricao text,
  desafio text,
  fonte text,
  resposta text);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças no mundo virtual', 
'Com o crescimento de conteúdos virais, muitas crianças e adolescentes passaram a replicar muitas atividades em alta para participar das modas da internet, dentre estas atividades podemos citar as danças como uma das mais reproduzidas por todas as pessoas. 
    
Quando a criança está em um ambiente virtual não acompanhado, ela começa a interagir com inúmeras pessoas por meio de comentários em seus conteúdos ou por mensagens privadas e é nesta interação que muitas crianças e adolescente são vítimas de pedofilia. Estudos mostram que uma em cada cinco crianças e adolescentes (20%) diz ter visto ou recebido imagens ou vídeos com conteúdo adulto, sendo assim:', 
'Na próxima rodada você:
  * Perderá 4 comandos da quantidade que retirar', 'Fonte G1', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças no mundo virtual', 
'O mundo virtual disponibiliza muitas informações a todos os momentos e isto não é segredo para ninguém, é importante destacar que nem sempre são informações boas e relevantes para a saúde das pessoas e não é diferente quando falamos sobre as crianças.

As redes sociais são portas abertas para a vida íntima de seus usuários, o que pode gerar inúmeras comparações com parâmetros irreais de felicidade, beleza e sucesso, auxiliando na ansiedade infantil quando não é realizado um uso correto e administrado pela base familiar, sendo assim:', 
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retirar', 'Fonte escola da inteligência', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças no mundo virtual', 
'A mídia social faz parte do cotidiano de quase todo o mundo e introduzir a criança e adolescente neste meio, auxilia não apenas na socialização com familiares e amigos, como também no ensino aprendizagem de comportamento social perante situações formais, como escola e até mesmo o ambiente de trabalho.
  
Vale ressaltar que este ambiente precisa ser coordenado pelos pais, para que siga sendo um ambiente seguro e que contribua com este crescimento pessoal, sendo assim:', 
'Se algum jogador estiver com uma camisa preta, então:
  * Você ganhará um laço de repetição
Senão:
  Você ganhará uma lista com os comandos abaixo:
    * Ir para a frente
    * Pular', 'Fonte Internet matters', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças no mundo virtual', 
'Como tudo na vida, a exposição das crianças no meio digital pode trazer muitos riscos, mas também disponibiliza muitos benefícios. 

Quando criança, a percepção humana é mais aguçada, além de absorver quase tudo o que consome e desenvolver aprendizados de forma mais rápida, desse modo a disponibilidade de conteúdos e ensinamentos presentes na internet pode auxiliar no desenvolvimento infantil, ajudando a se identificar com temas que podem no futuro tornar-se seu trabalho, além de entender o mundo ao seu redor, sendo assim:', 
'Se você ganhar no impar/par com o jogador da direita, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Ir para a frente
		* Ir para a frente
		* Descer
		* Pular', 'Fonte Internet matters', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Criticas a sobrepeso',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Cancelamento',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Opinião imposta',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Conteúdos sem interesse',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Reality shows (fanatismo)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Reality shows (Opinião diferente)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Acessibilidade', 
'O Instituto Brasileiro de Geografia Estatística (IBGE) aponta que o Brasil tem mais de 10 milhões de pessoas surdas, equivalente a 5,1% da população. Desse universo, 2,7 milhões têm surdez profunda.
	
A comunidade surda está ganhando cada vez mais espaço nas redes sociais, dessa forma é necessário a inclusão dessas pessoas. Vale ressaltar que nem todos os surdos são bilíngues e sabem ler, mas grande parte deles sabem. Dessa forma utilização das legendas em conteúdos com áudio, se faz necessária, sendo assim:', 
'Se você encontrar em 3 min um objeto pontudo de cor vermelha:
	* Ganhará um laço de repetição
Senão:
	Ganhará uma Lista com 3 comandos, sendo eles:
		* Ir para frente
		* Descer
		* Girar para à esquerda', 'Fonte Cult Estácio', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Acessibilidade', 
'A epilepsia é uma alteração temporária e reversível do funcionamento do cérebro, que não tenha sido causada por febre, drogas ou distúrbios metabólicos e se expressa por crises epilépticas repetidas.

Muitos filtros e vídeos são criados utilizando várias cores piscando ao mesmo tempo, além da utilização de luzes de led no cenário que virou moda entre os jovens. Estes recurso pode causar convulsões epilépticas em algumas pessoas sensíveis a luzes, sendo assim:', 
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retirar', 'Fonte Biblioteca Virtual em saúde', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Acessibilidade', 
'Daltonismo é um distúrbio da visão que interfere na percepção das cores.Ser daltônico não é empecilho para o desenvolvimento normal da criança, nem para o aprendizado, mas algumas atitudes precisam ser tomadas para auxiliá-los quando se trata de cores.

Uma das interações mais comuns durante a pandemia foram jogos que reuniam as pessoas online, como o Among us e alguns grupos de amigos mudaram as cores de seus avatares quando um daltônico estava presente para incluí-lo da melhor maneira possível, sendo assim:', 
'Se você fizer uma mímica da palavra “aeroporto” ou “aniversário” em 3 min e alguém adivinhar:
	* Você ganhará um laço de repetição
Senão:
	Ganhará uma Lista com 2 comandos, sendo eles:
		* Ir para frente
		* Descer', 'Fonte Drauzio Varella', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Fake news', 
'As Fakes News sempre estiveram presentes ao longo da história, mas ganharam força e destaque em 2016 com a corrida presidencial dos Estados Unidos, época em que conteúdos falsos sobre a candidata Hillary Clinton foram compartilhados de forma intensa pelos eleitores de Donald Trump. Atitude que foi bastante replicada em diversos países, mas principalmente no Brasil.

Ao compartilhar uma notícia sem verificar as fontes, os usuários acabam gerando diversos outros problemas sociais como homofobia, xenofobia, além de violência e até morte, como em um caso de 2014 onde um boato sobre uma mulher, comprovado posteriormente que era mentira, levou moradores da região a agredi-la, sendo assim:', 
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retira', 'Fonte Brasil Escola', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Protestos indigenas',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Omissão de opiniões',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos (abusivo)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos (assedio)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos (Proximo passo)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos (Criação de filhos e palpites)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos (Novos modelos de relacionamento)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Religião (Intolerancia)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Religião (Ditar certo e errado)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Religião (Expressar opiniões desrespeitosas)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental nas redes sociais', 
'O engajamento, é hoje a base das redes sociais. Os usuários postam para atrair like e público a todo momento, as principais plataformas sociais criaram um mecanismo de fazer os usuários se sentirem eternamente insatisfeitos, aumentando também os julgamentos e críticas.

É perceptível que ao publicar qualquer conteúdo, além de acompanhar todos os comentários também acompanha-se a quantidade de curtidas, chegando a deletar o post, caso não atinja uma quantidade considerável, causando assim inúmeros problemas mentais na maior parte dos usuários, sendo assim:', 
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte Aela school', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental nas redes sociais (Corpo perfeito)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental nas redes sociais (Vida perfeita)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental nas redes sociais (Rede de apoio)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental nas redes sociais (Bullying e baixa estima)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade (Doação de alimentos na pandemia)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade (Doação de Sangue)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade (Divulgar pontos de coleta)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade (Feminismo e salarios iguais)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo', 
'Uma das maiores pressões estéticas da sociedade, em mulheres, tem relação com o cabelo liso e cacheado. Desde muito cedo as crianças escutam críticas e piadas sobre seus cabelos e no mais tardar, durante a adolescência, é comum que utilizem de químicas para o alisar.

Muitos são os comentários feitos sobre pessoas de pele preta nas redes sociais, mas um dos movimentos que vem ganhando um maior destaque é a aceitação capilar, além de penteados com trança afro e transição o que auxilia. A divulgação destes movimentos cria não só um sentimento de apoio como traz também um conforto para as mulheres o que aumenta sua autoestima e aceitação, sendo assim:', 
'Se você adivinhar o filme “💛😄💚🤮💙😭💜😱💓😡” então:
	* Você ganhará um laço de repetição
Senão:
	Ganhará uma Lista com 4 comandos, sendo eles:
		* Girar para à direita
		* Descer', 'Fonte Alma Preta', 'Divertida Mente');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo (Macaco no futebol)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo (Black lives matter)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo (apropriação cultural e fiscal de cacho)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo (rivalidade com pelo clara)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Entretenimento (Defender artista errado)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Entretenimento (Abordar temas em filmes)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Entretenimento (musicas de desabafo (luisa Sonza) a hater)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('LGBT - Homofobia', 
'Pelos números publicados, o Brasil é um dos países que mais registra mortes de pessoas LGBT. Dados publicados pelo Grupo Gay da Bahia, uma instituição de proteção aos direitos dos homossexuais, informam que o Brasil tem em média 550 mortes de homossexuais por ano.

É comum encontrar comentários homofóbicos em redes sociais de influenciadores ou qualquer outra pessoa que viralizou na internet, onde muitas vezes dependendo do estado mental do outro pode chegar a ser fatal, sendo assim:', 
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retira', 'Fonte Significados', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('LGBT - Ameaças',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('LGBT - Critica a musicas',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Adoção - animal', 
'Segundo a Organização Mundial de Saúde, no Brasil estima-se que 30 milhões de animais estão vivendo em situação de abandono. Quando você adota um animal de um abrigo ou que foi resgatado, contribui e muito para que esses números diminuam, além de diminuir o sofrimento de cachorros presos apenas para reproduzir e vender seus filhotes.

Nem todos possuem condições financeiras ou um ambiente propício para criar animais, mas ao divulgar iniciativas de ONGs ou pessoas nas redes sociais, o alcance aumenta e as chances de alguém realizar a adoção aumentam, sendo assim:

Os outros jogadores irão escolher uma música e reproduzi-la até um certo ponto escolhido por eles', 
' Se você completar a música com pelo menos 3 frases sem errar:
	  * Você ganhará um laço de repetição
  Senão:
	  Ganhará um comando, sendo ele:
		  * Ir para frente', 'Fonte Biofarm', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Adoção - adolescentes',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Adoção (caridade)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Empreendedorismo', 
'A inflação do comércio tem crescido bastante nos últimos anos, com isso o Brasil atingiu em Abril de 2022 a maior taxa desde 1996 no mesmo mês, com isso e com o alto desemprego muitas pessoas migraram para os comércios online via redes sociais.

Ao interagir ou compartilhar com publicações de pequenas empresas, os usuários ajudam na divulgação do produto e consequentemente nas vendas, auxiliando diversas famílias em situações financeiras complicadas a comer pagar suas contas, sendo assim:', 
'Se você adivinhar o filme “🚗💨🚙💨🚓💨😡😡😡”, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Gire para a esquerda
		* Gire para a direita
		* Descer', 'Fonte UOL Economia', 'Velozes e Furiosos');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Empreendedorismo (Feedback)',
'Conceito

Contexto',
'Desafio', 'fonte', 'Resposta');`,

];
