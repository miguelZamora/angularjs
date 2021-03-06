'use strict';

angular.module('app').controller('DetailProyectosController', 
        function($scope, $routeParams, $location, flash,  $rootScope ) 
        {
            //EducacionResource
            $rootScope.mostrarPagina    = false;
            var self                    = this;
            $scope.disabled             = false;
            $scope.$location            = $location;
            $scope.proyectos            = $scope.proyectos || {};
            
            $scope.pyc = {"nombre":"miguel","apellido":"zamora"};



            $scope.get = function() 
            {
                var successCallback = function(data)
                    {
                        self.original = data;
                        
                    };
                
                var errorCallback = function() 
                    {
                        var txt = "";
                        txt = 'Usted no posee permisos para actualizar las entidades externas.';
                        flash.setMessage({'type': 'error', 'text': txt});
                        $location.path("/Proyectos");
                    };
                    
                    // EducacionResource.get({perfid:$routeParams.perfid}, successCallback, errorCallback);
                    // solicitud de servicios de permisos
            };

            
            $scope.mostrar = function(){
                alert($scope.proyectos);
            }

            $scope.save = function() 
            {
                var msg = "";
                if (angular.isUndefined($scope.entext.entExtnom) || $scope.entext.entExtnom == "")
                    {
                        msg = '<p>Debe ingresar el Nombre para La nueva Entidad Externa</p>';
                        $('#modalNotificacionesBody').html(msg);
                        $('#modalNotificaciones').modal('show');
                        return false;
                    }


                var successCallback = function()
                    {
                        var txt = "";
                        txt = 'La Entidad se ha actualizado correctamente.';
                        flash.setMessage(   {   'type':'success',
                                                'text':txt}, true);
                        $location.path('/Proyectos');
                    };
                    
                var errorCallback = function(response) 
                    {
                        if(response && response.data && response.data.message) 
                            {
                                flash.setMessage(   {   'type': 'error', 
                                                        'text': response.data.message
                                                    }, true);
                                $location.path('/Proyectos');
                            } 
                        else 
                            {
                                var txt = "";
                                txt += 'Ocurrio un problema. Vuelva a intentar, ';
                                txt += 'o cancelar y comience de nuevo.';
                                
                                flash.setMessage(   {   'type': 'error', 
                                                        'text': txt 
                                                    }, true);
                                $location.path('/Proyectos');
                            }
                    };
                    $scope.perf.$update(successCallback, errorCallback);
            };
            
            $scope.cancel = function() 
                {
                    $location.path("/Proyectos");
                };
        $scope.get();


        
});