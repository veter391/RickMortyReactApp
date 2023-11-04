type dataType = {
  id: number;
  name: string;
  status: string;
  species: string;
  location: any;
  image: string;
}

async function getData() {
  try {
      const dataList = [];
      let pages = 1;

      for (let i = 1; i <= pages; i++) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);

        if (!response.ok) {
          throw new Error(response.status + ' Not found')
        }

        // await to response
        const data = await response.json();

        pages = data.info.pages;

        const newList = await data.results.map((item: dataType) => ({
          id: item.id,
          name: item.name,
          status: item.status,
          species: item.species,
          location: item.location.name,
          image: item.image
        }))

        dataList.push(...newList)
      }
      console.log(dataList)
      return dataList;

  } catch (error) {
    console.log(error)
  }
}

export default getData;

/*
  {subStr} = props

  const [substring, setSubstring] = useState('')
  const subFind = countrys.filter(item => item.name.includes(subStr))

  useEffect({

  }, [])


  oneChange(e => setSubstr(e.target.value))





  // ! get all data
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters((_characters) => {
      return [..._characters, ...data.results];
    });
    if (data.info && data.info.next) {
      fetchData(data.info.next);
    }
  };
*/
