import React from 'react';
import { useQuery } from '@apollo/client';
import GET_COUNTRIES from '../../graphql/queries/get-countries';

const CountriesSelection = () => {
  const { data } = useQuery(GET_COUNTRIES);
  const countries = data?.countries ?? [];

  return (
    <select>
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountriesSelection;