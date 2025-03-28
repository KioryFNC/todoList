import styles from './Empty.module.css'
import clipboard from '../../assets/clipboard.svg'

export function Empty() {
  return(
    <div className={styles.container}>
      <img src={clipboard} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div> 
  )
}