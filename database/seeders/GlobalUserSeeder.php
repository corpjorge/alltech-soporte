<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class GlobalUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'role_id' => 2,
            'name' => 'Jorge Eduardo Peralta Guzman',
            'email' => 'corpjorge@hotmail.com',
            'password' => Hash::make('admin'),
            'workplace_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('users')->insert([
            'id' => 2,
            'role_id' => 2,
            'name' => 'John Freddy Moreno',
            'email' => 'john.moreno@fyclsingenieria.com',
            'password' => Hash::make('admin'),
            'workplace_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('users')->insert([
            'id' => 3,
            'role_id' => 2,
            'name' => 'Holman Fonseca',
            'email' => 'holman.fonseca@fyclsingenieria.com',
            'password' => Hash::make('12342wefdgsasdf@'),
            'workplace_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('users')->insert([
            'id' => 4,
            'role_id' => 2,
            'name' => 'Freddy Leonardo Contreras Carrasco',
            'email' => 'freddy.contreras@fyclsingenieria.com',
            'password' => Hash::make('12342wefdgsasdf@'),
            'workplace_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('users')->insert([
            'id' => 5,
            'role_id' => 2,
            'name' => 'Andros Sierra',
            'email' => 'andros.sierra@fyclsingenieria.com',
            'password' => Hash::make('12342wefdgsasdf@'),
            'workplace_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
