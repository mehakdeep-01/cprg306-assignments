
export default function Item(props) {
    return (
        <li className="bg-pink-200 p-4 m-4">
            <h2 className="font-bold text-blue-900"> {props.name}</h2>
            <p className="text-sm text-gray-600">
                <span className="font-bold">Quantity:</span>{props.quantity}</p>
            <p className="text-sm text-gray-600">
                <span className="font-bold">Category:</span> {props.category}</p>
        </li>
    );
}

