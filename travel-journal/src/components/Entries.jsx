import Card from './Card';
import Data from '../assets/data';

const Entries = () => {
    const Entries = Data.map((entry)=> {
        return <Card 
          img = {entry.img}
          location = {entry.location}
          country = {entry.country}
          fromDate = {entry.fromDate}
          toDate =  {entry.toDate}
          description =   {entry.description}
          />
      })
  return (
    <div>{Entries}</div>
  )
}

export default Entries