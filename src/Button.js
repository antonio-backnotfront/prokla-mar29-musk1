// eslint-disable-next-line no-unused-vars
import styles from './Button.css'
const Button = function({text, link, type}){
return (
        <a href={link} className='link' target={type !== "msg" ? "_blank" : ""} rel="noreferrer">
      <button className={'button '+type}>
        {text}
      </button>
        </a>
  )
}

export default Button
