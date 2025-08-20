// mydrumz-studio/schemas/index.ts
import page from './page'
import schemaTypes from './schemaTypes'

// Si "schemaTypes" ya es un array, lo concatenamos; 
// si no, aquí podrías poner directamente [ page, ...tusOtrosTipos ]
export const allSchemas = [
  page,
  ...(Array.isArray(schemaTypes) ? schemaTypes : [])
]
