import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import VerifiedIcon from '@mui/icons-material/Verified'
import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'

// Foto gratuita (Unsplash) de mãe com bebê. Substitua por um arquivo local
// em src/assets se preferir servir a imagem do próprio projeto.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1574706472779-9b257f717490?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

/** Seção de abertura: proposta de valor e imagem institucional. */
export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(160deg, ${govColors.blueDarker} 0%, ${govColors.blueDark} 55%, ${govColors.blue} 100%)`,
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal direction="left">
              <Stack spacing={3}>
                <Chip
                  icon={<VerifiedIcon sx={{ fill: govColors.blueDarker }} />}
                  label="Triagem Auditiva Neonatal no SUS"
                  sx={{
                    alignSelf: 'flex-start',
                    bgcolor: govColors.yellow,
                    color: govColors.blueDarker,
                    fontWeight: 700,
                  }}
                />
                <Typography variant="h2" component="h1">
                  Nenhuma criança perdida entre a triagem e o cuidado
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)' }}>
                  Uma linha do tempo única acompanha a jornada auditiva do recém-nascido — da
                  maternidade ao diagnóstico e à intervenção — compartilhada entre todos os
                  serviços de saúde envolvidos.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    href="#sobre"
                    disableElevation
                    sx={{
                      bgcolor: govColors.yellow,
                      color: govColors.blueDarker,
                      '&:hover': { bgcolor: '#E6B800' },
                    }}
                  >
                    Conheça a plataforma
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#jornada"
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.5)',
                      '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                    }}
                  >
                    Entenda o modelo 1-3-6
                  </Button>
                </Stack>
              </Stack>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal direction="right" delay={150}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={HERO_IMAGE}
                  alt="Mãe segurando seu bebê recém-nascido no colo"
                  loading="eager"
                  sx={{
                    width: '100%',
                    height: { xs: 300, md: 420 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    display: 'block',
                    boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    left: { xs: 12, md: -24 },
                    bgcolor: '#fff',
                    color: 'text.primary',
                    borderRadius: 2,
                    px: 3,
                    py: 2,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                    borderLeft: `6px solid ${govColors.yellow}`,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Modelo 1-3-6
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Triagem até 1 mês · Diagnóstico até 3 · Intervenção até 6
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
