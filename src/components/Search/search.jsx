import useDebounce from '../hooks/useDebounce';
import './search.css';
function Search({updateSearchTerm}) {
   const debounceSearchTerm=useDebounce((e)=> updateSearchTerm(e.target.value));
   return(
    <>
   <input id="search-pokemon"type="text " 
   placeholder="which pokemon are you looking for?"
    onChange={debounceSearchTerm}/>

    </>

   )  
}

export default Search