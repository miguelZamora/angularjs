// Version 0009

$(document).ready(function() {
	var db = abrirDB();
	$("#instalar").click(function()
		{
			crearSchema();
		});

function abrirDB()
		{
						var name   			=  'localDB';
						var version   		=  '1.0';
						var display_name  	=  'localDB';
						var size	   		=  5*1024*1024; // in bytes
						var db = window.openDatabase(name, version, display_name, size);
						return db;
		}	
		
function crearSchema()
	{
		db.transaction( function(tx) 
		{
			var SQL = " CREATE TABLE IF NOT EXISTS usuarios ( ";
				SQL += " id_usuario INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL, ";
				SQL += " usuario TEXT  UNIQUE NULL, ";
				SQL += " password TEXT  NULL, ";
				SQL += " perfil INTEGER  NULL, ";
				SQL += " persona_id INTEGER  NULL ";
				SQL += " ) ";
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



		db.transaction( function(tx) 
		{
			var SQL = " CREATE TABLE IF NOT EXISTS personas ( ";
				SQL += " id_persona INTEGER   PRIMARY KEY AUTOINCREMENT NOT NULL, ";
				SQL += " rut TEXT  NULL, ";
				SQL += " nombre TEXT  NULL, ";
				SQL += " apellido_pat TEXT  NULL, ";
				SQL += " apellido_mat TEXT  NULL, ";
				SQL += " fecha_nac TEXT  NULL, ";
				SQL += " genero TEXT  NULL, ";
				SQL += " nacionalidad TEXT  NULL, ";
				SQL += " direccion TEXT  NULL, ";
				SQL += " email TEXT  NULL, ";
				SQL += " github TEXT  NULL, ";
				SQL += " telefono TEXT  NULL, ";
				SQL += " linkedint TEXT  NULL, ";
				SQL += " usuario_id INTEGER  NULL ";
				SQL += " ) ";


			tx.executeSql(SQL,[],nullDataHandler, errorHandler);
			console.log('creamos la tabla personas');
			function errorHandler(transaction, error)
				{
					if (error.code==1)
						{console.log('Tabla ya creada Solo la instanciamos ');}	 	
					else 
						{c2onsole.log('Error en la creacion de la tabla '+error.message+' (Code '+error.code+')');}
				}
			function nullDataHandler()
				{console.log("SQL Query Correcta .... ");}
		});


		db.transaction( function(tx) 
		{
			var SQL = " CREATE TABLE IF NOT EXISTS experiencia ( ";
				SQL += " id_experiencia INTEGER  NULL, ";
				SQL += " usuarioid INTEGER  NULL, ";
				SQL += " fechainicio TEXT  NULL, ";
				SQL += " fechafin TEXT  NULL, ";
				SQL += " empresa TEXT  NULL, ";
				SQL += " descripcionlabores TEXT  NULL ";
				SQL += " ) ";
			tx.executeSql(SQL,[],nullDataHandler, errorHandler);
			console.log('creamos la tabla experiencia');
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


		db.transaction( function(tx) 
		{
			var SQL = " CREATE TABLE IF NOT EXISTS antecedentesacademicos ( ";
				SQL += " id_antecedentes_academicos INTEGER  NULL, ";
				SQL += " institucion TEXT  NULL, ";
				SQL += " estado TEXT  NULL, ";
				SQL += " usuarioid INTEGER  NULL, ";
				SQL += " fechatitulacion TEXT  NULL ";
				SQL += " ) ";

			tx.executeSql(SQL,[],nullDataHandler, errorHandler);
			console.log('creamos la tabla antecedentes_academicos');
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



		db.transaction(function (tx) 
			{
				var usuario 	= "mzm";
				var password 	= "C123.,";
				var perfil 		= 1
				var persona_id 	= 1;
				var SQL = "";

				SQL += " INSERT INTO usuarios ";
				SQL += " ( usuario, password, perfil, persona_id) ";
				SQL += " VALUES ( ?,?,?,?) ";
				
				tx.executeSql	(SQL , [usuario,password,perfil,persona_id]	,nullDataHandler, errorHandler)
				function errorHandler(transaction, error)
				{
					if (error.code==1)
						{console.log('Tabla ya creada Solo la instanciamos ');}	 	
					else 
						{console.log('Error en la creacion de la tabla '+error.message+' (Code '+error.code+')');}
				}
				function nullDataHandler()	{console.log("Insert Correcto en la tabla usuarios .... ");}
			});


		db.transaction(function (tx) 
			{
				
				var rut			 = "13.268.202-K";	
				var nombre		 = "Miguel Angel";	
				var apellido_pat = "Zamora";	
				var apellido_mat = "Montecinos";										 
				var fecha_nac	 = "15/09/1977";									 
				var genero		 = "Masculino";								 
				var nacionalidad = "Chilena";								
				var direccion	 = "Rio de Janeiro 453 C/13";								
				var email		 = "mzmprog@gmail.com";								
				var github		 = "https://github.com/miguelZamora";								
				var telefono 	 = "965879501";									
				var linkedint 	 = "https://www.linkedin.com/in/miguel-angel-zamora-montecinos/";									
				var usuario_id   = '1';

				var SQL = " INSERT INTO personas ";
					SQL += " (rut,nombre,apellido_pat,apellido_mat,fecha_nac,genero,nacionalidad,direccion,email,github,telefono,linkedint,usuario_id) ";
					SQL += " VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?) ";
				
				tx.executeSql	(SQL , [rut,nombre,apellido_pat,apellido_mat,fecha_nac,genero,nacionalidad,direccion,email,github,telefono,linkedint,usuario_id],nullDataHandler, errorHandler)
				function errorHandler(transaction, error)
				{
					if (error.code==1)
						{console.log('Tabla ya creada Solo la instanciamos ');}	 	
					else 
						{console.log('Error en la creacion de la tabla '+error.message+' (Code '+error.code+')');}
				}
				function nullDataHandler()	{console.log("Insert Correcto en la tabla personas .... ");}
			});

		





	}





});