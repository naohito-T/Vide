import { IRequestSystemAPI } from '@/lib/system';
import { RequestAPI } from '@/lib/request/api';
import { AxiosError } from 'axios';

export class RequestSystem extends RequestAPI implements IRequestSystemAPI {
  /** jestのtest前にtxtを作成(beforeAll)終わった後、afterAll */
  public postTeams = async (texts: string[]): Promise<void> => {
    const payload = texts.join('<br/>').slice(0, 600);
    await this.axios
      .post(this.config.teamsURL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        text: JSON.stringify(payload),
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
      });
  };
}
