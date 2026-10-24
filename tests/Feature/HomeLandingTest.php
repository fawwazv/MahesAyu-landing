<?php

namespace Tests\Feature;

use Tests\TestCase;

class HomeLandingTest extends TestCase
{
    public function test_home_renders_the_welcome_landing_page(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('MAHES AYU');
    }
}
