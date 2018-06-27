'use strict';

angular.module('app')

.controller('DetailHomeController',['$scope','$webSql','$routeParams', '$location', '$rootScope','usuarioServicio'
    , function( $scope, $webSql, $routeParams, $location, $rootScope, usuarioServicio ) 
        {
            $rootScope.mostrarPagina = false;


            $scope.disabled     = false;
            $scope.$location    = $location;
            $scope.usuarios     = $scope.usuarios || {};


           $scope.get = function() 
           {
                
                $scope.usuarios = usuarioServicio.datosServicio();
                
                



           }
        $scope.get();


/*                    
            //    {
                    var name            =  'localDB';
                    var version         =  '1.0';
                    var display_name    =  'localDB';
                    var size            =  2 * 1024 * 1024; // in bytes
                    var db = window.openDatabase(name, version, display_name, size);
                    
                    $scope.db = $webSql.openDatabase('mydb', '1.0', 'Test DB',size ); 

                    db.transaction(function (tx) 
                        {
                            var len;
                            var idusuario  = "";
                            var usuario     = "";
                            var password    = "";
                            var perfil      = "";
                            var persona_id  = "";
                            var SQL = " SELECT id_usuario, usuario, password, perfil, persona_id       ";
                                SQL += " FROM usuarios ;";
                            tx.executeSql(  SQL,[], function (tx, results)
                                    {    
                                        len = results.rows.length;
                                        var xHtml="";
                                        if (len > 0)
                                            {
                                                for (var i = 0; i < len; i++)
                                                    {   
                                                        var row     = results.rows.item(i);

                                                        idusuario   = row['id_usuario'];
                                                        usuario     = row['usuario'];
                                                        password    = row['password'];
                                                        perfil      = row['perfil'];
                                                        persona_id  = row['persona_id'];
                                                    }
                                                    
                                                    //$scope.usuarios.idusuario = {"idusuario":idusuario};
                                                    $scope.usuarios    = [{'usuario':usuario,'password':password}];

                                                    alert( $scope.usuarios);
                                                    console.log( $scope.usuarios);
                                                    
                                            }
                                            else{
                                                    console.log('NO hay inspecciones en la tablet');
                                            }
                                    }
                                    ,
                                    nullDataHandler , errorHandler);
                        });
                    function errorHandler(transaction, error)
                        {if (error.code==1){} else {console.log('Error en la creacion de la tabla  Usuario '+error.message+' (Code '+error.code+')');}return false;}
                    function nullDataHandler(){console.log("SQL Query Correcta .... ");}
           // };
    */             


   

   
}]);