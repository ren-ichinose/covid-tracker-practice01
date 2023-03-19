import Header from '../components/Header'
import Selector from '../components/Selector'
import Title from '../components/Title'
import Results from '../components/Results'

const TopPage = ({
  countriesJson,
  setCountry,
  getCountryData,
  countryData,
}) => {
  return (
    <>
      <Header />
      <Title title="Covid Tracker" />
      <Selector
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
      <Results countryData={countryData} />
    </>
  )
}

export default TopPage