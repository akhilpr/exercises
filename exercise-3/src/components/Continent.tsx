import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import  Loader  from "./Loader";
import '../style.css'

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});


  
// write a GraphQL query that asks for list of Continent
const LIST_CONTINET = gql`
  query Conti($code: ID!) {
    continent(code:$code) {
        code
       name
       countries{
        code
        name
        native
        phone
        capital
        currency
        emoji
        emojiU
       }
    }
  }
`;
 const Continent : React.FC = () => {
  const [code, setCountry] = useState('');
  const {data, loading, error , refetch} = useQuery(LIST_CONTINET, {variables: { code },client});
const change = (value):void => {
    setCountry(value.toUpperCase())
    refetch()
}


  return (
      <div>
    <input type="text" className="inp-wid" placeholder="Enter Continent Code" onChange={(e):void => change(e.target.value)}></input>
    {  loading || error ? <Loader/> : 
    <div>
          {  loading || error || data.continent === null ? <div>
              <h4 className="text-sty">No Continent Code Found</h4>
          </div> :
          <div>
              <h4 className="text-sty">Countries</h4>
  { data.continent.countries.map(res => 
      <div className="text-mar" key={res.name}><span key={res.name}>{res.emoji} {res.name} </span><br></br> </div>
  )}
    </div>
          }
          </div>
    }
    </div>
  );
}

export default Continent
