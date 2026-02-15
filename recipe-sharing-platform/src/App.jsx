import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='text-center p-8'>
            <h1 className='text-blue-500 text-3xl font-bold underline mb-4'>
                Recipe Sharing Platform
            </h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    count is {count}
                </button>
                <p className="mt-4">
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    )
}

export default App
