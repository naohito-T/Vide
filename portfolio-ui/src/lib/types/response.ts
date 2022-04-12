/**
 * @desc firebase response types
 */

import { Timestamp } from 'firebase/firestore';

/** works/_slugで使用する */
interface ProjectDetail {
  docId: string;
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/** _slugで3D カルーセルで使う */
interface ProjectImageList {
  imageList: string[];
}

interface Project {
  collectionId: string; // コレクションID(コレクションを特定する)
  documentId: string; // ドキュメントID識別(コレクションの中のdocumentを特定する)
  slug: string; // そのプロジェクトID これいらないかも
  createdAt: Timestamp;
  updatedAt: Timestamp;
  title: string;
  subTitle: string;
  description: string;
  imageURLList: string[];
}

export { Project };
