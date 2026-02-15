import { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!ingredients) {
            newErrors.ingredients = 'Ingredients are required';
        } else if (ingredients.split('\n').length < 2) {
            newErrors.ingredients = 'Please include at least two ingredients';
        }
        if (!steps) newErrors.steps = 'Preparation steps are required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        console.log({ title, ingredients, steps });
        alert('Recipe submitted successfully!');
        setTitle('');
        setIngredients('');
        setSteps('');
    };

    return (
        <div className="container mx-auto p-4 max-w-lg">
            <h1 className="text-3xl font-bold text-center mb-8">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Recipe Title
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
                        id="title"
                        type="text"
                        placeholder="Enter recipe title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients (separate by newline)
                    </label>
                    <textarea
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
                        id="ingredients"
                        placeholder="Ingredient 1&#10;Ingredient 2"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="4"
                    />
                    {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
                        Preparation Steps
                    </label>
                    <textarea
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' : ''}`}
                        id="steps"
                        placeholder="Step 1&#10;Step 2"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="4"
                    />
                    {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto transition-colors duration-300"
                        type="submit"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
