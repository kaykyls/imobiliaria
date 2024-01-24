<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Property;
use App\Models\Address;
use Illuminate\Support\Facades\Redirect;

class PropertyController extends Controller
{
    public function index()
    {
        return Inertia::render('Property'); 
    }

    public function register()
    {
        return Inertia::render('RegisterProperty'); 
    }

    public function store(Request $request)
    {
        // dd($request->all());

        // dump($request->all());

        $request->validate([
            'title' => 'required|string',
            'cep' => 'required|string',
            'district' => 'required|string',
            'street' => 'required|string',
            'number' => 'required|numeric',
            'complement' => 'required|string',
            'price' => 'required|numeric',
            'code' => 'required|numeric',
            'description' => 'required|string',
            'category' => 'required|string',
            'isForRent' => 'required|string',
            'status' => 'required|string',
            'bedrooms' => 'required|numeric',
            'bathrooms' => 'required|numeric',
        ]);

        // $images = $request->file('images');

        $address = Address::create([
            'cep' => $request->cep,
            'district' => $request->district,
            'street' => $request->street,
            'number' => $request->number,
            'complement' => $request->complement,
        ]);

        $isForRent = $request->isForRent == 'Aluguel' ? true : false;
        $status = $request->status == 'Ativo' ? true : false;
        $category = $request->category == 'Casa' ? true : false;

        // dd($isForRent, $status, $category);

        Property::create([
            'title' => $request->title,
            'address_id' => $address->id,
            'price' => $request->price,
            'code' => $request->code,
            'description' => $request->description,
            'category' => $category,
            'isForRent' => $isForRent,
            'status' => $status,
            'bedrooms' => $request->bedrooms,
            'bathrooms' => $request->bathrooms,
        ]);

        return Redirect::route('property.index');
    }
}
