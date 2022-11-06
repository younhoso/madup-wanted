import HttpAxios from '../http/httpAxios';

export interface Madup {
  get(): Promise<[]>;
}

class AdListDataService implements Madup {
  private httpClient: any;

  constructor(httpClient: HttpAxios) {
    this.httpClient = httpClient;
  }

  get() {
    return this.httpClient.instance.get('/ads');
  }

  create(data: any) {
    this.httpClient.instance.create(JSON.stringify('/ads'));
    // return this.httpClient.fetch("todos", {
    //   method: "POST",
    //   body: JSON.stringify({ data }),
    // });
  }
}

export default AdListDataService;
