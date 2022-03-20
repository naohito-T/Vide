import { AxiosResponse } from 'axios';
import { IRequestsHomeAPI } from '../service';
import { RequestAPI } from '~/lib/helper/axios/_abstractAxios';
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { FirebaseAPP } from '@/lib/firebase';

export class RequestsHomeAPI extends RequestAPI implements IRequestsHomeAPI {
  /** 単一のコレクション内のドキュメント全てを取得する */
  public fetchDocsInCollection = async (
    colName: string
  ): Promise<DocumentData[]> => {
    const singleCol = collection(this.db, colName);
    const colWithSnapshot = await getDocs(singleCol);
    const snapList = colWithSnapshot.docs.map((doc) => doc.data());
    return snapList;
  };
}
