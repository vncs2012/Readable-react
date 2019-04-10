export const RECEIVE_CATEGORIA = 'RECEIVE_CATEGORIA'

export function receiveCategoria(categoria) {
    return {
        type: RECEIVE_CATEGORIA,
        categoria,
    }
}