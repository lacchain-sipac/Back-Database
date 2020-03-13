// mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb roles.js

var document = [{
        "code": "ROLE_1",
        "name": "Administrator App",
        "description": "Administrador de sistema honduras",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_DIR_ADJ",
        "name": "Director Adjunto",
        "description": "El Director Adjunto acredita la solicitud y aprueba muchos documentos de la fase de procesos",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_DIR_EJE",
        "name": "Director Ejecutivo",
        "description": "Director Ejecutivo",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_ESP_ADQ",
        "name": "Especialista de Adquisiciones",
        "description": "Especialista de Adquisiciones",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_ASI_DIR_EJE",
        "name": "Asistente Director Ejecutivo",
        "description": "El asistente del Director Ejecutivo se encarga de adjuntar y acreditar las Solicitudes de No Objecion BID",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_DIR_ADQ",
        "name": "Director de Adquisiciones",
        "description": "Director de Adquisiciones",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_DIR_ADM_FIN",
        "name": "Director Administrativo Financiero",
        "description": "El Director Administrativo Financiero define presupuestos",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_COO_TEC",
        "name": "Coordinador Técnico",
        "description": "El coordinador Técnico se encarga de prepara el expediente técnico",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_CONT",
        "name": "Contratista",
        "description": "Contratista",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_DIR_TRA",
        "name": "Director de Transporte",
        "description": "Director de Transporte",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_DIR_LEG",
        "name": "Director Legal",
        "description": "Director Legal",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    }, {
        "code": "ROLE_SUP",
        "name": "Supervisor",
        "description": "Supervisor",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    }, {
        "code": "ROLE_BID",
        "name": "BID",
        "description": "El BID Consulta cada fase y cada paso del proyecto Honduras",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    }
]
db.role.remove({});
db.role.insert(document);