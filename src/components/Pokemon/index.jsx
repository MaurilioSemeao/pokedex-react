import styles from './styles.module.css';

export const Pokemon = ({ name = 'Pikachu' }) => {
  return <h2 className={styles.title}>Nome Do Pokemon: {name}</h2>;
};

// import React from 'react';

// export class Pokemon extends React.Component {
//   render() {
//     return <h2> Nome Do Pokemon: Pikachu</h2>;
//   }
// }
