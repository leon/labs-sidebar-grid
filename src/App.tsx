import { useRef, useState } from 'react'
import { Bar } from './Bar'
import { InfoPanel } from './InfoPanel'
import { SidePanel } from './SidePanel'

function App() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false)
  const [infoPanelOpen, setInfoPanelOpen] = useState(false)
  return (
    <div className="min-h-screen-dvh grid grid-cols-[minmax(0,_min-content)_1fr_minmax(0,_min-content)] place-content-stretch">
      <div className="w-16 bg-green-50">menu</div>

      <div className="grid place-content-center">
        <h1 className="text-8xl">Hello World</h1>
      </div>

      <SidePanel
        className="col-start-3 row-start-1 justify-self-end"
        open={sidePanelOpen}
        openInfo={() => setInfoPanelOpen(true)}
      />
      <InfoPanel
        className="col-start-3 row-start-1 justify-self-end"
        open={infoPanelOpen}
        close={() => setInfoPanelOpen(false)}
      />

      <Bar
        toggleOpen={(open) => {
          setSidePanelOpen(open)
          if (!open) {
            setInfoPanelOpen(false)
          }
        }}
      />
    </div>
  )
}

export default App
