import { useState, useEffect } from "react";
import { useQuery, QueryResult } from "@apollo/client";
import Sizes from "./components/filters/Sizes";
import Countries from "./components/Countries";
import Continents from "./components/filters/Continents";
import { Country, Continent } from "./types";
import { GET_COUNTRIES, GET_CONTINENTS } from "./queries";
import Search from "./components/filters/Search";
function App() {
  const [filter, setFilter] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<number>(25);
  const [selected, setSelected] = useState<Country | undefined>();
  const [continent, setContinent] = useState<string | undefined>();
  const [countries, setCountries] = useState<Country[]>([]);
  const { loading, error, data }: QueryResult<{ countries: Country[] }> =
    useQuery(GET_COUNTRIES);
  const { data: continentsData }: QueryResult<{ continents: Continent[] }> =
    useQuery(GET_CONTINENTS);
  useEffect(() => {
    if (continent) {
      const filteredCountries = data?.countries.filter((country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      );
      const secondFilter = filteredCountries
        ?.filter((country) => country.continent.code === continent)
        .slice(0, selectedSize);
      setCountries(secondFilter || []);
      if (Array.isArray(filteredCountries)) {
        let _selected: Country | undefined =
          secondFilter && secondFilter.length > 10
            ? secondFilter[9]
            : ((secondFilter && secondFilter[secondFilter.length - 1]) as
                | Country
                | undefined);
        setSelected(_selected);
      }
    } else {
      const filteredCountries = data?.countries
        .filter((country) =>
          country.name.toLowerCase().includes(filter.toLowerCase())
        )
        .slice(0, selectedSize);
      setCountries(filteredCountries || []);
      if (Array.isArray(filteredCountries)) {
        let _selected =
          filteredCountries?.length > 10
            ? filteredCountries[9]
            : filteredCountries[filteredCountries?.length - 1];
        setSelected(_selected);
      }
    }
     // eslint-disable-next-line
  }, [data?.countries?.length, continent, filter, selectedSize]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <div className="header-wrapper">
        <div className="header">
          <div>
            <div className="logo">
              <img src="./dataguess.jpeg" alt="" className="" />
            </div>
            <div className="selection">
              {selected?.name && (
                <div className="">Selected: {selected?.name}</div>
              )}
            </div>
          </div>
          <div className="filter">
            <Search setFilter={setFilter} />
            <Continents
              continents={continentsData?.continents}
              setContinent={setContinent}
              continent={continent}
            />
            <Sizes
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>
        </div>
      </div>
      <Countries
        countries={countries}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}
export default App;