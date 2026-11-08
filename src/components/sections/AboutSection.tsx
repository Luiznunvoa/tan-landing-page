import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

// Foto gratuita (Unsplash). Substitua por um arquivo local em src/assets se preferir.
const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1574706472790-f24ebe0510ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

const problems = [
  'Famílias perdem o reteste e as consultas de acompanhamento',
  'Laudos de exames se perdem entre serviços diferentes',
  'Prazos críticos passam sem nenhum alerta',
  'Cada serviço enxerga apenas um pedaço da história da criança',
]

/** Seção "O que é": contexto do problema e proposta da plataforma. */
export default function AboutSection() {
  return (
    <Box component="section" id="sobre" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <SectionHeading
                overline="O que é a plataforma"
                title="Um registro único para toda a jornada auditiva da criança"
                description="Hoje, crianças que falham na triagem auditiva neonatal transitam por serviços desconectados — maternidade, atenção primária, serviço especializado, genética, radiologia e regulação. A plataforma reúne tudo em um só prontuário longitudinal."
              />
              <Reveal delay={150}>
                <Stack spacing={1.5}>
                  {problems.map((p) => (
                    <Stack key={p} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: govColors.yellow,
                          mt: '7px',
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {p}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Reveal>
              <Reveal delay={250}>
                <Box
                  sx={{
                    borderLeft: `4px solid ${govColors.blue}`,
                    bgcolor: govColors.blueWash,
                    borderRadius: 1,
                    px: 3,
                    py: 2,
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 600, color: govColors.blueDarker }}>
                    Uma criança → um registro → protocolo automático por risco → alertas de prazo →
                    busca ativa → checklist etiológico.
                  </Typography>
                </Box>
              </Reveal>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal direction="right">
              <Box sx={{ position: 'relative', pl: { md: 3 }, pb: 3 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: { xs: '24px 0 0 24px', md: '32px 0 0 56px' },
                    borderRadius: 3,
                    bgcolor: govColors.blueWash,
                  }}
                />
                <Box
                  component="img"
                  src={ABOUT_IMAGE}
                  alt="Mãe com bebê no colo durante consulta de saúde"
                  loading="lazy"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 320, md: 440 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    display: 'block',
                  }}
                />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
