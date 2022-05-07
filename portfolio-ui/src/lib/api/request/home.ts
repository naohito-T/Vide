import { IRequestsHomeAPI } from '../service';
import { RequestAPI } from '~/lib/helper/axios/_abstractAxios';
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy
} from 'firebase/firestore';
import { getDownloadURL, ref, list } from 'firebase/storage';
import { FirebaseError, FirebaseStorageError } from '@/lib/error';

export class RequestsHomeAPI extends RequestAPI implements IRequestsHomeAPI {
  /**
   * @desc firebase firestore用
   */

  /**
   * @desc 指定された単一コレクション内の一つのドキュメントを取得する(ドキュメントID自動でよく、下のやつで取得する)
   * @TODO まだ実験していない
   */
  public fetchDocumentInFireStore = async (
    collectionName: string,
    documentId: string
  ): Promise<DocumentData> => {
    try {
      const docRef = doc(this.db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        return docSnap;
      } else {
        throw new FirebaseError();
      }
    } catch (e: any) {
      throw new FirebaseError();
    }
  };

  /**
   * @desc 指定された単一コレクション内のドキュメントを全て取得する(ドキュメントID自動でいい)
   * @return [{"document_id":"4ZfC2chmkLxjyD5P1lTO","sub_title":"coding","title":"program","created_at":{"seconds":1651330800,"nanoseconds":0},"description":"My mission is to write coding as beautifully","image_url":"https://firebasestorage.googleapis.com/v0/b/vide-prd.appspot.com/o/top%2Ftop_image.jpg?alt=media&token=bfb70031-cb14-463b-88e1-4b13059d616f","updated_at":{"seconds":1651330800,"nanoseconds":0}}]}
   */
  public fetchDocumentAllInFireStore = async (
    collectionName: string,
    orderItem?: string
  ): Promise<DocumentData[]> => {
    try {
      const singleCol = collection(this.db, collectionName);
      console.log(`orderItem${orderItem}`);
      const colWithSnapshot = orderItem
        ? await getDocs(query(singleCol, orderBy(orderItem, 'desc')))
        : await getDocs(singleCol);
      const snapList = colWithSnapshot.docs.map((doc) => {
        return { document_id: doc.id, ...doc.data() };
      });
      return snapList;
    } catch (e: any) {
      throw new FirebaseError();
    }
  };

  /**
   * @desc firebase Storage用
   */

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
