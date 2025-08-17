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
        },
        {
            departmentId: "02",
            departmentName: "Smart Safety Diagnostics",
            employees: [
                {
                    id: "emp-02-001",
                    name: "Wonyoung Noh",
                    photo: "F_BoardJob_17187022451.jpg",
                    companyLogo: "1717056815a249.png",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-002",
                    name: "Kim",
                    photo: "F_BoardJob_17120218440.jpg",
                    companyLogo: "1712021845b219.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-003",
                    name: "Chu",
                    photo: "F_BoardJob_17120225430.jpg",
                    companyLogo: "17120225435343.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-004",
                    name: "Park",
                    photo: "F_BoardJob_17120221470.jpg",
                    companyLogo: "171202214742a8.JPG",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-005",
                    name: "Kim",
                    photo: "F_BoardJob_16977054700.jpg",
                    companyLogo: "1697705470d84d.jfif",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-006",
                    name: "Lee",
                    photo: "F_BoardJob_17001077230.jpg",
                    companyLogo: "1700107723b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-007",
                    name: "Yoon",
                    photo: "F_BoardJob_17001075910.jpg",
                    companyLogo: "1700107591b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-008",
                    name: "Choi",
                    photo: "F_BoardJob_16807619710.png",
                    companyLogo: "16807619712305.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-009",
                    name: "Kim",
                    photo: "F_BoardJob_17005258450.jpg",
                    companyLogo: "17005258465827.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-010",
                    name: "Park",
                    photo: "F_BoardJob_16493053080.jpg",
                    companyLogo: "1649305308b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-011",
                    name: "Kim",
                    photo: "F_BoardJob_16493050590.jpg",
                    companyLogo: "1649305059a4bf.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-012",
                    name: "Kang",
                    photo: "F_BoardJob_16492982400.jpg",
                    companyLogo: "16492982406f63.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-013",
                    name: "Kim",
                    photo: "F_BoardJob_16393572480.jpg",
                    companyLogo: "1639357248d8f9.JPG",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-014",
                    name: "Taehun Kim",
                    photo: "F_BoardJob_16516463930.jpg",
                    companyLogo: "1626312299b0f0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-015",
                    name: "Yewon Ra",
                    photo: "F_BoardJob_16263120020.jpg",
                    companyLogo: "1626312002b0f0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-016",
                    name: "Juho Yoon",
                    photo: "F_BoardJob_16516463740.jpg",
                    companyLogo: "1626311919b0f0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-017",
                    name: "Sohyun Park",
                    photo: "F_BoardJob_16151891730.jpg",
                    companyLogo: "1615796028b2e8.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-018",
                    name: "Daniel Kim",
                    photo: "F_BoardJob_16030696230.jpg",
                    companyLogo: "1603069623b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-019",
                    name: "Kwanghun Kim",
                    photo: "F_BoardJob_15953788930.jpg",
                    companyLogo: "1670897187ff18.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-020",
                    name: "Sungeun Kim",
                    photo: "F_BoardJob_15946118120.jpg",
                    companyLogo: "15946118122c9d.JPG",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-021",
                    name: "Seokmin Lee",
                    photo: "F_BoardJob_15828726020.jpg",
                    companyLogo: "1582872602b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-022",
                    name: "Minki Lee",
                    photo: "F_BoardJob_15828709430.JPG",
                    companyLogo: "15828709434711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-023",
                    name: "Minwook Kim",
                    photo: "F_BoardJob_15828705600.JPG",
                    companyLogo: "15828705604711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-024",
                    name: "Hyobeom Choi",
                    photo: "F_BoardJob_15828705080.jpg",
                    companyLogo: "15828705084711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-025",
                    name: "Woongki Baek",
                    photo: "F_BoardJob_15828704550.jpg",
                    companyLogo: "1582870456b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-026",
                    name: "Geonui Lee",
                    photo: "F_BoardJob_15828704110.jpg",
                    companyLogo: "15828704114711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-027",
                    name: "Kiwon Yu",
                    photo: "F_BoardJob_15828703310.jpg",
                    companyLogo: "15828703316f63.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-028",
                    name: "Sangha Gan",
                    photo: "F_BoardJob_15828702860.jpg",
                    companyLogo: "15828702864711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-029",
                    name: "Sanghyun Kim",
                    photo: "F_BoardJob_15828702340.jpg",
                    companyLogo: "1582870234b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-030",
                    name: "Geon Han",
                    photo: "F_BoardJob_15828701970.jpg",
                    companyLogo: "15828701974711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-031",
                    name: "Donghyun Choi",
                    photo: "F_BoardJob_15828701450.jpg",
                    companyLogo: "15828701454711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-032",
                    name: "Yongsin Jo",
                    photo: "F_BoardJob_15816651120.jpg",
                    companyLogo: "1581665112b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-033",
                    name: "Myungjin Jung",
                    photo: "F_BoardJob_15816641560.jpg",
                    companyLogo: "1581664156b7d0.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-034",
                    name: "Sungchun Lee",
                    photo: "F_BoardJob_15816641060.jpg",
                    companyLogo: "15816641064711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-035",
                    name: "Taehyung Yu",
                    photo: "F_BoardJob_15816640570.jpg",
                    companyLogo: "15816640586f63.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-036",
                    name: "Jonghan Kim",
                    photo: "F_BoardJob_15816639900.jpg",
                    companyLogo: "15816639904711.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-037",
                    name: "Kyungwoo Park",
                    photo: "F_BoardJob_15816639390.jpg",
                    companyLogo: "1581663939b219.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-038",
                    name: "Minseo Park",
                    photo: "F_BoardJob_15802636130.jpg",
                    companyLogo: "1580263613bdd5.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-039",
                    name: "Jiye Heo",
                    photo: "F_BoardJob_15802635200.jpg",
                    companyLogo: "15802635201f8a.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                },
                {
                    id: "emp-02-040",
                    name: "Jaejung Lim",
                    photo: "F_BoardJob_15802630200.jpg",
                    companyLogo: "15802630201f8a.jpg",
                    department: "Smart Safety Diagnostics",
                    position: "Safety Diagnostics Engineer"
                }
            ]
        },
        // 항공관광계열 (03) 데이터 - EmploymentData.ts에 추가할 부분
        {
            departmentId: "03",
            departmentName: "Aviation Tourism",
            employees: [
                {
                    id: "emp-03-001",
                    name: "Sohyeon Yoon",
                    photo: "F_BoardJob_15839918230.jpg",
                    companyLogo: "15952076665099.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-002",
                    name: "Junseong Shin",
                    photo: "F_BoardJob_15839916640.jpg",
                    companyLogo: "1584508977ba38.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Specialist"
                },
                {
                    id: "emp-03-003",
                    name: "Jonghyeon Shin",
                    photo: "F_BoardJob_15839915900.jpg",
                    companyLogo: "158443288026ac.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-004",
                    name: "Eungsu Son",
                    photo: "F_BoardJob_15839914250.jpg",
                    companyLogo: "15845089882539.jpg",
                    department: "Aviation Tourism",
                    position: "Hospitality Manager"
                },
                {
                    id: "emp-03-005",
                    name: "Yujin Bae",
                    photo: "F_BoardJob_15839858990.JPG",
                    companyLogo: "15845089987468.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-006",
                    name: "Jina Na",
                    photo: "F_BoardJob_15519209850.JPG",
                    companyLogo: "15584975366379.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-007",
                    name: "Seona Kim",
                    photo: "F_BoardJob_15839854130.jpg",
                    companyLogo: "15952076432843.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-008",
                    name: "Minjeong Kim",
                    photo: "F_BoardJob_15839853400.jpg",
                    companyLogo: "15845090204294.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-009",
                    name: "Deokhwan Kim",
                    photo: "F_BoardJob_15839852880.jpg",
                    companyLogo: "158399057026ac.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Manager"
                },
                {
                    id: "emp-03-010",
                    name: "Hyeonji Go",
                    photo: "F_BoardJob_15828711680.jpg",
                    companyLogo: "1670904961f6c3.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-011",
                    name: "Minjeong Kim",
                    photo: "F_BoardJob_15802708300.jpg",
                    companyLogo: "158434382647ff.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-012",
                    name: "Hanul Jung",
                    photo: "F_BoardJob_15802638760.jpg",
                    companyLogo: "158399985834ba.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Specialist"
                },
                {
                    id: "emp-03-013",
                    name: "Yeji Yoon",
                    photo: "F_BoardJob_15734368040.JPG",
                    companyLogo: "1573436804c60e.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-014",
                    name: "Hyeonjeong Jeon",
                    photo: "F_BoardJob_15627331810.jpg",
                    companyLogo: "16708288854ed0.jpg",
                    department: "Aviation Tourism",
                    position: "Hospitality Manager"
                },
                {
                    id: "emp-03-015",
                    name: "Doori Yang",
                    photo: "F_BoardJob_15598836650.jpg",
                    companyLogo: "155988366500f8.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-016",
                    name: "Songyi Han",
                    photo: "F_BoardJob_15566773690.JPG",
                    companyLogo: "15596108537f45.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-017",
                    name: "Sol Jeon",
                    photo: "F_BoardJob_15554731130.JPG",
                    companyLogo: "15596091234c5c.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Coordinator"
                },
                {
                    id: "emp-03-018",
                    name: "Minki Lee",
                    photo: "F_BoardJob_15554730960.JPG",
                    companyLogo: "15583408038ec8.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Manager"
                },
                {
                    id: "emp-03-019",
                    name: "Jihwan Jung",
                    photo: "F_BoardJob_15537630580.JPG",
                    companyLogo: "1558339500cc33.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-020",
                    name: "Hyeonseop Shin",
                    photo: "F_BoardJob_15537630380.JPG",
                    companyLogo: "15845092607c38.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-021",
                    name: "Sohyeon An",
                    photo: "F_BoardJob_15541200140.jpg",
                    companyLogo: "155860120384aa.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Specialist"
                },
                {
                    id: "emp-03-022",
                    name: "Jin Ryu",
                    photo: "F_BoardJob_15537629980.JPG",
                    companyLogo: "1664439765c380.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-023",
                    name: "Jaeheon Lee",
                    photo: "F_BoardJob_15525487350.JPG",
                    companyLogo: "158399058726ac.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-024",
                    name: "Dajeong Hwang",
                    photo: "F_BoardJob_15520058080.JPG",
                    companyLogo: "1559609288d80c.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-025",
                    name: "Hyein Lee",
                    photo: "F_BoardJob_15520056210.JPG",
                    companyLogo: "15952082677fff.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Coordinator"
                },
                {
                    id: "emp-03-026",
                    name: "Heesu Lee",
                    photo: "F_BoardJob_15520050520.JPG",
                    companyLogo: "155960931576f2.jpg",
                    department: "Aviation Tourism",
                    position: "Hospitality Manager"
                },
                {
                    id: "emp-03-027",
                    name: "Minjeong Kim",
                    photo: "F_BoardJob_15520050260.JPG",
                    companyLogo: "15596093310708.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-028",
                    name: "Soyeon Park",
                    photo: "F_BoardJob_15519376310.JPG",
                    companyLogo: "15596082153319.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Specialist"
                },
                {
                    id: "emp-03-029",
                    name: "Gyumin Kim",
                    photo: "F_BoardJob_15519366840.JPG",
                    companyLogo: "155960823277e8.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-030",
                    name: "Kim",
                    photo: "F_BoardJob_16393577440.jpg",
                    companyLogo: "1639357744d000.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-031",
                    name: "Yoon",
                    photo: "F_BoardJob_16393576030.jpg",
                    companyLogo: "16393576271e12.JPG",
                    department: "Aviation Tourism",
                    position: "Tourism Specialist"
                },
                {
                    id: "emp-03-032",
                    name: "Kim",
                    photo: "F_BoardJob_16370508930.jpg",
                    companyLogo: "16370508930c68.PNG",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-033",
                    name: "Kim",
                    photo: "F_BoardJob_16370500560.jpg",
                    companyLogo: "1637050056eed2.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Coordinator"
                },
                {
                    id: "emp-03-034",
                    name: "Cho",
                    photo: "F_BoardJob_16370498760.jpg",
                    companyLogo: "1637049876eed2.jpg",
                    department: "Aviation Tourism",
                    position: "Hospitality Manager"
                },
                {
                    id: "emp-03-035",
                    name: "Gok",
                    photo: "F_BoardJob_16305407610.PNG",
                    companyLogo: "1630540761eed2.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-036",
                    name: "Hansol Lee",
                    photo: "F_BoardJob_16238230900.jpg",
                    companyLogo: "16238230917c38.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Manager"
                },
                {
                    id: "emp-03-037",
                    name: "Kwangsu Lee",
                    photo: "F_BoardJob_16238230050.JPG",
                    companyLogo: "16238230050b19.jpg",
                    department: "Aviation Tourism",
                    position: "Aviation Service Specialist"
                },
                {
                    id: "emp-03-038",
                    name: "Soonyoung Lee",
                    photo: "F_BoardJob_16190698220.jpg",
                    companyLogo: "16190698227000.jpg",
                    department: "Aviation Tourism",
                    position: "Flight Attendant"
                },
                {
                    id: "emp-03-039",
                    name: "Jeongwoo Cho",
                    photo: "F_BoardJob_16137154780.JPG",
                    companyLogo: "16151934984e82.jpg",
                    department: "Aviation Tourism",
                    position: "Tourism Specialist"
                },
                {
                    id: "emp-03-040",
                    name: "Junhee Kim",
                    photo: "F_BoardJob_16067256030.JPG",
                    companyLogo: "1606725603cc95.jpg",
                    department: "Aviation Tourism",
                    position: "Hospitality Manager"
                }
            ]
        },
        {
            departmentId: "05",
            departmentName: "Aviation Security",
            employees: [
                {
                    id: "emp-05-001",
                    name: "Kang",
                    photo: "F_BoardJob_17119652390.jpg",
                    companyLogo: "1711965239bff1.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-002",
                    name: "Hong",
                    photo: "F_BoardJob_17119648300.jpg",
                    companyLogo: "1711964830211e.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-003",
                    name: "Kim",
                    photo: "F_BoardJob_17119646410.jpg",
                    companyLogo: "1711964641811d.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-004",
                    name: "Yang",
                    photo: "F_BoardJob_17119644170.jpg",
                    companyLogo: "17119644176933.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-005",
                    name: "Cho",
                    photo: "F_BoardJob_17119654590.jpg",
                    companyLogo: "1712021868d25a.png",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-006",
                    name: "Park",
                    photo: "F_BoardJob_16977035740.jpg",
                    companyLogo: "1697703574d84d.jpg",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-007",
                    name: "Hong",
                    photo: "F_BoardJob_16977675970.jpg",
                    companyLogo: "1697767597d84d.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-008",
                    name: "Jung",
                    photo: "F_BoardJob_16492955660.jpg",
                    companyLogo: "16492955666bed.JPG",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-009",
                    name: "Ki",
                    photo: "F_BoardJob_16492954980.jpg",
                    companyLogo: "16492954986bed.JPG",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-010",
                    name: "Jung",
                    photo: "F_BoardJob_16492949770.jpg",
                    companyLogo: "1649294977811e.JPG",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-011",
                    name: "Park",
                    photo: "F_BoardJob_16492949030.jpg",
                    companyLogo: "1649294903811e.JPG",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-012",
                    name: "Cho",
                    photo: "F_BoardJob_16492945070.jpg",
                    companyLogo: "16492945078845.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-013",
                    name: "Choi",
                    photo: "F_BoardJob_16492938390.jpg",
                    companyLogo: "1649293839325a.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-014",
                    name: "Kim",
                    photo: "F_BoardJob_16492936620.jpg",
                    companyLogo: "1649293662325a.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-015",
                    name: "Yu",
                    photo: "F_BoardJob_16492935980.jpg",
                    companyLogo: "1649293598325a.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-016",
                    name: "Jinwoo Park",
                    photo: "F_BoardJob_15794952210.JPG",
                    companyLogo: "15794952219572.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-017",
                    name: "Jaeseon Cho",
                    photo: "F_BoardJob_15794949820.JPG",
                    companyLogo: "158434425576b7.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-018",
                    name: "Jongwon Park",
                    photo: "F_BoardJob_15794948860.jpg",
                    companyLogo: "1579494886325a.jpg",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-019",
                    name: "Hyejeong Yang",
                    photo: "F_BoardJob_15794948420.JPG",
                    companyLogo: "15794948427f45.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-020",
                    name: "Hyeonju Oh",
                    photo: "F_BoardJob_15794947880.JPG",
                    companyLogo: "1584344323f4fd.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-021",
                    name: "Seongyong Yoon",
                    photo: "F_BoardJob_15794947380.JPG",
                    companyLogo: "15843443353cdc.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-022",
                    name: "Minki An",
                    photo: "F_BoardJob_15794945120.JPG",
                    companyLogo: "1584344351a1ac.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-023",
                    name: "Jinkyu Moon",
                    photo: "F_BoardJob_15794943960.JPG",
                    companyLogo: "1584344363a1ac.jpg",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-024",
                    name: "Minjeong Kim",
                    photo: "F_BoardJob_15794942930.jpg",
                    companyLogo: "15794942937f45.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-025",
                    name: "Sangjun Lee",
                    photo: "F_BoardJob_15794934270.jpg",
                    companyLogo: "15794934277f45.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-026",
                    name: "Suhyeon Kim",
                    photo: "F_BoardJob_15794932890.jpg",
                    companyLogo: "157949328964a2.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-027",
                    name: "Hayoung Park",
                    photo: "F_BoardJob_15794932230.jpg",
                    companyLogo: "16013624744ca5.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-028",
                    name: "Taeyeon Kim",
                    photo: "F_BoardJob_15794920200.jpg",
                    companyLogo: "15794920207f45.jpg",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-029",
                    name: "Jieun Kim",
                    photo: "F_BoardJob_15780233200.jpg",
                    companyLogo: "15780233207f45.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-030",
                    name: "Yoonbin Jang",
                    photo: "F_BoardJob_15780181400.jpg",
                    companyLogo: "15780181207f45.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-031",
                    name: "Sekyung Kwon",
                    photo: "F_BoardJob_15780180650.jpg",
                    companyLogo: "15780180657f45.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-032",
                    name: "Heeji Choi",
                    photo: "F_BoardJob_15780180010.jpg",
                    companyLogo: "158434440043b1.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-033",
                    name: "Donghyeon Park",
                    photo: "F_BoardJob_15780175360.jpg",
                    companyLogo: "15780175367f45.jpg",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-034",
                    name: "Sujin Kim",
                    photo: "F_BoardJob_15780172750.jpg",
                    companyLogo: "157801727572c0.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-035",
                    name: "Yoonjae Jeon",
                    photo: "F_BoardJob_15750180170.bmp",
                    companyLogo: "16709168880cb6.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                },
                {
                    id: "emp-05-036",
                    name: "Onyu Lee",
                    photo: "F_BoardJob_15661772080.JPG",
                    companyLogo: "15661772087f45.jpg",
                    department: "Aviation Security",
                    position: "Aviation Security Specialist"
                },
                {
                    id: "emp-05-037",
                    name: "Hyeonhee Yu",
                    photo: "F_BoardJob_15525487730.JPG",
                    companyLogo: "15585937987f45.jpg",
                    department: "Aviation Security",
                    position: "Security Officer"
                },
                {
                    id: "emp-05-038",
                    name: "Hyeongjin Kim",
                    photo: "F_BoardJob_15520049040.JPG",
                    companyLogo: "15585814802dd4.jpg",
                    department: "Aviation Security",
                    position: "PMC Security Officer"
                },
                {
                    id: "emp-05-039",
                    name: "Junho Park",
                    photo: "F_BoardJob_15520048740.JPG",
                    companyLogo: "16709177530cb6.jpg",
                    department: "Aviation Security",
                    position: "Airport Security Inspector"
                },
                {
                    id: "emp-05-040",
                    name: "Hyeonsuk Jung",
                    photo: "F_BoardJob_15520048340.JPG",
                    companyLogo: "15585938247f45.jpg",
                    department: "Aviation Security",
                    position: "Security Supervisor"
                }
            ]
        },
        {
            departmentId: "06",
            departmentName: "Defense & Police AI",
            employees: [
                {
                    id: "emp-06-001",
                    name: "Dooyeon Lee",
                    photo: "F_BoardJob_15985848050.JPG",
                    companyLogo: "167359549179ad.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-002",
                    name: "Daeun Jang",
                    photo: "F_BoardJob_15985847540.JPG",
                    companyLogo: "167359546479ad.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-003",
                    name: "Seungwoo Ma",
                    photo: "F_BoardJob_15985846400.jpg",
                    companyLogo: "167359534479ad.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-004",
                    name: "Sujeong Jwa",
                    photo: "F_BoardJob_15985845790.jpg",
                    companyLogo: "1673595312aa71.jpg",
                    department: "Defense & Police AI",
                    position: "AI Security Specialist"
                },
                {
                    id: "emp-06-005",
                    name: "Moonseok Kang",
                    photo: "F_BoardJob_15843278210.jpg",
                    companyLogo: "1673595278aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-006",
                    name: "Moonseop Kim",
                    photo: "F_BoardJob_15843277670.jpg",
                    companyLogo: "1673595258aa71.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-007",
                    name: "Taeil Kim",
                    photo: "F_BoardJob_15843276940.jpg",
                    companyLogo: "1673595224aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-008",
                    name: "Hyeongeun Cho",
                    photo: "F_BoardJob_15843276280.jpg",
                    companyLogo: "1673595200aa71.jpg",
                    department: "Defense & Police AI",
                    position: "AI Technology Specialist"
                },
                {
                    id: "emp-06-009",
                    name: "Sejun Lim",
                    photo: "F_BoardJob_15843273180.jpg",
                    companyLogo: "1673595169aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-010",
                    name: "Jiseon Kim",
                    photo: "F_BoardJob_15843272730.jpg",
                    companyLogo: "1584327273a835.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-011",
                    name: "Dongwook Jung",
                    photo: "F_BoardJob_15843271850.jpg",
                    companyLogo: "1673595104aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-012",
                    name: "Seongmin Choi",
                    photo: "F_BoardJob_15843271220.jpg",
                    companyLogo: "1584327122a835.jpg",
                    department: "Defense & Police AI",
                    position: "AI Security Specialist"
                },
                {
                    id: "emp-06-013",
                    name: "Chaemin Jung",
                    photo: "F_BoardJob_15843265560.jpg",
                    companyLogo: "1673595026aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-014",
                    name: "Jinwoo Kim",
                    photo: "F_BoardJob_15843264760.jpg",
                    companyLogo: "1673594976aa71.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-015",
                    name: "Jinyoung Seok",
                    photo: "F_BoardJob_15843263900.jpg",
                    companyLogo: "1673594950aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-016",
                    name: "Seongyeon Cho",
                    photo: "F_BoardJob_15843261890.JPG",
                    companyLogo: "1673594778aa71.jpg",
                    department: "Defense & Police AI",
                    position: "AI Technology Specialist"
                },
                {
                    id: "emp-06-017",
                    name: "Minjae Kim",
                    photo: "F_BoardJob_15843249390.jpg",
                    companyLogo: "16735945924330.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-018",
                    name: "Jaewook Jung",
                    photo: "F_BoardJob_15843248970.jpg",
                    companyLogo: "16735947384330.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-019",
                    name: "Hyeontak Lee",
                    photo: "F_BoardJob_15843248490.jpg",
                    companyLogo: "16735946994330.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-020",
                    name: "Minjun Kim",
                    photo: "F_BoardJob_15843247290.jpg",
                    companyLogo: "16735946744330.jpg",
                    department: "Defense & Police AI",
                    position: "AI Security Specialist"
                },
                {
                    id: "emp-06-021",
                    name: "Juhyeong Kang",
                    photo: "F_BoardJob_15843246740.jpg",
                    companyLogo: "16735946454330.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-022",
                    name: "Woojin Lee",
                    photo: "F_BoardJob_15843246250.jpg",
                    companyLogo: "16735946204330.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-023",
                    name: "Daehyeon Bang",
                    photo: "F_BoardJob_15843244270.jpg",
                    companyLogo: "16735945674330.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-024",
                    name: "Rina Kim",
                    photo: "F_BoardJob_15843243770.jpg",
                    companyLogo: "1673594540aa71.jpg",
                    department: "Defense & Police AI",
                    position: "AI Technology Specialist"
                },
                {
                    id: "emp-06-025",
                    name: "Jeongmin Lee",
                    photo: "F_BoardJob_15843243290.jpg",
                    companyLogo: "1673594512aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-026",
                    name: "Wanhee Lee",
                    photo: "F_BoardJob_15843242760.jpg",
                    companyLogo: "16735944874330.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-027",
                    name: "Hyeonil Kim",
                    photo: "F_BoardJob_15843242070.jpg",
                    companyLogo: "16735944624330.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-028",
                    name: "Jaehyeon Heo",
                    photo: "F_BoardJob_15843241610.jpg",
                    companyLogo: "16735944134330.jpg",
                    department: "Defense & Police AI",
                    position: "AI Security Specialist"
                },
                {
                    id: "emp-06-029",
                    name: "Seonghyeon Park",
                    photo: "F_BoardJob_15843241140.jpg",
                    companyLogo: "16735942284330.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-030",
                    name: "Yunjae Lee",
                    photo: "F_BoardJob_15843240680.jpg",
                    companyLogo: "16735941934330.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-031",
                    name: "Haein Yang",
                    photo: "F_BoardJob_15843240100.jpg",
                    companyLogo: "1673594139aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-032",
                    name: "Sehyeon Song",
                    photo: "F_BoardJob_15840800710.jpg",
                    companyLogo: "16735940664330.jpg",
                    department: "Defense & Police AI",
                    position: "AI Technology Specialist"
                },
                {
                    id: "emp-06-033",
                    name: "Taejun Kwon",
                    photo: "F_BoardJob_15840799540.jpg",
                    companyLogo: "16735940444330.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-034",
                    name: "Yeji Hong",
                    photo: "F_BoardJob_15840797520.jpg",
                    companyLogo: "1673594003aa71.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-035",
                    name: "Jihoon Lee",
                    photo: "F_BoardJob_15840795890.jpg",
                    companyLogo: "16735939254330.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-036",
                    name: "Woogeun Lee",
                    photo: "F_BoardJob_15840795160.jpg",
                    companyLogo: "16735938994330.jpg",
                    department: "Defense & Police AI",
                    position: "AI Security Specialist"
                },
                {
                    id: "emp-06-037",
                    name: "Jaejun Yu",
                    photo: "F_BoardJob_15840794510.jpg",
                    companyLogo: "16735938844330.jpg",
                    department: "Defense & Police AI",
                    position: "Military Officer"
                },
                {
                    id: "emp-06-038",
                    name: "Dohyeon Kim",
                    photo: "F_BoardJob_15840778570.jpg",
                    companyLogo: "16735938444330.jpg",
                    department: "Defense & Police AI",
                    position: "NCO (Non-commissioned Officer)"
                },
                {
                    id: "emp-06-039",
                    name: "Daeun Jung",
                    photo: "F_BoardJob_16419487730.jpg",
                    companyLogo: "1673312279aa71.jpg",
                    department: "Defense & Police AI",
                    position: "Police Officer"
                },
                {
                    id: "emp-06-040",
                    name: "Hyeonji Son",
                    photo: "F_BoardJob_16157950040.jpg",
                    companyLogo: "1673596381aa71.jpg",
                    department: "Defense & Police AI",
                    position: "AI Technology Specialist"
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
    return `/images/employment/${filename}`;
};

export const getCompanyLogo = (filename: string): string => {
    return `/images/employment/logos/${filename}`;
};

export const getDepartmentEmployees = (departmentId: string): EmployeeProfile[] => {
    const department = employmentData.departments.find(dept => dept.departmentId === departmentId);
    return department ? department.employees : [];
};