# Prueba técnica APIS Laravel y Node

## Requisitos
- Nodejs version 20.11.1 o superior
- PHP version 8.2.12 o superior
- Composer version 2.8.5 o superior

## Instalación y configuración

1. Clonar el repositorio
```bash
git clone https://github.com/MiguelAragonCatalan/prueba_apis.git
```

2. Acceder a la carpeta api-laravel
```bash
cd api-laravel
```

3. Instalar dependencias
```bash
composer install
```
4. Copiar archivo .env.example y llamarlo .env

5. Llenar las variables de entorno `DB_HOST` `DB_PORT` `DB_DATABASE` `DB_USERNAME` `DB_PASSWORD` del nuevo archivo .env

5. Ejecutar servidor laravel
```bash
php artisan serve
```

7. Acceder a la carpeta api_node
```bash
cd api_node
```

8. Instalar dependencias
```bash
npm install
```
9. Copiar archivo .env.example y llamarlo .env

10. Llenar las variables de entorno del nuevo archivo .env `API_URL` que seria la ip del servidor de laravel y  `PORT` que seria el puerto del servidor de node.

11. Ejecutar servidor node
```bash
npm run start
```

## Documentación y pruebas de API

### POST /api/productos

### Parámetros de entrada
- **nombre** (string): El nombre del producto (Obligatorio)
- **sku** (string): SKU del producto. (Obligatorio)

### Cuerpo de la solicitud
```json
{
  "nombre": "Impresora",
  "sku": "XX001234567",
}
```
### Respuesta
```json
{
  "status": "success",
  "message": "Producto created",
  "data": {
    "nombre": "Impresora",
    "sku": "XX001234567",
    "id": 1,
    "createdAt": "2025-02-15 02:21:16"
  }
}
```

### PUT /api/productos/{id_producto}

### Parámetros de entrada
- **nombre** (string): El nombre del producto (Obligatorio)
- **sku** (string): SKU del producto. (Obligatorio)

### Cuerpo de la solicitud
```json
{
  "nombre": "Impresora",
  "sku": "XX001234567",
}
```
### Respuesta
```json
{
  "status": "success",
  "message": "Producto updated",
  "data": {
    "id": 1,
    "nombre": "Impresora",
    "sku": "xx0011234567",
    "createdAt": "2025-02-15 02:21:16"

  }
}
```

### DELETE /api/productos/{id_producto}
### Respuesta
```json
{
  "status": "success",
  "message": "Producto deleted"
}
```

### GET /api/productos/{id_producto}
### Respuesta
```json
{
  "status": "success",
  "message": "Producto found",
  "data": {
    "id": 1,
    "nombre": "Impresora",
    "sku": "xx0011234567",
    "createdAt": "2025-02-15 02:21:16"
  }
}
```

### GET /api/productos/search/{sku}
### Respuesta
```json
{
  "status": "success",
  "message": "Producto found",
  "data": {
    "id": 1,
    "nombre": "Impresora",
    "sku": "xx0011234567",
    "createdAt": "2025-02-15 02:21:16"
  }
}
```

### GET /api/productos

### Respuesta
```json
{
  "status": "success",
  "message": "Productos list",
  "data": [
    {
      "id": 1,
      "nombre": "Impresora",
      "sku": "xx0011234567",
      "createdAt": "2025-02-15 02:21:16"
    }
  ]
}
```


