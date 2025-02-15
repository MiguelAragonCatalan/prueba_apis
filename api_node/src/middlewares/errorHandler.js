const axiosErrorHandler = (err, req, res, next) => {    
    if(err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND' || err.code === 'ECONNRESET' || err.code === 'ECONNABORTED') {
        console.log('Error de conexión:', err);
        res.status(500).json({
            message: 'Error de conexión',
            details: 'No se pudo conectar con el servidor'
        });
    }
    if (err.isAxiosError) {
        console.log('Error en Axios:', err.response ? err.response.data : err.message);
        res.status(err.status || 500).json({
            message: 'Error al realizar la solicitud a la API externa',
            details: err.response?.data || err.message || 'Error desconocido'
        });
    } else {
        next(err);
    }
};

const generalErrorHandler = (err, req, res, next) => {
    console.error('Error en el servidor:', err);
    res.status(500).json({
        message: 'Error en el servidor',
        details: err.message
    });
};

module.exports = { 
    axiosErrorHandler,
    generalErrorHandler
};

