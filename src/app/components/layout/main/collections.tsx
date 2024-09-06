import { collectionsData } from "@/app/constants/collection";
import Image from "next/image";
import Link from "next/link";

const Collections = () => {
  return (
    <section className="collections">
      <div className="container">
        <div className="collections-content">
          <h1 className="collections-title">Newest Collection Available</h1>

          <div className="collections-cards">
            {collectionsData.map((c) => (
              <Link
                href={`/products/${c.title?.toLowerCase()}`}
                className="collections-card"
                key={c.id}
              >
                <Image
                  src={c.image!}
                  width={120}
                  height={78}
                  alt={c.title || "Default title"}
                />
                <h2 className="collections-name">{c.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
