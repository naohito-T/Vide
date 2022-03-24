import { Project } from '@/lib/types';
import { Timestamp } from 'firebase/firestore';
import { randomString } from '@/utils';

const mockImages = [
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05449_l9kukz.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05544_aczrb9.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05447_mvffor.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05501_yirmq8.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05515_d2gzut.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05581_ceocwv.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05517_ni2k0p.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05620_qfwycq.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05462_b33uvp.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05489_mqzktl.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05476_dlkjza.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05497_abbd3c.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05487_fcdv7t.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05493_q6njbk.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05446_xj60ff.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05559_hu49zx.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05565_dx5rp6.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05613_o9af2z.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05469_fdxdzx.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05558_yq2tnz.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05483_dyiuya.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05468_xzbtcd.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05457_nloycw.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05522_mekpec.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05611_lbwtmk.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05572_xfvij7.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05481_gnljae.jpg',
  'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05480_zkw8sm.jpg'
];

const mockProject: Project = {
  collectionId: 'project',
  documentId: randomString(),
  slug: '',
  createdAt: Timestamp.now(),
  updatedAt: Timestamp.now(),
  title: randomString(),
  subTitle: randomString(),
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.',
  imageURLList: [
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg'
  ]
};

// const mockProjectExcludeImage: Project = {
//   collectionId: 'project',
//   documentId: randomString(),
//   slug: '',
//   createdAt: Timestamp.now(),
//   updatedAt: Timestamp.now(),
//   title: randomString(),
//   subTitle: randomString(),
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.',
//   imageURLList: []
// };

class MockProjectExcludeImage {
  collectionId: string; // コレクションID(コレクションを特定する)
  documentId: string; // ドキュメントID識別(コレクションの中のdocumentを特定する)
  slug: string; // そのプロジェクトID これいらないかも
  createdAt: Timestamp;
  updatedAt: Timestamp;
  title: string;
  subTitle: string;
  description: string;
  imageURLList: string[];

  constructor() {
    this.collectionId = 'project';
    this.documentId = randomString();
    this.slug = '';
    this.createdAt = Timestamp.now();
    this.updatedAt = Timestamp.now();
    this.title = randomString();
    this.subTitle = randomString();
    this.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.';
    this.imageURLList = [];
  }
}

/** generate mock */
const mockProjects: Project[] = [];
for (const image of mockImages) {
  const mock = new MockProjectExcludeImage();
  mock.imageURLList.push(image);
  mockProjects.push(mock);
}

export { mockProject, mockProjects };
