import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(true);  // Başlangıç değeri `true` yerine `null` veya `undefined` olmalı.

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);  // `url` değiştiğinde veriyi yeniden çekmek için dependency array'e eklemelisiniz.

  return {data};
}

export default useFetch;
