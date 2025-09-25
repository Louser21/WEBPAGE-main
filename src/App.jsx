import { Routes, Route } from 'react-router-dom'
import Round4 from './pages/Rounds'
import NextPage from './pages/NextPage'


export default function App(){
return (
<Routes>
<Route path="/" element={<Round4 />} />
<Route path="/next" element={<NextPage />} />
</Routes>
)
}