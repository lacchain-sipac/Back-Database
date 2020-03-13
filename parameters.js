// mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb parameters.js



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
            "description": "Prestamos"
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
            "description": "Programa de Integración Vial Regional II",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "08", "09", "10"
                ]
            }
        }, {
            "code": "4936/BL-HO",
            "description": "4936 Proyecto Integral de Desarrollo Rural y Productividad",
            "group": {
                "type": "AssociatedComponent",
                "parameter": [
                    "11", "12", "13", "14"
                ]
            }
        }, {
            "code": "4940/BL-HO",
            "description": "4940 Proyecto Integral de Desarrollo Rural y Productividad",
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
            "description": "Obras civiles"
        }, {
            "code": "02",
            "description": "Fortalecimiento Institucional"
        }, {
            "code": "03",
            "description": "Mantenimiento"
        }, {
            "code": "04",
            "description": "Otros Gastos"
        }, {
            "code": "05",
            "description": "Mejoramiento tramos viales integrales"
        }, {
            "code": "06",
            "description": "Fortalecimiento Institucional INSEP"
        }, {
            "code": "07 ",
            "description": "Otros gastos"
        }, {
            "code": "08",
            "description": "Construcción y Equipamiento del Hospital de Trauma y Fortalecimiento de la red de hospitales de la zona centro, sur - oriente"
        }, {
            "code": "09",
            "description": "Modelo de Atención y Gestión de la Red y Hospital de Trauma"
        }, {
            "code": "10",
            "description": "Administración y Evaluación"
        }, {
            "code": "11",
            "description": "Fortalecimiento del desarrollo productivo"
        }, {
            "code": "12",
            "description": "Acceso a financiamiento"
        }, {
            "code": "13",
            "description": "Sistema de monitoreo y evaluación"
        }, {
            "code": "14",
            "description": "Administración u otros gastos contingentes"
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