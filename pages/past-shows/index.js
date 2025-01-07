
import ProductCard from "./product-card/ProductCard";
import styles from "./style.module.css";
import image1 from "../../public/image11.jpg";
import image2 from "../../public/image12.jpg";
import image3 from "../../public/image13.jpg";
import image4 from "../../public/image14.jpg";
import image5 from "../../public/image15.jpg";
import image6 from "../../public/image16.jpg";
import image7 from "../../public/image17.jpg";
import image8 from "../../public/image18.jpg";
import image9 from "../../public/image19.jpg";
import image10 from "../../public/image20.jpg";
import Banner from "./past-shows-banner/Banner";

const product = [
  {
    "title": "seyi vibez in sheffield",
    "img":image1
  },
  {
    "title": "Mayorkun in birmingham",
    "img":image2
  },
  {
    "title": "Tekno at the o2",
    "img":image3
  },
  {
    "title": "test",
    "img":image4
  },
  {
    "title": "test",
    "img":image5
  },
  {
    "title": "test",
    "img":image6
  },
  {
    "title": "test",
    "img":image7
  },
  {
    "title": "test",
    "img":image8
  },
  {
    "title": "test",
    "img":image9
  },
  {
    "title": "test",
    "img":image10
  },
  
];

export default function Page() {
  return (
    <div className={styles.container}>
      {/* <h1>Past Shows</h1> */}

      <Banner />
      

      <div className={styles.portfolio_list}>
        {product.map((item, index) => (
          <ProductCard key={index} data={item?.img}  />
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          visit our{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/baroninc.events/"
            className="footer-link"
          >
            INSTAGRAM
          </a>{" "}
          page so we can bring your dream style(s) to reality
        </p>
      </div>
    </div>
  );
}
