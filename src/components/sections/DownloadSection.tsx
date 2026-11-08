import AppleIcon from '@mui/icons-material/Apple'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import { Box, ButtonBase, Container, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'

const storeLinks = [
  {
    label: 'App Store',
    eyebrow: 'Baixe na',
    href: 'https://apps.apple.com/br/',
    icon: <AppleIcon sx={{ fontSize: 34 }} />,
  },
  {
    label: 'Google Play',
    eyebrow: 'Disponível no',
    href: 'https://play.google.com/store',
    icon: <PlayArrowRoundedIcon sx={{ fontSize: 38, color: '#34A853' }} />,
  },
]

/** Faixa de download com links para as lojas móveis oficiais. */
export default function DownloadSection() {
  return (
    <Box
      component="section"
      id="download"
      sx={{
        py: { xs: 7, md: 9 },
        bgcolor: govColors.blueDarker,
        color: '#fff',
        borderTop: `5px solid ${govColors.yellow}`,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            sx={{ alignItems: { md: 'center' }, justifyContent: 'space-between' }}
          >
            <Box sx={{ maxWidth: 560 }}>
              <Typography
                variant="overline"
                sx={{ color: govColors.yellow, fontWeight: 700, letterSpacing: '0.12em' }}
              >
                Sua instituição na Plataforma TAN
              </Typography>
              <Typography variant="h3" component="h2" sx={{ mt: 1 }}>
                Baixe o app e cadastre sua instituição
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: 'rgba(255,255,255,0.78)' }}>
                Faça parte da rede de cuidado e acompanhe cada etapa da saúde auditiva infantil em
                um só lugar.
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              {storeLinks.map((store) => (
                <ButtonBase
                  key={store.label}
                  component="a"
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${store.eyebrow} ${store.label}`}
                  sx={{
                    minWidth: 210,
                    minHeight: 68,
                    px: 2,
                    py: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 1.5,
                    color: '#fff',
                    bgcolor: '#101114',
                    border: '1px solid rgba(255,255,255,0.4)',
                    borderRadius: 1,
                    textAlign: 'left',
                    transition: 'background-color 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                      bgcolor: '#24262B',
                      borderColor: '#fff',
                    },
                    '&:focus-visible': {
                      outline: `3px solid ${govColors.yellow}`,
                      outlineOffset: 3,
                    },
                  }}
                >
                  {store.icon}
                  <Box>
                    <Typography component="span" sx={{ display: 'block', fontSize: 11, lineHeight: 1.2 }}>
                      {store.eyebrow}
                    </Typography>
                    <Typography component="span" sx={{ display: 'block', fontSize: 19, fontWeight: 700 }}>
                      {store.label}
                    </Typography>
                  </Box>
                </ButtonBase>
              ))}
            </Stack>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}