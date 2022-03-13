import { AxiosResponse } from "axios";
import { IRequestsHomeAPI } from "../service";
import { RequestAPI } from "~/lib/helper/axios/_abstractAxios";
import {
  Firestore,
  DocumentData,
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

export class RequestsHomeAPI extends RequestAPI implements IRequestsHomeAPI {
  /** 単一のコレクション内のドキュメント全てを取得する */
  public fetchDocsInCollection = async (
    db: Firestore,
    colName: string
  ): Promise<DocumentData[]> => {
    const singleCol = collection(db, colName);
    const colWithSnapshot = await getDocs(singleCol);
    const snapList = colWithSnapshot.docs.map((doc) => doc.data());
    return snapList;
  };
}
