import HearingIcon from '@mui/icons-material/Hearing'
import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'

/** Rodapé institucional com navegação e informações do projeto. */
export default function SiteFooter() {
  return (
    <Box component="footer" id="contato" sx={{ bgcolor: govColors.blueDarker, color: '#fff' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: govColors.yellow,
                    color: govColors.blueDarker,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <HearingIcon fontSize="small" />
                </Box>
                <Typography variant="h6">Plataforma TAN</Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 380 }}>
                Plataforma de acompanhamento da Triagem Auditiva Neonatal e da jornada de saúde
                auditiva da criança no Sistema Único de Saúde.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: govColors.yellow }}>
              Navegação
            </Typography>
            <Stack spacing={1}>
              {[
                ['O que é', '#sobre'],
                ['A jornada 1-3-6', '#jornada'],
                ['Funcionalidades', '#funcionalidades'],
                ['Quem usa', '#perfis'],
                ['Instituições', '#parceiros'],
              ].map(([label, href]) => (
                <Link key={href} href={href} color="inherit" underline="hover" variant="body2">
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: govColors.yellow }}>
              Compromissos
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Conformidade com a LGPD
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Dados hospedados em território nacional
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Acessibilidade WCAG 2.1 AA
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.15)' }} />
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)' }}>
          © {new Date().getFullYear()} Plataforma TAN — Projeto acadêmico UFF / Fiocruz. Fotos:
          Unsplash (uso gratuito).
        </Typography>
      </Container>
    </Box>
  )
}
