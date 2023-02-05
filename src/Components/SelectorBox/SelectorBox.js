import Select from 'react-select';

import styles from './SelectorBox.module.css';

const selectStyle = {
  control: styles => ({ ...styles, margin: '10px', background: 'white', border:'none', width: '200px', color: 'black' })
}

const SelectorBox = (props) => {

  return (
    <section className={styles.container}>
      <Select
        styles={selectStyle}
        defaultValue={props.firstCharacter}
        onChange={props.setFirstCharacter}
        options={props.allCharacters}
        placeholder='Search Characters'>
      </Select>
      
      <Select
        styles={selectStyle}
        defaultValue={props.otherCharacter}
        onChange={props.setOtherCharacter}
        options={props.allCharacters}
        placeholder='Search Characters'>
      </Select>
    </section>
  )
}

export default SelectorBox;