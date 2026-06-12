import { motion } from 'framer-motion'

const easing = [0.16, 1, 0.3, 1]

/**
 * Reveal — envoltura de entrada en scroll, deliberada y sobria.
 * Respeta prefers-reduced-motion vía Framer Motion (useReducedMotion interno).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: easing, delay }}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 20 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
      }}
    >
      {children}
    </motion.div>
  )
}
