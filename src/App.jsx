import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PoliticalTheorists from './pages/PoliticalTheorists/PoliticalTheorists'
import GroupProject from './pages/GroupProject/GroupProject'
import VocalPrototype from './pages/VocalPrototype/VocalPrototype'

export default function App() {
  return (
    <Routes>
      <Route path="/"                    element={<Home />} />
      <Route path="/political-theorists" element={<PoliticalTheorists />} />
      <Route path="/group-project"       element={<GroupProject />} />
      <Route path="/vocal-prototype"     element={<VocalPrototype />} />
    </Routes>
  )
}
