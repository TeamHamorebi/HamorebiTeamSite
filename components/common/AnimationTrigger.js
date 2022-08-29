import { useInView } from "react-intersection-observer";
import styles from "../../styles/components/common/_AnimationTrigger.module.scss";

export default function AnimationTrigger({
  children,
  rootMargin,
  triggerOnce = false,
  animation
}) {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`${styles.animationWrap} ${inView ? animation : undefined}`}
    >
      {children}
    </div>
  );
}
