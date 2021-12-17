<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('agent_id')->unsigned()->nullable();
            $table->foreign('agent_id')->references('id')->on('users');
            $table->string('type_attention')->index();
            $table->string('type_service')->index();
            $table->text('reason');
            $table->text('solution')->nullable();
            $table->text('observations')->nullable();
            $table->dateTime('created_date')->nullable();
            $table->dateTime('attention_date')->nullable();
            $table->dateTime('closing_date')->nullable();
            $table->integer('qualify')->nullable();
            $table->text('token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
