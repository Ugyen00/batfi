import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function index() {
  const phrase =
    "We envision a transformative journey towards a carbon-neutral, climate resilient, and high-performance food system by 2030. Our goal is to create a resilient ecosystem that effectively provides affordable, safe, and nutritious food for all while generating gainful employment and empowering women and children. At the heart of our vision lies the maximization of Gross National Happiness and the achievement of Sustainable Development Goals (SDGs) as well as aligning our efforts with Bhutan's Nationally Determined Contributions and Low Emissions Development Strategy (LEDS) for Food Security. We recognize the immense opportunities that lie ahead. The agriculture sector is a catalyst to reimagine and design a food system that prioritizes wellbeing and ecological stability. This endeavor requires bold investments, accelerated scientific innovations, and a renewed commitment to building a world free of hunger, strife, and poverty. Join us in shaping a future where Bhutan's food system not only sustains us economically but also nurtures our environment and enriches the lives of all Bhutanese.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Accelerating Agricultural Export Venture and Food Systems
          Transformation 15 - 19 May 2024.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>Our Purpose</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
