import rawProducts from "@/data/products.json";

export type Product = {
  nombre: string;
  descripcionCorta: string;
  descripcionExtendida: string;
  categoria: string;
  precio: string;
  imagenes: string[];
  variantes: string[];
};

export type ProductSummary = Product & {
  slug: string;
  categorySlug: string;
};

export type ProductCategory = {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
};

const products = rawProducts as Product[];

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProducts(): ProductSummary[] {
  return products.map((product) => ({
    ...product,
    slug: slugify(product.nombre),
    categorySlug: slugify(product.categoria),
  }));
}

export function getCategories(): ProductCategory[] {
  const grouped = new Map<string, ProductSummary[]>();

  for (const product of getProducts()) {
    const list = grouped.get(product.categorySlug) ?? [];
    list.push(product);
    grouped.set(product.categorySlug, list);
  }

  return Array.from(grouped.entries()).map(([, items]) => ({
    name: items[0].categoria,
    slug: items[0].categorySlug,
    description: buildCategoryDescription(items[0].categoria, items.length),
    image: items[0].imagenes[0],
    productCount: items.length,
  }));
}

export function getProductsByCategory(categorySlug: string) {
  return getProducts().filter((product) => product.categorySlug === categorySlug);
}

export function getCategoryBySlug(categorySlug: string) {
  return getCategories().find((category) => category.slug === categorySlug);
}

export function getProductBySlugs(categorySlug: string, productSlug: string) {
  return getProducts().find(
    (product) =>
      product.categorySlug === categorySlug && product.slug === productSlug,
  );
}

function buildCategoryDescription(category: string, count: number) {
  const base: Record<string, string> = {
    Embalaje:
      "Piezas protectoras, soportes y formatos para traslado seguro de productos.",
    Aislacion:
      "Planchas y soluciones EPS para rendimiento termico en obra y aplicaciones tecnicas.",
    Personalizado:
      "Desarrollos especiales segun plano, muestra o requerimiento productivo.",
  };

  const fallback = "Soluciones de telgopor con formatos y variantes segun necesidad.";
  const detail = count === 1 ? "1 producto cargado" : `${count} productos cargados`;

  return `${base[category] ?? fallback} ${detail}.`;
}
