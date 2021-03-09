import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import  Loader  from "./Loader";
import '../style.css'
// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});


  
// write a GraphQL query that asks for names and codes for countries
const LIST_COUNTRIES = gql`
  query Contri($code: ID!) {
    country(code:$code) {
        name
        native
        capital
        emoji
        currency
        emojiU
        languages {
          code
          name
        }
    }
  }
`;
 const CountrySelect : React.FC = () => {
  const [code, setCountry] = useState('');
  const {data, loading, error , refetch} = useQuery(LIST_COUNTRIES, {variables: { code },client});
const change = (value):void => {
    setCountry(value.toUpperCase())
    refetch()
}


  return (
      <div>
    <input type="text" className="inp-wid" placeholder="Enter Country Code" onChange={(e):void => change(e.target.value)}></input>
    {  loading || error ? <Loader/> : 
    <div>
          { data.country === null ? <div>
              <h4 className="text-sty">No Country Code Found</h4>
          </div> :
          <div className="text-mar">
   Name:<span>{data.country?.name}<br></br></span>
   Code:{data.country?.emoji}<br></br>
   Currency:<span>{data.country?.currency}</span><br></br>
   Flag:{<span role="img" aria-label={data.country?.emoji}>{data.country?.emoji}</span>}<br></br>
   Languages:{data.country?.languages.map((res) => <span key={res.name}>{res.name},</span>)}<br></br>
   Name:{data.country?.name}<br></br>
    </div>
          }
</div>
}
    </div>
  );
 }
export default CountrySelect
