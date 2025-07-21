// src/data/employment/EmploymentData.ts

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
                },
                {
                    id: "emp-01-002",
                    name: "Junbeom Yu",
                    photo: "F_BoardJob_17478087080.png",
                    companyLogo: "1747808708dbe0.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-003",
                    name: "Minwoo Kong",
                    photo: "F_BoardJob_17478086680.jpg",
                    companyLogo: "17478086682690.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-004",
                    name: "Eunsang Lee",
                    photo: "F_BoardJob_17478074910.jpg",
                    companyLogo: "17478075982690.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-005",
                    name: "Yuri Jung",
                    photo: "F_BoardJob_17478073110.png",
                    companyLogo: "17478073606c72.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-006",
                    name: "Jihoon Ahn",
                    photo: "F_BoardJob_17478070850.jpg",
                    companyLogo: "1747807085dbe0.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-007",
                    name: "Kihyung Kim",
                    photo: "F_BoardJob_17256026060.png",
                    companyLogo: "1725602606fa2f.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-008",
                    name: "Yeonho Kang",
                    photo: "F_BoardJob_17256025590.jpg",
                    companyLogo: "1725602559fa2f.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-009",
                    name: "Kyungseok Ha",
                    photo: "F_BoardJob_17256025230.jpg",
                    companyLogo: "1725602523fa2f.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-010",
                    name: "Sunmin Park",
                    photo: "F_BoardJob_17256024850.jpg",
                    companyLogo: "1725602485fa2f.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-011",
                    name: "Yongchan Park",
                    photo: "F_BoardJob_17182475630.jpg",
                    companyLogo: "1718247563501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-012",
                    name: "Sungmin Jo",
                    photo: "F_BoardJob_17181852630.jpg",
                    companyLogo: "1718185263501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-013",
                    name: "Bumseok Jung",
                    photo: "F_BoardJob_17181852090.jpg",
                    companyLogo: "1718185209501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-014",
                    name: "Junseo Lim",
                    photo: "F_BoardJob_17181851580.jpg",
                    companyLogo: "17185974462bd3.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-015",
                    name: "Junghyun Park",
                    photo: "F_BoardJob_17181850900.jpg",
                    companyLogo: "1718185091501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-016",
                    name: "Yongwoo Kim",
                    photo: "F_BoardJob_17181848710.jpg",
                    companyLogo: "1718184872501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-017",
                    name: "Youngsoo Ko",
                    photo: "F_BoardJob_17181834530.jpg",
                    companyLogo: "1718183454501a.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-018",
                    name: "Gyutae Park",
                    photo: "F_BoardJob_17119627610.jpg",
                    companyLogo: "1711962922168c.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-019",
                    name: "Kang",
                    photo: "F_BoardJob_17120233540.jpg",
                    companyLogo: "17120233540677.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-020",
                    name: "Sumin Lee",
                    photo: "F_BoardJob_16932670141.jpg",
                    companyLogo: "1693267014616e.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-021",
                    name: "Kim",
                    photo: "F_BoardJob_16716084140.jpg",
                    companyLogo: "1671608414aa71.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-022",
                    name: "Han",
                    photo: "F_BoardJob_16716079650.jpg",
                    companyLogo: "1671607965aa71.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-023",
                    name: "Ahn",
                    photo: "F_BoardJob_16710873420.jpg",
                    companyLogo: "1671087342f6c3.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-024",
                    name: "Lee",
                    photo: "F_BoardJob_16710873100.jpg",
                    companyLogo: "1671087311f6c3.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-025",
                    name: "Park",
                    photo: "F_BoardJob_16720409651.jpg",
                    companyLogo: "1671087196f6c3.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-026",
                    name: "Jaejun Oh",
                    photo: "F_BoardJob_15541090850.jpg",
                    companyLogo: "155738976232be.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-027",
                    name: "Dongsun Ryu",
                    photo: "F_BoardJob_15541091030.jpg",
                    companyLogo: "155738977332be.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-028",
                    name: "Sungyong Kim",
                    photo: "F_BoardJob_15541091190.jpg",
                    companyLogo: "1670897137ff18.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-029",
                    name: "Yubin Kim",
                    photo: "F_BoardJob_15540834200.JPG",
                    companyLogo: "155858603444a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-030",
                    name: "Jinsu Ha",
                    photo: "F_BoardJob_15540834050.jpg",
                    companyLogo: "155858636344a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-031",
                    name: "Cheolhan Lee",
                    photo: "F_BoardJob_15540833840.JPG",
                    companyLogo: "155858637644a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-032",
                    name: "Junghun Baek",
                    photo: "F_BoardJob_15525464800.JPG",
                    companyLogo: "155960934787c6.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-033",
                    name: "Yunsun Won",
                    photo: "F_BoardJob_15525464590.JPG",
                    companyLogo: "155858641044a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-034",
                    name: "Yunjin Nam",
                    photo: "F_BoardJob_15525464360.JPG",
                    companyLogo: "155858642244a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-035",
                    name: "Changhyun Lee",
                    photo: "F_BoardJob_15525463480.JPG",
                    companyLogo: "1670904946f6c3.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-036",
                    name: "Hyunchae Lim",
                    photo: "F_BoardJob_15525463260.JPG",
                    companyLogo: "155858644944a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-037",
                    name: "Yongjun Song",
                    photo: "F_BoardJob_15525463040.JPG",
                    companyLogo: "155858646644a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-038",
                    name: "Eojin Yoon",
                    photo: "F_BoardJob_15525462770.JPG",
                    companyLogo: "155858649044a5.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-039",
                    name: "Jungwon Yoon",
                    photo: "F_BoardJob_15419979070.jpg",
                    companyLogo: "15585147192acb.jpg",
                    department: "Aviation Maintenance",
                    position: "Aircraft Maintenance Engineer"
                },
                {
                    id: "emp-01-040",
                    name: "Taehun Lee",
                    photo: "F_BoardJob_15419978780.jpg",
                    companyLogo: "15585147312acb.jpg",
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
    return `/asea-eng/images/employment/${filename}`;
};

export const getCompanyLogo = (filename: string): string => {
    return `/asea-eng/images/employment/logos/${filename}`;
};

export const getDepartmentEmployees = (departmentId: string): EmployeeProfile[] => {
    const department = employmentData.departments.find(dept => dept.departmentId === departmentId);
    return department ? department.employees : [];
};