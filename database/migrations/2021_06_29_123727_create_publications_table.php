<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('publications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('workplace_id')->constrained();
            $table->string('type');
            $table->string('media');
            $table->string('public');
            $table->text('achievement')->nullable();
            $table->text('message');
            $table->text('information')->nullable();;
            $table->text('description')->nullable();;
            $table->string('quantity')->nullable();
            $table->dateTime('date')->nullable();
            $table->string('file')->nullable();
            $table->integer('state')->nullable();
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
        Schema::dropIfExists('publications');
    }
}
