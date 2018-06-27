// Version 0009

$(document).ready(function() {
	
	var db = abrirDB();
	crearSchema();
});


function abrirDB()
		{
						var name   			= 'localDB';
						var version   		= '1.0';
						var display_name  	= 'localDB';
						var size	   		= 5*1024*1024; // in bytes
						var db 				= window.openDatabase(name, version, display_name, size);
						return db;
		}	
function crearSchema()
	{
		db.transaction( function(tx) 
		{
			var SQL = " CREATE TABLE IF NOT EXISTS usuario ( "
			 	+= " id_usuario INTEGER  PRIMARY KEY AUTOINCREMENT UNIQUE, "
			 	+= " usuario text  UNIQUE NULL, "
			 	+= " password text  NULL "
			 	+= " ) ";


			tx.executeSql(SQL,[],nullDataHandler, errorHandler);
			console.log('creamos la tabla usuario');
			function errorHandler(transaction, error)
				{
					if (error.code==1)
						{console.log('Tabla ya creada Solo la instanciamos ');}	 	
					else 
						{console.log('Error en la creacion de la tabla '+error.message+' (Code '+error.code+')');}
				}
			function nullDataHandler()
				{console.log("SQL Query Correcta .... ");}

		});
	}

