import { getDefaultListData } from "./actions";
import ListCard from "./list-card";
import { auth } from "@/auth";

export default async function ListsPage() {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
        return <div>Please log in to view your lists.</div>;
    }
    const lists = await getDefaultListData(userId);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Lists</h1>
            {/* List content goes here */}
            {/* Master list */}

            {/* Other two most recently visited lists */}
            {lists.map((list) => (
                <div key={list.id} className="mb-4 p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">{list.title}</h2>
                    <ul className="list-disc list-inside">
                        {list.listItems.map((item) => (
                            <li key={item.id}>{item.content}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <ListCard />
        </div>
    );
}
