export const galleryPiecesMock = {
    "default_domino_pieces": {
        "url": "https://github.com/Tauffer-Consulting/domino_pieces_gallery",
        "version": "0.4.2",
        "pieces": {
            "CustomPythonPiece": {
                "name": "CustomPythonPiece",
                "dependency": {
                    "dockerfile": null,
                    "requirements_file": "requirements_0.txt"
                },
                "tags": [
                    "python",
                    "default"
                ],
                "style": {
                    "node_label": "Custom Python Piece",
                    "node_type": "default",
                    "node_style": {
                        "backgroundColor": "#b3cde8"
                    },
                    "useIcon": true,
                    "icon_class_name": "fa-brands:python",
                    "iconStyle": {
                        "cursor": "pointer"
                    }
                },
                "description": "Run your custom Python code.",
                "input_schema": {
                    "title": "InputModel",
                    "description": "CustomPythonPiece Input Model",
                    "type": "object",
                    "properties": {
                        "input_args": {
                            "title": "Input Args",
                            "description": "Input arguments.",
                            "default": [
                                {
                                    "kwarg_name": "kwarg_2",
                                    "kwarg_value": ""
                                },
                                {
                                    "kwarg_name": "kwarg_1",
                                    "kwarg_value": ""
                                }
                            ],
                            "from_upstream": "never",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/InputKwargsModel"
                            }
                        },
                        "script": {
                            "title": "Script",
                            "description": "Python script.",
                            "default": "# Do not modify the function definition line \ndef custom_function(kwarg_1, kwarg_2):\n    # Write your code here\n    print(f\"First argument: {kwarg_1}\")\n    print(f\"Second argument: {kwarg_2}\")\n\n    # Return the output of the function as an object,\n    # Matching the Output Args defined in the Form below\n    return {\n        \"output_1\": \"this is a string\", \n        \"output_2\": 420\n    }\n",
                            "widget": "codeeditor",
                            "from_upstream": "never",
                            "type": "string"
                        },
                        "output_args": {
                            "title": "Output Args",
                            "description": "Output arguments.",
                            "default": [
                                {
                                    "name": "output_1",
                                    "description": "An example string output",
                                    "type": "string"
                                },
                                {
                                    "name": "output_2",
                                    "description": "An example integer output",
                                    "type": "integer"
                                }
                            ],
                            "from_upstream": "never",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/OutputModifierModel"
                            }
                        }
                    },
                    "definitions": {
                        "InputKwargsModel": {
                            "title": "InputKwargsModel",
                            "type": "object",
                            "properties": {
                                "kwarg_name": {
                                    "title": "Kwarg Name",
                                    "description": "Argument name.",
                                    "from_upstream": "never",
                                    "type": "string"
                                },
                                "kwarg_value": {
                                    "title": "Kwarg Value",
                                    "description": "Argument value.",
                                    "from_upstream": "always",
                                    "type": "string"
                                }
                            }
                        },
                        "OutputModifierItemType": {
                            "title": "OutputModifierItemType",
                            "description": "OutputArgsType Enum",
                            "enum": [
                                "string",
                                "integer",
                                "float",
                                "boolean",
                                "array"
                            ],
                            "type": "string"
                        },
                        "OutputModifierModel": {
                            "title": "OutputModifierModel",
                            "type": "object",
                            "properties": {
                                "name": {
                                    "title": "Name",
                                    "description": "Name of the output argument.",
                                    "from_upstream": "never",
                                    "type": "string"
                                },
                                "description": {
                                    "title": "Description",
                                    "description": "Description of the output argument.",
                                    "from_upstream": "never",
                                    "type": "string"
                                },
                                "type": {
                                    "description": "Type of the output argument.",
                                    "default": "string",
                                    "from_upstream": "never",
                                    "allOf": [
                                        {
                                            "$ref": "#/definitions/OutputModifierItemType"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                "output_schema": {
                    "title": "OutputModel",
                    "description": "CustomPythonPiece Output Model",
                    "type": "object",
                    "properties": {}
                },
                "secrets_schema": null,
                "source_url": "https://github.com/Tauffer-Consulting/default_domino_pieces/tree/main/pieces/CustomPythonPiece"
            },
            "SleepPiece": {
                "name": "SleepPiece",
                "dependency": {
                    "dockerfile": null,
                    "requirements_file": "requirements_0.txt"
                },
                "tags": [
                    "Sleep",
                    "Default"
                ],
                "style": {
                    "node_label": "Sleep Piece",
                    "node_type": "default",
                    "node_style": {
                        "backgroundColor": "#b3cde8"
                    },
                    "useIcon": true,
                    "icon_class_name": "fa-solid:hourglass-start",
                    "iconStyle": {
                        "cursor": "pointer"
                    }
                },
                "description": "A Piece that executes a Python sleep function for a user-defined duration",
                "input_schema": {
                    "title": "InputModel",
                    "description": "Sleep Piece Input Model",
                    "type": "object",
                    "properties": {
                        "sleep_time": {
                            "title": "Sleep Time",
                            "description": "Number of seconds to sleep",
                            "default": 1,
                            "required": true,
                            "type": "number"
                        }
                    }
                },
                "output_schema": {
                    "title": "OutputModel",
                    "description": "Sleep Piece Output Model",
                    "type": "object",
                    "properties": {
                        "message": {
                            "title": "Message",
                            "description": "Sleep piece executed",
                            "default": "",
                            "type": "string"
                        }
                    }
                },
                "secrets_schema": null,
                "source_url": "https://github.com/Tauffer-Consulting/default_domino_pieces/tree/main/pieces/SleepPiece"
            },
            "SimpleLogPiece": {
                "name": "SimpleLogPiece",
                "dependency": {
                    "dockerfile": null,
                    "requirements_file": "requirements_0.txt"
                },
                "tags": [
                    "log",
                    "default"
                ],
                "style": {
                    "node_label": "Simple Log Piece",
                    "node_type": "default",
                    "node_style": {
                        "backgroundColor": "#b3cde8"
                    },
                    "useIcon": true,
                    "icon_class_name": "fa-solid:file-alt",
                    "iconStyle": {
                        "cursor": "pointer"
                    }
                },
                "description": "A Piece that simply logs its input",
                "input_schema": {
                    "title": "InputModel",
                    "description": "SimpleLogPiece Input Model",
                    "type": "object",
                    "properties": {
                        "input_str": {
                            "title": "Input Str",
                            "description": "Input string to be logged.",
                            "default": "default value",
                            "type": "string"
                        },
                        "input_int": {
                            "title": "Input Int",
                            "description": "Input integer to be logged.",
                            "default": 10,
                            "type": "integer"
                        },
                        "input_float": {
                            "title": "Input Float",
                            "description": "Input float to be logged.",
                            "default": 10.5,
                            "type": "number"
                        },
                        "input_bool": {
                            "title": "Input Bool",
                            "description": "Input boolean to be logged.",
                            "default": false,
                            "type": "boolean"
                        },
                        "input_enum": {
                            "description": "Input enum to be logged.",
                            "default": "option1",
                            "allOf": [
                                {
                                    "$ref": "#/definitions/InputEnum"
                                }
                            ]
                        },
                        "input_date": {
                            "title": "Input Date",
                            "description": "Input date to be logged.",
                            "default": "2023-01-01",
                            "type": "string",
                            "format": "date"
                        },
                        "input_time": {
                            "title": "Input Time",
                            "description": "Input time to be logged.",
                            "default": "16:20:00",
                            "type": "string",
                            "format": "time"
                        },
                        "input_datetime": {
                            "title": "Input Datetime",
                            "description": "Input datetime to be logged.",
                            "default": "2023-01-01T16:20:00",
                            "type": "string",
                            "format": "date-time"
                        },
                        "input_array": {
                            "title": "Input Array",
                            "description": "Input array to be logged.",
                            "default": [
                                "default_1",
                                "default_2",
                                "default_3"
                            ],
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "input_code": {
                            "title": "Input Code",
                            "description": "Input code to be logged.",
                            "default": "print('Hello world!')",
                            "widget": "codeeditor",
                            "type": "string"
                        }
                    },
                    "definitions": {
                        "InputEnum": {
                            "title": "InputEnum",
                            "description": "An enumeration.",
                            "enum": [
                                "option1",
                                "option2",
                                "option3"
                            ],
                            "type": "string"
                        }
                    }
                },
                "output_schema": {
                    "title": "OutputModel",
                    "description": "SimpleLogPiece Output Model",
                    "type": "object",
                    "properties": {
                        "message": {
                            "title": "Message",
                            "description": "Output message to log.",
                            "default": "",
                            "type": "string"
                        },
                        "output_msg": {
                            "title": "Output Msg",
                            "description": "Value that was logged.",
                            "type": "string"
                        },
                        "output_str": {
                            "title": "Output Str",
                            "description": "Output string to be logged.",
                            "type": "string"
                        },
                        "output_int": {
                            "title": "Output Int",
                            "description": "Output integer to be logged.",
                            "type": "integer"
                        },
                        "output_float": {
                            "title": "Output Float",
                            "description": "Output float to be logged.",
                            "type": "number"
                        },
                        "output_bool": {
                            "title": "Output Bool",
                            "description": "Output boolean to be logged.",
                            "type": "boolean"
                        },
                        "output_date": {
                            "title": "Output Date",
                            "description": "Output date to be logged.",
                            "type": "string",
                            "format": "date"
                        },
                        "output_time": {
                            "title": "Output Time",
                            "description": "Output time to be logged.",
                            "type": "string",
                            "format": "time"
                        },
                        "output_datetime": {
                            "title": "Output Datetime",
                            "description": "Output datetime to be logged.",
                            "type": "string",
                            "format": "date-time"
                        },
                        "output_array": {
                            "title": "Output Array",
                            "description": "Output array to be logged.",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "output_code": {
                            "title": "Output Code",
                            "description": "Input code to be logged.",
                            "widget": "codeeditor",
                            "type": "string"
                        }
                    },
                    "required": [
                        "output_msg",
                        "output_date",
                        "output_time",
                        "output_datetime",
                        "output_array",
                        "output_code"
                    ]
                },
                "secrets_schema": null,
                "source_url": "https://github.com/Tauffer-Consulting/default_domino_pieces/tree/main/pieces/SimpleLogPiece"
            },
            "GetDateTimePiece": {
                "name": "GetDateTimePiece",
                "dependency": {
                    "dockerfile": null,
                    "requirements_file": "requirements_0.txt"
                },
                "tags": [
                    "datetime",
                    "default"
                ],
                "style": {
                    "node_label": "Get Datetime",
                    "node_type": "default",
                    "node_style": {
                        "backgroundColor": "#b3cde8"
                    },
                    "useIcon": true,
                    "icon_class_name": "fa:calendar-o",
                    "iconStyle": {
                        "cursor": "pointer"
                    }
                },
                "description": "A Piece that gets current system date and time.",
                "input_schema": {
                    "title": "InputModel",
                    "description": "GetDateTimePiece Input Model",
                    "type": "object",
                    "properties": {
                        "use_timezone": {
                            "title": "Use Timezone",
                            "description": "Whether to use a timezone for the timestamp.",
                            "default": false,
                            "type": "boolean"
                        },
                        "timezone": {
                            "description": "Timezone to use for timestamp.",
                            "default": "(UTC+00) - UTC",
                            "allOf": [
                                {
                                    "$ref": "#/definitions/TZOptions"
                                }
                            ]
                        }
                    },
                    "definitions": {
                        "TZOptions": {
                            "title": "TZOptions",
                            "description": "An enumeration.",
                            "enum": [
                                "(UTC-11) - Pacific/Pago_Pago",
                                "(UTC-10) - US/Hawaii",
                                "(UTC-09) - Pacific/Gambier",
                                "(UTC-08) - US/Alaska",
                                "(UTC-07) - US/Pacific",
                                "(UTC-06) - US/Mountain",
                                "(UTC-05) - US/Central",
                                "(UTC-04) - US/Eastern",
                                "(UTC-03) - Canada/Atlantic",
                                "(UTC-02) - Atlantic/South_Georgia",
                                "(UTC-01) - Atlantic/Cape_Verde",
                                "(UTC+00) - UTC",
                                "(UTC+01) - Europe/London",
                                "(UTC+02) - Europe/Zurich",
                                "(UTC+03) - Indian/Mayotte",
                                "(UTC+04) - Asia/Tehran",
                                "(UTC+05) - Asia/Kathmandu",
                                "(UTC+06) - Indian/Cocos",
                                "(UTC+07) - Indian/Christmas",
                                "(UTC+08) - Australia/Eucla",
                                "(UTC+09) - Australia/Darwin",
                                "(UTC+10) - Australia/Lord_Howe",
                                "(UTC+11) - Pacific/Pohnpei",
                                "(UTC+12) - Pacific/Chatham",
                                "(UTC+13) - Pacific/Tongatapu",
                                "(UTC+14) - Pacific/Kiritimati"
                            ],
                            "type": "string"
                        }
                    }
                },
                "output_schema": {
                    "title": "OutputModel",
                    "description": "GetDateTimePiece Output Model",
                    "type": "object",
                    "properties": {
                        "date": {
                            "title": "Date",
                            "description": "Date of the timestamp, in ISO format.",
                            "type": "string"
                        },
                        "time": {
                            "title": "Time",
                            "description": "Time of the timestamp, in ISO format.",
                            "type": "string"
                        },
                        "datetime": {
                            "title": "Datetime",
                            "description": "Datetime of the timestamp, in ISO format.",
                            "type": "string"
                        }
                    },
                    "required": [
                        "date",
                        "time",
                        "datetime"
                    ]
                },
                "secrets_schema": null,
                "source_url": "https://github.com/Tauffer-Consulting/default_domino_pieces/tree/main/pieces/GetDateTimePiece"
            }
        }
    }
}