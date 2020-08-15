<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;

class MealController {
    public function products(){
        return new JsonResponse(array (
            0 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_3.jpg',
              'categorie' => 'dinner',
            ),
            1 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_2.jpg',
              'categorie' => 'dinner',
            ),
            2 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_3.jpg',
              'categorie' => 'breakfast',
            ),
            3 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_1.jpg',
              'categorie' => 'brunch',
            ),
            4 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_3.jpg',
              'categorie' => 'breakfast',
            ),
            5 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_1.jpg',
              'categorie' => 'brunch',
            ),
            6 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_3.jpg',
              'categorie' => 'breakfast',
            ),
            7 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_3.jpg',
              'categorie' => 'breakfast',
            ),
            8 => 
            array (
              'name' => 'Warm Spinach Dip & Chips',
              'description' => 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
              'price' => '11.99',
              'image' => 'https://colorlib.com/preview/theme/meal/images/img_1.jpg',
              'categorie' => 'brunch',
            ),
          ));
    }
}