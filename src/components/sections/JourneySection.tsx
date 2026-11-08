import { Box, Container, Stack, Typography } from '@mui/material'
import { govColors } from '../../theme'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

const steps = [
  {
    label: 'Nascimento e cadastro',
    place: 'Maternidade',
    text: 'Registro do recém-nascido com dados de nascimento e indicadores de risco (IRDA), que definem automaticamente o protocolo de triagem.',
  },
  {
    label: 'Teste e reteste',
    place: 'Maternidade · APS',
    text: 'Resultado por orelha e por procedimento, com agendamento obrigatório do reteste em caso de falha — e alertas até o dia 15.',
  },
  {
    label: 'Diagnóstico audiológico',
    place: 'Serviço Especializado',
    text: 'PEATE, emissões otoacústicas, imitanciometria e audiometria comportamental, com conclusão estruturada até o 3º mês.',
  },
  {
    label: 'Investigação etiológica',
    place: 'Genética · Radiologia',
    text: 'Exames de imagem, sorologias e avaliação genética consolidados em um checklist gerado automaticamente a partir do diagnóstico.',
  },
  {
    label: 'Intervenção e reabilitação',
    place: 'CER · Rede de cuidado',
    text: 'Terapia fonoaudiológica, AASI ou implante coclear e plano terapêutico singular compartilhado com toda a equipe — até o 6º mês.',
  },
]

/** Linha do tempo vertical da jornada da criança no sistema. */
export default function JourneySection() {
  return (
    <Box
      component="section"
      id="jornada"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${govColors.blueDarker} 0%, ${govColors.blueDark} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          light
          overline="A jornada"
          title="Do nascimento à intervenção, sem perder nenhuma etapa"
          description="Cada etapa registrada vira um evento na linha do tempo da criança, visível a todos os serviços autorizados, com prazos monitorados automaticamente."
        />

        <Stack sx={{ mt: 6, position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 19, md: 27 },
              top: 8,
              bottom: 8,
              width: 2,
              bgcolor: 'rgba(255,255,255,0.25)',
            }}
          />
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 100}>
              <Stack direction="row" spacing={{ xs: 2.5, md: 4 }} sx={{ pb: i < steps.length - 1 ? 5 : 0 }}>
                <Box
                  sx={{
                    width: { xs: 40, md: 56 },
                    height: { xs: 40, md: 56 },
                    borderRadius: '50%',
                    bgcolor: govColors.yellow,
                    color: govColors.blueDarker,
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 800,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    flexShrink: 0,
                    zIndex: 1,
                    fontFamily: 'Raleway',
                  }}
                >
                  {i + 1}
                </Box>
                <Box sx={{ pt: { md: 1 } }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 0, sm: 1.5 }}
                    sx={{ alignItems: { sm: 'baseline' } }}
                  >
                    <Typography variant="h6" sx={{ color: '#fff' }}>
                      {step.label}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: govColors.yellow, fontWeight: 700, letterSpacing: '0.06em' }}
                    >
                      {step.place}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, mt: 0.5 }}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </Stack>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
