import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/lib/products";
import styles from "../../productos.module.css";

type CategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({
    categorySlug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const products = getProductsByCategory(categorySlug);

  if (!category || products.length === 0) {
    notFound();
  }

  return (
    <section className="section">
      <div className="site-shell">
        <div className={styles.breadcrumbs}>
          <Link href="/productos">Productos</Link>
          <span>/</span>
          <span>{category.name}</span>
        </div>

        <div className="section-heading">
          <span className="eyebrow">Categoria</span>
          <h1 className={styles.title}>{category.name}</h1>
          <p>{category.description}</p>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/productos/${product.categorySlug}/${product.slug}`}
              className={`${styles.productCard} card`}
            >
              <Image
                src={product.imagenes[0]}
                alt={product.nombre}
                width={1200}
                height={800}
                sizes="(max-width: 960px) 100vw, 50vw"
              />
              <div className={styles.productContent}>
                <div className={styles.productMeta}>
                  <span>{product.categoria}</span>
                  <strong>{product.precio}</strong>
                </div>
                <h2>{product.nombre}</h2>
                <p>{product.descripcionCorta}</p>
                <strong className={styles.productLink}>Ver producto</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
