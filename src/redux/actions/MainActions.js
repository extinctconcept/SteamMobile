const GET = 'GET';

export {
    GET,
}

export function get() {
    return {
        type: GET,
    }
}