import { useParams } from "react-router-dom";

function DogDetails({dogsList}) {
    const params = useParams();
    const dogs = dogsList.dogs
    const dog = dogs.find(d =>( d.name.toLowerCase() === params.name.toLowerCase()))
    return(
        <div>
            <h3>Here is the dog you are looking for:</h3>
            <ul>
                <li>name:{dog.name}</li>
                <li>age:{dog.age}</li>
                <li>src:{dog.src}</li>
                <li>fact:
                    <ul>
                        {(dog.facts).map(fact => <li>{fact}</li>)}
                    </ul>
                </li>
            </ul>
        </div>

    )
}

export default DogDetails;