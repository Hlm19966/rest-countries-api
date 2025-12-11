
export type Country = {
  name: {
    common: string;
    nativeName?: {
      [key: string] : {
        official:string;
        common: string;
      }
    }
  };

  cca3: string;

  flags: {
    png: string;
    svg: string;
    alt?: string;
  }; 

  population: number;
  region: string;
  subregion: string;
  capital?: string[];

  
  tld: string[];
  currencies?: {      
    [key: string]: {
      name: string;
      symbol?: string;
    };
  };

    languages?: {             
    [key: string]: string;
  };
  
  borders?: string[];
};


export type PageProps = {
  params: {
    slug: string;
  }
}

export type SearchFormProps = {
    searchParams: Promise<{ [key:string]: string | string[] | undefined}>
}





