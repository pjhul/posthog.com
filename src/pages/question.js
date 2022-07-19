import Question from '../components/Question'

export default Question

export async function getServerData(context) {
    return {
        status: 200, // The HTTP status code that should be returned
        props: {}, // Will be passed to the page component as "serverData" prop
        headers: {}, // HTTP response headers for this page
    }
}
