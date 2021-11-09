export interface Doctor {
    status: 'inactive' | 'active'
}

export class DoctorOnLine {
    isActive(doctor: Doctor){
        if (doctor.status === 'active') {
            return true
        } else {
            return false
        }
    }
}
