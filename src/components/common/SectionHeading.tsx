import { Box, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from './Reveal'

interface SectionHeadingProps {
  overline: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

/** Cabeçalho padrão de seção: sobretítulo, barra amarela, título e descrição. */
export default function SectionHeading({
  overline,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal>
      <Stack
        spacing={2}
        sx={{ maxWidth: 760, mx: centered ? 'auto' : 0, textAlign: centered ? 'center' : 'left' }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ alignItems: 'center', justifyContent: centered ? 'center' : 'flex-start' }}
        >
          <Box sx={{ width: 40, height: 4, bgcolor: govColors.yellow, borderRadius: 2 }} />
          <Typography
            variant="overline"
            sx={{
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: light ? govColors.blueWash : 'primary.main',
            }}
          >
            {overline}
          </Typography>
        </Stack>
        <Typography variant="h3" component="h2" sx={{ color: light ? '#fff' : 'text.primary' }}>
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            sx={{ color: light ? 'rgba(255,255,255,0.8)' : 'text.secondary', fontSize: '1.08rem' }}
          >
            {description}
          </Typography>
        )}
      </Stack>
    </Reveal>
  )
}
