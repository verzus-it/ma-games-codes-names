import {Code} from '../codes';
import {CodesToStudentLevels} from './CodesToStudentLevels';

export class CodesToStudentLevel {
    static get(courseLevel:number):Code[]|never {
        const codesToCourseLevels = CodesToStudentLevels.get();

        const codesToCourseLevel = codesToCourseLevels[courseLevel];

        if (!codesToCourseLevel)
            throw new Error(`Failed to look for game codes by course level: ${courseLevel}.`);

        return codesToCourseLevel;
    }
}