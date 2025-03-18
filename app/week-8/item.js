export default function Item(props) {
    return (
        <li 
            className="bg-pink-200 p-4 m-4 cursor-pointer"
            onClick={() => props.onSelect(props.name)}
        >
            <h2 className="font-bold text-blue-900"> {props.name}</h2>
            <p className="text-gray-600">
                <span className="font-bold"> Buy {props.quantity} in {props.category}</span>
            </p>
        </li>
    );
}
