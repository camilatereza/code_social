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
VALUES('Crianças - Perigos digitais', 
'Com o crescimento de conteúdos virais, muitas crianças e adolescentes passaram a replicar muitas atividades em alta para participar das modas da internet, dentre estas atividades podemos citar as danças como uma das mais reproduzidas por todas as pessoas. 
    
Quando a criança está em um ambiente virtual não acompanhado, ela começa a interagir com inúmeras pessoas por meio de comentários em seus conteúdos ou por mensagens privadas e é nesta interação que muitas crianças e adolescente são vítimas de pedofilia. Estudos mostram que uma em cada cinco crianças e adolescentes (20%) diz ter visto ou recebido imagens ou vídeos com conteúdo adulto, sendo assim:', 
'Na próxima rodada você:
  * Perderá 4 comandos da quantidade que retirar', 'Fonte G1', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças - ansiedade ', 
'O mundo virtual disponibiliza muitas informações a todos os momentos e isto não é segredo para ninguém, é importante destacar que nem sempre são informações boas e relevantes para a saúde das pessoas e não é diferente quando falamos sobre as crianças.

As redes sociais são portas abertas para a vida íntima de seus usuários, o que pode gerar inúmeras comparações com parâmetros irreais de felicidade, beleza e sucesso, auxiliando na ansiedade infantil quando não é realizado um uso correto e administrado pela base familiar, sendo assim:', 
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retirar', 'Fonte escola da inteligência', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças - Socialização', 
'A mídia social faz parte do cotidiano de quase todo o mundo e introduzir a criança e adolescente neste meio, auxilia não apenas na socialização com familiares e amigos, como também no ensino aprendizagem de comportamento social perante situações formais, como escola e até mesmo o ambiente de trabalho.
  
Vale ressaltar que este ambiente precisa ser coordenado pelos pais, para que siga sendo um ambiente seguro e que contribua com este crescimento pessoal, sendo assim:', 
'Se algum jogador estiver com uma camisa preta, então:
  * Você ganhará um laço de repetição
Senão:
  Você ganhará uma lista com os comandos abaixo:
    * Vá para a frente
    * Pular', 'Fonte Internet matters', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Crianças - Compreensão de mundo ', 
'Como tudo na vida, a exposição das crianças no meio digital pode trazer muitos riscos, mas também disponibiliza muitos benefícios. 

Quando criança, a percepção humana é mais aguçada, além de absorver quase tudo o que consome e desenvolver aprendizados de forma mais rápida, desse modo a disponibilidade de conteúdos e ensinamentos presentes na internet pode auxiliar no desenvolvimento infantil, ajudando a se identificar com temas que podem no futuro tornar-se seu trabalho, além de entender o mundo ao seu redor, sendo assim:', 
'Se você ganhar no impar/par com o jogador da direita, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Vá para a frente
		* Descer
		* Pular', 'Fonte Internet matters', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Haters - Corpo perfeito',
'As redes sociais possuem grande influência quando o assunto é peso ou estilo de corpo e isso não é novidade. No entanto, não é levado em consideração que tanto a obesidade ou anorexia são doenças e precisam ser tratadas de forma adequada e respeitosa perante a sociedade, o que infelizmente não acontece.

Ao publicar vídeos dançando, de corpo todo, principalmente as mulheres, sofrem inúmeros ataques por meio dos comentários. Ataques que em sua maioria se relacionam com o “corpo perfeito” onde a mesma não o possui. Vale salientar que estes comentários variam entre magra demais ou gorda demais e nunca há uma trégua quanto ao assunto, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte Genta', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Haters - Cancelamento',
'O cancelamento nas redes sociais ultimamente vem ganhando cada vez mais força. Quando alguém é cancelado nas redes sociais, significa dizer que a atitude tomada não foi correta ou de acordo com o que o público deseja. Vale destacar que a maioria das pessoas canceladas, não são perfeitas e acabam errando em determinados momentos da vida, mas são massacradas, pois o público ainda não entendeu tal situação.

Quando alguém fala ou faz algo de errado, mas vem a público assumir seu erro e pedir desculpa, merece ser ouvido e aprender com aquilo, para não repeti-lo. Ao dar suporte e entender que o outro também é um ser humano imperfeito, os usuários promovem a saúde mental e o conhecimento, sendo assim:',
'Se você encontrar um objeto colorido em 2 min, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Vá para a frente
		* Descer', 'Fonte Canaltech', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Haters - Opinião imposta',
'Junto com o avanço tecnológico e das redes sociais, as opiniões começaram a ser expostas de forma mais frequente, ocasionando também um acréscimo da intolerância em diversas áreas. Expor sua opinião tornou-se perigoso e algumas vezes um crime perante os juízes virtuais, se a mesma não condizer com a da maioria.

Debates se tornam guerras virtuais se as reflexões forem divergentes e tudo é levado e interpretado da pior forma possível. A exemplo disso, temos a exposição de alguns religiosos sobre o que sua crença fala, onde muitas vezes são chamado de homofóbicos e outros termos, mesmo relatando respeitar tais posicionamentos, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte Jusbrasil', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Haters - Conteúdos sem interesse',
'A frequência de mensagens de ódio está cada vez mais presente nas redes sociais, pelo fato da internet ter mais liberdade de se expressar. Muitas das vezes esses haters acabam fazendo até ameaças de mortes e difamações.

A exemplo disso, temos os ataques frequentes as subcelebridades ou celebridades, que sofrem haters banais como críticas aos seus conteúdos postados nas redes sociais, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte G1', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Fanatismo em reality shows',
'Com a pandemia, os reality shows voltaram ao sucesso e muitas atitudes passaram a ser analisadas, dentre elas o fanatismo que existe em diferentes aspectos do mundo midiático, mas que ganham força com as redes sociais. Com tudo isto apenas uma coisa é certa: tais atitudes levam a cegueira de atos, exagero e são prejudiciais a todos os envolvidos.

Dentro dos reality fica claro como o fanatismo impacta as pessoas, quando alguém entra na preferência do público, todas as atitudes tomadas pela pessoa são aplaudidas e nenhuma consequência é sofrida, se a atitude for errada, pois o público o defende nas redes e os poderosos por trás sabem que tudo aquilo gera dinheiro e atenção, protegendo-o e acatando o que o fã fala e debate, sendo assim:',
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retirar', 'Fonte Brasil escola', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Acessibilidade de surdos', 
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
VALUES('Acessibilidade de eplepticos', 
'A epilepsia é uma alteração temporária e reversível do funcionamento do cérebro, que não tenha sido causada por febre, drogas ou distúrbios metabólicos e se expressa por crises epilépticas repetidas.

Muitos filtros e vídeos são criados utilizando várias cores piscando ao mesmo tempo, além da utilização de luzes de led no cenário que virou moda entre os jovens. Estes recurso pode causar convulsões epilépticas em algumas pessoas sensíveis a luzes, sendo assim:', 
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retirar', 'Fonte Biblioteca Virtual em saúde', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Acessibilidade de daltônicos', 
'Daltonismo é um distúrbio da visão que interfere na percepção das cores.Ser daltônico não é empecilho para o desenvolvimento normal da criança, nem para o aprendizado, mas algumas atitudes precisam ser tomadas para auxiliá-los quando se trata de cores.

Uma das interações mais comuns durante a pandemia foram jogos que reuniam as pessoas online, como o Among us e alguns grupos de amigos mudaram as cores de seus avatares quando um daltônico estava presente para incluí-lo da melhor maneira possível, sendo assim:', 
'Se você fizer uma mímica da palavra “aeroporto” ou “aniversário” em 3 min e alguém adivinhar:
	* Você ganhará um laço de repetição
Senão:
	Ganhará uma Lista com 2 comandos, sendo eles:
		* Ir para frente
		* Descer', 'Fonte Drauzio Varella', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Política - Fake news', 
'As Fakes News sempre estiveram presentes ao longo da história, mas ganharam força e destaque em 2016 com a corrida presidencial dos Estados Unidos, época em que conteúdos falsos sobre a candidata Hillary Clinton foram compartilhados de forma intensa pelos eleitores de Donald Trump. Atitude que foi bastante replicada em diversos países, mas principalmente no Brasil.

Ao compartilhar uma notícia sem verificar as fontes, os usuários acabam gerando diversos outros problemas sociais como homofobia, xenofobia, além de violência e até morte, como em um caso de 2014 onde um boato sobre uma mulher, comprovado posteriormente que era mentira, levou moradores da região a agredi-la, sendo assim:', 
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retira', 'Fonte Brasil Escola', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Política - Protestos indigenas',
'A política tem impacto direto em diversos aspectos do cotidiano e suas medidas atingem toda a população direta ou indiretamente. Tudo isto não é novidade, mas o cuidado com o meio ambiente e com os povos indígenas sempre foram assuntos colocados em segundo plano. Atualmente estes assuntos vinham a pauta, mas de forma ruim e prejudicial de diversas formas.

Quando projetos de lei vão a votação é dever do cidadão entendê-los e buscar recorrer ou não. Recentemente projetos que buscam tirar dos indígenas a posse de terras onde habitam foram a plenário e muitos protestos ocorreram, nestes momentos a atividade nas redes sociais foi fundamental para auxiliá-los nesta luta, sendo assim:',
'Se você estiver de tênis, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Girar para a esquerda
		* Descer
		* Vá para a frente', 'Fonte Estado de Minas', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Política - Omissão de opiniões',
'Os influenciadores digitais conversam diariamente com milhares de pessoas e suas opiniões e posicionamentos tem total impacto nas vidas destes usuários. Quando eles se omitem em determinados casos errados e de relevância nacional, fica subentendido que apoiam estas atitudes e seus seguidores seguem tais passos.

Quando cantores e influenciadores usaram suas redes para incentivar o movimento federal onde adolescentes com 16 anos ou mais emitissem o título de eleitor, várias pesquisas demonstraram que os adolescentes realmente foram em busca do documento a fim de ajudar o país nas próximas eleições, sendo assim:',
'Se você jogar ímpar ou par com o jogador à direita e vencer, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Girar para a direita', 'Fonte JusBrasil', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Fanatismo Político',
'Fanatismo diz respeito a um excesso de admiração ou zelo cego e veemente em relação a alguma coisa, é um sentimento de cuidado excessivo que não raramente produz desprezo e intolerância para com qualquer elemento diferente em qualquer campo ou domínio a que esteja associado.

O fanatismo político, veio à tona ainda no início do século XX e demonstrou ser tão perigoso e resistente quanto o fanatismo religioso, perdurando até o presente século. Temos o exemplo desse tipo de fanatismo através da Internet que virou palco de guerra entre quem é da esquerda e da direita, trocando ofensas e excluindo quem não concorda com determinado político ou partido, sendo assim:',
'Na próxima rodada você:
	* Perderá 5 comandos da quantidade que retirar', 'Fonte Info Escola', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamento abusivo',
'Existem várias formas de relacionamento abusivo: a física, verbal, financeira, emocional e tecnológica. Se você está em um relacionamento em que não há igualdade e respeito, mas têm: agressão, pressão psicológica ou algo que te deixa mal e oprimida é sinal de um relacionamento abusivo.

Com o avanço das redes sociais muitos casos de relacionamentos abusivos e agressões têm sido compartilhados nas redes sociais e gerado indignação nos usuários, vídeos em que mostram agressão física e verbal contra mulheres tem sido cada vez mais comum nos dias atuais, essas imagens muitas vezes servem como prova contra o agressor e com discussões sobre o assunto outras mulheres percebem que também vivem um relacionamento abusivo e se sentem encorajadas a denunciar o agressor, sendo assim:',
'Se você completar corretamente a música que os outros jogadores escolherem, quando eles pararem, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Vá para a frente
		* Descer', 'Fonte Glamour Globo', 'Resposta');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Assedio',
'Nas redes sociais, além dos usuários também estão presentes e crescendo as personalidades com influência e destaque nas mídias, sendo estas, pessoas normais que possuíam em sua maioria uma vida simples antes dos holofotes. Graças a essas pessoas temas como assédio vem crescendo no debate social e ganhando visibilidade, mas infelizmente estão longe de desaparecer.

São inúmeras as formas de assédio vivenciadas no cotidiano, principalmente com as mulheres, mas uma das mais comuns são os assédios virtuais, como cantadas, comentários desagradáveis ou pejorativos, além da divulgação de dados pessoais ou imagens íntimas, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar

Obs: Como prevenção tire prints e guarde estes dados e os do agressor como provas para uma possível denúncia e sua segurança.',
'Fonte Unimar', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos - Pessão',
'Ter um relacionamento é algo comum dentro da sociedade, no entanto, junto a ele vem o julgamento e pressão sobre o casal, um bom exemplo é quando o relacionamento é longo e algumas pessoas perguntam quando será o casamento.

Quando as pessoas interagem pelas redes sociais precisam ter consciência que todos os seus atos interferem no outro, mesmo que não estejam se vendo pessoalmente. Ao comentar em fotos de casal perguntando quando irão se casar ou quando já estão casados e perguntam quando virá filhos depois se este filho terá um irmão e assim por diante, os usuários causam pressão e desconforto na vida de quem recebe tais comentários. Podendo ocasionar discussões e complicações na relação a dois,sendo assim:',
'Na próxima rodada você:
	*Perderá 2 comandos da quantidade que retirar', 'Fonte Delas', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos - Palpites',
'Quem gosta de palpites de pessoas que você não pediu a opinião? Ninguém, não é mesmo? E porque uma mãe gostaria de dar palpites na criação do próprio filho? Neste caso é importante salientar que entende-se que estes palpites são muitas vezes ofertados com boa intenção e com o intuito de ajudar, no entanto os pais recebem este tipo de dicas a todos os momentos desde o anúncio da gravidez e muitas mães no puerpério passam por problemas onde este tipo de assunto piora sua situação emocional e confiança em cuidar do próprio filho.

Os hormônios durante e após a gravidez mexe não apenas com o corpo, mas também com o psicológico das mulheres e quando são feitos comentários enaltecendo, elogiando ela ou o seu filho ou apenas puxando um assunto aleatório, os usuários conseguem auxiliar no descanso mental e distração trocando os palpites, baixa estima, e falta de confiança, por animo e renovação das energias, sendo assim:',
'Se você encontrar um frasco azul em 1 min, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Girar para a direita', 'Fonte Objetivo Sorocaba', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Relacionamentos (Novos modelos de relacionamento)',
'Relacionar-se faz parte da essência humana, seja por meio de amizades ou relacionamentos amorosos, sempre buscamos a socialização. Ultimamente devido a liberdade de expressão nas redes sociais, coisas que já existiam começaram a ganhar destaque e serem discutidas, uma delas são as formas de relacionamento fora a monogamia tradicional.

Varios casais passaram a compartilhar suas rotinas e seu modelo de relação sendo ele aberto, poligamia, entre o mesmo sexo, dentre outros. Infelizmente muitas pessoas consomem estes conteúdos com curiosidade e buscam criticar, ofender e até ameaçar tais casais, sendo assim:',
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retirar', 'Fonte UNIFOR', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Intolerância Religiosa',
'A intolerância religiosa é uma forma de preconceito por conta da religião. Geralmente, esse tipo de intolerância manifesta-se por meio de discriminação, profanação e agressão.

Casos de ataques a centros religiosos tem sido cada vez mais comum e têm pouca repercussão nas redes sociais, no entanto, se algum influenciador sofre esse tipo de preconceito rapidamente o caso tem notoriedade, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte Mundo Educação', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental - Engajamento', 
'O engajamento, é hoje a base das redes sociais. Os usuários postam para atrair like e público a todo momento, as principais plataformas sociais criaram um mecanismo de fazer os usuários se sentirem eternamente insatisfeitos, aumentando também os julgamentos e críticas.

É perceptível que ao publicar qualquer conteúdo, além de acompanhar todos os comentários também acompanha-se a quantidade de curtidas, chegando a deletar o post, caso não atinja uma quantidade considerável, causando assim inúmeros problemas mentais na maior parte dos usuários, sendo assim:', 
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte Aela school', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental - Corpo perfeito',
'A cada ano, milhares de pessoas, em sua maioria jovens garotas, são acometidas por doenças como anorexia e bulimia, frutos de uma busca doentia por um corpo “esbelto”. Não basta muito conhecimento para constatarmos que o grande objetivo dessas meninas está ligado ao fato de que almejam não só o mesmo corpo de modelos famosas, mas também a atenção e o status com que a mídia as enche.

Nas redes sociais vemos diversas influences exibindo seus corpos cirurgiados e abordando-os como se fossem natural, apenas com o esforço da academia, criando uma mentira que não será alcançada nunca, estimulando assim a ansiedade, baixa estima dentre outros problemas psicológicos seríssimos, sendo assim:',
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retirar.', 'Fonte Canção Novo', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental - Vida perfeita',
'Um dos principais intuitos das redes sociais é a publicação de momentos felizes e conquistas, no entanto os influenciadores que compartilham seu cotidiano e se comunicam com milhares de pessoas por dia, vendem uma vida de luxo, viagens incríveis e caras, além de uma imensa felicidade em todos os momentos, todos os dias, a chamada psicologia positiva que é improvável de acontecer.

Quando o usuário que consome tal modo de vida, passa a buscar incessantemente esta felicidade editada e irreal, transtornos mentais como ansiedade e até depressão começam a se fazer presente, a partir disso vem o conceito de positividade tóxica, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar', 'Fonte Agência Brasil', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental - Rede de apoio',
'As redes sociais por muitas vezes são causas principais de doenças mentais, como ansiedade e depressão, pensando nisso muitas redes sociais adotaram o CVV (Centro de Valorização da Vida) que presta ajuda de forma gratuita aos seus usuários.

Ao pesquisar por # como ansiedade, transtornos mentais entre outras, ou consumir conteúdos relacionados, à própria redes social apresenta o recurso e caso desejado, encaminha o usuário ao um atendimento, sendo assim:',
'Se você adivinhar o filme “👨🏽👨🏽👨🏽👨🏽👨🏽👨🏽👨🏽👨🏽👨🏽👨🏽👨🏽🙊”, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Descer
		* Descer
		* Girar para a Direita', 'Fonte Techtudo', '11 homens e 1 segredo');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Saúde mental - Bullying',
'O Bullying é muito ligado apenas as violencias fisicas cometidas por uma pessoa ou um grupo de pessoas sob alguém, no entanto as pessoas esquecem que este termo influencia diretamente qualquer ataque repetivo de má indole e com o objetivo de menosprezar a vitima.

Atualmente, o Bullying digital é uma das principais formas de atingir psicologicamente um individuo, acarretando em baixa estima e outros diversos problemas mentais. Varios são os casos de pessoas que publicam video brincando com amigos, dançando ou apenas comentando sobre algo e recebem uma enchurrada de criticas sobre sua personalidade ou subjulgando-o, sendo assim:',
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retirar.', 'Fonte Dicas de Mulher', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade - Doar alimentos',
'Com a pandemia da COVID-19 muitos foram os impactos causados nas famílias ao redor do mundo, com o fechamento de comércios e o aumento da inflação vários problemas vinham à tona, um dos principais foi os baixos salários para a sobrevivência de famílias de classe média ou baixa em relação a sua alimentação.

Com o auxílio das redes sociais inúmeros formas de auxiliar estas famílias carentes foram divulgadas. Dentre elas a criação e divulgação de ONG como a Gerando Falcões ou apenas a reunião de pessoas dispostas a ajudar. Todas estas iniciativas possuem um objetivo principal, a arrecadação de alimentos para o dia a dia dessas pessoas e só conseguiram ganhar força graças às correntes do bem divulgadas nas redes sociais, sendo assim:',
'Se você adivinhar o filme “ 👩🏼👨🏼✈➡😱👦🏼🏠”, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Girar para a esquerda
		* Descer', 'Fonte Ecoa UOL', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade - Doações',
'Na área da saúde uma das coisas mais críticas é a doação de sangue, pois além do estoque necessitar constantemente de reposição, a quantidade de doadores é baixa levando em consideração o recomendado pela OMS. O uso das mídias digitais por atingir um grande público, é fundamental neste contexto.

Quando os usuários compartilham pontos de coletas, projetos sociais que possuem tal objetivo ou até inserem seus dados de sangue em determinadas redes, auxiliam na divulgação da causa e nos processos de salvamento de vida de diversos enfermos, sendo assim:',
'Se você adivinhar o filme “👴🏼💍💍💍💍”, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Girar para a esquerda
		* Pular', 'Fonte Uruguaiana', 'Senhor dos aneis');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade - Pontos de coleta',
'Muitos são os desastres ambientais por intervenção humana, ou não ao longo dos anos, estes acontecimentos tem inúmeras consequências, dentre elas o deslocamento das pessoas, danos materiais e de suprimentos básicos, como nas chuvas e queimadas que atingiram o Brasil de 2020 a 2022.

Para salvar suas vidas, as famílias atingidas por tais desastres precisam se locomover de forma rápida e deixam inúmeros pertences para trás, dessa forma faz-se necessário a ajuda da comunidade local com relação a alojamento e mantimentos, além das roupas. E é aqui que as redes sociais fazem-se presente. Ao compartilhar pontos de coletas ou contas de bancos de ONGS e Instituições que estão ajudando, os usuários impactam e ajudam diversas vidas a se reerguer, sendo assim:',
'Se você estiver de tênis, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Pular
		* Girar para a direita', 'Fonte Toda Materia', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Desigualdade - Salarios iguais',
'Segundo a ONU as mulheres ganham cerca de 84% do salário do homem, mesmo exercendo funções iguais, no entanto este dado pode ter uma diferença ainda maior dependendo do país ou se a mulher for preta, imigrante ou mãe. Estes dados são preocupantes, pois garantir um salário igual é também garantir um direito e respeito a todos os trabalhadores.

Graças às redes sociais diversos temas passaram a ganhar forma e ser cobrado da sociedade e dos poderosos uma solução mais eficaz. Com os movimentos virtuais estes assuntos passaram a ser tão discutidos e relevante que leis foram criadas garantindo este direito e outros a diversas trabalhadoras ao redor do mundo, sendo assim:',
'Se você falar rápido e sem errar o trava língua que o grupo escolher, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Descer
		* Vá para a frente', 'Fonte Politize', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo - Cabelo', 
'Uma das maiores pressões estéticas da sociedade, em mulheres, tem relação com o cabelo liso e cacheado. Desde muito cedo as crianças escutam críticas e piadas sobre seus cabelos e no mais tardar, durante a adolescência, é comum que utilizem de químicas para o alisar.

Muitos são os comentários feitos sobre pessoas de pele preta nas redes sociais, mas um dos movimentos que vem ganhando um maior destaque é a aceitação capilar, além de penteados com trança afro e transição o que auxilia. A divulgação destes movimentos cria não só um sentimento de apoio como traz também um conforto para as mulheres o que aumenta sua autoestima e aceitação, sendo assim:', 
'Se você adivinhar o filme “💛😄💚🤮💙😭💜😱💓😡” então:
	* Você ganhará um laço de repetição
Senão:
	Ganhará uma Lista com 4 comandos, sendo eles:
		* Girar para à direita
		* Descer', 'Fonte Alma Preta', 'Divertida Mente');`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo - No futebol',
'Mesmo com várias câmeras apontadas para o gramado e para a arquibancada, atos racistas têm sido cada vez mais frequentes no futebol mundial. Imitar macacos, jogar bananas, gritar ofensas, não são atitudes isoladas ou raras de acontecer com diversos jogadores ao redor do mundo.

Entretanto a divulgação destes atos, principalmente nas redes sociais e a pressão para que o responsável seja punido, é fundamental para o posicionamento frequente dos clubes e inquéritos judiciais mais apurados e de rápida resolução, sendo assim:',
'Se você desenhar “Chifres” e um jogador adivinhar, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Vá para a frente', 'Fonte Cnn Brasil', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo - Movimentos',
'Muitos são os movimentos contra a opressão preto por parte policial ou populacional, dentre estes movimento o Black Lives Matter criado em 2013 tendo como um dos principais objetivo ir contra a violência policial em Los Angeles. Este movimento criou uma força mundial em 2020, após a divulgação da morte de um cidadão preto desarmado por policiais.

No Brasil o impacto do movimento, principalmente nas redes sociais, trouxe à tona diversos casos de violência policial em comunidades, desde crianças a adultos. Com o enfraquecimento do tema nas mídias, muitos casos foram abafados e outros que passaram a existir, não tiveram a justiça merecida, sendo assim:',
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retirar.', 'Fonte Universal UOL', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo - Apropriação cultural ',
'A apropriação cultural ocorre quando pessoas de privilégio utilizam elementos de um grupo marginalizado. A apropriação cultural passa a ser um problema quando a utilização destes elementos perdem o sentido original, como os piercings e tatuagens que passaram a ser moda independente da cultura. Ao pensarmos no cenário preto e na moda dos dias atuais vemos diversas pessoas utilizando tranças ou passando pela transição capilar e divulgando estes processos nas redes sociais.

É importante destacar que forçar a utilização destes elementos e até o escurecimento da pele é sim apropriação cultural. No entanto ao publicar procedimentos de transição capilar, muitas mulheres são criticadas por serem brancas ou não e utilizarem seus cabelos naturais, nestes casos estamos falando de condições genéticas, não desvalorização da cultura, sendo assim:',
'Na próxima rodada você:
	* Perderá 3 comandos da quantidade que retirar.', 'Fonte Toda Matéria', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Racismo - Pardos',
'De acordo com o IBGE existem 5 grupos de cor ou raça são elas: brancos, pretos, amarelos, indígenas e pardos, quando falamos dos pardos há uma enorme discussão se este termo deveria existir, visto que muitas pessoas de pele mais clara não sofrem racismo como as de pele mais retinta e deveriam se enquadrar em pessoas brancas.

Quando pessoas com características pretas e de pele um pouco mais claras vêm a público nas redes sociais, falar de temas racistas podem algumas vezes ser criticadas por não possuir o “lugar de fala”. É importante destacar que por sofrer menos ataques racistas, ainda o sofrem e dividi-los ou “removê-los” do grupo não irá auxiliar na luta anti racista, sendo assim:',
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retirar', 'Fonte Câmara dos Deputados', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Entretenimento - Defender artistas',
'Todos os artistas possuem um alcance público significativo e adquirem inúmeros fãs em sua caminhada, seja por gostar do seu trabalho ou da pessoa que aparenta ser. Muitas vezes estas pessoas são vistas como intocáveis e até perfeitas por esses fãs, o que pode ser ruim, visto que elas continuam sendo seres humanos como qualquer outro com defeitos, opiniões e suscetíveis ao erro.

Com as redes sociais a proximidade com o artista aumentou e a interação do mesmo, com seu fã tornou-se mais íntima e direta o que é maravilhoso, mas pode tornar-se algo complicado quando o fanatismo cega o público a perceber coisas erradas que o artista faz e passa até a defendê-lo ou atacar outras pessoas que pensam diferente nos comentários de posts, sendo assim:',
'Na próxima rodada você:
	* Perderá 4 comandos da quantidade que retirar', 'Fonte Terra', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Entretenimento - Gostos em comum',
'Quando falamos do mundo profissional o networking é a base para auxiliar a conseguir futuras parcerias e indicações, após a pandemia da COVID-19 a socialização virtual faz-se necessária e presente diariamente, para isso utilizamos de assuntos em comum que são do nosso interesse e do ouvinte, o que melhor do que filmes, musicas e series para descontrair e iniciar uma conversa?

As relações humanas tendem a se fortalecer quando os indivíduos compartilham de sentimentos e interesses semelhantes e é neste ponto que as redes sociais possuem impacto direto, quando indicações de filmes ou músicas são compartilhadas, outros usuários de gosto semelhante inicia uma conversa e o networking é expandido, auxiliando na interação humana e dependendo da situação no meio profissional também, sendo assim:',
'Se você encontrar um objeto redondo e verde em 2 min, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Girar para a direita
		* Pular', 'Fonte Fortes tecnologias', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Entretenimento - Músicas',
'Muitas são as inspirações para compor uma música, dentre elas as principais são situações vividas, em especial relações boas ou ruins. Quando estas composições remetem a relações de conhecimento público muitas são as polêmicas que a envolvem, principalmente se o foco for um término.

Situações como as de Luísa Sonza e Olivia Rodrigo e seus álbuns com músicas de desabafo, geram inúmeras polêmicas e cancelamento nas redes sociais e cabe ao público auxiliar e ajudar estas celebridades com comentários positivos e que os ajudem a enfrentar o hater sofrido em vez de alimentá-lo com teorias, sendo assim:',
'Se você desenhar “Tossir” e outro jogador adivinhar, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Descer', 'Fonte Toca da Villa', 'Resposta');`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('LGBT - Homofobia', 
'Pelos números publicados, o Brasil é um dos países que mais registra mortes de pessoas LGBT. Dados publicados pelo Grupo Gay da Bahia, uma instituição de proteção aos direitos dos homossexuais, informam que o Brasil tem em média 550 mortes de homossexuais por ano.

É comum encontrar comentários homofóbicos em redes sociais de influenciadores ou qualquer outra pessoa que viralizou na internet, onde muitas vezes dependendo do estado mental do outro pode chegar a ser fatal, sendo assim:', 
'Na próxima rodada você:
	* Perderá 2 comandos da quantidade que retira', 'Fonte Significados', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('LGBT - Ameaças',
'Se assumir parte da comunidade LGBTQIA+ é um processo difícil e cheio de obstáculos, mas infelizmente eles não somem após a exposição para o mundo, pelo contrário o que era uma briga interna passa a ser uma guerra externa com pessoas julgando e até ameaçando a vida destas pessoas.

Muitos são os influenciadores e celebridades que assumiram ser do vale e ajudam de certa forma a aceitação por parte da sociedade. Ao visualizar conteúdos de pessoas com muita ou pouca influência social, é perceptível as muitas ameaças e assédios deixadas apenas pela orientação sexual do outro, dessa forma faz-se importante os comentários de elogios ao conteúdo ou a pessoa para que tais comentários não o impacte e auxilia na mudança de pensamento destas pessoas maldosas, sendo assim',
'Se você desenhar um controle remoto e um jogador adivinhar, então:
	* Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Descer', 'Fonte Olhar digital', NULL);`,

`INSERT INTO checkpoint(titulo, descricao, desafio, fonte, resposta)
VALUES('Adoção - animal', 
'Segundo a Organização Mundial de Saúde, no Brasil estima-se que 30 milhões de animais estão vivendo em situação de abandono. Quando você adota um animal de um abrigo ou que foi resgatado, contribui e muito para que esses números diminuam, além de diminuir o sofrimento de cachorros presos apenas para reproduzir e vender seus filhotes.

Nem todos possuem condições financeiras ou um ambiente propício para criar animais, mas ao divulgar iniciativas de ONGs ou pessoas nas redes sociais, o alcance aumenta e as chances de alguém realizar a adoção aumentam, sendo assim:

Os outros jogadores irão escolher uma música e reproduzi-la até um certo ponto escolhido por eles', 
' Se você completar a música com pelo menos 3 frases sem errar:
	  * Você ganhará um laço de repetição
  Senão:
	  Ganhará um comando, sendo ele:
		  * Vá para a frente', 'Fonte Biofarm', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Adoção - adolescentes',
'De acordo com uma pesquisa na base de dados nacionais, mais de 39 mil pessoas estão na fila da adoção esperando um filho e passando por um longo processo, no entanto, 90% dessas pessoas buscam bebês ou crianças menores de 7 anos, enquanto 67% das crianças em abrigos possuem idade entre 7 e 18 anos.

Quando as redes sociais são usadas para divulgação dessas causas, mais pessoas conhecem e buscam ajudar, como quando o filme “De repente uma família” auxiliou no período em que fez sucesso, sendo assim:',
'Se você estiver de blusa preta, então:
	Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Vá para a frente', 'Fonte Adoção Tardia', NULL);`,

`INSERT INTO checkpoint (titulo, descricao, desafio, fonte, resposta)
VALUES('Empreendedorismo - Apoio', 
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
VALUES('Empreendedorismo - Feedback',
'Com a pandemia, o e-commerce ganhou força e atingiu recordes em 2021 com o acréscimo das vendas até 30% comparado ao ano anterior.

Apesar de ser cômodo e com preços mais atrativos, compras online possuem diversos perigos, dentre eles os famosos golpes, onde o pagamento é efetuado, mas o produto não chega ou vem em má qualidade. Por este motivo os feedbacks se tornam tão importantes. É com eles que outros usuários analisam a experiência e entendem se estão comprando algo confiável ou não, sendo assim:',
'Se você adivinhar o filme “👽😎😎”, então:
	Você ganhará um laço de repetição
Senão:
	Você ganhará uma lista com os comandos abaixo:
		* Vá para a frente
		* Girar para direita', 'Fonte Canaltech', 'MIB: Homens de preto');`,

];
