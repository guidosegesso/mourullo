import Image from "next/image";
import styles from "./whatsapp-float.module.css";

const whatsappLink =
  "https://wa.me/5491100000000?text=Hola%2C%20tengo%20una%20consulta";

export function WhatsAppFloat() {
  return (
    <a
      className={styles.button}
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir chat de WhatsApp"
    >
      <span className={styles.icon}>
        <Image
          src="/whatsapp-icon.png"
          alt=""
          width={128}
          height={128}
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
