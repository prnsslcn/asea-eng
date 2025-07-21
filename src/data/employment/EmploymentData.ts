export interface EmployeeProfile {
    id: string;
    name: string;
    photo: string;           // 파일명만
    companyLogo: string;     // 파일명만
    department: string;
    position: string;
}

export interface DepartmentEmployment {
    departmentId: string;
    departmentName: string;
    employees: EmployeeProfile[];
}

export interface EmploymentData {
    departments: DepartmentEmployment[];
}

// 취업자 데이터
export const employmentData: EmploymentData = {
    departments: [
        {
            departmentId: "01",
            departmentName: "Aviation Maintenance",
            employees: [
                {
                    id: "emp-01-001",
                    name: "Dohyeon Gu",
                    photo: "F_BoardJob_17181835520.jpg",
                    companyLogo: "1718183552501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                }
            ]
        }
    ]
};

// 유틸리티 함수들
export const getEmployeesByDepartment = (departmentId: string): EmployeeProfile[] => {
    const department = employmentData.departments.find(dept => dept.departmentId === departmentId);
    return department ? department.employees : [];
};

export const getEmployeePhoto = (filename: string): string => {
    return `/asea-eng/public/images/employment/${filename}`;
};

export const getCompanyLogo = (filename: string): string => {
    return `/asea-eng/public/images/employment/logos/${filename}`;
};

export const getDepartmentEmployees = (departmentId: string): EmployeeProfile[] => {
    const department = employmentData.departments.find(dept => dept.departmentId === departmentId);
    return department ? department.employees : [];
};