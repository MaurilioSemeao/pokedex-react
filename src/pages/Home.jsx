import { Pokemon } from '../components/Pokemon';

export const Home = () => {
  return (
    <div>
      <h1>Meu site Pokemon</h1>
      <Pokemon name="Pikachu" />
      <Pokemon name="Sharizard" />
      <Pokemon name="Squirtle" />
      <Pokemon name="Charmander" />
      <Pokemon name="Dito" />
    </div>
  );
};
