import HearingIcon from '@mui/icons-material/Hearing'
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import { govColors } from '../../theme'

const navItems = [
  { label: 'O que é', href: '#sobre' },
  { label: 'A jornada 1-3-6', href: '#jornada' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Quem usa', href: '#perfis' },
  { label: 'Instituições', href: '#parceiros' },
]

/** Cabeçalho fixo com identidade da plataforma e navegação por âncoras. */
export default function SiteHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: '#fff', color: 'text.primary', borderBottom: '1px solid #E6E8EE' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: 'primary.main',
                display: 'grid',
                placeItems: 'center',
                color: '#fff',
              }}
            >
              <HearingIcon />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                Plataforma TAN
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Acompanhamento auditivo do recém-nascido
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                size="small"
                sx={{ color: 'text.primary', fontWeight: 600, px: 1.5 }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="#contato"
              disableElevation
              sx={{
                ml: 1.5,
                bgcolor: govColors.yellow,
                color: govColors.blueDarker,
                '&:hover': { bgcolor: '#E6B800' },
              }}
            >
              Acessar a plataforma
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
