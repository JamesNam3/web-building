import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import sections from './components/sections'
import { PageHeader } from './components/ui'
import './styles/layout.css'

export default function App() {
  return (
    <>
      <PageHeader title="UI Test React + MUI UI 요소 모음" />
      <main className="app-main">
        <Container maxWidth="md">
          <Stack spacing={4}>
            {sections.map(({ id, Component }) => (
              <Component key={id} />
            ))}
          </Stack>
        </Container>
      </main>
    </>
  )
}