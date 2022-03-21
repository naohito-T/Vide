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
  documentId: string; // ドキュメントID
  slug: string; // そのプロジェクトID
  createdAt: Timestamp;
  updatedAt: Timestamp;
  title: string;
  subTitle: string;
  description: string;
  imageURLList: string[];
}

export { ProjectDetail };
