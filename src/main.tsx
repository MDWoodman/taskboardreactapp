import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import TaskBoardApp from './Taskboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskBoardApp></TaskBoardApp>
  </StrictMode>,
)
