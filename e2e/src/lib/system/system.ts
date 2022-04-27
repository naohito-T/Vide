export interface IRequestSystemAPI {
  postTeams(texts: string[]): Promise<void>;
}
