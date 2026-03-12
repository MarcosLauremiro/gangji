interface IDack {
    id: string;
    name: string;
    description: string;
    color: string;
    cards: ICards[];
    value?: number;
    launched?: boolean;
}

interface ICards {
    id: string;
    name: string;
    desafio: string;
    dose: string;
    points: number;
}

export const dacks: IDack[] = [
    {
        id: "1",
        name: "Basico",
        description: "Pra se divertir sem passar do limite",
        color: "#FFAE42",
        launched: true,
        cards: [
            {
                id: "c1",
                name: "Diva pop",
                desafio: "Faça uma performance de Poker Face",
                dose: "2",
                points: 2
            },
            {
                id: "c2",
                name: "O influencer",
                desafio: "Postar a ultima foto da galeria no story",
                dose: "3",
                points: 3
            },
            {
                id: "c3",
                name: "O galo carijó",
                desafio: "cante uma musica da galinha pintadinha em voz alta",
                dose: "2",
                points: 2
            },
            {
                id: "c4",
                name: "O galo carijó",
                desafio: "fique uma rodada inteira com um copo na cabeça",
                dose: "2",
                points: 2
            },
            {
                id: "c5",
                name: "Jogador barato",
                desafio: "Faca 12 embaixadinhas sem a bola",
                dose: "2",
                points: 2
            },
            {
                id: "c6",
                name: "Ratinho cego",
                desafio: "Fique uma rodada com os olhos vendados",
                dose: "3",
                points: 4
            },
            {
                id: "c7",
                name: "Cospe fogo",
                desafio: "Coma alguma coisa com 10 gotas de pimenta",
                dose: "4",
                points: 4
            },
            {
                id: "c8",
                name: "Vai tomando",
                desafio: "beba um compo de agua sem parar",
                dose: "3",
                points: 3
            },
            {
                id: "c9",
                name: "Narrador Amador",
                desafio: "Narrar alguém da mesa bebendo como se fosse uma final de Copa do Mundo",
                dose: "2",
                points: 3
            },
            {
                id: "c10",
                name: "O Oráculo",
                desafio: "Responda uma pergunta da pessoa a sua esquerda",
                dose: '2',
                points: 4
            },
            {
                id: "c11",
                name: "Mãos de Tesoura",
                desafio: "Tente comer ou beber algo usando apenas os cotovelos, sem usar as mãos.",
                dose: "2",
                points: 4
            },
            {
                id: "c10",
                name: "Trilha Sonora Viva",
                desafio: "Escolha um amigo e faça efeitos sonoros para cada movimento dele.",
                dose: "2",
                points: 4
            },
            {
                id: "c11",
                name: "Sombra Humana",
                desafio: "Escolha alguém e imite exatamente todos os gestos dessa pessoa pelo próximo 1 minuto.",
                dose: "1",
                points: 3
            },
            {
                id: "c12",
                name: "Elogio Aleatório",
                desafio: "Ligue para o terceiro contato do seu WhatsApp e elogie intensamente a orelha dessa pessoa.",
                dose: "3",
                points: 5
            },
            {
                id: "c13",
                name: "Mestre de Cerimônias",
                desafio: "Anuncie a chegada de uma pessoa como se fosse um evento de gala.",
                dose: "1",
                points: 2
            },
            {
                id: "c14",
                name: "Discurso do Oscar",
                desafio: "Suba em uma cadeira e faça um discurso de agradecimento por ter ganhado o prêmio de 'Pessoa mais engraçada'.",
                dose: "2",
                points: 4
            },
            {
                id: "c15",
                name: "Telemarketing",
                desafio: "Tente vender um guardanapo usado para alguém como se fosse um produto revolucionário de luxo.",
                dose: "1",
                points: 3
            },
            {
                id: "c16",
                name: "Fã Numero 1",
                desafio: "Aponte para uma pessoa e grite: 'MEU DEUS, EU TE AMO!'",
                dose: "3",
                points: 5
            },
            {
                id: "c17",
                name: "O fisico turista",
                desafio: "explique a teoria da relatividade fazendo poses de fisiculturista",
                dose: "3",
                points: 5
            },
            {
                id: "c18",
                name: "O fisico turista",
                desafio: "explique a teoria da relatividade fazendo poses de fisiculturista",
                dose: "3",
                points: 5
            },
            {
                id: "c19",
                name: "O trote",
                desafio: "Passar um trote para algum amigo que não está jogando;",
                dose: "3",
                points: 5
            },
            {
                id: "c20",
                name: "Família é tudo",
                desafio: "Mandar uma imagem aleatória por mensagem para um parente proximo e esperar a resposta;",
                dose: "3",
                points: 5
            },
            {
                id: "c21",
                name: "Galeria russa",
                desafio: "Mostrar para o grupo as seis últimas fotos da galeria do celular",
                dose: "3",
                points: 5
            },
            {
                id: "c22",
                name: "Galeria russa",
                desafio: "Andar pela c num pé só;",
                dose: "3",
                points: 5
            },
            {
                id: "c23",
                name: "Galeria russa",
                desafio: "Andar pela c num pé só;",
                dose: "3",
                points: 5
            },
            {
                id: "c24",
                name: "Maquiador do Caos",
                desafio: "Deixar que cada participante faça um pouco de maquiagem no seu rosto",
                dose: "2",
                points: 2
            },
            {
                id: "c25",
                name: "Lambida da Amizade",
                desafio: "Laber o rosto de alguem do grupo",
                dose: "3",
                points: 3
            },
            {
                id: "c26",
                name: "Desafio do Limão",
                desafio: "Chupar o limão sem fazer cara feia",
                dose: "2",
                points: 2
            },
            {
                id: "c27",
                name: "Nome Invertido",
                desafio: "Dizer o nome de todos os participantes do grupo, mas ao contrário",
                dose: "2",
                points: 2
            },
            {
                id: "c28",
                name: "Detetive Vendado",
                desafio: "Ser vendado, passar a mão no rosto de cada participante e dizer quem é sem errar",
                dose: "3",
                points: 3
            },
            {
                id: "c29",
                name: "Comentário Suspeito",
                desafio: "Comentar a primeira foto de uma pessoa que você segue no Instagram que o grupo escolher (não vale pessoas famosas)",
                dose: "2",
                points: 2
            },
            {
                id: "c30",
                name: "Flexões da Honra",
                desafio: "Fazer o máximo de flexões que conseguir em 1 minuto",
                dose: "2",
                points: 2
            },
            {
                id: "c31",
                name: "Meme Intergeracional",
                desafio: "Enviar um meme para alguém mais idoso da sua família e esperar a resposta",
                dose: "1",
                points: 1
            },
            {
                id: "c32",
                name: "Pix da Amizade",
                desafio: "Dar ou transferir R$5,00 para alguém do grupo",
                dose: "1",
                points: 1
            },
            {
                id: "c33",
                name: "Desculpa Misteriosa",
                desafio: "Ligar para alguém que conhece e começar a pedir desculpa sem dizer o motivo",
                dose: "3",
                points: 3
            },
            {
                id: "c34",
                name: "Dança do Brega",
                desafio: "Dançar um brega-funk",
                dose: "2",
                points: 2
            },
            {
                id: "c35",
                name: "Ligação Surpresa",
                desafio: "Ligar para a última pessoa que mandou mensagem",
                dose: "2",
                points: 2
            },
            {
                id: "c36",
                name: "Roupa Confiscada",
                desafio: "Vá ao banheiro, tire uma peça íntima e passe o jogo inteiro com ela nas mãos",
                dose: "4",
                points: 4
            },
            {
                id: "c37",
                name: "Gravidez Fake",
                desafio: "Ligar para um amigo ou amiga e dizer que será pai ou mãe",
                dose: "4",
                points: 4
            },
            {
                id: "c38",
                name: "Poção Misteriosa",
                desafio: "Beber alguma mistura feita pelo grupo",
                dose: "3",
                points: 3
            },
            {
                id: "c39",
                name: "Perna de Ferro",
                desafio: "Fazer agachamentos por 1 minuto",
                dose: "2",
                points: 2
            },
            {
                id: "c40",
                name: "Mensagem do Ex",
                desafio: "Mandar a mensagem 'ainda amo o meu ex' (ou a minha ex) para algum amigo",
                dose: "3",
                points: 3
            },
            {
                id: "c41",
                name: "Auto Exposed",
                desafio: "Escrever uma mensagem falando mal de um amigo e enviar para ele mesmo",
                dose: "3",
                points: 3
            },
            {
                id: "c42",
                name: "Cardio Instantâneo",
                desafio: "Fazer 50 polichinelos",
                dose: "2",
                points: 2
            },
            {
                id: "c43",
                name: "Coreografia Nostalgia",
                desafio: "Dançar a coreografia de uma música da sua infância",
                dose: "2",
                points: 2
            },
            {
                id: "c44",
                name: "Cantor de Stories",
                desafio: "Publicar um vídeo seu cantando nos stories do Instagram",
                dose: "3",
                points: 3
            },
            {
                id: "c45",
                name: "Elogio Desconhecido",
                desafio: "Elogiar uma pessoa que não conhece na rua",
                dose: "3",
                points: 3
            }
        ]
    },
    {
        id: "2",
        name: "Esquentando as coisas",
        description: "Pra se divertir e esquentar as coisas",
        color: "#FF5733",
        launched: true,
        cards: [
            {
                id: "c1",
                name: "Recaida",
                desafio: "Ligar para o ex ou para a ex e dizer “Oi, sumido(a)”;",
                dose: "3",
                points: 5
            },
            {
                id: "c2",
                name: "O influencer",
                desafio: "Postar a ultima foto da galeria no story",
                dose: "3",
                points: 3
            },
            {
                id: "c3",
                name: "Dança provocante",
                desafio: "Fazer uma lap dance (dança no colo) para alguém da roda",
                dose: "3",
                points: 6
            },
            {
                id: "c4",
                name: "Professor(a) sexy",
                desafio: "Dar uma aula de educação sexual de uma maneira muito sexy",
                dose: "2",
                points: 5
            },
            {
                id: "c5",
                name: "Massagista",
                desafio: "Massagear alguém da roda",
                dose: "1",
                points: 4
            },
            {
                id: "c6",
                name: "Sem as mãos",
                desafio: "Faça uma massagem nas costas de alguém sem usar as mãos",
                dose: "2",
                points: 5
            },
            {
                id: "c7",
                name: "Habilidade secreta",
                desafio: "Tirar o sutiã sem tirar a camiseta",
                dose: "2",
                points: 5
            },
            {
                id: "c8",
                name: "Uma mão só",
                desafio: "Desabotoar o sutiã de alguém usando só uma mão",
                dose: "2",
                points: 5
            },
            {
                id: "c9",
                name: "Boca ágil",
                desafio: "Tirar a camiseta de alguém usando a boca",
                dose: "3",
                points: 6
            },
            {
                id: "c10",
                name: "Segredo ao ouvido",
                desafio: "Sussurrar uma frase sensual no ouvido de alguém",
                dose: "1",
                points: 4
            },
            {
                id: "c11",
                name: "Beijo na orelha",
                desafio: "Beijar a orelha de alguém da roda",
                dose: "1",
                points: 4
            },
            {
                id: "c12",
                name: "Rodada do cafuné",
                desafio: "Uma rodada fazendo cafuné em alguém da roda",
                dose: "1",
                points: 3
            },
            {
                id: "c13",
                name: "Confissão quente",
                desafio: "Sussurre no ouvido de alguém as coisas que você costuma dizer na hora do sexo",
                dose: "3",
                points: 6
            },
            {
                id: "c14",
                name: "Mordida leve",
                desafio: "Morder (de leve) o pescoço de alguém da roda",
                dose: "2",
                points: 5
            },
            {
                id: "c15",
                name: "Adivinhação",
                desafio: "Com os olhos fechados, encoste a mão em alguém da roda e adivinhe qual é a parte do corpo",
                dose: "2",
                points: 5
            },
            {
                id: "c16",
                name: "Trono da rodada",
                desafio: "Passar a próxima rodada no colo de alguém",
                dose: "2",
                points: 5
            },
            {
                id: "c17",
                name: "Beijo liberado",
                desafio: "Com o consentimento, beije alguém da roda",
                dose: "2",
                points: 5
            },
            {
                id: "c18",
                name: "Show particular",
                desafio: "Simular um strip tease tirando uma peça de roupa",
                dose: "3",
                points: 7
            },
            {
                id: "c19",
                name: "Beijo gelado",
                desafio: "Coloque um cubo de gelo na boca e dê um beijo no pescoço de alguém da roda",
                dose: "3",
                points: 6
            },
            {
                id: "c20",
                name: "Mensagem quente",
                desafio: "Mande uma mensagem de voz sexy para seu crush",
                dose: "2",
                points: 5
            },
            {
                id: "c21",
                name: "Prova de coragem",
                desafio: "Lamber alguma parte do corpo de outra pessoa",
                dose: "3",
                points: 7
            },
            {
                id: "c22",
                name: "Quem foi?",
                desafio: "Feche os olhos, alguém da roda te dá um beijo, você precisa adivinhar quem é",
                dose: "2",
                points: 5
            },
            {
                id: "c23",
                name: "Figurinha provocante",
                desafio: "Envie um figurinha sexy para seu crush",
                dose: "1",
                points: 4
            }
        ]
    },
    {
        id: "3",
        name: "Na mesa do bar",
        description: "Coisas para fazer na mesa e se divertir",
        color: "#Fb6313",
        launched: true,
        cards: [
            {
                id: "c1",
                name: "O Pedinte",
                desafio: "Vá até uma mesa vizinha (ou pessoa próxima) e peça um autógrafo dizendo que confundiu com uma celebridade.",
                dose: "3",
                points: 5
            },{
                id: "c2",
                name: "O cantor de bar",
                desafio: "Cante uma musica em voz alta e chame a galera pra cantar junto",
                dose: "3",
                points: 6
            },]
    },
    {
        id: "4",
        name: "Não julgamos",
        description: "Perguntas, que so podem ser repondidas com verdade",
        color: "#456882",
        launched: true,
        cards: [
            {
                id: "c1",
                name: "Nada demais",
                desafio: "Qual foi a razão mais ridícula pela qual terminou com alguém?",
                dose: "3",
                points: 5
            },
            {
                id: "c2",
                name: "Sou tímido",
                desafio: "O que você adora, mas tem vergonha de admitir?",
                dose: "3",
                points: 5
            },
            {
                id: "c3",
                name: "O curioso",
                desafio: "Qual foi a última coisa que pesquisou no seu telefone?",
                dose: "3",
                points: 5
            },
            {
                id: "c4",
                name: "Troca de corpo",
                desafio: "Qual seria a primeira coisa que você faria se acordasse por um dia sendo do gênero oposto?",
                dose: "3",
                points: 5
            },
            {
                id: "c5",
                name: "Momento frágil",
                desafio: "Quando foi a última vez que chorou e por quê?",
                dose: "3",
                points: 5
            },
            {
                id: "c6",
                name: "Segredo de família",
                desafio: "Conte uma coisa que espera que seus pais nunca descubram.",
                dose: "4",
                points: 6
            },
            {
                id: "c7",
                name: "Higiene duvidosa",
                desafio: "Quantos dias já passou sem tomar banho?",
                dose: "2",
                points: 4
            },
            {
                id: "c8",
                name: "Presente ruim",
                desafio: "Qual foi o pior presente que já deu para alguém?",
                dose: "2",
                points: 4
            },
            {
                id: "c9",
                name: "Borboletas",
                desafio: "O que mais te faz sentir borboletas no estômago?",
                dose: "2",
                points: 4
            },
            {
                id: "c10",
                name: "Indispensável",
                desafio: "O que não consegue viver sem?",
                dose: "2",
                points: 3
            },
            {
                id: "c11",
                name: "Escolha perigosa",
                desafio: "Das pessoas nesta sala, com quem você mais gostaria de ficar?",
                dose: "4",
                points: 7
            },
            {
                id: "c12",
                name: "Mentira amorosa",
                desafio: "Qual a maior mentira que já contou para algum namorado ou namorada e nunca foi descoberta?",
                dose: "4",
                points: 7
            },
            {
                id: "c13",
                name: "Flagra familiar",
                desafio: "Qual foi a coisa mais embaraçosa que seus pais já pegaram você fazendo?",
                dose: "4",
                points: 7
            },
            {
                id: "c14",
                name: "Coração frio",
                desafio: "Qual foi a coisa mais cruel que você já fez com um namorado ou namorada?",
                dose: "4",
                points: 7
            },
            {
                id: "c15",
                name: "Espelho espelho",
                desafio: "Qual foi a coisa mais estranha que você já fez em frente ao espelho?",
                dose: "3",
                points: 5
            },
            {
                id: "c16",
                name: "Mensagem errada",
                desafio: "Você já enviou alguma fotografia comprometedora para a pessoa errada?",
                dose: "4",
                points: 7
            },
            {
                id: "c17",
                name: "Lugar estranho",
                desafio: "Qual foi o lugar mais esquisito ou curioso em que ficou com alguém?",
                dose: "4",
                points: 6
            },
            {
                id: "c18",
                name: "Último beijo",
                desafio: "Quem foi a última pessoa com quem ficou?",
                dose: "3",
                points: 5
            },
            {
                id: "c19",
                name: "Sonho suspeito",
                desafio: "Já teve algum sonho sugestivo com alguém aqui?",
                dose: "4",
                points: 7
            },
            {
                id: "c20",
                name: "Fora dolorido",
                desafio: "Quando foi a última vez que te deram um fora e como lidou com isso?",
                dose: "3",
                points: 5
            },
            {
                id: "c21",
                name: "Limite do amor",
                desafio: "O que você nunca toparia fazer pelo(a) namorado(a)?",
                dose: "3",
                points: 5
            },
            {
                id: "c22",
                name: "Repeteco",
                desafio: "Com quem quer muito ficar de novo?",
                dose: "3",
                points: 6
            },
            {
                id: "c23",
                name: "Queria esquecer",
                desafio: "Com quem gostaria de esquecer que ficou?",
                dose: "3",
                points: 6
            },
            {
                id: "c24",
                name: "Traição flagrada",
                desafio: "O que faria se pegasse seu namorado ou namorada com outro(a)?",
                dose: "4",
                points: 7
            },
            {
                id: "c25",
                name: "Ex proibido",
                desafio: "Já ficou com o(a) ex-namorado(a) de um(a) amigo(a)?",
                dose: "4",
                points: 7
            },
            {
                id: "c26",
                name: "Ranço",
                desafio: "Já sentiu ranço de alguém nesta sala?",
                dose: "3",
                points: 5
            },
            {
                id: "c27",
                name: "Paixão secreta",
                desafio: "Já foi apaixonado(a) por alguém nesta sala?",
                dose: "4",
                points: 7
            },
            {
                id: "c28",
                name: "Traído",
                desafio: "Já foi traído(a)?",
                dose: "3",
                points: 5
            },
            {
                id: "c29",
                name: "Marcas suspeitas",
                desafio: "Já teve que esconder marcas deixadas no seu pescoço?",
                dose: "3",
                points: 6
            },
            {
                id: "c30",
                name: "Piercing secreto",
                desafio: "Tem algum piercing em um lugar que não podemos ver?",
                dose: "3",
                points: 5
            },
            {
                id: "c31",
                name: "Jejum de beijo",
                desafio: "Qual foi o máximo de tempo que já ficou sem beijar alguém?",
                dose: "2",
                points: 4
            },
            {
                id: "c32",
                name: "Comprometido",
                desafio: "Já ficou com alguém sabendo que era comprometido(a)?",
                dose: "4",
                points: 7
            },
            {
                id: "c33",
                name: "Troca de interesse",
                desafio: "Já terminou um relacionamento porque se interessou por outra pessoa?",
                dose: "4",
                points: 7
            },
            {
                id: "c34",
                name: "Provocação fatal",
                desafio: "Qual é o tipo de provocação a que você não resiste?",
                dose: "3",
                points: 5
            },
            {
                id: "c35",
                name: "Arte da conquista",
                desafio: "Qual é a sua técnica de conquista que mais funciona?",
                dose: "3",
                points: 5
            },
            {
                id: "c36",
                name: "História proibida",
                desafio: "Já ficou com pai ou mãe de amigo(a)?",
                dose: "5",
                points: 8
            },
            {
                id: "c37",
                name: "Família demais",
                desafio: "Já ficou com primo(a)?",
                dose: "4",
                points: 7
            },
            {
                id: "c38",
                name: "Ciúmes planejado",
                desafio: "Já inventou um namorado ou namorada para fazer ciúmes ao ex?",
                dose: "3",
                points: 5
            },
            {
                id: "c39",
                name: "Histórico perigoso",
                desafio: "Qual site no seu histórico de navegação te deixaria constrangido se alguém visse?",
                dose: "4",
                points: 7
            },
            {
                id: "c40",
                name: "Acidente adulto",
                desafio: "Já fez xixi nas calças depois de adulto?",
                dose: "3",
                points: 5
            }
        ]
    },
    {
        id: "5",
        name: "Relacionamento Aberto",
        description: "Vamos nos divertir abertamente",
        color: "#5C3E94",
        launched: false,
        cards: []
    },
    {
        id: "6",
        name: "Se conhecendo",
        description: "Vamos nos conhecer melhor para casais, amigos ou inimigos",
        color: "#5A9690",
        launched: false,
        cards: []
    },
    {
        id: "7",
        name: "Amizade colorida",
        description: "Vamos colocar mais cor na nossa relaçã0",
        color: "#DC2525",
        launched: false,
        cards: []
    },
    {
        id: "8",
        name: "Vai pegar fogo",
        description: "Vamos aumentar a temperatura aqui",
        color: "#3F4F44",
        launched: false,
        cards: []
    },
    {
        id: "9",
        name: "Você nao vai aguentar",
        description: "Vamos ver até onde você aguenta",
        color: "#D84040",
        launched: false,
        cards: []
    },
    {
        id: "10",
        name: "💦",
        description: "🥵",
        color: "#FF6500",
        launched: false,
        cards: []
    }
]