'use client'
import React, { useEffect } from 'react';

const page = async ({ params }) => {
    const id = params.id;

    useEffect(() => {
        if (id) {
            console.log(id)
            const fetchData = async () => {
                const response = await fetch(`/api/update/${id}`, {
                    method: 'PUT',
                    cache: 'no-cache',
                    body: JSON.stringify({ product: 'hello' })
                })
                const result = await response.json();
            }
            fetchData();
        }

    }, [id])
    return (
        <div>
            This is success page
        </div>
    );
};

export default page;