import { execPath } from "process";
import { Doctor, DoctorOnLine } from "./doctor.model";

describe('DoctorOnLine', () => {

    let doctorOnline: DoctorOnLine;

    beforeEach(() => {
        doctorOnline = new DoctorOnLine();
    });

    it('should be truthy', () => {
        expect(doctorOnline).toBeTruthy();
    });

    it('Deverá retornar true quando doctor.status = active', () => {
        const doctor: Doctor = {status:'active'}
        const res = doctorOnline.isActive(doctor);
        expect(res).toBeTruthy();
    });

    it('Deverá retornar false quando doctor.status = inactive', () => {
        const doctor: Doctor = { status: 'inactive' }
        const res = doctorOnline.isActive(doctor);
        expect(res).toBeFalsy();
    });

})
