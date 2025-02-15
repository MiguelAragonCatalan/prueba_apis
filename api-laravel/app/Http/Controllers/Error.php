<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Error extends Controller
{
    public function handleNotFound(Request $request)
    {
        return response()->json([
            'error' => '404 not found.',
            'method' => $request->method(),
            'message' => 'La ruta solicitada no existe.',
        ], 404);
    }
}
