import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

// Substitua `logo: null` pelo caminho da imagem (ex.: import logoUff from '../../assets/uff.svg')
// para exibir a logomarca real de cada instituição.
const partners: { name: string; logo: string | null }[] = [
  { name: 'UFF', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_UFF_%28blue%29.svg/3840px-Logo_UFF_%28blue%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
  { name: 'Fiocruz', logo: 'https://media.tghn.org/medialibrary/2024/06/marca_Fiocruz_horizontal.png' },
  { name: 'SUS', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Logo_SUS.svg/1280px-Logo_SUS.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
  { name: 'Governo Federal', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Brazilian_government_logo_%282023-2025%29.svg/960px-Brazilian_government_logo_%282023-2025%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230114200555' },
]

/** Faixa institucional com espaços reservados para as logos dos parceiros. */
export default function PartnersSection() {
  return (
    <Box component="section" id="parceiros" sx={{ py: { xs: 8, md: 10 }, bgcolor: govColors.surface }}>
      <Container maxWidth="lg">
        <SectionHeading
          align="center"
          overline="Instituições"
          title="Uma iniciativa construída com a saúde pública"
          description="Projeto desenvolvido em parceria com instituições de ensino, pesquisa e o Sistema Único de Saúde."
        />
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: 'center' }}>
          {partners.map((p, i) => (
            <Grid key={p.name} size={{ xs: 6, sm: 4, md: 2.4 }}>
              <Reveal delay={i * 90}>
                <Stack
                  spacing={1.5}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#fff',
                    border: '1px dashed #C3C9D6',
                    borderRadius: 2,
                    height: 128,
                    px: 2,
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: govColors.blue },
                  }}
                >
                  {p.logo ? (
                    <Box
                      component="img"
                      src={p.logo}
                      alt={`Logomarca ${p.name}`}
                      sx={{ maxHeight: 56, maxWidth: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <>
                      <AccountBalanceOutlinedIcon sx={{ color: '#9AA3B5' }} />
                      <Typography
                        variant="caption"
                        align="center"
                        sx={{ color: 'text.secondary', fontWeight: 700 }}
                      >
                        {p.name}
                      </Typography>
                    </>
                  )}
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
