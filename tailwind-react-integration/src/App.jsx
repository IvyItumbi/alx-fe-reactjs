import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Tailwind CSS + React
                </h1>
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Count is {count}
                </button>
                <p className="mt-4 text-gray-600">
                    Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    )
}

export default App
