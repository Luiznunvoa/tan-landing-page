import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

const roles = [
  { name: 'Maternidade', text: 'Cadastra o recém-nascido e registra o teste antes da alta.' },
  { name: 'Atenção Primária (APS)', text: 'Acompanha o território e conduz a busca ativa de faltosos.' },
  { name: 'Serviço Especializado / CER', text: 'Realiza diagnóstico, reabilitação e plano terapêutico.' },
  { name: 'Geneticista', text: 'Conduz a investigação genética em módulo de acesso restrito.' },
  { name: 'Radiologia', text: 'Registra laudos de imagem do exame solicitado.' },
  { name: 'Regulação', text: 'Gerencia a fila de encaminhamentos, sem acesso a dados genéticos.' },
  { name: 'Família', text: 'Acompanha a jornada do próprio filho em linguagem simples.' },
  { name: 'Gestor', text: 'Configura serviços e monitora indicadores do programa.' },
]

// Foto gratuita (Unsplash). Substitua por um arquivo local em src/assets se preferir.
const ROLES_IMAGE =
  'https://images.unsplash.com/photo-1590611936760-eeb9bc598548?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

/** Perfis de acesso da plataforma. */
export default function RolesSection() {
  return (
    <Box component="section" id="perfis" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal direction="left">
              <Box
                component="img"
                src={ROLES_IMAGE}
                alt="Mãe sorrindo com bebê no colo"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 480 },
                  objectFit: 'cover',
                  borderRadius: 3,
                  display: 'block',
                  border: `1px solid #E6E8EE`,
                }}
              />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <SectionHeading
                overline="Quem usa"
                title="Oito perfis, uma única história clínica"
                description="O controle de acesso por papel garante que cada serviço veja exatamente o que precisa — nem mais, nem menos."
              />
              <Grid container spacing={2}>
                {roles.map((r, i) => (
                  <Grid key={r.name} size={{ xs: 12, sm: 6 }}>
                    <Reveal delay={(i % 4) * 80}>
                      <Stack
                        spacing={1}
                        sx={{
                          border: '1px solid #E6E8EE',
                          borderRadius: 2,
                          p: 2.5,
                          height: '100%',
                        }}
                      >
                        <Chip
                          label={r.name}
                          size="small"
                          sx={{
                            alignSelf: 'flex-start',
                            bgcolor: govColors.blueWash,
                            color: govColors.blueDark,
                            fontWeight: 700,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {r.text}
                        </Typography>
                      </Stack>
                    </Reveal>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
