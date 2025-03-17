// src/routes/user_routes.ts
import express from 'express';
import{
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler
} from './subjects_controller.js'

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nueva materia
 *     description: Añade los detalles de una nueva materia.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                  type: string                              
 *     responses:
 *       201:
 *         description: Materia creada exitosamente
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todas las materias
 *     description: Retorna una lista de todas las materias.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  name:
 *                    type: string
 *                  teacher:
 *                    type: integer
 *                  alumni:
 *                    type: array
 *                    items:
 *                     type: string
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene una materia por ID
 *     description: Retorna los detalles de una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                   type: array
 *                   items:
 *                    type: string
 *       404:
 *         description: Materia no encontrada
 */
router.get('/subjects/:id',getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza una materia por ID
 *     description: Modifica los detalles de una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                   type: array
 *                   items:
 *                    type: string 
 *     responses:
 *       200:
 *         description: Materia actualizada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.put('/subjects/:id',updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una materia por ID
 *     description: Elimina una materia específica de la base de datos.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Materia eliminada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.delete('/subjects/:id',deleteSubjectHandler);

export default router;