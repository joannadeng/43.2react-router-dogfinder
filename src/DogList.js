import {Link} from 'react-router-dom'

function DogList({dogsList}) {
   
    const names = dogsList.map(dog => dog.name)

    return (
        <div>
           <h1>Home Page</h1>
           <nav>
            {names.map (name => 
                (<Link to={`/dogs/${name}`}>{name}  </Link>) // how to pass name var to Link path ?
            )}

            {/* <Link to="/dogs/Whiskey">Whiskey  </Link>
            <Link to="/dogs/Duke">Duke  </Link>
            <Link to="/dogs/Perry">Perry  </Link>
            <Link to="/dogs/Tubby">Tubby  </Link> */}
           </nav> 
        </div>
        
    )
}

export default DogList;