<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Publication;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;


class PublicationController extends Controller
{
    public function list(Publication $publication)
    {
        if (auth()->user()->role_id == 2 ) {
            return $publication->orderBy('id', 'desc')->get();
        } else {
            return $publication->where('workplace_id', auth()->user()->workplace_id)->orderBy('id', 'desc')->get();
        }
    }

    public function create(Request $request, Publication $publication)
    {
        $archivo = $request->file('file')->getClientOriginalName();
        $archivo = \Str::random(3) . $archivo;
        Storage::putFileAs('public/publications', new File($request->file), $archivo);

        $publication->fill($request->all());
        $publication->workplace_id = 1;
        $publication->file = $archivo ?? null;
        $publication->state = 0;
        $publication->save();
    }

    public function publication(Publication $publication, $id)
    {
        return $publication->find($id);
    }

    public function update(Request $request, $id)
    {
          $publication = Publication::find($id);
          $publication->state = $request->state;
          $publication->save();
    }


}
