
vegApp.controller('itemListController', function ($scope){
	$scope.items = [
			{imageurl: 'images/strawberry.png', type: 'strawberry', name: 'Herbert Strawberry', occupation: 'dogwalker', superpower: 'power-C boost'},
			{imageurl: 'images/blueberry.png', type: 'blueberry', name: 'Ulysses Blueberry', occupation: 'construction worker', superpower: 'super strength' },
			{imageurl: 'images/orange.png', type: 'orange', name: 'Otto Sly Orange', occupation: 'yogi', superpower: 'immuno-defense' },
			{imageurl: 'images/carrot.png' , type: 'carrot', name: 'Dr. Claude Carrotte', occupation: 'primary care physician', superpower: 'night vision' },
			{imageurl: 'images/apple.png' , type: 'apple', name: 'Sally Apple', occupation: 'chef', superpower: 'supreme teeth cleaning' },
			{imageurl: 'images/broccoli.png' , type: 'broccoli', name: 'Barkley Broccoli', occupation: 'mechanic', superpower: 'unbreakable bones' },
			{imageurl: 'images/spinach.png' , type: 'spinach', name: 'George Spinachopolous', occupation: 'rockstar', superpower: 'calcium forcefield' },
			{imageurl: 'images/avocado.png' , type: 'avocado', name: 'Garcia Avocado', occupation: 'hairstylist', superpower: 'uber fast growing hair' },
			{imageurl: 'images/tomato.png' , type: 'tomato', name: 'Tony Tomato', occupation: 'weather anchor', superpower: 'carcinogen-shield' }
		];
		$scope.arsenal = [];



	$scope.additem = function(new_item){
			$scope.arsenal.push( new_item );
		};
		console.log('scope', $scope);
	});




