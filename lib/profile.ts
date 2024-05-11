export type MissionProfile = {
  id: string;
  name: string;
  nbQuestions: number;
  description?: string;
};

export const missionProfiles: MissionProfile[] = [
  {
    id: "transformateurAmes",
    name: "Transformateur des âmes",
    nbQuestions: 30,
    description: `Le profil missionnaire de la « transformation des âmes » 
    ne se borne pas à la conversion. Il œuvre à la construction des âmes. 
    Il privilégie la relation d’aide, la consécration. Il veille à enseigner, 
    à contribuer par l’assistance du Saint Esprit à la restauration des âmes. 
    Pour lui, le chrétien doit être ferme et grandit dans la foi afin d’être 
    un véritable témoin. Son focus premier c’est la stabilité, la construction 
    des âmes. Son focus secondaire c’est la conquête.`,
  },
  {
    id: "manifestateurCompassion",
    name: "Manifestation de la compassion",
    nbQuestions: 25,
    description: `Le profil missionnaire de la « compassion » est 
    celui qui manifeste la générosité. Pour lui la conquête passe 
    par les actes de compassion. Il est orienté vers la résolution 
    des besoins primaires des âmes. Sa stratégie de conquête repose 
    sur la démonstration de l’amour par des actes de générosité. Ce 
    profil considère l’église comme un lieu de refuge.`,
  },
  {
    id: "coordinateurMission",
    name: "Coordinateur de missions",
    nbQuestions: 26,
    description: `Le profil « missionnaire coordinateur » est un 
    profil capable de mener des stratégies efficaces de prise de 
    territoire. Il organise les missions de terrain dans les moindres 
    détails. Il s’assure de la bonne communication avec les parties 
    prenantes (pasteur – champ missionnaire – équipe de la coordination…). 
    Il surveille l’avancement des objectifs. Il suit le budget. Il documente 
    les processus clés. Il veille à la résolution des problématiques qui 
    empêchent l’équipe de progresser, etc. C’est un artisan dans la gestion 
    efficace de la mission.`,
  },
  {
    id: "eclaireur",
    name: "Éclaireur",
    nbQuestions: 25,
    description: `Le profil « éclaireur » est un profil de type conquérant. 
    Il est engagé dans la prise de territoire. Il évangélise et cherche à 
    rassembler tous les croyants et les incroyants sous la bannière de Christ. 
    Ce profil n’aime pas la routine. Son focus premier c’est la conquête du 
    territoire, l’expansion et l’implantation des églises. Son focus secondaire 
    c’est la stabilité des âmes.`,
  },
  {
    id: "itinerant",
    name: "Itinérant",
    nbQuestions: 5,
    description: ``,
  },
  {
    id: "sedentaire",
    name: "Sédentaire",
    nbQuestions: 5,
    description: ``,
  },
];
