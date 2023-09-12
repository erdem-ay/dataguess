import React from 'react'
import { Continent } from '../../types';
interface ContinentsProps {
    continents: Continent[] | undefined;
    continent: string | undefined;
    setContinent: (continent: string) => void;
  }
const Continents: React.FC<ContinentsProps> = ({continent, continents, setContinent}) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setContinent(event.target.value);
      };
  return (
    <div>
        <select
              name="continents"
              id="continents"
              onChange={(e) => handleSelectChange(e)}
            >
              <option value="" defaultValue={"all"}>
                All
              </option>
              {continents?.map((continent) => (
                <option key={continent?.code} value={continent.code}>
                  {continent?.name}
                </option>
              ))}
            </select>
    </div>
  )
}
export default Continents