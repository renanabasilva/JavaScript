const cursos = ['HTML', 'CSS','Javascript','C++','Python','Java','C#']
const carros = ['Polo', 'T-cross','Golf','Onix','Cruze','Argo','Cronos']

// const getTodosCursos = () => {
//   return cursos
// }

export default function getTodosCursos () {
  return cursos
}

function getCurso(i_curso){
  return cursos[i_curso]
}


export {cursos, carros, getCurso}  
// export default getTodosCursos
