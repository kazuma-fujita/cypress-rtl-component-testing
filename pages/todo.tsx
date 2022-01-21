import type { NextPage } from "next";
import Head from "next/head";
import Todo from "../src/components/todo";
import styles from "../styles/Home.module.css";

const TodoPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to your todo list.</h1>
        <div className={styles.card}>
          <Todo />
        </div>
      </main>
    </div>
  );
};

export default TodoPage;
