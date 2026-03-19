import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import styles from "./home.module.css";

const categories = [
  {
    name: "Embalaje",
    description: "Piezas de proteccion para envios, linea blanca y productos fragiles.",
  },
  {
    name: "Aislacion",
    description: "Planchas EPS para obra, cubiertas, cerramientos y rendimiento termico.",
  },
  {
    name: "Desarrollo a medida",
    description: "Formatos especiales para industria, muestras, moldes y soluciones tecnicas.",
  },
];

const benefits = [
  "Liviano y facil de manipular",
  "Aislacion termica eficiente",
  "Absorcion de impactos para embalaje",
  "Produccion adaptable a distintas medidas",
  "Material versatil para industria y obra",
  "Respuesta rapida para cotizaciones y entregas",
];

const stats = [
  { value: "EPS", label: "soluciones para embalaje y aislacion" },
  { value: "A medida", label: "piezas segun uso, plano o muestra" },
  { value: "Rapido", label: "contacto directo por WhatsApp" },
];

export default function Home() {
  return (
    <>
      <section className={`${styles.hero} section`}>
        <div className={`site-shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Mourullo</span>
            <h1>Soluciones en telgopor para construccion, embalaje e industria.</h1>
            <p>
              Una portada simple, clara y directa para mostrar productos,
              explicar el material y llevar la consulta comercial al punto mas
              importante: contacto rapido.
            </p>
            <div className={styles.actions}>
              <Link href="/productos" className="button-primary">
                Ver productos
              </Link>
              <Link href="/contacto" className="button-secondary">
                Solicitar presupuesto
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualPanel}>
              <span className={styles.visualLabel}>EPS expandido</span>
              <strong>Liviano. resistente. versatil.</strong>
              <p>
                Base inspirada en sitios del rubro, con una lectura mas limpia,
                mejor ritmo visual y foco en conversion.
              </p>
            </div>

            <div className={styles.statGrid}>
              {stats.map((stat) => (
                <article key={stat.label} className="card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className={`${styles.sectionTop} ${styles.sectionSplit}`}>
            <div className="section-heading">
              <span className="eyebrow">Productos</span>
              <h2>Lineas principales para una navegacion rapida.</h2>
              <p>
                Como en la referencia, el acceso al catalogo aparece temprano,
                pero con tarjetas mas sobrias y una jerarquia visual mas clara.
              </p>
            </div>
            <Link href="/productos" className="button-secondary">
              Ir al catalogo completo
            </Link>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <article key={category.name} className={`${styles.categoryCard} card`}>
                <span>{category.name}</span>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.epsSection} section`}>
        <div className={`site-shell ${styles.epsGrid}`}>
          <div className={styles.epsCopy}>
            <span className="eyebrow">Que es el EPS</span>
            <h2>Un material liviano, aislante y funcional para multiples usos.</h2>
            <p>
              El poliestireno expandido se usa por su capacidad de aislacion,
              bajo peso y absorcion de impactos. Sirve tanto para proteger
              productos en traslado como para aplicaciones tecnicas y de obra.
            </p>
            <ul className={styles.benefitList}>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={`${styles.epsPanel} card`}>
            <div className={styles.epsImageFrame}>
              <Image
                src="/producto-planchas.svg"
                alt="Planchas de EPS"
                width={1200}
                height={800}
                sizes="(max-width: 960px) 100vw, 45vw"
              />
            </div>
            <div className={styles.epsNotes}>
              <article>
                <strong>Densidades y espesores</strong>
                <p>Formatos configurables segun necesidad tecnica o comercial.</p>
              </article>
              <article>
                <strong>Aplicaciones diversas</strong>
                <p>Construccion, embalaje, refrigeracion y piezas especiales.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <span className="eyebrow">Destacados</span>
            <h2>Productos para mostrar capacidad, variedad y trabajo a medida.</h2>
            <p>
              El home mantiene una seleccion corta del JSON para destacar lo mas
              importante sin saturar la portada.
            </p>
          </div>

          <div className={styles.productPreviewGrid}>
            {products.map((product) => (
              <article key={product.nombre} className={`${styles.previewCard} card`}>
                <Image
                  src={product.imagenes[0]}
                  alt={product.nombre}
                  width={1200}
                  height={800}
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
                <div>
                  <span>{product.categoria}</span>
                  <h3>{product.nombre}</h3>
                  <p>{product.descripcionCorta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`site-shell ${styles.ctaBand}`}>
          <div>
            <span className="eyebrow">Contacto directo</span>
            <h2>Atencion personalizada y cotizacion inmediata.</h2>
            <p>
              El sitio queda listo para captar consultas por WhatsApp hoy y
              sumar formulario o CMS mas adelante.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="button-primary">
              Hablar con Mourullo
            </Link>
            <Link href="/quienes-somos" className="button-secondary">
              Conocer la empresa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
