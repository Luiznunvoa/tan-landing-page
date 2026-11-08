import ChecklistIcon from '@mui/icons-material/Checklist'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

interface Feature {
  icon: ReactNode
  title: string
  text: string
}

const features: Feature[] = [
  {
    icon: <TimelineOutlinedIcon />,
    title: 'Linha do tempo única',
    text: 'Todos os eventos — triagem, exames, laudos e intervenções — em uma visão cronológica por criança, com exportação no formato da Caderneta da Criança.',
  },
  {
    icon: <NotificationsActiveOutlinedIcon />,
    title: 'Alertas de prazo',
    text: 'Motor de prazos com três níveis de severidade (próximo, vencido, perdido) aplicado a todas as etapas, do reteste à intervenção.',
  },
  {
    icon: <PersonSearchOutlinedIcon />,
    title: 'Busca ativa',
    text: 'Crianças que faltam a etapas agendadas entram automaticamente na lista de busca ativa da Atenção Primária e do serviço responsável.',
  },
  {
    icon: <ChecklistIcon />,
    title: 'Checklist etiológico',
    text: 'A partir do diagnóstico, a plataforma gera a lista de exames de investigação pendentes — e mostra o que está concluído, pendente ou não indicado.',
  },
  {
    icon: <FactCheckOutlinedIcon />,
    title: 'Laudos consolidados',
    text: 'Imagem, exames complementares e genética em um só lugar, com anexo em PDF e alerta para exames feitos há mais de 15 dias sem laudo.',
  },
  {
    icon: <ShieldOutlinedIcon />,
    title: 'Acesso por perfil e LGPD',
    text: 'Cada perfil enxerga apenas o necessário. Dados genéticos restritos, trilha de auditoria imutável e conformidade com a LGPD.',
  },
]

/** Grade de funcionalidades principais da plataforma. */
export default function FeaturesSection() {
  return (
    <Box component="section" id="funcionalidades" sx={{ py: { xs: 8, md: 12 }, bgcolor: govColors.surface }}>
      <Container maxWidth="lg">
        <SectionHeading
          align="center"
          overline="Funcionalidades"
          title="Ferramentas para que nenhum prazo passe despercebido"
        />
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {features.map((f, i) => (
            <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal delay={(i % 3) * 120}>
                <Stack
                  spacing={2}
                  sx={{
                    bgcolor: '#fff',
                    border: '1px solid #E6E8EE',
                    borderRadius: 2,
                    p: 3.5,
                    height: '100%',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 40px rgba(7,29,65,0.10)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      bgcolor: govColors.blueWash,
                      color: 'primary.main',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    {f.icon}
                  </Box>
                  <Typography variant="h6">{f.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {f.text}
                  </Typography>
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
