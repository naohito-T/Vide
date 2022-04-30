import { IRequestsHomeAPI } from '../service';
import { RequestAPI } from '~/lib/helper/axios/_abstractAxios';
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, list, listAll } from 'firebase/storage';
import { FirebaseError, FirebaseStorageError } from '@/lib/error';

export class RequestsHomeAPI extends RequestAPI implements IRequestsHomeAPI {
  /** 単一のコレクション内のドキュメント全てを取得する */
  public fetchDocsInCollection = async (
    colName: string
  ): Promise<DocumentData[]> => {
    try {
      const singleCol = collection(this.db, colName);
      const colWithSnapshot = await getDocs(singleCol);
      const snapList = colWithSnapshot.docs.map((doc) => doc.data());
      return snapList;
    } catch (e: any) {
      throw new FirebaseError();
    }
  };

  /** @desc 指定のディレクトリ内にある、指定のファイルURLを取得する */
  public fetchDownloadURL = async (
    childDir: string,
    fileName: string
  ): Promise<string> => {
    try {
      // pointer rootディレクトリ
      const storageRef = ref(this.storage);
      // pointer 子ディレクトリに移動する
      const childRef = ref(storageRef, childDir);
      // 子ディレクトリのファイルnameを取得する
      const imgRef = ref(childRef, fileName);
      return imgRef.fullPath;
    } catch (e: any) {
      throw new FirebaseStorageError(e);
    }
  };

  /** @desc 指定のディレクトリ内にある全てのファイルパス(imgから参照できる)を取得する(/ なしで良い) */
  public fetchDownloadURLs = async (childDir: string): Promise<string[]> => {
    try {
      // pointer rootディレクトリ/childディレクトリ
      const listRef = ref(this.storage, childDir);
      const firstPage = await list(listRef, { maxResults: 10 });
      const urls = await Promise.all(
        firstPage.items.map(async (ref) => {
          return await getDownloadURL(ref);
        })
      );
      console.log(`URLs${JSON.stringify(urls)}`);
      return urls;
    } catch (e: any) {
      throw new FirebaseStorageError(e);
    }
  };
}
