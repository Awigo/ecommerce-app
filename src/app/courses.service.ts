export class CoursesService {
    courses = ["course1fromService", "course2", "course3"];

    getCourses() {
        return this.courses;
    }
}