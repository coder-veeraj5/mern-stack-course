 import axios from "axios";
 import { useEffect ,useState } from "react";
 
function useFetchData(url) {
    const [data, setdata] = useState()
const [loading, setloading] = useState(true)
const [error, seterror] = useState(null);

const getApiData=async()=>{
    try {
        setloading(true);
        const response= await axios.get(url);
        if (response) {
              setdata(response);
        }
      
    } catch (error) {
        seterror(error.message);
     console.log(error);
    }
    finally{
        setloading(false);
    }
};

useEffect(() => {
 getApiData();

}, []);

return {data ,loading ,error};

}

export default useFetchData;