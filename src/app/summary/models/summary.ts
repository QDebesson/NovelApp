export interface Summary {
  premise: Premise;
  id: string;
  title: string;
  subtitle: string;
  startDate: string;

  [key: string]: string | Premise;
}

export interface Premise {
  character: string;
  situation: string;
  objective: string;
  opponent: string;
  disaster: string;
  fullPremise: string;

  [key: string]: string;
}
