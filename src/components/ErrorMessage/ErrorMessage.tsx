// styles
import styles from '../../styles/styles.module.scss'
// error images
import errorPng from '../../assets/img/error.png'
import errorWebp from '../../assets/img/error.png'

export default function ErrorMessage({ error }: { error: any }) {
  return (
    <div className={ styles['server-error'] }>

      <picture className={ styles['server-error-picture'] }>
        <source srcSet={ errorWebp } type="image/webp" />
        <img className={ styles['server-error-img'] }
             src={ errorPng }
             alt="error" />
      </picture>

      <p>{ error.message }</p>
    </div>
  );
}

