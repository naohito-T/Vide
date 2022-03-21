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

/** top page */
interface Project {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  title: string;
  subTitle: string;
  imageURL: string;
}

export { ProjectDetail };
