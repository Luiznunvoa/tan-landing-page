import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'

/** Barra superior fina, no padrão das aplicações gov.br. */
export default function TopGovBar() {
  return (
    <Box sx={{ bgcolor: govColors.blueDarker, color: '#fff', py: 0.75 }}>
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: '0.04em' }}>
            Plataforma pública de saúde auditiva infantil
          </Typography>
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Link href="#sobre" color="inherit" underline="hover" variant="caption">
              Sobre
            </Link>
            <Link href="#jornada" color="inherit" underline="hover" variant="caption">
              Jornada
            </Link>
            <Link href="#parceiros" color="inherit" underline="hover" variant="caption">
              Instituições
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
