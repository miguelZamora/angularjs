angular.module('app')
//creamos nuestro servicio['$scope','$webSql','$resource',function( $scope,$webSql,$resource)
.service('usuarioServicio',['$resource','$webSql', function($resource,$webSql){




     this.datosServicio = function(){
		

		var name   			=  'localDB';
		var version   		=  '1.0';
		var display_name  	=  'localDB';
		var size	   		=  5*1024*1024;
		var db 				= $webSql.openDatabase(name, version, display_name, size);
		var users 			= [];

	    db.selectAll("personas").then(function(results) 
            {
                for(var i=0; i < results.rows.length; i++){
                    users.push(results.rows.item(unescape( i )));
                   // console.log(users);
                }
           })
        return users;
     }
     




     /*

     db.insert('user', {"username": 'pc', "password": '1234', 'age': 22}).then(function(results) {
  console.log(results.insertId);
})



     */





}]);
 
