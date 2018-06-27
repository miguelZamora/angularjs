angular.module('app').factory('CalleResource', function($resource){
	var path = "rest/calles/"
    var resource = $resource(path+':CalleId',
    		{CalleId:'@id'},
    		{
    			//'queryAll':{method:'POST',isArray:true},
    			'queryAll':{method:'POST',isArray:false, url: path + 'listAll'},
    			'query':{method:'GET',isArray:false},
    			'update':{method:'PUT'},
    			'buscarCodigo':{method:'GET',isArray:false, url:'rest/calles/buscarCodigo/:CalleCodigo' },
    			'buscarNombre':{method:'GET',isArray:false, url:'rest/calles/buscarNombre/:CalleNombre' }
    		});
    return resource;
});