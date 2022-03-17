import { AxiosResponse } from "axios";
import { IRequestsHomeAPI } from "../service";
import { RequestAPI } from "~/lib/helper/axios/_abstractAxios";
import {
  Firestore,
  DocumentData,
  collection,
  getDocs,
} from "firebase/firestore";

export class RequestsHomeAPI extends RequestAPI implements IRequestsHomeAPI {
  /** 単一のコレクション内のドキュメント全てを取得する */
  public fetchDocsInCollection = async (
    db: Firestore,
    colName: string = "sample"
  ): Promise<DocumentData[]> => {
    console.log(`start:`);
    console.log(`db: ${JSON.stringify(db)}`);
    console.log(`col: ${JSON.stringify(colName)}`);

    const singleCol = collection(db, colName);
    console.log(`start: ${JSON.stringify(singleCol)}`);
    const colWithSnapshot = await getDocs(singleCol);
    console.log(`colWithsna@: ${JSON.stringify(colWithSnapshot)}`);
    const snapList = colWithSnapshot.docs.map((doc) => doc.data());
    return snapList;
  };
}
