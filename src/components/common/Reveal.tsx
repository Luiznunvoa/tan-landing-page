import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface RevealProps {
  children: ReactNode
  /** Atraso em ms para escalonar entradas de itens vizinhos. */
  delay?: number
  /** Direção do deslocamento inicial. */
  direction?: 'up' | 'left' | 'right' | 'none'
}

const offsets = {
  up: 'translateY(28px)',
  left: 'translateX(-28px)',
  right: 'translateX(28px)',
  none: 'none',
} as const

/** Envolve conteúdo com animação de fade/slide quando entra na tela. */
export default function Reveal({ children, delay = 0, direction = 'up' }: RevealProps) {
  const { ref, inView } = useInView()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : offsets[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          opacity: 1,
          transform: 'none',
        },
      }}
    >
      {children}
    </Box>
  )
}
