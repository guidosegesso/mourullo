import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlugs, getProducts } from "@/lib/products";
import styles from "../../productos.module.css";

type ProductDetailPageProps = {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
};

export function generateStaticParams() {
  return getProducts().map((product) => ({
    categorySlug: product.categorySlug,
    productSlug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { categorySlug, productSlug } = await params;
  const product = getProductBySlugs(categorySlug, productSlug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="site-shell">
        <div className={styles.breadcrumbs}>
          <Link href="/productos">Productos</Link>
          <span>/</span>
          <Link href={`/productos/categoria/${product.categorySlug}`}>{product.categoria}</Link>
          <span>/</span>
          <span>{product.nombre}</span>
        </div>

        <div className={styles.detailLayout}>
          <div className={styles.gallery}>
            {product.imagenes.map((image, index) => (
              <div key={`${product.slug}-${index}`} className={`${styles.galleryItem} card`}>
                <Image
                  src={image}
                  alt={`${product.nombre} ${index + 1}`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 960px) 100vw, 60vw"
                />
              </div>
            ))}
          </div>

          <article className={`${styles.detailCard} card`}>
            <span className={styles.detailCategory}>{product.categoria}</span>
            <h1>{product.nombre}</h1>
            <strong className={styles.detailPrice}>{product.precio}</strong>
            <p className={styles.detailShort}>{product.descripcionCorta}</p>
            <div className={styles.detailExtended}>
              <p>{product.descripcionExtendida}</p>
            </div>
            <div className={styles.variantBlock}>
              <h2>Variantes</h2>
              <ul>
                {product.variantes.map((variant) => (
                  <li key={variant}>{variant}</li>
                ))}
              </ul>
            </div>
            <Link href="/contacto" className="button-primary">
              Consultar este producto
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
