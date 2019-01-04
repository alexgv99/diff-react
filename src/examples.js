const lhs = {
	createdAt: '2018-11-19T16:49:04.222+0000',
	idFormulario: 'fracionamento_solo',
	data: {
		identificacao: 'Teste 1234',
		local: {
			enderecoCdlList: {
				enderecosCDL: [
					{
						codigoCDL: '7775026',
						logradouro: 'Av. Ipiranga',
						numero: '1234'
					}
				]
			}
		},
		interessados: {
			rt: {
				nome: 'Pessoa número 1',
				cpf: '21714522222',
				registroProfissional: {
					tipo: 'CAU',
					numeroRegistro: '000A333333',
					situacao: 'ATIVO',
					cpf: '21714522222',
					nome: 'Pessoa número 1',
					valid: true
				},
				email: 'aaa@bbb.net'
			},
			proprietario: {
				nome: 'Pessoa número 1',
				cpfCnpj: '21714555555',
				email: 'aaa@bbb.net',
				cpf: '21714555555'
			}
		}
	},
	formulario: 'fracionamento_solo',
	usuario: {
		id: 'aaaaa@gmail.com',
		email: 'aaaaa99@gmail.com',
		name: 'CCC AAA BBB'
	},
	documentos: [
		{
			idDocumento: 'dmi',
			tituloDocumento: 'DMI',
			obrigatorio: true,
			ordem: 100,
			id: 'c4517e20-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'reg-imo',
			tituloDocumento: 'Certidão ou matrícula do Registro de Imóveis',
			obrigatorio: true,
			ordem: 200,
			id: 'c4517e21-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'planta-geral',
			tituloDocumento: 'Planta geral modelo Decreto 12.715/2000',
			obrigatorio: true,
			ordem: 300,
			id: 'c4517e22-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'planta-dwg',
			tituloDocumento: 'Planta geral - Arquivo com extensão DWG',
			obrigatorio: false,
			ordem: 400,
			id: 'c4517e23-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'art-rrt',
			tituloDocumento: 'ART ou RRT com comprovante de pagamento',
			obrigatorio: true,
			ordem: 500,
			id: 'c4517e24-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'proc-req',
			tituloDocumento: 'Procuração do Requerente',
			obrigatorio: false,
			ordem: 600,
			id: 'c4517e25-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'cnd',
			textoHelp: 'Obter CND',
			linkHelp: 'https://www.sefaz.rs.gov.br/sat/CertidaoSitFiscalSolic.aspx',
			tituloDocumento: 'CND - Certidão Negativa de Débitos',
			obrigatorio: false,
			ordem: 700,
			id: 'c4517e26-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		}
	],
	updatedAt: '2018-11-19T16:49:04.222+0000',
	user: {
		id: 'aaa11122@gmail.com',
		email: 'aaa11122@gmail.com',
		name: 'AAA BBB CCC'
	},
	operations: ['formulario/SERVER_SAVE_FORM_DATA']
};

const rhs = {
	createdAt: '2018-11-19T16:49:04.222+0000',
	idFormulario: 'fracionamento_solo',
	data: {
		identificacao: 'Pessoa número 2',
		local: {
			enderecoCdlList: {
				enderecosCDL: [
					{
						codigoCDL: '7775026',
						logradouro: 'Av. Ipiranga',
						numero: '1245'
					}
				]
			}
		},
		interessados: {
			rt: {
				nome: 'Pessoa Número 1',
				cpf: '21714555555',
				registroProfissional: {
					tipo: 'CAU',
					numeroRegistro: '000A333333',
					situacao: 'ATIVO',
					cpf: '21714555555',
					nome: 'Pessoa Número 1',
					valid: true
				},
				email: 'aaa@bbb.net'
			},
			proprietario: {
				nome: 'Pessoa Número 1',
				cpfCnpj: '21714555555',
				email: 'aaa@bbb.net',
				cpf: '21714555555'
			}
		}
	},
	formulario: 'fracionamento_solo',
	usuario: {
		id: 'aaa11122@gmail.com',
		email: 'aaa11122@gmail.com',
		name: 'AAA BBB CCC'
	},
	documentos: [
		{
			idDocumento: 'dmi',
			tituloDocumento: 'DMI',
			obrigatorio: true,
			ordem: 100,
			id: 'c4517e20-ec1a-11e8-b4e4-6396b722489f',
			versao: 1,
			filename: 'uploads/fracionamento_solo-110a9b20-ec1b-11e8-b4e4-6396b722489f-dmi-HistoriasUsuario.pdf',
			originalName: 'HistoriasUsuario.pdf',
			size: 254892,
			size1: 111111,
			size2: 222222,
			size3: 333333,
			size4: 444444
		},
		{
			idDocumento: 'reg-imo',
			tituloDocumento: 'Certidão ou matrícula do Registro de Imóveis',
			obrigatorio: true,
			ordem: 200,
			id: 'c4517e21-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'planta-geral',
			tituloDocumento: 'Planta geral modelo Decreto 12.715/2000',
			obrigatorio: true,
			ordem: 300,
			id: 'c4517e22-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'planta-dwg',
			tituloDocumento: 'Planta geral - Arquivo com extensão DWG',
			obrigatorio: false,
			ordem: 400,
			id: 'c4517e23-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'art-rrt',
			tituloDocumento: 'ART ou RRT com comprovante de pagamento',
			obrigatorio: true,
			ordem: 500,
			id: 'c4517e24-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'proc-req',
			tituloDocumento: 'Procuração do Requerente',
			obrigatorio: false,
			ordem: 600,
			id: 'c4517e25-ec1a-11e8-b4e4-6396b722489f',
			versao: 1
		},
		{
			idDocumento: 'cnd',
			'nova property1': 'valor 1',
			'nova property2': 'valor 2',
			'nova property3': 'valor 3',
			versao: 1
		}
	],
	updatedAt: '2018-11-19T16:49:50.618+0000',
	user: {
		id: 'aaa11122@gmail.com',
		email: 'aaa11122@gmail.com',
		name: 'AAA BBB CCC'
	},
	operations: ['/api/form/upload']
};

export { lhs, rhs };
