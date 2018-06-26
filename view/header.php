<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">
	<!-- <base href="/"> -->

	<title>Chocolabs</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- Template Basic Images Start -->
	<meta property="og:image" content="path/to/image.jpg">

	<!-- Custom Browsers Color Start -->
	<meta name="theme-color" content="#000">
	<!-- Custom Browsers Color End -->

	<link rel="stylesheet" href="<?php echo base_url(); ?>content/ui/css/main.min.css?<?php echo time(); ?>">
	<link rel="shortcut icon" href="<?php echo base_url(); ?>content/ui/img/favicon.png" type="image/png">
</head>

<body>
	<header class="main_header<?php switch($this->uri->segment(2)){
        case 'dogs':
            echo ' main_header_dogs';
            break;
        case 'one_dog':
        case 'puppies':
        case 'one_puppy':
        case 'contacts':
            echo ' main_header_dog';
            break;
    }; ?>">

		<div class="header_menu_wrap">
			<div class="header_menu">
				<div class="logo_menu_align">
					<a href="<?php echo base_url(); ?>" class="logo">
						<img src="<?php echo base_url(); ?>content/ui/img/logo.png" alt="logo">
					</a>
				</div>
			<div class="details">

			<nav class="main_nav">
				<ul class="flex_menu">
					<li><a href="<?php echo base_url(); ?>ui/dogs">Наши собаки</a></li>
					<li><a href="<?php echo base_url(); ?>ui/puppies">Наши щенки</a></li>
					<li><a href="#">Блог</a></li>
					<li><a href="#">Галерея</a></li>
					<li><a href="<?php echo base_url(); ?>ui/contacts">Контакты</a></li>
				</ul>
			</nav>
			<div class="contacts">
				<div class="phone">
					<a href="tel:+380953046410">+38(095) 304 64 10</a>
				</div>
				<div class="social-icons">
				<a href="#"><i class="fab fa-instagram"></i></a>
				<a href="#"><i class="fab fa-facebook-f"></i></a>
				<a href="#"><i class="fab fa-twitter"></i></a>
				<a href="#"><i class="fab fa-google-plus-g"></i></a>
				</div>
			</div>
		</div>
		<a href="#" class="burger">
			<span class="menu_button"></span>
		</a>
		</div>
