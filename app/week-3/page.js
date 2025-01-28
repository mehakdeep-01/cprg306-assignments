import ItemList from "./item-list";

export default function Page() {
    return (

        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray--800 mb-4">Shopping List</h1>

            <ItemList />
        </main>
    );
}