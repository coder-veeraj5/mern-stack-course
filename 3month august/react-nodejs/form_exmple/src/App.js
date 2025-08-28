
import './App.css';
import { BeatLoader } from 'react-spinners';
import useFetchData from './customhook/useFetchData';

function App() {

  const url="https://jsonplaceholder.typicode.com/posts";

  const {data,loading ,error}=useFetchData(url);

  if(loading) return(
    <div className='loader'> <h1><BeatLoader fill="#4197ff" count={4} />
</h1></div>
)
    if(error) return <h1>error {error}</h1>

       console.log(data);
  return (
    <div className="App">
     
      
{data && data.data.map((each,index)=><p key= {index}>{index +1 } {each.title}</p>)}
    </div>
  );
}

export default App;
