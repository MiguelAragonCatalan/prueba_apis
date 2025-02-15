const axios = require('axios');
const { API_URL } = process.env

const listProductos = async (req, res, next) => {
    try {
        const { data } = await axios.get(`${API_URL}/api/productos`);
        res.json(data);
    } catch (error) {  
        next(error);
    }
};

const getProductoById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { data } = await axios.get(`${API_URL}/api/productos/${id}`);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

const getProductoBySku = async (req, res, next) => {
    const { sku } = req.params;
    try {
        const { data } = await axios.get(`${API_URL}/api/productos/search/${sku}`);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

const createProducto = async (req, res, next) => {
    const producto = req.body;
    try {
        const { data } = await axios.post(`${API_URL}/api/productos`, producto);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

const updateProducto = async (req, res, next) => {
    const { id } = req.params;
    const producto = req.body;
    try {
        const { data } = await axios.put(`${API_URL}/api/productos/${id}`, producto);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

const deleteProducto = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { data } = await axios.delete(`${API_URL}/api/productos/${id}`);
        res.json(data);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listProductos,
    getProductoById,
    getProductoBySku,
    createProducto,
    updateProducto,
    deleteProducto
};