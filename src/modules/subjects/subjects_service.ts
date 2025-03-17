// src/services/subjects_service.ts
import {SubjectModel, ISubject} from './subjects_models.js'; 

export const createSubject = async (subjectData: ISubject) => {
    const subject = new SubjectModel(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await SubjectModel.find();
};

export const getSubjectById = async (id: string) => {
    return await SubjectModel.findById(id);
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await SubjectModel.updateOne({id:id}, {$set:updateData});
};

export const deleteSubject = async (id: string) => {
    return await SubjectModel.deleteOne({_id : id});
};