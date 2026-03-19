import styles from "./contacto.module.css";

const contactRows = [
  { label: "Telefono / WhatsApp", value: "A configurar" },
  { label: "Email", value: "ventas@mourullo.com" },
  { label: "Horario", value: "Lunes a viernes de 8 a 17 hs" },
];

export default function ContactoPage() {
  return (
    <section className="section">
      <div className={`site-shell ${styles.layout}`}>
        <div className={styles.info}>
          <span className="eyebrow">Contacto</span>
          <h1>Canales directos para consultas y cotizaciones.</h1>
          <p>
            Por ahora la pagina puede resolver contacto simple con datos
            visibles y acceso directo a WhatsApp. Cuando quieran, se puede
            sumar formulario conectado a email, CRM o CMS.
          </p>

          <div className={styles.rows}>
            {contactRows.map((row) => (
              <article key={row.label} className="card">
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className={`${styles.panel} card`}>
          <h2>Mensaje rapido</h2>
          <p>
            El boton flotante abre un chat con el texto: Hola, tengo una
            consulta.
          </p>
          <a
            className="button-primary"
            href="https://wa.me/5491100000000?text=Hola%2C%20tengo%20una%20consulta"
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
