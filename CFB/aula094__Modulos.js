// import getTodosCursos, { cursos, carros, getCurso } from "./aula094__ModulosB.js";
// Ao fazer o import default, não é necessário ficar dentro das chaves

import getTodosCursos from "./aula094__ModulosB.js";
// import {cursos as c, carros, getCurso as gc} from "./aula094__ModulosB.js";

import * as m_cursos from './aula094__ModulosB.js'
// Só importa o que foi exportado

// console.log(c, carros)
// console.log(getTodosCursos())
// console.log(gc(0))

console.log(m_cursos.cursos)
console.log(m_cursos.default())
console.log(m_cursos.getCurso(0))