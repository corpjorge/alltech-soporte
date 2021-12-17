<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('workplace_id')->constrained();
            $table->string('type')->index();
            $table->string('name');
            $table->string('brand');
            $table->string('model');
            $table->string('serial')->unique();
            $table->string('fixed_assets')->unique()->nullable();
            $table->string('operating_system');
            $table->string('os_license')->nullable();
            $table->string('office');
            $table->string('office_license')->nullable();
            $table->string('processor');
            $table->string('memory');
            $table->text('local_users')->nullable();
            $table->text('software')->nullable();
            $table->text('components')->nullable();
            $table->string('photos')->nullable();
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
        Schema::dropIfExists('devices');
    }
}
