import { Pokemon } from '../../components/Pokemon';
import styles from './styles.module.css';
import PokemonLogo from '../../assets/images/Pokemon-Logo.png';

export const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={PokemonLogo} alt="Pokemon Logo" />
      <Pokemon name="Pikachu" />
      <Pokemon name="Sharizard" />
      <Pokemon name="Squirtle" />
      <Pokemon name="Charmander" />
      <Pokemon name="Dito" />
    </div>
  );
};
