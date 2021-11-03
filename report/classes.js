var classes = [
    {
        "name": "App\\Controller\\HomeController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "test",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "test2",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Symfony\\Component\\HttpFoundation\\Response"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "lcom": 3,
        "length": 46,
        "vocabulary": 19,
        "volume": 195.4,
        "difficulty": 3.19,
        "effort": 622.85,
        "level": 0.31,
        "bugs": 0.07,
        "time": 35,
        "intelligentContent": 61.3,
        "number_operators": 12,
        "number_operands": 34,
        "number_operators_unique": 3,
        "number_operands_unique": 16,
        "cloc": 11,
        "loc": 34,
        "lloc": 23,
        "mi": 92.69,
        "mIwoC": 54.12,
        "commentWeight": 38.57,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.83,
        "relativeSystemComplexity": 2.83,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 5.5,
        "totalSystemComplexity": 8.5,
        "package": "App\\Controller\\",
        "pageRank": 0.25,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\ArticleRepository",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 34,
        "loc": 41,
        "lloc": 8,
        "mi": 220.36,
        "mIwoC": 171,
        "commentWeight": 49.36,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "App\\Repository\\",
        "pageRank": 0.25,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Entity\\Article",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTitle",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTitle",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContent",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setContent",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getThumbnail",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setThumbnail",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 3,
        "wmc": 7,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 26,
        "vocabulary": 6,
        "volume": 67.21,
        "difficulty": 4,
        "effort": 268.84,
        "level": 0.25,
        "bugs": 0.02,
        "time": 15,
        "intelligentContent": 16.8,
        "number_operators": 10,
        "number_operands": 16,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 17,
        "loc": 56,
        "lloc": 39,
        "mi": 90.04,
        "mIwoC": 52.36,
        "commentWeight": 37.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 7.43,
        "relativeSystemComplexity": 7.43,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 52,
        "totalSystemComplexity": 52,
        "package": "App\\Entity\\",
        "pageRank": 0.25,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Kernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "configureContainer",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureRoutes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Component\\HttpKernel\\Kernel",
            "Symfony\\Component\\DependencyInjection\\Loader\\Configurator\\ContainerConfigurator",
            "Symfony\\Component\\Routing\\Loader\\Configurator\\RoutingConfigurator"
        ],
        "parents": [
            "Symfony\\Component\\HttpKernel\\Kernel"
        ],
        "lcom": 1,
        "length": 40,
        "vocabulary": 19,
        "volume": 169.92,
        "difficulty": 1.76,
        "effort": 299.85,
        "level": 0.57,
        "bugs": 0.06,
        "time": 17,
        "intelligentContent": 96.29,
        "number_operators": 10,
        "number_operands": 30,
        "number_operators_unique": 2,
        "number_operands_unique": 17,
        "cloc": 0,
        "loc": 26,
        "lloc": 26,
        "mi": 53.11,
        "mIwoC": 53.11,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "package": "App\\",
        "pageRank": 0.25,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    }
]