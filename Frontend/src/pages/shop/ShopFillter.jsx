import PropTypes from 'prop-types'
export default function ShopFillter({ filltersState, setFilltersState, fillter, clearFillters }) {

    return (
        <div className="space-y-5 flex-shrink-0 ">
            <div className="flex flex-col space-y-2">
                <h4 className="font-medium text-lg ">Category</h4>
                {
                    fillter.categories.map((category) => (
                        <label key={category} className="flex items-center gap-2 capitalize cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={filltersState.categories === category}
                                onChange={(e) => setFilltersState({ ...filltersState, categories: e.target.value })}
                            />
                            <span className='ml-1'>
                                {category}
                            </span>
                        </label>
                    ))
                }
            </div>
            <div className="flex flex-col space-y-2">
                <h4>
                    Color
                </h4>
                {
                    fillter.color.map((color) => (
                        <label key={color} className="flex items-center gap-2 capitalize cursor-pointer">
                            <input
                                type="radio"
                                name="color"
                                value={color}
                                checked={filltersState.color === color}
                                onChange={(e) => setFilltersState({ ...filltersState, color: e.target.value })}
                            />
                            {color.toLowerCase() !== 'all' ? (
                                <span
                                    className="w-5 h-5 rounded-md border border-gray-600"
                                    style={{ backgroundColor: color }}
                                ></span>
                            ) : (
                                <span className="ml-1">All</span>
                            )}

                        </label>
                    ))
                }
            </div>
            <div className="flex flex-col space-y-2">
                <h4>
                    Size
                </h4>
                {
                    fillter.size.map((size) => (
                        <label key={size} className="flex items-center gap-2 capitalize cursor-pointer">
                            <input
                                type="radio"
                                name="size"
                                value={size}
                                checked={filltersState.size === size}
                                onChange={(e) => setFilltersState({ ...filltersState, size: e.target.value })}
                            />
                            <span className='ml-1'>
                                {size}
                            </span>
                        </label>
                    ))
                }
            </div>
            <div className="flex flex-col space-y-2">
                <h4>
                    Price
                </h4>
                {
                    fillter.price.map((price) => (
                        <label key={price.label} // Ensure this is unique
                            className="flex items-center gap-2 capitalize cursor-pointer">
                            <input
                                type="radio"
                                name="price"
                                value={price.label}
                                checked={filltersState.price === price.label}
                                onChange={(e) => setFilltersState({ ...filltersState, price: e.target.value })}
                            />
                            <span className='ml-1'>
                                {price.label}
                            </span>
                        </label>
                    ))
                }
            </div>

            <button
                type="button"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all duration-300"
                onClick={clearFillters}
            >
                Clear Filter
            </button>
        </div>
    )
}


ShopFillter.propTypes = {
    filltersState: PropTypes.object.isRequired,
    setFilltersState: PropTypes.func.isRequired,
    fillter: PropTypes.shape({
        categories: PropTypes.array.isRequired,
        color: PropTypes.array.isRequired,
        size: PropTypes.array.isRequired,
        price: PropTypes.array.isRequired,
    }).isRequired,
    clearFillters: PropTypes.func.isRequired,
}

