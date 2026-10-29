import Hero from '../components/Hero'
import Activity from '../components/Activity'
import Updates from '../components/Updates'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import { useGithub } from '../hooks/useGithub'

export default function Home() {
  const github = useGithub()

  return (
    <>
      <Hero github={github} />
      <Activity github={github} />
      <Updates limit={3} />
      <Experience />
      <Skills />
      <Education />
    </>
  )
}
