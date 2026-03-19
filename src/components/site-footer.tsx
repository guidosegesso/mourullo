import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-shell ${styles.inner}`}>
        <p>Mourullo. Sitio inicial preparado para catalogo, contenido y contacto.</p>
        <p>Base estatica en Next.js con estilos globales y paginas internas.</p>
      </div>
    </footer>
  );
}
