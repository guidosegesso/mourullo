import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/products";
import styles from "./productos.module.css";

const categories = getCategories();

export default function ProductosPage() {
  return (
    <section className="section">
      <div className="site-shell">
        <div className="section-heading">
          <span className="eyebrow">Productos</span>
          <h1 className={styles.title}>Explora el catalogo por categoria.</h1>
          <p>
            En lugar de mostrar todo mezclado, el acceso principal del catalogo
            se organiza por categorias. Cada una lleva a su propio listado de
            productos y despues a la ficha individual.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/productos/categoria/${category.slug}`}
              className={`${styles.categoryCard} card`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={1200}
                height={800}
                sizes="(max-width: 960px) 100vw, 33vw"
              />
              <div className={styles.categoryContent}>
                <span>{category.productCount} productos</span>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <strong>Ver categoria</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
