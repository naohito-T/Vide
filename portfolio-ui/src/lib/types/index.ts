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

export { ProjectDetail };
