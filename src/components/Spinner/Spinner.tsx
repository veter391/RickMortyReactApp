// styles
import styles from '../../styles/styles.module.scss'
// spinner image
import spinnerImage from '../../assets/img/loading.png'

export default function Spinner() {
  return (
    <img style={{ width: '320px', margin: '0 auto' }}
      className={ styles.loading }
      src={ spinnerImage }
      alt="loader" />
  );
}
