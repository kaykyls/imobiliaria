<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Property;
use App\Models\Address;
use Illuminate\Support\Facades\Redirect;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ManagePropertyController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminProperties', [
            'properties' => Property::all()->map(function($property) {
                $imagePaths = explode(',', $property->images);
                $imagePaths = array_map(function ($image) {
                    return asset('app/storage/uploads/' . $image);
                }, $imagePaths);
    
                return [
                    'id' => $property->id,
                    'title' => $property->title,
                    'price' => $property->price,
                    'code' => $property->code,
                    'description' => $property->description,
                    'category' => $property->category,
                    'isForRent' => $property->isForRent,
                    'status' => $property->status,
                    'bedrooms' => $property->bedrooms,
                    'bathrooms' => $property->bathrooms,
                    'images' => $imagePaths,
                    'address' => $property->address,
                ];
            }),
            'addresses' => Address::all(),
        ]);
    }

    public function register()
    {
        return Inertia::render('RegisterProperty'); 
    }

    public function store(Request $request)
    {
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
            'images.*' => 'required|file|mimes:jpeg,png,jpg'
        ]);

        $manager = ImageManager::gd();

        $files = $request->file('images');

        $imagesPaths = [];

        foreach($files as $file) {
            $originalFilename = $file->getClientOriginalName();
            $filename = time() . '-' . $originalFilename;

            $image = $manager->read($file);
            $image->scaleDown(height: 300);

            $image->save(base_path('storage/app/uploads/' . $filename));
            $path = 'uploads/' . $filename;

            $imagesPaths[] = $path;
        }

        $images = implode(',', $imagesPaths);

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
            'images' => $images
        ]);

        return Redirect::route('manageProperty.index');
    }

    public function destroy($id)
    {
        $property = Property::find($id);
        $property->delete();

        return Redirect::route('manageProperty.index');
    }
}
