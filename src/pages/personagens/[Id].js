import Link from 'next/link';
import Head from "next/head"

export async function getStaticProps({ params }) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${params.Id}`);
  const todo = await response.json();
  console.log(todo)

  return {
    props: {
      todo
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const data = await response.json()
  const todo = data.results

  
  const paths = todo.map(todo => ({
    params: {
      Id: `${todo.id}`
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export default function Personagem({ todo }) {
  return (
    <>
    <Head> <title> personagem: {todo.name}</title></Head>
      <Link href="/personagens">
        Voltar
      </Link>
      <h1>Exibindo o todo: {todo.id}</h1>
      <p>Título: {todo.name}</p>
      <img src={todo.image} width="200px" height="300px"/>
     
    </>
  );
}