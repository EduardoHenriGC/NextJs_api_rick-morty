import Head from 'next/head'
import Link from 'next/link'
import styles from "../../styles/personagem.module.css"



export async function getStaticProps() {
 
  const res = await fetch('https://rickandmortyapi.com/api/character')

  const data = await res.json()

  const todos = data.results

  return {
    props: { todos },
  }
}

export default function Personagens
({ todos }) {
  return (
    <>
    <Head> <title>Lista de Personagens</title></Head>
      <h1 className={styles.h1}>Lista de personagens</h1>
      <ul className={styles.ul}>
        {todos.map((todo) => (
          <li className={styles.list} key={todo.id}>
             <h4 className={styles.h4}>{todo.name} </h4>
            <img className={styles.img} src={todo.image} width="250px" height="370px"/>
            <Link className={styles.link} href={`/personagens/${todo.id}`}>
              Ver
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}