angular.module('app')

.factory('UsuariosResource', ['$scope','$webSql','$resource',function( $scope,$webSql,$resource){
   
    
    var name            =  'localDB';
    var version         =  '1.0';
    var display_name    =  'localDB';
    var size            =  5*1024*1024; // in bytes

    this.getAll= function(){
        $scope.db = $webSql.openDatabase(name, version, display_name,size ); 
                        $scope.db.selectAll("usuarios").then(function(results) 
                            {
                                $scope.users = [];
                                for(var i=0; i < results.rows.length; i++){
                                    $scope.users.push(results.rows.item(i));
                                }
                                console.log($scope.users);
                                return $scope.users
                            })

    }


}]);






            

    



