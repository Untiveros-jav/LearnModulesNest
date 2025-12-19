import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    getTasks() {
        return "Lista de tareas desde el servicio";
    }

    createTask() {
        return "Crear una nueva tarea desde el servicio";
    }

    updateTask() {
        return "Actualizar una tarea existente desde el servicio";
    }

    deleteTask() {
        return "Eliminar una tarea existente desde el servicio";
    }

    patchTask() {
        return "Actualizar parcialmente una tarea existente desde el servicio";
    }
}