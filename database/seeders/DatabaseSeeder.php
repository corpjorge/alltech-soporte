<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            GlobalDepartmentsSeeder::class,
            GlobalCitySeeder::class,
            GlobalRoleSeeder::class,
            GlobalWorkplaceSeeder::class,
            GlobalUserSeeder::class,
        ]);
    }
}
