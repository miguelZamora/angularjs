		CREATE TABLE personas (
		id_persona INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
		rut TEXT  NULL,
		nombre TEXT  NULL,
		apellido_pat TEXT  NULL,
		apellido_mat TEXT  NULL,
		fecha_nac TEXT  NULL,
		genero TEXT  NULL,
		nacionalidad TEXT  NULL,
		direccion TEXT  NULL,
		email TEXT  NULL,
		github TEXT  NULL,
		telefono TEXT  NULL,
		linkedint TEXT  NULL,
		usuario_id INTEGER  NULL
		);






INSERT INTO personas ( rut ,nombre ,apellido_pat ,apellido_mat ,
fecha_nac ,genero ,nacionalidad ,direccion ,
email ,github ,telefono ,linkedint)
values
( '13.268.202-K',
'Miguel Ángel',
'Zamora',
'Montecinos','15/09/1977','Masculino','Chilena',
'Rio de Janeiro 453 C/13','mzmprog@gmail.com',
'https://github.com/miguelZamora',
'965879501',
'https://www.linkedin.com/in/miguel-angel-zamora-montecinos/',
1);