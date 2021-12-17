<?php

namespace App\Mail;

use App\Models\Service;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RateService extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var Service
     */
    public $service;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Service $service)
    {
        $this->service = $service;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('holman.fonseca@fyclsingenieria.com', 'Soporte Fycls')
            ->subject('Servicio solucionado')
            ->markdown('emails.rate', [
            'url' => 'https://soporte.fyclsingenieria.com/service#/show/'.$this->service->id.'?token='.$this->service->token,
        ]);

    }
}
