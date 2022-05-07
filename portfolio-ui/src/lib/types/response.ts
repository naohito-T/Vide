import { Timestamp } from 'firebase/firestore';

/**
 * @desc api requestのレスポンス
 */

// projectの雛形
// altはtitleで代用する
interface Project {
  document_id: string; // ドキュメントID識別(コレクションの中のdocumentを特定する)
  created_at: Timestamp;
  updated_at: Timestamp;
  title: string;
  sub_title: string;
  description: string;
  image_url: string;
}

/** works/_slugで使用する */
interface ProjectDetail {
  docId: string;
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// TopPage
type TopPageProject = Project;

// AboutPage
type AboutPageProject = Omit<Project, 'sub_title' | 'description'> & {
  site_url?: string;
};

export { TopPageProject, Project, AboutPageProject };
