import { Firestore, DocumentData } from "firebase/firestore";

export interface IRequestsHomeAPI {
  fetchDocsInCollection(
    db: Firestore,
    colName: string
  ): Promise<DocumentData[]>;
}
