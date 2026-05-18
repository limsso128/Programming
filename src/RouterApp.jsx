import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import CounterApp from './CounterApp'
import TodoListApp from './TodoListApp'

function LinkButtonPageApp() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>App 목록</h1>
            <ul>
                <li><Link to="/counterapp">🌐CounterApp</Link></li>
                <li><Link to="/todolistapp">📝TodoListApp</Link></li>
                <li><button
                    style={{width: '100px', height: '100px', fontSize: '1.1rem'}}
                    onClick={() => { navigate('/counterapp'); }}
                    >🌐CounterApp</button></li>
                <li><button
                style={{width: '200px', height: '200px', fontSize: '2rem'}}
                onClick={() => { navigate('/todolistapp'); }}
                >📝TodoListApp</button></li>
            </ul>
        </div>
    )
}


export default function RouterApp() {
    return (
        <BrowserRouter>
            {/* 홈으로 돌아가는 버튼 (어느 경로에서든 보이도록 Routes 밖에 배치) */}
            <Link to="/">
                <button
                    style={{
                        position: 'fixed',
                        left: '10px',
                        bottom: '10px',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        backgroundColor: '#eee',
                        border: 'none',
                        padding: '6px',
                    }}
                >🏠Home</button>
            </Link>

            <Routes>
                <Route path="/" element={<LinkButtonPageApp />} />
                <Route path="/counterapp" element={<CounterApp />} />
                <Route path="/todolistapp" element={<TodoListApp />} />
            </Routes>
        </BrowserRouter>
    )
}