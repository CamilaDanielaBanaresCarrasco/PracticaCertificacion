import { Comuna } from "./modelsComuna.js";
import { Region } from "./modelsRegion.js";
import { Curso } from "./modelsCurso.js";
import { Plan_Formativo } from "./modelsPlanFormativo.js";
import { Estudiante } from "./modelsEstudiante.js";

// Definir relaciones aquí
Comuna.belongsTo(Region, {
  foreignKey: 'codigo_region',
});

Estudiante.belongsTo(Comuna, {
  foreignKey: 'codigo_comuna',
});

Estudiante.belongsTo(Curso, {
  foreignKey: 'codigo_curso',
});

Curso.belongsTo(Comuna, {
  foreignKey: 'codigo_comuna',
});

Curso.belongsTo(Plan_Formativo, {
  foreignKey: 'codigo_plan_formativo',
});