/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'fira': '<link href=\"https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@700&display=swap\" rel=\"stylesheet\">'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_0',
                            type: 'image',
                            rect: ['368px', '0px', '368px', '180px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"0.jpg",'0px','0px']
                        },
                        {
                            id: '_0Copy',
                            type: 'image',
                            rect: ['0px', '0px', '368px', '180px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"0.jpg",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['-53px', '6px', '262px', '110px', 'auto', 'auto'],
                            clip: 'rect(121.59412384033203px 262px 109px 0px)',
                            opacity: '0',
                            fill: ["rgba(157,255,106,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 90, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.51115','1.34823']]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['19px', '2px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; font-family: 'Arial Black', Gadget, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; text-transform: uppercase; font-size: 18px;\">Продаються</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-size: 18px;\"> <br>будинки-таунхауси&nbsp;</span></p>",
                            align: "left",
                            font: ['fira', [15, "px"], "rgba(9,9,205,1)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 230, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['17px', '15px', '126px', '47px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">ціна за грн/м<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">²</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(8, 53, 2); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(8, 53, 2); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">​</span><span style=\"font-size: 20px;\">23650</span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><br></p>",
                            align: "left",
                            font: ['fira', [15, "px"], "rgba(9,9,205,1)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy4',
                            type: 'text',
                            rect: ['8px', '-22px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.10857100039720535',
                            text: "<p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">Площа 120 м², 2 поверхи, гараж</p><p></p>",
                            align: "left",
                            font: ['fira', [15, "px"], "rgba(9,9,205,1)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy5',
                            type: 'text',
                            rect: ['8px', '20px', '294px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Централізовані міські мережі:</span></p>",
                            align: "left",
                            font: ['fira', [18, "px"], "rgba(9,9,205,1)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['5px', '39px', '210px', '98px', 'auto', 'auto'],
                            clip: 'rect(0px 210px 10.6904296875px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(8, 53, 2); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​<span style=\"font-size: 12px;\">​</span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(9, 9, 205); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(169, 5, 25); font-weight: 900;\"></span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(9, 9, 205); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(169, 5, 25); font-weight: 900;\"></span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(9, 9, 205); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(169, 5, 25); font-size: 15px; font-weight: 900;\">• газ&nbsp;</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">•&nbsp;</span><span style=\"color: rgb(169, 5, 25); font-size: 15px; font-weight: 900;\">вода </span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(9, 9, 205); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(169, 5, 25); font-size: 15px; font-weight: 900;\"></span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">•&nbsp;</span><span style=\"color: rgb(169, 5, 25); font-size: 15px; font-weight: 900;\">каналізація</span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(9, 9, 205); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(169, 5, 25); font-size: 15px; font-weight: 900;\">​</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">•</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">і</span><span style=\"color: rgb(169, 5, 25); font-size: 15px; font-weight: 900;\">ндивідуальне </span></p><p style=\"margin: 0px; font-family: Verdana, Geneva, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(169, 5, 25); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">&nbsp; &nbsp;опалення.&nbsp;</p><p></p>",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [15, "px"], "rgba(8,53,2,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.9','0.95956']]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['167px', '19px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "<p style=\"margin: 0px;\">в м. Чернівці</p>",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [15, "px"], "rgba(8,53,2,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['34px', '103px', '262px', '110px', 'auto', 'auto'],
                            clip: 'rect(121.59412384033203px 262px 109px 0px)',
                            opacity: '0.8',
                            fill: ["rgba(243,227,0,0.81)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],['30'],['-1.4826','0.40298']]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['73px', '157px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "<p style=\"margin: 0px;\">+38 096 645 50 44​</p>",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [15, "px"], "rgba(8,53,2,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '180px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: true,
                    data: [
                        [
                            "eid122",
                            "left",
                            18546,
                            1688,
                            "linear",
                            "${Text3Copy5}",
                            '-29px',
                            '8px'
                        ],
                        [
                            "eid109",
                            "left",
                            0,
                            2364,
                            "linear",
                            "${Text3}",
                            '-44px',
                            '19px'
                        ],
                        [
                            "eid195",
                            "opacity",
                            5000,
                            13786,
                            "linear",
                            "${Text3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            18786,
                            1448,
                            "linear",
                            "${Text3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            25200,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            25200,
                            946,
                            "linear",
                            "${Text3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid140",
                            "clip",
                            20270,
                            4616,
                            "linear",
                            "${Text8}",
                            [0,210,10.6904296875,0],
                            [0,210,98,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid96",
                            "left",
                            13518,
                            2082,
                            "linear",
                            "${Text3Copy4}",
                            '-29px',
                            '8px'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            6000,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            9000,
                            1800,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            11400,
                            4200,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "opacity",
                            18600,
                            1800,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            21000,
                            4200,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            31000,
                            1800,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "opacity",
                            7688,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid177",
                            "opacity",
                            9000,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            12796,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            12798,
                            1702,
                            "linear",
                            "${Text3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid93",
                            "left",
                            6500,
                            2271,
                            "linear",
                            "${Text3Copy3}",
                            '8px',
                            '21px'
                        ],
                        [
                            "eid132",
                            "opacity",
                            18500,
                            3356,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            26146,
                            1076,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid206",
                            "filter.blur",
                            6000,
                            2772,
                            "linear",
                            "${Text3}",
                            '0px',
                            '180px'
                        ],
                        [
                            "eid94",
                            "top",
                            13518,
                            2082,
                            "linear",
                            "${Text3Copy4}",
                            '-22px',
                            '20px'
                        ],
                        [
                            "eid208",
                            "opacity",
                            2364,
                            0,
                            "linear",
                            "${Text3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid207",
                            "opacity",
                            6500,
                            3500,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid214",
                            "filter.blur",
                            26146,
                            1076,
                            "linear",
                            "${RectangleCopy4}",
                            '0px',
                            '90px'
                        ],
                        [
                            "eid125",
                            "clip",
                            0,
                            3228,
                            "linear",
                            "${RectangleCopy4}",
                            [121.59412384033203,262,109,0],
                            [48.63764953613281,262,109,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid167",
                            "opacity",
                            29048,
                            2752,
                            "linear",
                            "${RectangleCopy2}",
                            '0.800000011920929',
                            '0'
                        ],
                        [
                            "eid198",
                            "opacity",
                            7688,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '0.10857100039720535',
                            '0.10857100039720535'
                        ],
                        [
                            "eid193",
                            "opacity",
                            13518,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '0.10857100039720535',
                            '0.10857100039720535'
                        ],
                        [
                            "eid183",
                            "opacity",
                            14500,
                            1100,
                            "linear",
                            "${Text3Copy4}",
                            '0.10857100039720535',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            18000,
                            1046,
                            "linear",
                            "${Text3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "top",
                            18546,
                            1688,
                            "linear",
                            "${Text3Copy5}",
                            '-22px',
                            '20px'
                        ],
                        [
                            "eid130",
                            "opacity",
                            20400,
                            2850,
                            "linear",
                            "${RectangleCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "top",
                            6500,
                            2271,
                            "linear",
                            "${Text3Copy3}",
                            '-53px',
                            '10px'
                        ],
                        [
                            "eid54",
                            "clip",
                            0,
                            1200,
                            "linear",
                            "${RectangleCopy2}",
                            [121.59412384033203,262,109,0],
                            [48.63764953613281,262,109,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid64",
                            "clip",
                            54000,
                            6000,
                            "linear",
                            "${RectangleCopy2}",
                            [0,262,109,0],
                            [121.59412384033203,262,109,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid199",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid180",
                            "opacity",
                            7729,
                            2271,
                            "linear",
                            "${Text3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            11722,
                            1018,
                            "linear",
                            "${Text3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid191",
                            "left",
                            0,
                            13611,
                            "linear",
                            "${_0Copy}",
                            '-436px',
                            '0px'
                        ],
                        [
                            "eid192",
                            "left",
                            13611,
                            13611,
                            "linear",
                            "${_0Copy}",
                            '0px',
                            '-436px'
                        ],
                        [
                            "eid189",
                            "left",
                            0,
                            13611,
                            "linear",
                            "${_0}",
                            '-68px',
                            '368px'
                        ],
                        [
                            "eid190",
                            "left",
                            13611,
                            13611,
                            "linear",
                            "${_0}",
                            '368px',
                            '-68px'
                        ],
                        [
                            "eid110",
                            "top",
                            0,
                            2364,
                            "linear",
                            "${Text3}",
                            '-69px',
                            '2px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-5452705");
