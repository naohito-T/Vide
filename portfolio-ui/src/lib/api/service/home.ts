import { DocumentData } from 'firebase/firestore';

export interface IRequestsHomeAPI {
  fetchDocsInCollection(colName: string): Promise<DocumentData[]>;
}
