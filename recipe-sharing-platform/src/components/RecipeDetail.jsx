import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundRecipe = recipeData.find((item) => item.id === parseInt(id));
        if (foundRecipe) {
            setRecipe(foundRecipe);
        } else {
            // Fallback or redirect if not found
        }
    }, [id]);

    if (!recipe) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <button onClick={() => navigate('/')} className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow">
                Back to Home
            </button>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
                    <p className="text-gray-600 mb-6 text-lg">{recipe.summary}</p>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Ingredients</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            {recipe.ingredients && recipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Instructions</h2>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            {recipe.instructions && recipe.instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default RecipeDetail;
