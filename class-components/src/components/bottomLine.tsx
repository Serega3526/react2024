import { Component, ReactNode } from "react";
import PeopleItem from "./peopleItem";

const BASE_PATH = 'https://swapi.dev/api'
const SEARC_PATH = '/people'
export  type props = {
    birth_year: string,
    eye_color: string,
    films?: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld?: string,
    mass: string,
    name: string,
    skin_color: string,
}

type state = {
    searchQuerry: string,
    result: {
        birth_year: string,
        eye_color: string,
        films?: string[],
        gender: string,
        hair_color: string
        height: string
        homeworld?: string
        mass: string
        name: string
        skin_color: string
    }[],
}

class BottomLine extends Component {
    constructor(props: props){
        super(props);
     }

    state: state = {
        searchQuerry: '',
        result: [],
    }

    componentDidMount(): void {
        // const {searchQuerry} = this.state
        fetch(`${BASE_PATH}${SEARC_PATH}`)
        .then(res => res.json())
        .then(result => {
            this.setResult(result.results)
        })
        .catch(error => error);
    }

    setResult = (result: Response) => {
        this.setState({result})
        console.log(result)
    }
    render(): ReactNode {
        const {searchQuerry, result} = this.state
        console.log('2222',result)

        return (
            <div className="bottomLine">
                <>
                {result.map((item:props) =>
                    <PeopleItem
                        birth_year={item.birth_year}
                        eye_color={item.eye_color}
                        gender={item.gender}
                        hair_color={item.hair_color}
                        height={item.height}
                        mass={item.mass}
                        name={item.name}
                        skin_color={item.skin_color}
                    />
                )}
                </>
            </div>
        )
    }
}

export default BottomLine