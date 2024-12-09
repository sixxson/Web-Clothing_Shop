
import PropTypes from 'prop-types'

export default function InputForm({ label, type, name, placeholder, onChange}) {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium  text-gray-900">{label}</label>
            <input type={type} name={name} id={name}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg  focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-400 text-gray-900"
                placeholder={placeholder}  />
        </div>
    )
}

InputForm.propTypes = {
    required: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
