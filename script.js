//mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clustersipac.ydiww.azure.mongodb.net/hondurasdb script.js


var user = {
    "surnames": "Super Administrador",
    "fullname": "Administrador Honduras",
    "email": "admin@gmail.com",
    "roles": [{
        "code": "ROLE_1"
    }],
    "proxyAddress": "0x8b42de1a6e497613d911b03e9826a9d90c02c89a",
    "entity": "Administrador",
    "password": "wuqwlfzKVvKg7gXKA34w4cEPGYDqPzFs4UtJpzJp5hM=",
    "codeStatus": "H",
    "listHistory": [{
        "date": new Date(),
        "email": "",
        "rol": "ROLE_1",
        "status": "Habilitado"
    }],
    "completed": true,
    "createdBy": "system",
    "createdDate": new Date(),
    "lastModifiedBy": "system",
    "lastModifiedDate": new Date()
}


db.user.insert(user);

 print("Table User created");

var configuration = {
    'blockchainServer': 'https://dev-lac-writer.kaytrust.id',
    'addressEthereumBackend': '0x38ff21128ff8796cb1866c29d7df2310f475e957',
    'contractAddressIdentityManager': '0xb79e51f09d216d6b70278464e5dedd6164d0793b',
    'contractAddressProxyFirstAdministrator': '0x8b42de1a6e497613d911b03e9826a9d90c02c89a',
    'contractAddressRoles': '0x612fbf4660416c50b284d83082860f8e325ff005',
    'networkId': '0x9e551',
    'contractAddressStepManager': '0x9cec5351d2c256fcaef5bfdc7259f48df86c3349',
    'didBackend': 'did:ev:cwML6YqL1r4T4vkV4z5xJHe5uYBqVswvqU3qk',
    'contractAddressFlow': '0xe51e106a62fd30dbeed4ef0041a021819872bb32',
    'urlLogin': 'https://sipac.kaytrust.id',
    'attempsQueue': 10
}

db.configuration.remove({});
db.configuration.insert(configuration);

print("Table Configuration created");

db.queue_tx_fail.remove({});


print("Table Queue_tx_fail created");

var document = [{
        "typeParameter": "Transaction",
        "parameters": [{
            "code": "01",
            "description": "Bienes"
        }, {
            "code": "02",
            "description": "Servicios de no consultoría"
        }, {
            "code": "03",
            "description": "Obras"
        }, {
            "code": "04",
            "description": "Consultorías"
        }]
    },
    {
        "typeParameter": "FundingSource",
        "parameters": [{
            "code": "01",
            "description": "Préstamo"
        }, {
            "code": "02",
            "description": "Donación"
        }, {
            "code": "03",
            "description": "Aporte Local"
        }]
    },
    {
        "typeParameter": "OperationNumber",
        "parameters": [{
            "code": "2470/BL-HO",
            "description": "Programa de Integración Vía Regional y Propuesta de Reformulación de 2470/BL-HO",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "01", "02", "03", "04"
                ]
            }
        }, {
            "code": "3815/BL-HO",
            "description": "Programa de Integración Vial Regional II",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "05", "06", "07"
                ]
            }
        }, {
            "code": "4713/BL-HO",
            "description": "Fortalecimiento Integral de la Red de Atención de Traumas y Urgencias de Tegucigalpa",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "08", "09", "10"
                ]
            }
        }, {
            "code": "4936/BL-HO",
            "description": "Proyecto Integral de Desarrollo Rural y Productividad",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "11", "12", "13", "14"
                ]
            }
        }, {
            "code": "4940/BL-HO",
            "description": "Proyecto Integral de Desarrollo Rural y Productividad",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "11", "12", "13", "14"
                ]
            }
        }]
    }, {
        "typeParameter": "AssociatedComponent",
        "parameters": [{
            "code": "01",
            "description": "1-Obras civiles"
        }, {
            "code": "02",
            "description": "2-Fortalecimiento Institucional"
        }, {
            "code": "03",
            "description": "3-Mantenimiento"
        }, {
            "code": "04",
            "description": "4-Otros Gastos"
        }, {
            "code": "05",
            "description": "1-Mejoramiento tramos viales integrales"
        }, {
            "code": "06",
            "description": "2-Fortalecimiento Institucional INSEP"
        }, {
            "code": "07 ",
            "description": "3-Otros gastos"
        }, {
            "code": "08",
            "description": "1-Construcción y Equipamiento del Hospital de Trauma y Fortalecimiento de la red de hospitales de la zona centro, sur - oriente"
        }, {
            "code": "09",
            "description": "2-Modelo de Atención y Gestión de la Red y Hospital de Trauma"
        }, {
            "code": "10",
            "description": "3-Administración y Evaluación"
        }, {
            "code": "11",
            "description": "1-Fortalecimiento del desarrollo productivo"
        }, {
            "code": "12",
            "description": "2-Acceso a financiamiento"
        }, {
            "code": "13",
            "description": "3-Sistema de monitoreo y evaluación"
        }, {
            "code": "14",
            "description": "4-Administración u otros gastos contingentes"
        }]
    }, {
        "typeParameter": "FundingAgency",
        "parameters": [{
            "code": "01",
            "description": "BID"
        }, {
            "code": "02",
            "description": "BM"
        }, {
            "code": "03",
            "description": "BCIE"
        }, {
            "code": "04",
            "description": "Tesoro Nacional"
        }]
    }, {
        "typeParameter": "Unit",
        "parameters": [{
            "code": "01",
            "description": "Items"
        }, {
            "code": "02",
            "description": "Lotes"
        }]
    }, {
        "typeParameter": "ActionReview",
        "parameters": [{
            "code": "01",
            "description": "Aprobar"
        }, {
            "code": "02",
            "description": "Observar"
        }]
    }, {
        "typeParameter": "Method",
        "parameters": [{
            "code": "01",
            "description": "Licitación Pública Internacional (LPI)"
        }, {
            "code": "02",
            "description": "Licitación Pública Nacional (LPN)"
        }, {
            "code": "03",
            "description": "Licitación Internacional Limitada (LIL)"
        }, {
            "code": "04",
            "description": "Comparación de Precios (CP)"
        }, {
            "code": "05",
            "description": "Contratación Directa (CD)"
        }, {
            "code": "06",
            "description": "Sistemas Nacionales (SN)"
        }, {
            "code": "07",
            "description": "Selección Basada en calidad y Costo (SBCC)"
        }, {
            "code": "08",
            "description": "Selección Basada en la Calidad (SBC)"
        }, {
            "code": "09",
            "description": "Selección Basada en el Menor Costo (SBMC)"
        }, {
            "code": "10",
            "description": "Selección Basada en las Calificaciones de los Consultores (SCC)"
        }, {
            "code": "11",
            "description": "Selección Directa"
        }, {
            "code": "12",
            "description": "Prácticas Comerciales"
        }, {
            "code": "13",
            "description": "Selección de Determinados Tipos de Consultores"
        }, {
            "code": "14",
            "description": "Selección Basada en calidad y Costo (SBCC)"
        }, {
            "code": "15",
            "description": "3 CVs"
        }, {
            "code": "16",
            "description": "Selección Directa (SD)"
        }, {
            "code": "99",
            "description": "Otro método"
        }]
    }, {
        "typeParameter": "TypeContract",
        "parameters": [{
                "code": "01",
                "description": "Suma Alzada"
            }, {
                "code": "02",
                "description": "Precio Unitario"
            }, {
                "code": "03",
                "description": "Reembolso de costos más comisión fija"
            }, {
                "code": "04",
                "description": "llave en mano"
            }, {
                "code": "05",
                "description": "Basado en el desempeño"
            }, {
                "code": "06",
                "description": "Basado en el tiempo"
            }, {
                "code": "07",
                "description": "Acuerdos marco"
            }, {
                "code": "08",
                "description": "Servicio de administración"
            }, {
                "code": "09",
                "description": "Diseño y construcción"
            }, {
                "code": "10",
                "description": "Propiedad-Operación-Construcción"
            }, {
                "code": "11",
                "description": "Construcción-Operación-Transferencia"
            }, {
                "code": "12",
                "description": "Otros"
            }


        ]
    }

];


db.parameter.remove({});
db.parameter.insert(document);

print("Table Parameter created");

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
        "description": "Director Adjunto",
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
        "description": "Asistente Director Ejecutivo",
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
        "description": "Director Administrativo Financiero",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    },
    {
        "code": "ROLE_COO_TEC",
        "name": "Coordinador Técnico",
        "description": "Coordinador Técnico",
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
        "description": "BID",
        "createdBy": "Owner",
        "createdDate": new Date(),
        "lastModifiedBy": "Owner",
        "lastModifiedDate": new Date()
    }
]
db.role.remove({});
db.role.insert(document);

print("Table Role created");

//mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clustersipac.ydiww.azure.mongodb.net/hondurasdb script.js

var document = 
{

    "name" : "honduras",
    "did" : "did:ev:cwML6YqL1r4T4vkV4z5xJHe5uYBqVswvqU3qk",
    "description" : "proyecto honduras",
    "code" : "PRY_HONDURAS",
    "fases" : [ 
        {
            "code" : "fase_01",
            "name" : "fase 1",
            "description" : "fase de solicitudes",
            "step" : [ 
                {
                    "code" : "paso_01_01",
                    "name" : "paso 1",
                    "description" : "Datos del Proceso",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_ADJ"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_01_02",
                    "name" : "paso 2",
                    "description" : "Plan de Adquisiciónes",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_ADJ"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_01_03",
                    "name" : "paso 3",
                    "description" : "Metodo de Adquisición y Tipo Contrato",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_ADJ"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_01_04",
                    "name" : "paso 4",
                    "description" : "Documentación",
                    "documentType" : [ 
                        {
                            "name" : "Documento Especificación Tecnica",
                            "code" : "doc_01_04_01",
                            "description" : "...",
                            "clasificationType" : [ 
                                {
                                    "code" : "doc_type_01040101",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : []
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_ADJ"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_01_05",
                    "name" : "paso 5",
                    "description" : "Cargar Estructura Presupuestaria",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADJ"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_DIR_ADM_FIN"
                            ]
                        }
                    ]
                }
            ],
            "phaseOption" : [ 
                {
                    "code" : "fase_option_01_01",
                    "name" : "Crear Solicitud",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC"
                    ]
                }, 
                {
                    "code" : "fase_option_01_02",
                    "name" : "Ver Solicitud",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC", 
                        "ROLE_BID", 
                        "ROLE_DIR_ADJ", 
                        "ROLE_DIR_EJE", 
                        "ROLE_ESP_ADQ", 
                        "ROLE_DIR_ADQ"
                    ]
                }, 
                {
                    "code" : "fase_option_01_03",
                    "name" : "Editar Solicitud",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC", 
                        "ROLE_DIR_ADM_FIN"
                    ]
                }, 
                {
                    "code" : "fase_option_01_04",
                    "name" : "Acreditar Solicitud",
                    "rolesAuth" : [ 
                        "ROLE_DIR_ADJ"
                    ]
                }
            ]
        }, 
        {
            "code" : "fase_02",
            "name" : "fase 2",
            "description" : "fase de procesos",
            "step" : [ 
                {
                    "code" : "paso_02_01",
                    "name" : "paso 1",
                    "description" : "Inicio del Proceso Contratación",
                    "documentType" : [ 
                        {
                            "name" : "Documento de Licitación",
                            "code" : "doc_02_01_01",
                            "description" : "Documento de Licitación",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADQ", 
                                        "ROLE_DIR_ADJ"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_EJE"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "Solicitud de No Objeción",
                                    "code" : "doc_ass_02_01_01_01",
                                    "description" : "Solicitud de No Objeción BID al Documento de Licitación",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "Respuesta de solicitud de No Objeción",
                                    "code" : "doc_ass_02_01_01_03",
                                    "description" : "Respuesta de solicitud de No Objeción BID al Documento de Licitación",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }, 
                        {
                            "name" : "Solicitud Pedido de Aclaratoria",
                            "code" : "doc_02_01_02",
                            "description" : "Solicitud Pedido de Aclaratoria",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : []
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "Aclaratoria",
                                    "code" : "doc_ass_02_01_01_02",
                                    "description" : "Respuesta de  Aclaratoria",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ESP_ADQ"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : [ 
                                                "ROLE_COO_TEC", 
                                                "ROLE_DIR_ADQ", 
                                                "ROLE_DIR_ADJ"
                                            ]
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }, 
                        {
                            "name" : "Solicitud Pedido de Enmienda",
                            "code" : "doc_02_01_03",
                            "description" : "Solicitud Pedido de Enmienda",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : []
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "Enmienda",
                                    "code" : "doc_ass_02_01_03_01",
                                    "description" : "Respuesta de Enmienda",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ESP_ADQ"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : [ 
                                                "ROLE_COO_TEC", 
                                                "ROLE_DIR_ADQ", 
                                                "ROLE_DIR_ADJ"
                                            ]
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "Solicitud de No Objeción",
                                    "code" : "doc_ass_02_01_03_02",
                                    "description" : "Solicitud de No Objeción BID a la Enmienda",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "Respuesta de Solicitud de No Objeción",
                                    "code" : "doc_ass_02_01_03_03",
                                    "description" : "Respuesta de Solicitud de No Objeción BID a la Enmienda",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_DIR_ADM_FIN"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_ESP_ADQ"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_02_02",
                    "name" : "paso 2",
                    "description" : "Documentación de Oferta",
                    "documentType" : [ 
                        {
                            "name" : "Acta de Apertura",
                            "code" : "doc_02_02_01",
                            "description" : "Solicitud de Acta de Apertura",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADQ"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_ASI_DIR_EJE", 
                                "ROLE_DIR_ADJ", 
                                "ROLE_DIR_EJE"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_ESP_ADQ", 
                                "ROLE_DIR_ADQ"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_02_03",
                    "name" : "paso 3",
                    "description" : "Comite de Evaluación",
                    "documentType" : [ 
                        {
                            "name" : "Comite de Evaluación",
                            "code" : "doc_02_03_01",
                            "description" : "Comite de Evaluación",
                            "clasificationType" : [ 
                                {
                                    "code" : "02",
                                    "description" : "Comite"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "save",
                                    "name" : "save",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADJ"
                                    ]
                                }, 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADJ"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_ESP_ADQ", 
                                "ROLE_ASI_DIR_EJE", 
                                "ROLE_DIR_ADQ", 
                                "ROLE_DIR_ADJ", 
                                "ROLE_DIR_EJE"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_DIR_ADJ"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_02_04",
                    "name" : "paso 4",
                    "description" : "Informe de Evaluación",
                    "documentType" : [ 
                        {
                            "name" : "Informe de Evaluación",
                            "code" : "doc_02_04_01",
                            "description" : "Informe de Evaluación",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADQ", 
                                        "ROLE_DIR_ADJ"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_EJE"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "Solicitud de No Objeción",
                                    "code" : "doc_ass_02_04_01_01",
                                    "description" : "Solicitud de No Objeción BID al Informe de Evaluación",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "Respuesta de Solicitud de No Objeción",
                                    "code" : "doc_ass_02_04_01_02",
                                    "description" : "Respuesta de Solicitud de No Objeción BID al Informe de Evaluación",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_ASI_DIR_EJE"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_ESP_ADQ", 
                                "ROLE_ASI_DIR_EJE", 
                                "ROLE_DIR_ADQ", 
                                "ROLE_DIR_ADJ", 
                                "ROLE_DIR_EJE"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_02_05",
                    "name" : "paso 5",
                    "description" : "Carga de Estructura Presupuestaria",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_ESP_ADQ", 
                                "ROLE_ASI_DIR_EJE", 
                                "ROLE_DIR_ADQ", 
                                "ROLE_DIR_ADJ", 
                                "ROLE_DIR_EJE"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_DIR_ADM_FIN"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_02_06",
                    "name" : "paso 6",
                    "description" : "Resolución de Adjudicación",
                    "documentType" : [ 
                        {
                            "name" : "Resolución de Adjudicación",
                            "code" : "doc_02_06_01",
                            "description" : "Resolución de Adjudicación",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADQ", 
                                        "ROLE_DIR_ADJ"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_EJE"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_ASI_DIR_EJE", 
                                "ROLE_DIR_ADM_FIN"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_ESP_ADQ", 
                                "ROLE_DIR_ADQ", 
                                "ROLE_DIR_ADJ", 
                                "ROLE_DIR_EJE"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_02_07",
                    "name" : "paso 7",
                    "description" : "Contrato Firmado",
                    "documentType" : [ 
                        {
                            "name" : "Contrato Firmado",
                            "code" : "doc_02_07_01",
                            "description" : "Contrato Firmado",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_ESP_ADQ"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_ADQ",
                                        "ROLE_DIR_ADJ"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_EJE"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_ASI_DIR_EJE", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_ADQ"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_ESP_ADQ", 
                                "ROLE_DIR_ADJ", 
                                "ROLE_DIR_EJE"
                            ]
                        }
                    ]
                }
            ],
            "phaseOption" : [ 
                {
                    "code" : "fase_option_02_01",
                    "name" : "Iniciar Licitación",
                    "rolesAuth" : [ 
                        "ROLE_ESP_ADQ"
                    ]
                }, 
                {
                    "code" : "fase_option_02_02",
                    "name" : "Ver Licitación",
                    "rolesAuth" : [ 
                        "ROLE_BID", 
                        "ROLE_DIR_EJE", 
                        "ROLE_ESP_ADQ", 
                        "ROLE_DIR_ADQ", 
                        "ROLE_COO_TEC", 
                        "ROLE_DIR_ADJ", 
                        "ROLE_DIR_ADM_FIN"
                    ]
                }, 
                {
                    "code" : "fase_option_02_03",
                    "name" : "Editar Licitación",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC", 
                        "ROLE_DIR_ADM_FIN", 
                        "ROLE_ESP_ADQ", 
                        "ROLE_ASI_DIR_EJE", 
                        "ROLE_DIR_ADQ", 
                        "ROLE_DIR_ADJ", 
                        "ROLE_DIR_EJE"
                    ]
                }
            ]
        }, 
        {
            "code" : "fase_03",
            "name" : "fase 3",
            "description" : "fase de ejecucion",
            "step" : [ 
                {
                    "code" : "paso_03_01",
                    "name" : "paso 1",
                    "description" : "Datos del Contrato",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_CONT", 
                                "ROLE_DIR_TRA", 
                                "ROLE_DIR_LEG", 
                                "ROLE_SUP"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_03_02",
                    "name" : "paso 2",
                    "description" : "Contratista y Supervisor",
                    "documentType" : [ 
                        {
                            "name" : "Asignacion de Roles",
                            "code" : "doc_03_02_01",
                            "description" : "Asignacion de Roles",
                            "clasificationType" : [ 
                                {
                                    "code" : "03",
                                    "description" : "Asignacion de Roles"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "save",
                                    "name" : "save",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : []
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_CONT", 
                                "ROLE_DIR_TRA", 
                                "ROLE_DIR_LEG", 
                                "ROLE_SUP"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_03_03",
                    "name" : "paso 3",
                    "description" : "Pagos",
                    "documentType" : [ 
                        {
                            "name" : "Solicitud de Anticipo",
                            "code" : "doc_03_03_01",
                            "description" : "Solicitud de Anticipo de Pago",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_CONT", 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC", 
                                        "ROLE_DIR_LEG"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_TRA"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "F01 de Anticipo",
                                    "code" : "doc_ass_03_03_01_01",
                                    "description" : "Documento F01 de Anticipo",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "CDP de Anticipo",
                                    "code" : "doc_ass_03_03_01_02",
                                    "description" : "Comprobante de Pago de la Solicitud de Anticipo",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }, 
                        {
                            "name" : "Solicitud de Estimacion de Pago",
                            "code" : "doc_03_03_02",
                            "description" : "Solicitud de Estimacion de Pago",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_CONT", 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_TRA"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "F01 de Estimacion",
                                    "code" : "doc_ass_03_03_02_01",
                                    "description" : "Documento F01 de Estimacion",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "CDP de Estimacion",
                                    "code" : "doc_ass_03_03_02_02",
                                    "description" : "Comprobante de Pago de la Estimacion de Pago",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }, 
                        {
                            "name" : "Solicitud de Pago Final",
                            "code" : "doc_03_03_03",
                            "description" : "Solicitud de Pago Final",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_CONT", 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC", 
                                        "ROLE_DIR_LEG"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_TRA"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : [ 
                                {
                                    "name" : "F01 de Estimacion",
                                    "code" : "doc_ass_03_03_03_01",
                                    "description" : "Documento F01 de Pago Final",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }, 
                                {
                                    "name" : "CDP de Estimacion",
                                    "code" : "doc_ass_03_03_03_02",
                                    "description" : "Comprobante de Pago del Pago Final",
                                    "clasificationType" : [ 
                                        {
                                            "code" : "01",
                                            "description" : "Documento"
                                        }
                                    ],
                                    "actionType" : [ 
                                        {
                                            "code" : "upload",
                                            "name" : "upload",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }, 
                                        {
                                            "code" : "approved",
                                            "name" : "approved",
                                            "rolesAuth" : []
                                        }, 
                                        {
                                            "code" : "acreditted",
                                            "name" : "acreditted",
                                            "rolesAuth" : [ 
                                                "ROLE_DIR_ADM_FIN"
                                            ]
                                        }
                                    ],
                                    "documentTypeAssociated" : []
                                }
                            ]
                        }, 
                        {
                            "name" : "Modificacion de Contrato",
                            "code" : "doc_03_03_04",
                            "description" : "Modificacion de Contrato",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_SUP", 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC", 
                                        "ROLE_DIR_LEG", 
                                        "ROLE_DIR_TRA"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_EJE"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_LEG", 
                                "ROLE_DIR_TRA", 
                                "ROLE_CONT", 
                                "ROLE_SUP"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_DIR_ADM_FIN", 
                                "ROLE_DIR_LEG", 
                                "ROLE_DIR_TRA", 
                                "ROLE_CONT", 
                                "ROLE_SUP"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_03_04",
                    "name" : "paso 4",
                    "description" : "Modificacion de Contrato",
                    "documentType" : [ 
                        {
                            "name" : "Modificacion de Contrato",
                            "code" : "doc_03_04_01",
                            "description" : "Modificacion de Contrato",
                            "clasificationType" : [ 
                                {
                                    "code" : "01",
                                    "description" : "Documento"
                                }
                            ],
                            "actionType" : [ 
                                {
                                    "code" : "upload",
                                    "name" : "upload",
                                    "rolesAuth" : [ 
                                        "ROLE_SUP", 
                                        "ROLE_COO_TEC"
                                    ]
                                }, 
                                {
                                    "code" : "approved",
                                    "name" : "approved",
                                    "rolesAuth" : [ 
                                        "ROLE_COO_TEC", 
                                        "ROLE_DIR_LEG", 
                                        "ROLE_DIR_TRA"
                                    ]
                                }, 
                                {
                                    "code" : "acreditted",
                                    "name" : "acreditted",
                                    "rolesAuth" : [ 
                                        "ROLE_DIR_EJE"
                                    ]
                                }
                            ],
                            "documentTypeAssociated" : []
                        }
                    ],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_CONT", 
                                "ROLE_SUP", 
                                "ROLE_DIR_LEG", 
                                "ROLE_DIR_TRA"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC", 
                                "ROLE_CONT", 
                                "ROLE_SUP", 
                                "ROLE_DIR_LEG", 
                                "ROLE_DIR_TRA"
                            ]
                        }
                    ]
                }, 
                {
                    "code" : "paso_03_05",
                    "name" : "paso 5",
                    "description" : "Validar Garantia de Calidad",
                    "documentType" : [],
                    "accessType" : [ 
                        {
                            "code" : "read",
                            "name" : "read",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }, 
                        {
                            "code" : "write",
                            "name" : "write",
                            "rolesAuth" : [ 
                                "ROLE_COO_TEC"
                            ]
                        }
                    ]
                }
            ],
            "phaseOption" : [ 
                {
                    "code" : "fase_option_03_01",
                    "name" : "Iniciar Pagos",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC"
                    ]
                }, 
                {
                    "code" : "fase_option_03_02",
                    "name" : "Ver Pagos",
                    "rolesAuth" : [ 
                        "ROLE_BID", 
                        "ROLE_DIR_EJE", 
                        "ROLE_COO_TEC", 
                        "ROLE_DIR_ADM_FIN", 
                        "ROLE_DIR_ADJ", 
                        "ROLE_DIR_LEG", 
                        "ROLE_DIR_TRA"
                    ]
                }, 
                {
                    "code" : "fase_option_03_03",
                    "name" : "Editar Pagos",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC", 
                        "ROLE_DIR_LEG", 
                        "ROLE_DIR_ADM_FIN", 
                        "ROLE_CONT", 
                        "ROLE_SUP", 
                        "ROLE_DIR_TRA", 
                        "ROLE_DIR_EJE"
                    ]
                }, 
                {
                    "code" : "fase_option_03_04",
                    "name" : "Terminar Ciclo Financiero",
                    "rolesAuth" : [ 
                        "ROLE_COO_TEC"
                    ]
                }
            ]
        }
    ]
}


db.rules.remove({});
db.rules.insert(document);


print("Table Rule created");


var document = [{
					"code" : "P",
					"name" : "Por Completar",
					"description" : "Por Completar",
					"createdBy" : "Owner",
					"createdDate" : "2019-09-26 15:10:00",
					"lastModifiedBy" : "Owner",
					"lastModifiedDate" : "2019-09-26 15:10:00"
				},
				{
				"code" : "H",
				"name" : "Habilitado",
				"description" : "Habilitado",
				"createdBy" : "Owner",
				"createdDate" : "2019-09-26 15:10:00",
				"lastModifiedBy" : "Owner",
				"lastModifiedDate" : "2019-09-26 15:10:00"
				},
				{
				"code" : "D",
				"name" : "Deshabilitado",
				"description" : "Deshabilitado",
				"createdBy" : "Owner",
				"createdDate" : "2019-09-26 15:10:00",
				"lastModifiedBy" : "Owner",
				"lastModifiedDate" : "2019-09-26 15:10:00"
				}
]
db.status_user.remove({});
db.status_user.insert(document);

print("Table User State created");

var document = [
        {
			"code" : "I",
			"name" : "Iniciado",
			"description" : "Iniciado",
			"createdBy" : "Owner",
			"createdDate" : "2019-09-26 15:10:00",
			"lastModifiedBy" : "Owner",
			"lastModifiedDate" : "2019-09-26 15:10:00"
		},
		{
			"code" : "D",
			"name" : "Disponible",
			"description" : "Disponible",
			"createdBy" : "Owner",
			"createdDate" : "2019-09-26 15:10:00",
			"lastModifiedBy" : "Owner",
			"lastModifiedDate" : "2019-09-26 15:10:00"
		},
		{
			"code" : "E",
			"name" : "En Ejecucion",
			"description" : "En Ejecucion",
			"createdBy" : "Owner",
			"createdDate" : "2019-09-26 15:10:00",
			"lastModifiedBy" : "Owner",
			"lastModifiedDate" : "2019-09-26 15:10:00"
		},
		{
			"code" : "L",
			"name" : "En Licitacion",
			"description" : "En Licitacion",
			"createdBy" : "Owner",
			"createdDate" : "2019-09-26 15:10:00",
			"lastModifiedBy" : "Owner",
			"lastModifiedDate" : "2019-09-26 15:10:00"
		},
		{
			"code" : "T",
			"name" : "Terminado",
			"description" : "Terminado",
			"createBy" : "Owner",
			"createDate" : "2019-09-26 15:10:00",
			"lastModifiedBy" : "Owner",
			"lastModifiedDate" : "2019-09-26 15:10:00"
		},
		{
			"code" : "R",
			"name" : "Devuelto",
			"description" : "Devuelto",
			"createBy" : "Owner",
			"createDate" : "2020-06-15 19:50:00",
			"lastModifiedBy" : "Owner",
			"lastModifiedDate" : "2020-06-15 19:50:00"
		}

]
db.status_solicitude.remove({});
db.status_solicitude.insert(document);

print("Table Solicitude State created");
