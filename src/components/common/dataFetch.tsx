'use client'

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"


export default function DataFetch() {
    const [data, setData] = useState<Todo[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        fetchTodo();
    }, []);

    async function fetchTodo() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/todos`);
            if (!response.ok)
                throw new Error('Network response was not ok');
            const res = await response.json();
            const responseData = res.todos;
            console.log(responseData);
            setData(responseData);
        }
        catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            {loading && <Skeleton className="w-full h-20" />}
            <div className="flex flex-wrap h-fit border-2 border-red-400">
            {data.length > 0 && data.map((todo) => {
                return (
                    <div key={todo.id} className="bg-white shadow-md rounded-lg p-4 m-4 max-w-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">Todo #{todo.id}</h2>
                            <span className="text-sm text-gray-500">User ID: {todo.userId}</span>
                        </div>


                        {todo.todo.length < 20 && <p className="mt-2 text-gray-600">{todo.todo}</p>}
                        {todo.todo.length > 20 && <p className="mt-2 text-gray-600">{todo.todo.slice(0, 17)}...</p>}


                        <div className="mt-4 flex items-center">
                            <span className="mr-2 text-sm text-gray-500">Status:</span>
                            {todo.completed ? (
                                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                                    Completed
                                </span>
                            ) : (
                                <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                                    Pending
                                </span>
                            )}
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}