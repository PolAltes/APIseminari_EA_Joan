import mongoose from  'mongoose';
import { model } from 'mongoose';

const subjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    teacher:{
        type: String,
        required: true
    },
    alumni:{
        type: [String],
        required: true,
    }
});

export interface ISubject{
    name: string;
    teacher: string;
    alumni: String[];
};

export const SubjectModel = model('Subject', subjectSchema);