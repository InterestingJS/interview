import { BrowserRouter as Router, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import './global.css'
import App from './App'
import { ExerciseAlgo } from './4_exercise_algo'
import { ExerciseLiveChart } from './3_exercise_livechart'
import { ExerciseTesting } from './2_exercise_testing'
import { ExerciseLayout } from './1_exercise_layout'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/exercises/1" element={<ExerciseLayout />} />
        <Route path="/exercises/2" element={<ExerciseTesting />} />
        <Route path="/exercises/3" element={<ExerciseLiveChart />} />
        <Route path="/exercises/4" element={<ExerciseAlgo />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
)
