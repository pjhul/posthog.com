import React from 'react'

const Question = ({ serverData }) => {
    return <div>ID: {serverData.id}</div>
}

export default Question

export async function getServerData({ params }) {
    return {
        props: {
            id: params.id,
        },
    }
}
