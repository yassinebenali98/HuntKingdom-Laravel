<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>

		<!-- META DATA -->
		<meta charset="UTF-8">
		<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
		<meta name="description" content="Dashplex - Laravel Admin Panel Dashboard Template">
	    <meta name="author" content="Spruko Technologies Private Limited">
		<meta name="keywords" content="admin dashboard, dashboard ui, backend, admin panel, admin template, dashboard template, admin, bootstrap, laravel, laravel admin panel, php admin panel, php admin dashboard, laravel admin template, laravel dashboard, laravel admin panel"/>

        <!-- FAVICON -->
		
        @vite(['assets/img/brand/favicon.ico'])

   
		<!-- TITLE -->
		<title> Dashplex - Laravel Bootstrap5 Premium Dashboard Template</title>

        <!-- BOOTSTRAP CSS -->
	    @vite(['assets/plugins/bootstrap/css/bootstrap.min.css'])

        <!-- ICONS CSS -->
        @vite(['assets/web-fonts/icons.css'])
        @vite(['assets/web-fonts/font-awesome/font-awesome.min.css'])
        @vite(['assets/web-fonts/plugin.css'])
       
       
        <!-- APP CSS & APP SCSS -->
        @vite(['resources/sass/app.scss' , 'resources/css/app.css'])

        @yield('styles')

	</head>

	<body class="main-body leftmenu ltr light-theme dark-menu">

		<!--- GLOBAL LOADER -->
		<div id="global-loader" >
			<img src="{{Vite::asset('assets/img/loader.svg')}}" class="loader-img" alt="loader">
		</div>
		<!--- END GLOBAL LOADER -->

        <!-- PAGE -->
		<div class="page">
        
            <!-- MAIN-HEADER -->
            @include('layouts.components.main-header')
            <!-- END MAIN-HEADER -->

            <!-- MAIN-SIDEBAR -->
            @include('layouts.components.main-sidebar')
            <!-- END MAIN-SIDEBAR -->

            <!-- MAIN-CONTENT -->
            
            <!-- END MAIN-CONTENT -->

            <!-- MAIN-FOOTER -->
           
            <!-- END MAIN-FOOTER -->


            <!-- RIGHT-SIDEBAR -->
            
           <!-- END RIGHT-SIDEBAR -->


            <!-- COUNTRY SELECTOR MODAL  -->
			
            <!-- END COUNTRY SELECTOR MODAL  -->


		</div>
        <!-- END PAGE-->

        <!-- SCRIPTS -->
        
        @include('layouts.components.scripts')
        <!-- STICKY JS-->
       
        @vite(['assets/sticky.js'])

        <!-- APP JS -->
		@vite(['js/app.js'])


        <!-- END SCRIPTS -->

	</body>
</html>
