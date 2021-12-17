<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use App\Mail\RateService;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    public function index()
    {
        return view('services');
    }

    public function create(Request $request, Service $service)
    {
        $service->fill($request->all());
        $service->created_date = Carbon::now();
        $service->save();
        Mail::to($service->user->email)->send(new OrderShipped($service));
        return $service->id;
    }

    public function edit(Service $service): Service
    {
        return $service->load('user')->load('agent');
    }

    public function update(Request $request, Service $service)
    {
        $service->attention_date = $request->attention_date;
        $service->solution = $request->solution;
        $service->observations = $request->observations;
        $service->closing_date = Carbon::now();
        $service->token = Str::random(40);
        $service->save();
        Mail::to($service->user->email)->send(new RateService($service));
    }

    public function qualify(Request $request, Service $service): bool
    {
        $service->qualify = $request->qualify;
        return $service->save();
    }

}
