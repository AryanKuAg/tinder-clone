import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import { Swipe } from '@mui/icons-material'

function App () {
    return <div className="app">
        {/* Header */}
        <Header />
        <TinderCards />
        {/* TinderCards */}
        <SwipeButtons />
        {/* SwipeButtons */}
    </div>
}

export default App