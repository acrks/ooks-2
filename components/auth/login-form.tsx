export default function LoginForm() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Sign In</h1>
            <form className="flex flex-col space-y-4 w-64">
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Sign In
                </button>
            </form>
        </>
    );
}
