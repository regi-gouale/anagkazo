import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questionsJson = [
  {
    type: "scouting",
    description:
      "J'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.",
  },

  {
    type: "scouting",
    description:
      'Lorsque je participe à une évangélisation, il n\'est pas rare que je sois témoin de "signes et prodiges" de Dieu dans la vie de ceux qui sont présents.',
  },

  {
    type: "scouting",
    description:
      'Lorsque je me retrouve "seul contre tous", je me sens particulièrement stimulé dans l\'évangélisation.',
  },

  {
    type: "scouting",
    description:
      "Quand j'évangélise, je suis saisi, voire enflammé, je m'exprime avec enthousiasme.",
  },

  {
    type: "scouting",
    description:
      "Dans l'évangélisation, je prends du temps avec les personnes pour les écouter, échanger, relire, discuter, accompagner, etc.",
  },

  {
    type: "scouting",
    description:
      "J’aime accueillir ceux qui viennent et participer aux temps fraternels avec eux.",
  },

  {
    type: "scouting",
    description:
      "Je me sers des difficultés rencontrées par les gens pour leur présenter Jésus.",
  },

  {
    type: "scouting",
    description:
      "J'annonce le Christ sans trop tourner longtemps autour du pot.",
  },

  {
    type: "scouting",
    description:
      "J'annonce en priorité le pardon et la miséricorde de Dieu parce que j'en ai été moi-même bouleversé et transformé.",
  },

  {
    type: "scouting",
    description: "J’aime avoir une vision dynamique des choses.",
  },

  {
    type: "scouting",
    description:
      "Je suis sensible à l’urgence des choses. Nous n’avons pas le temps à perdre. Il faut y aller !",
  },

  {
    type: "scouting",
    description:
      "Je n'hésite pas à annoncer la Vérité dérangeante du Christ au risque d'être incompris.",
  },

  {
    type: "scouting",
    description:
      "J'évangélise également pour confondre le monde, dénoncer sa tromperie et déjouer ses mensonges et ses mirages.",
  },

  {
    type: "scouting",
    description:
      "Lors de l’évangélisation, je suis prêt à aborder des questions délicates et en débattre si nécessaire.",
  },

  {
    type: "scouting",
    description:
      "J'évangélise avant tout en annonçant le Salut du Christ : Jésus nous sauve et nous libère.",
  },

  {
    type: "scouting",
    description:
      "J'annonce la parole dans le but de conduire les gens à la repentance.",
  },

  {
    type: "scouting",
    description:
      "Avant d'évangéliser, j’aime persister dans la prière pour que les personnes soient gagnées à Christ.",
  },

  {
    type: "scouting",
    description:
      "La multiplication des âmes est la première action que je privilégie.",
  },

  {
    type: "scouting",
    description:
      "Lorsque j'arrive sur un champ missionnaire, je veux que les âmes comprennent qu'elles sont mon focus premier.",
  },

  {
    type: "scouting",
    description:
      "Après m'avoir écouté, certains me disent être frappés par ce qu'ils ont entendu, comme stupéfaits.",
  },

  {
    type: "scouting",
    description:
      "Je reste constamment en quête de stratégies d’évangélisation.",
  },

  {
    type: "scouting",
    description:
      "Sur le champ missionnaire, je préfère aller évangéliser qu’animer des ateliers de formation.",
  },

  {
    type: "scouting",
    description:
      "Pour moi, le terme conquête signifie le rassemblement de tous les assoiffés de Christ.",
  },

  {
    type: "scouting",
    description:
      "Les temps de prière sont généralement orientés sur la réconciliation des âmes avec le Seigneur.",
  },

  {
    type: "scouting",
    description:
      "Dans le cadre de la mission, je préfère d’abord gagner les âmes.",
  },

  {
    type: "soulTransformation",
    description:
      "Lorsque j'évangélise, j'aime rapporter comment Dieu a totalement changé mon histoire, pour montrer que la transformation commence par une rencontre d'amour avec Dieu.",
  },

  {
    type: "soulTransformation",
    description:
      "Je suis sensible à ceux qui souffrent à cause de leur péché, je désire les conduire au pardon de Dieu.",
  },

  {
    type: "soulTransformation",
    description:
      "Je ne crains pas de témoigner de mes faiblesses que Jésus vient porter, guérir, transformer ou sauver.",
  },

  {
    type: "soulTransformation",
    description: "Ma communication est orientée sur la vie des âmes.",
  },

  {
    type: "soulTransformation",
    description:
      "J'utilise des arguments forts, pertinents et logiques dans mon évangélisation.",
  },

  {
    type: "soulTransformation",
    description:
      "Je rapporte des histoires vécues ou actuelles pour montrer que l'Evangile est vrai, que Jésus agit dans nos vies.",
  },

  {
    type: "soulTransformation",
    description:
      "J'ai besoin de bien assimiler les contenus de la Foi et de la Révélation pour évangéliser.",
  },

  {
    type: "soulTransformation",
    description:
      "Je propose volontiers à mon entourage de m'accompagner à des rencontres pour écouter des témoins ou des prédicateurs : le réveil de la foi s'opère souvent dans ce type d'occasion.",
  },

  {
    type: "soulTransformation",
    description:
      "Je suis sensible aux enjeux spirituels et existentiels des situations, des personnes ou des évènements auxquels je suis confronté.",
  },

  {
    type: "soulTransformation",
    description:
      "J'ai besoin de temps pour expliquer et donner les raisons de croire.",
  },

  {
    type: "soulTransformation",
    description:
      "Je propose facilement des livres, des enregistrements ou des vidéos de témoins à mon entourage.",
  },

  {
    type: "soulTransformation",
    description:
      "Ceux qui m'écoutent estiment que je suis un bon pédagogue pour expliquer le cœur de la Révélation chrétienne.",
  },

  {
    type: "soulTransformation",
    description:
      "Après m'avoir entendu parler de Dieu, louer ou prier, certains me disent qu'ils sont profondément touchés par ma joie et mon amour de Dieu. ",
  },

  {
    type: "soulTransformation",
    description:
      "Je m'appuie sur la Parole de Dieu, le témoignage des apôtres - pour évangéliser.",
  },

  {
    type: "soulTransformation",
    description:
      "Pour moi, le terme conquête signifie une armée de témoins qui manifeste le caractère de Christ.",
  },

  {
    type: "soulTransformation",
    description:
      "Je prends soin d'établir une relation d’estime et de confiance avec les personnes, avant de leur parler clairement de Dieu.",
  },

  {
    type: "soulTransformation",
    description:
      "J'aime les gens, je m'intéresse naturellement à leur vie, ils se confient souvent. Grâce à cette relation, il y a toujours de bonnes occasions pour leur parler du Seigneur.",
  },

  {
    type: "soulTransformation",
    description:
      "Ma communication est orientée sur des sujets d’édification, la manifestation de la foi, la persévérance, etc.",
  },

  {
    type: "soulTransformation",
    description:
      "Je recherche constamment des programmes, ateliers thématiques d’édification spirituelle",
  },

  {
    type: "soulTransformation",
    description:
      "Sur le champ missionnaire, l’affermissement des âmes est ma priorité. J’aime voir les âmes grandir dans le Seigneur.",
  },

  {
    type: "soulTransformation",
    description:
      "Lorsque j'arrive sur un champ missionnaire, je m'attends à ce que les âmes soient sensibles au(x) programme(s) mis en place en vue de leur édification.",
  },

  {
    type: "soulTransformation",
    description:
      "Sur le champ missionnaire, j’éprouve une frustration lorsque la croissance des âmes est très lente.",
  },

  {
    type: "soulTransformation",
    description:
      "Ma plus grande satisfaction c’est de voir les âmes guérir de leurs blessures.",
  },

  {
    type: "soulTransformation",
    description:
      "Je me sens à l’aise à enseigner, encourager, à animer un groupe.",
  },

  {
    type: "soulTransformation",
    description:
      "Les temps de prière sont généralement orientés sur la libération des âmes.",
  },

  {
    type: "soulTransformation",
    description:
      "Quand c'est nécessaire, je n'hésite pas dans ma prédication à interpeller assez vivement et \"évangéliquement\" ceux qui m'écoutent.",
  },

  {
    type: "soulTransformation",
    description:
      "Lorsque j'arrive sur un champ missionnaire, j'aime que les âmes aient le même niveau d'engagement que moi.",
  },

  {
    type: "soulTransformation",
    description:
      "En évangélisation, je témoigne surtout des évènements de ma propre histoire pour illustrer combien Dieu transforme une vie et conduit au bonheur.",
  },

  {
    type: "soulTransformation",
    description:
      "Durant une évangélisation, il n'est pas rare que je perçoive les besoins spirituels des personnes avec qui j’ai un échange.",
  },

  {
    type: "soulTransformation",
    description:
      "Lorsque je raconte comment j'ai rencontré le Christ et ce qu'il a fait dans ma vie, les gens sont interpellés.",
  },

  {
    type: "coordination",
    description:
      "Dans le cadre de la mission, je souhaite avoir des fonctions bien déterminées en vue de mettre à l’épreuve de nouvelles idées.",
  },

  {
    type: "coordination",
    description:
      "En évangélisation, j'utilise des formules, des images et des exemples qui percutent.",
  },

  {
    type: "coordination",
    description:
      "J'évangélise avant tout les personnes de mon entourage : collègues, amis, voisins ou famille.",
  },

  {
    type: "coordination",
    description:
      "Ma manière d'évangéliser, c'est de me mettre au service des évangélisateurs, par la prière, le service ou l'organisation.",
  },

  {
    type: "coordination",
    description:
      "Je veille à ce que les choses pratiques soient bien organisées pour évangéliser : sinon je trouve que l'on n'est pas crédible, ni respectueux des gens.",
  },

  {
    type: "coordination",
    description:
      "J'aime convier mon entourage à venir participer avec moi à de belles célébrations qui présente un beau visage de l'Eglise.",
  },

  {
    type: "coordination",
    description:
      "Je m'investis pour soigner 'atmosphère d'accueil, la beauté des lieux, etc. et pour que les personnes se sentent bien et disponibles pour écouter la Parole.",
  },

  {
    type: "coordination",
    description:
      "S'il y a un concert d'un groupe chrétien dans la région, j'y invite ou j'y emmène les jeunes de mon entourage.",
  },

  {
    type: "coordination",
    description: `Lors du passage à la maison d'un frère dans la foi ou d'un prédicateur, j'invite des amis ou des voisins à le rencontrer chez moi.`,
  },

  {
    type: "coordination",
    description: `Plusieurs personnes ont été gagnées au Seigneur au travers de leur amitié avec moi.`,
  },

  {
    type: "coordination",
    description: `Je me tiens au courant des nouveautés missionnaires (rassemblements, livres, témoignages, vidéo ou prédication sur Internet, etc.), puis j'essaye de voir à qui je pourrais les proposer.`,
  },

  {
    type: "coordination",
    description: `Je m'attache à démontrer que la foi chrétienne et la Révélation apportent des réponses pertinentes aux dérives et aux besoins du monde moderne.`,
  },

  {
    type: "coordination",
    description: `L’organisation et la planification sont des activités que j’apprécie énormément dans la mission.`,
  },

  {
    type: "coordination",
    description: `Lorsque j'arrive sur un champ missionnaire, j'apprécie qu'il y ait une organisation déjà établie.`,
  },

  {
    type: "coordination",
    description: `Dans le cadre de la mission, je préfère trouver des solutions face aux défis organisationnels.`,
  },

  {
    type: "coordination",
    description: `Je me sens à l’aise dans la formulation de remarques constructives et utiles.`,
  },

  {
    type: "coordination",
    description: `Je me sens plus à l’aise à travailler avec des concepts, des stratégies à développer.`,
  },

  {
    type: "coordination",
    description: `Ma communication est orientée sur les objectifs à atteindre, le statut des églises, le territoire.`,
  },

  {
    type: "coordination",
    description: `Pour moi le terme conquête signifie multiplication des églises dans une zone déterminée.`,
  },

  {
    type: "coordination",
    description: `Les temps de prière sont généralement orientés sur la prise de territoires.`,
  },

  {
    type: "coordination",
    description: `J’aime que la mission soit une réussite, je m’assure que toute l’organisation soit conforme à la vision du pasteur.`,
  },

  {
    type: "coordination",
    description: `J’éprouve une frustration lorsque la dynamique d’évangélisation n’est pas suivie.`,
  },

  {
    type: "coordination",
    description: `Le respect de l’heure, du timing est déterminant pour moi lors de nos réunions.`,
  },

  {
    type: "coordination",
    description: `Je suis très regardant sur le bon déroulement du programme.`,
  },

  {
    type: "coordination",
    description: `Je m’assure que le budget est respecté.`,
  },

  {
    type: "coordination",
    description: `Je reste fortement sensible au changement et à l’innovation.`,
  },

  {
    type: "compassion",
    description: `J'aime évangéliser les personnes blessées ou éloignées de Dieu pour leur annoncer Son amour et Sa compassion pour chacun.`,
  },

  {
    type: "compassion",
    description: `Je veille à ce que les non-croyants et les personnes extérieures à la communauté chrétienne soient très bien accueillies.`,
  },

  {
    type: "compassion",
    description: `Quand je rencontre des personnes vivant le type de galères ou d'épreuves que je vivais avant de rencontrer Jésus, je leur témoigne de ce qui m'est arrivé grâce à Lui.`,
  },

  {
    type: "compassion",
    description: `Je me reconnais bien dans la figure de la Samaritaine : après avoir rencontré et écouté Jésus, elle invite tout le village à faire de même.`,
  },

  {
    type: "compassion",
    description: `Je ne peux évangéliser que si je me sens bien dans ma relation avec le Seigneur, autrement j’ai du mal.`,
  },

  {
    type: "compassion",
    description: `Je suis émerveillé par la façon dont Jésus m'a conduit à Lui ; je suis poussé à le partager aux autres pour qu'ils perçoivent combien Jésus est vivant aujourd'hui.`,
  },

  {
    type: "compassion",
    description: `Je suis profondément bouleversé par la détresse des hommes qui ne connaissent pas le Christ et par les mensonges de ce monde.`,
  },

  {
    type: "compassion",
    description: `J'ai un caractère liant, sympathique et spontané avec les personnes inconnues ou éloignées de la communauté chrétienne.`,
  },

  {
    type: "compassion",
    description: `J’aime prendre soin des âmes, les mettre à l’aise et connaitre leurs besoins.`,
  },

  {
    type: "compassion",
    description: `Lorsque j'évangélise, je parle d'abord de l'immense amour de Dieu pour chacun.`,
  },

  {
    type: "compassion",
    description: `Je partage aisément aux autres ma joie d'avoir participé à un évènement où se sont manifestés clairement la grâce et l'amour de Dieu.`,
  },

  {
    type: "compassion",
    description: `J'annonce avant tout l'amour de Dieu afin de rejoindre le besoin de chacun d'aimer et d'être aimé.`,
  },

  {
    type: "compassion",
    description: `Pour évangéliser quelqu'un, je cherche d'abord à comprendre les raisons de ses doutes, de son indifférence ou de son refus de croire.`,
  },

  {
    type: "compassion",
    description: `J’ai une facilité à donner, donc je privilégie tout ce qui est lié aux actes de compassion.`,
  },

  {
    type: "compassion",
    description: `Je mets l’accent sur des programmes destinés à rendre visite aux personnes en difficultés.`,
  },

  {
    type: "compassion",
    description: `Je suis plus sensible à la mobilisation des ressources en vue de venir en aide aux personnes en difficulté.`,
  },

  {
    type: "compassion",
    description: `Ma communication est orientée sur la communion fraternelle, les dons, les appels à l’aide.`,
  },

  {
    type: "compassion",
    description: `Pour moi le terme conquête signifie manifestation massive des actes de compassion.`,
  },

  {
    type: "compassion",
    description: `Les temps de prière sont généralement orientés sur la dimension du Dieu Pourvoyeur et du Dieu Amour.`,
  },

  {
    type: "compassion",
    description: `Les personnes me disent qu'elles sont touchées par mon attention à elles et par les services que je leur rends.`,
  },

  {
    type: "compassion",
    description: `Quand je rencontre une personne qui souffre, je m'attache à la rejoindre par des gestes d'attention, de consolation ou d'affection.`,
  },

  {
    type: "compassion",
    description: `J'accepte facilement d'être dérangé pour me mettre au service et à l'écoute de ceux qui font appel à moi.`,
  },

  {
    type: "compassion",
    description: `Je suis étreint par la tristesse ou l'angoisse de ceux qui ne vivent pas de la grâce de Dieu.`,
  },

  {
    type: "compassion",
    description: `Je ne peux pas concevoir qu’il y ait parmi nous des personnes qui rencontrent des difficultés.`,
  },

  {
    type: "compassion",
    description: `Sur le champ missionnaire, je me concentre sur les besoins des âmes.`,
  },

  {
    type: "itinerant",
    description: `Je préfère aller sur le terrain.`,
  },

  {
    type: "itinerant",
    description: `J’aime découvrir de nouveaux territoires, voyager, être sur les routes.`,
  },

  {
    type: "itinerant",
    description: `Je privilégie le contact direct avec les âmes.`,
  },

  {
    type: "itinerant",
    description: `Je peux partir d’un champ missionnaire vers un autre sans souci.`,
  },

  {
    type: "itinerant",
    description: `J’aime me déplacer très souvent`,
  },

  {
    type: "sedentary",
    description: `Je préfère piloter les activités à distance.`,
  },

  {
    type: "sedentary",
    description: `J’aime plutôt effectuer des tâches administratives en rapport avec la mission.`,
  },

  {
    type: "sedentary",
    description: `Je me sens à l’aise lorsque le contact se fait à distance.`,
  },

  {
    type: "sedentary",
    description: `Je préfère finir sur un champ missionnaire avant d’être déployé ailleurs.`,
  },

  {
    type: "sedentary",
    description: `J’apprécie réduit au maximum mes déplacements.`,
  },
];

const main = async () => {
  const questions = [];

  for (const question of questionsJson) {
    const createdQuestion = await prisma.question.create({
      data: question,
    });
    questions.push(createdQuestion);
  }
};

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
