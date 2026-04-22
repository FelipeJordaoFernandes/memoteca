const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            if (!response.ok) {
                throw new Error('Nao foi possivel buscar os pensamentos')
            }
            return await response.json()
        } catch (error) {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    }
}

export default api;
