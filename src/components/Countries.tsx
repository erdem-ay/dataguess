import React from 'react'
import { Country } from '../types';
interface CoutnriesProps {
    selected: Country | undefined;
    setSelected: (country: Country | undefined) => void;
    countries: Country[]
  }
const Countries: React.FC<CoutnriesProps>  = ({selected, countries, setSelected}) => {
    const handleSelectCountry = (country: Country | undefined) => {
        if (country?.name === selected?.name) {
          setSelected(undefined);
        } else {
          setSelected(country);
        }
      };
  return (
    <div className="list">
        {countries?.map((country, index) => (
          <div
            key={country.code}
            style={{
              backgroundColor:
                selected?.code === country.code ? "lightblue" : "white",
            }}
            onClick={() => handleSelectCountry(country)}
            className="country"
          >
            <div className="country-header">
              <h2>
                {index + 1}. {country.name}
              </h2>
              <div className="emoji">{country.emoji}</div>
            </div>
            <div>
              <p>Capital city: {country?.capital}</p>
              <p>Continent: {country?.continent?.name}</p>
              <div>
                Languages:
                {country?.languages?.map((lang, index) => (
                  <span key={lang?.name}>
                    {" "}
                    {lang.name}
                    {index + 1 < country?.languages?.length && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}
export default Countries