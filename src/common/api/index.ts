

 class HttpClient {
    _baseURL: string;
    _headers: any
    constructor(options: any = {}) {
      if (typeof window !== 'undefined') {
        options.headers.Authorization= "Bearer " +localStorage.getItem('agent') 
        console.log(localStorage.getItem('agent'));
        
      }
        this._baseURL = options.baseURL || "https://irp.ramanacastle.com/api";
        this._headers = options.headers || {};
   
      
        
    }

    private static instance: HttpClient;



	static getInstance() {
		if (!HttpClient.instance) {
			HttpClient.instance = new HttpClient({headers:{['content-type']:'application/json',Accept:'application/json'}});
		}

		return HttpClient.instance;
	}


    setHeader(key: string, value: string) {
      
        this._headers[key] = value;
        if (value==='') {
         delete this._headers[key];
        }
        return this;
    }

    async _fetchJSON<T>(endpoint: string, options: any = {}):Promise<T|undefined> {
        const res = await fetch(this._baseURL + endpoint, {
            ...options,
            headers: this._headers
        });

        if (!res.ok) throw new Error(res.statusText);

        if (options.parseResponse !== false && res.status !== 204)
            return res.json();

        return undefined;
    }

    get<T>(endpoint:string, options = {}) {
        return this._fetchJSON<T>(
          endpoint, 
          { 
            ...options, 
            method: 'GET' 
          }
        )
      }
      
      post(endpoint:string, body:any, options = {}) {
        return this._fetchJSON(
          endpoint, 
          {
            ...options, 
            body: JSON.stringify(body), 
            method: 'POST' 
          }
        )
      }
      postWithFormData<T>(endpoint:string, body:T, options = {}){
        return this._fetchJSON(
          endpoint,{
            method: 'POST' ,
            body
          }
        )
      }
      delete(endpoint:string, options = {}) {
        return this._fetchJSON(
          endpoint, 
          {
            parseResponse: false,
            ...options, 
            method: 'DELETE' 
          }
        )
      }
}

export  const api=  HttpClient.getInstance();