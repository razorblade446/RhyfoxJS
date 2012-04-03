/**
*Plataforma.js (nombre provicional) es un sistema que permite 
*integrar multiples plugins para el analisis de aplicaciones web.
*	Repositorio: https://github.com/jonathan904/Proyecto-tesis-herramientas-web
*	Copyright (c) 2012 Jonathand Alberto Serrano Serrano
*
*/
var fs = require('fs');
//Ruta central del proyecto
var project_path=fs.workingDirectory;
var mainPath=project_path+'/bin/functions.js';
phantom.injectJs(mainPath);
var functions=new GeneralApi();
functions.run();
//getBrokenLinks('http://www.colegioparroquialrincondesuba.edu.co/');*/
//setTimeout("phantom.exit();",600000);
phantom.exit();
