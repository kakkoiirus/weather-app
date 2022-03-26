import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={styles.grid}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
