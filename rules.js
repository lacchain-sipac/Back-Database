// mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb rules.js
var document = {
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