<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProductoRequest;
use App\Http\Requests\StoreProductoRequest;
use Illuminate\Http\Request;
use App\Models\Producto;

class Productos extends Controller
{
    public function index(){
        $productos = Producto::all()->where('isDeleted', false);
        return response()->json([
            'status' => 'success',
            'message' => 'Productos list',
            'data' => $productos
        ], 200);
    }

    public function store(StoreProductoRequest $request) {
        $producto = Producto::create($request->validated());

        return response()->json([
            'status' => 'success',
            'message' => 'Producto created',
            'data' => $producto
        ], 201);
    }

    public function update(UpdateProductoRequest $request) {
        //Validar si el producto existe
        $producto = Producto::find($request->id);
        if(!$producto) return response()->json([
            'status' => 'error',
            'message' => 'Producto not found',
            'data' => []
        ], 404);


        $producto->update($request->validated());

        return response()->json([
            'status' => 'success',
            'message' => 'Producto updated',
            'data' => $producto
        ], 200);
    }

    public function destroy($id) {
        $producto = Producto::find($id);
        if(!$producto) return response()->json([
            'status' => 'error',
            'message' => 'Producto not found',
            'data' => []
        ], 404);

        $producto->isDeleted = 1;
        $producto->deletedAt = date('Y-m-d H:i:s');
        $producto->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Producto deleted',
        ], 200);

    }

    public function show($id) {
        $producto = Producto::where('id', $id)->where('isDeleted', false)->first();
        if(!$producto) return response()->json([
            'status' => 'error',
            'message' => 'Producto not found',
            'data' => []
        ], 404);

        return response()->json([
            'status' => 'success',
            'message' => 'Producto found',
            'data' => $producto
        ], 200);
    }

    public function search($sku) {
        //Buscar producto por SKU
        $producto = Producto::where('sku', $sku)
                    ->where('isDeleted', false)
                    ->first();
        if(!$producto) return response()->json([
            'status' => 'error',
            'message' => 'Producto not found',
            'data' => null
        ], 404);

        return response()->json([
            'status' => 'success',
            'message' => 'Producto found',
            'data' => $producto
        ], 200);
    }
}
