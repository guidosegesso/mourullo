import styles from "./quienes-somos.module.css";

export default function QuienesSomosPage() {
  return (
    <section className="section">
      <div className={`site-shell ${styles.layout}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Quienes somos</span>
          <h1>Una empresa enfocada en telgopor funcional, resistente y adaptable.</h1>
          <p>
            Mourullo puede presentarse aca como fabricante o distribuidor de
            soluciones en EPS para embalaje, proteccion y aislacion. El
            contenido queda listo para ajustar el tono comercial cuando definan
            el texto institucional final.
          </p>
          <p>
            La idea de esta pagina es contar experiencia, procesos de trabajo,
            sectores atendidos y cualquier diferencial tecnico o logistico que
            la empresa quiera remarcar.
          </p>
        </div>

        <div className={`${styles.sidePanel} card`}>
          <div>
            <strong>Posibles diferenciales</strong>
            <ul>
              <li>Desarrollos a medida segun producto o necesidad</li>
              <li>Atencion a industrias, comercios y constructoras</li>
              <li>Catalogo simple hoy, escalable a futuro</li>
            </ul>
          </div>
          <div className={styles.quote}>
            <p>
              El sitio ya queda estructurado para sumar mas secciones, casos de
              exito o informacion tecnica sin rehacer la base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
