import { students } from '../firebase';
/**
 *        fields: {
            name: '',
            email: '',
            age: '',
            phone: '',
            communicationWay: '',
            englishLevel: '',
            startDate: '',
            technicalSkills: '',
            personalPresentation: '',
            studyFromHome: false
        },
 */

class Student {
    static async create(data) {
        const errors = Student.validate(data);

        if(errors.length) {
            return {
                success: false,
                errors: errors
            }
        }

        try {
            const result = await students.add({ ...data, createdAt: Math.floor(Date.now() / 1000) });
            
            return {
                success: true,
                student: { id: result.id, ...data }
            }

        } catch(err) {
            return {
                success: false,
                errors: [err.msg]
            }
        }

    }

    static async fetch(page, lastStudentRecord) {
        let query = students.orderBy('createdAt', 'desc');
        if(page && page !== 1 && lastStudentRecord) {
            query = query.startAfter(lastStudentRecord.createdAt); 
        }
        
        query = query.limit(8);

        try {
            const results = await query.get();

            return {
                success: true,
                data: results.docs.map(item => ({ id: item.id, ...item.data() }) )
            }

        } catch(err) {
            return {
                success: false,
                error: err.message
            }
        }

    }

    static async delete(id) {
        if(!id) return false;
        return await students.doc(id).delete()
            .then(() => true)
            .catch(() => false);
    }

    static async update(data, id) {
        const errors = Student.validate(data);
        if(errors.length) {
            return {
                success: false,
                errors: errors
            }
        }

        // Dont save the ID field to the database
        if(data.id) {
            delete data.id;
        }

        try {
            await students.doc(id).update(data);
            return {
                success: true,
                student: { ...data, id }
            }
        } catch(err) {
            return {
                success: false,
                errors: err.message
            }
        }
    }

    static validate(data) {
        const errors = [];
        const requiredFields = [ 'name', 'email', 'phone', 'communicationWay', 'englishLevel', 'startDate' ];

        for(const key of requiredFields) {
            if(!data[key] || data[key].length === 0)
                errors.push(`The '${key}' field is required`);
        }

        if(data.email && ! Student.validateEmail(data.email)) {
            errors.push('Invalid Email Address');
        }

        if(data.phone && ! Student.validatePhoneSimple(data.phone)) {
            errors.push('Invalid Phone Number');
        }

        if(typeof data.age === 'string' && data.age.length === 0)
            errors.push(`The 'age' field is required`);
        if(typeof data.age === 'number' && isNaN(data.age))
            errors.push("The 'age' field reqires a numeric input");

        return errors;
    }

    static validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static validatePhoneSimple(phone) {
        var re = /^(\+)?([ 0-9]){10,16}$/;
        return re.test(phone);
    }
}

export default Student;