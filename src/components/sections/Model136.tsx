import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'

const milestones = [
  {
    number: '1',
    unit: 'mês',
    title: 'Triagem',
    text: 'Todo recém-nascido deve realizar o teste da orelhinha até o primeiro mês de vida.',
  },
  {
    number: '3',
    unit: 'meses',
    title: 'Diagnóstico',
    text: 'Crianças que falham na triagem precisam de diagnóstico audiológico completo até os 3 meses.',
  },
  {
    number: '6',
    unit: 'meses',
    title: 'Intervenção',
    text: 'Início da intervenção — terapia, AASI ou implante — dentro da janela crítica de desenvolvimento.',
  },
]

/** Faixa de destaque com os três marcos do modelo 1-3-6. */
export default function Model136() {
  return (
    <Box component="section" sx={{ bgcolor: govColors.surface, py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {milestones.map((m, i) => (
            <Grid key={m.number} size={{ xs: 12, md: 4 }}>
              <Reveal delay={i * 120}>
                <Stack
                  direction="row"
                  spacing={2.5}
                  sx={{
                    bgcolor: '#fff',
                    borderRadius: 2,
                    p: 3,
                    height: '100%',
                    border: '1px solid #E6E8EE',
                    borderTop: `4px solid ${govColors.yellow}`,
                  }}
                >
                  <Stack sx={{ alignItems: 'center', minWidth: 64 }}>
                    <Typography
                      variant="h3"
                      component="span"
                      sx={{ color: 'primary.main', fontWeight: 800, lineHeight: 1 }}
                    >
                      {m.number}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                      {m.unit}
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {m.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {m.text}
                    </Typography>
                  </Box>
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
