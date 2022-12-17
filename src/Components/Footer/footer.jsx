import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer
        class="text-center text-white"
        style={{ backgroundColor: "#F4623A" }}
      >
        <div class="container">
         
          <hr class="my-5" />

          <section class="mb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>

          {/* <section class="text-center mb-5">
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </section> */}
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright :<Link to="/" onClick={scrollToTop} class=" mx-3 text-white">FitTracker.com</Link>
        </div>
      </footer>
    </div>
  );
}
