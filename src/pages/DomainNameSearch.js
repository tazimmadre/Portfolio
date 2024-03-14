// https://api.domainsdb.info/v1/domains/search?domain=${query}&zone=com
// use this api to get the domain name search results and display them in a list
//  keep the search bar big and in the top of the page and the results below it
// use tailwindcss to style the page

import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DomainNameSearch = () => {
  const [query, setQuery] = useState('');
  const [domainNames, setDomainNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDomainNames = async () => {
    // fetch domain names use axxios
    try {
      setLoading(true);
      const response = await axios.get(`https://api.domainsdb.info/v1/domains/search?domain=${query}&zone=com`);
      console.log(response);
      setDomainNames(response.data.domains);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto">
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/" className="pl-8">Tazim Madre / Domain Name Search</Link>
        <div className="px-4 cursor-pointer md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link to="/" className="p-4">Portfolio</Link>
        </div>
      </nav>
        <div className="container mx-auto">

      <h1 className="text-3xl my-7">Domain Name Search</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="border-2 border-gray-300 rounded p-2 w-3/4" />
      <button onClick={fetchDomainNames} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
      {loading ? 
      <div className="text-center my-4">
        <div className="loader">Loading...</div>
      </div>
      :
      <ul>
        {domainNames.map((domainName) => (
          <li key={domainName} className="my-2">{domainName}</li>
          ))}
      </ul>
        }
    </div>
    </div>
  );
}

export default DomainNameSearch;