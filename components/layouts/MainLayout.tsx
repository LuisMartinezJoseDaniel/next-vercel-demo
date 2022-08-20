import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { Navbar } from "../Navbar";

import styles from "./MainLayout.module.css";

interface Props {
  title: string;
}

export const MainLayout: FC<PropsWithChildren <Props>> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} Page</title>
        <meta name="description" content={`${title} Page`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
};
