type dataType = {
  id: number;
  name: string;
  status: string;
  species: string;
  location: any;
  image: string;
}

class RickYMortyService {
  // general link of API
  _apiUrl = 'https://rickandmortyapi.com/api/character';
  pages = 1;

  // get info from fetch and return json
  getRecorce = async ( url: string ) => {
    const response = await fetch( url );

    // check response to error
    if ( !response.ok )
      throw new Error(`Could not fetch, status: ${response.status}`);

    // await to response
    return await response.json();
  }

  // generate custom pack of characters
  generatePack = async ( name: string = '' ) => {
    const dataList = [];

    // check all pages and find characters filtered by name
    for ( let i = 1; i <= this.pages; i++ ) {
      const data = await this.getRecorce(`${ this._apiUrl }?page=${ i }&name=${ name }`);

      // get all pages from api
      this.pages = data.info.pages;

      // new modified character list
      const newList = await data.results.map(( item: dataType ) => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        location: item.location.name,
        image: item.image
      }))

      dataList.push(...newList);
    }

    return dataList;
  }

  // get all characters
  getAllCharacters = async () => await this.generatePack();
  // get all characters with name/substring
  getCharactersByName = async ( name: string ) => await this.generatePack(name);
}

export default RickYMortyService;
