<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function productsWorkplace($id)
    {
        return Product::where('workplace_id',$id)->first();
    }

    public function productsWorkplaceTotal($id)
    {
        return Product::where('workplace_id',$id)->count();
    }
}
