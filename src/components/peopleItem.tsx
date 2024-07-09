import { Component, ReactNode } from 'react';
import { props } from '../types/types';

class PeopleItem extends Component<props> {
  render(): ReactNode {
    return (
      <div className="peopleCard">
        <p>Name: {this.props.name}</p>
        <p>Eye color: {this.props.eye_color}</p>
        <p>Birth year: {this.props.birth_year}</p>
        <p>Gender: {this.props.gender}</p>
        <p>Hair color: {this.props.hair_color}</p>
        <p>Height: {this.props.height}</p>
        <p>Mass: {this.props.mass}</p>
        <p>Skin color: {this.props.skin_color}</p>
      </div>
    );
  }
}

export default PeopleItem;
