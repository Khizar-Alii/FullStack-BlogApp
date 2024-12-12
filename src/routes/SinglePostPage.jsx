import React from "react";
import styles from "../Styles/SinglePostPage.module.css";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/comments";
const SinglePostPage = () => {
  return (
    <div className={styles.spcontainer}>
      {/* single post top */}
      <div className={styles.sptop}>
        <div className={styles.sptopleft}>
          <h1 className={styles.sptoplefttitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, tenetur?
          </h1>
          <div className={styles.spdetails}>
            <span className={styles.spdetailsitem}>Written By</span>
            <Link className={styles.spdetailslink}>Khizar Ali</Link>
            <span className={styles.spdetailsitem}>on</span>
            <Link className={styles.spdetailslink}>Web Desgin</Link>
            <span className={styles.spdetailsitem}>2 days ago</span>
          </div>
          <p className={styles.sptopleftdecs}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus placeat voluptatem harum nobis molestiae laboriosam
            provident, nisi expedita ipsam cum.
          </p>
        </div>
        <div className={styles.sptopright}>
          <Image src={"postImg.jpeg"} classname={styles.sptoprightimg} />
        </div>
      </div>
      {/* single post bottom */}
      <div className={styles.spbtm}>
        <div className={styles.spbtmleft}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
            id, ut voluptatum suscipit distinctio. Recusandae consequatur
            corrupti porro ratione officiis. Ad dicta eius, sit quidem, in ullam
            eum eos nesciunt porro ex vel id sed. Eaque eligendi sequi quisquam
            est voluptates in porro fugiat voluptatibus obcaecati perspiciatis
            odio aperiam laborum illum aspernatur, libero, iste dolore culpa
            nostrum adipisci voluptate eius voluptatum consectetur doloremque.
            Assumenda minima repellendus dignissimos explicabo facilis autem et,
            sint consequatur quod dolorem in quas laudantium fuga eius sed
            provident voluptas itaque? Deserunt quod modi recusandae aliquam
            esse aut eos voluptates consectetur quasi? Ad quibusdam debitis sed.
          </p>
        </div>
        <div className={styles.spbtmright}>
          <h4>Author</h4>
          <div className={styles.spbtmrightdetails}>
            <div>
              <Image
                src={"userImg.jpeg"}
                w={"50"}
                h={"50"}
                styles={{ borderRadius: "50%", backgroundSize: "cover" }}
              />
              <span>Khizar Ali.</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.spbtmrightsocial}>
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
          </div>
          <PostMenuActions />
          {/* Categories */}
          <div className={styles.categoriescontainer}>
            <h3>Categories</h3>
            <Link className={styles.categoryitem}>All</Link>
            <Link className={styles.categoryitem} to="/">
              Web Design
            </Link>
            <Link className={styles.categoryitem} to="/">
              Development
            </Link>
            <Link className={styles.categoryitem} to="/">
              Databases
            </Link>
            <Link className={styles.categoryitem} to="/">
              Search Engines
            </Link>
            <Link className={styles.categoryitem} to="/">
              Marketing
            </Link>
          </div>
          {/* Search box */}
          <h3>Search</h3>
          <Search />
        </div>
      </div>
      {/* comments section */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
