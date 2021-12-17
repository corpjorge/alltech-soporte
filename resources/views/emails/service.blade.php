@component('mail::message')
# Soporte FYCLS ingeniería

Tu servicio ha sido creado! Numero: {{$service->id}}

Motivo: {{$service->reason}}

Tipo de atención: {{$service->type_attention}}

Tipo de servicio: {{$service->type_service}}

Ingeniero: {{$service->agent->name}}

Gracias,<br>
{{ config('app.name') }}
@endcomponent
