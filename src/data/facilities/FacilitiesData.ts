// src/data/facilities/FacilitiesData.ts

export interface FacilityImage {
    id: string;
    filename: string;
    title: string;
    department: string;
    campus: 'seoul' | 'icheon';
    programs: string[];
}

export interface ProgramFacilities {
    programId: string;
    facilities: FacilityImage[];
}

// 이천 캠퍼스 시설 데이터 (실습 전용)
const icheonCampusFacilities: FacilityImage[] = [
    {
        id: "ic_001",
        filename: "3c082adad6512ccb5c77287d99cb7e09.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_002",
        filename: "a6c34b6c986d6087ce40540a7f3f075d.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_003",
        filename: "fda39833dddfc818866534af5cf7fd1a.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_004",
        filename: "9be8575aae49b3a10f58660130c090eb.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_005",
        filename: "3a736a110900996ab1604594860d7672.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_006",
        filename: "9f06fb61339df21b470319ebeb230792.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_007",
        filename: "b1f43fbb0ae8bc881766bca3be30b9b0.jpg",
        title: "Engine Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_008",
        filename: "810b9a2881343cb559df2b6a1bf79a10.jpg",
        title: "Engine Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_009",
        filename: "ae1d46ba17a09e2044526486ac2e2d6b.jpg",
        title: "Engine Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_010",
        filename: "681aad12478c994875dae565afe90273.jpg",
        title: "Engine Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_011",
        filename: "23d7a21f24b79afa558a56869d518760.jpeg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_012",
        filename: "51275bc184e2b5043e94e9e2cb9e5d91.jpeg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_013",
        filename: "6fba98c3238bd4141125435e1aa5f09e.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_014",
        filename: "b328419c50dd4ba286e4245979dcbb64.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_015",
        filename: "47e7fb7c102475095fdb43a2a7c3512b.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_016",
        filename: "1ada76c7d68a239ba0070ad942fa1b6a.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_017",
        filename: "52e902a63e2b839275693b36469c0502.jpg",
        title: "Icheon Practical Training Center",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_018",
        filename: "63d3834901726d81f35cf0ca1148f060.jpg",
        title: "Engine Test Run Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_019",
        filename: "cd1c204f38fd31289e0177310d46f16b.jpg",
        title: "Engine Test Run Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_020",
        filename: "8e4cbff0fe1f3dcc7d39960fe59b0027.jpg",
        title: "Paint Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_021",
        filename: "e2cfc00d2e1bcbf42a7f7b3c6e7d584c.jpg",
        title: "Paint Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_022",
        filename: "0148209593450326951805712b36bf11.jpg",
        title: "Engine Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "ic_023",
        filename: "109d3e2c0f6dae893f81e8f5148f074b.jpg",
        title: "Engine Training Laboratory",
        department: "Practical Training",
        campus: "icheon",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    }
];

// 부대시설 데이터 (서울 영등포 캠퍼스)
const supportFacilities: FacilityImage[] = [
    {
        id: "sf_001",
        filename: "9c61d9fb796733073f8bf3e6dc5bfeed.jpg",
        title: "Mirae Hall Student Lounge",
        department: "Support Facilities",
        campus: "seoul",
        programs: ["all-departments"]
    },
    {
        id: "sf_002",
        filename: "123058f770d3f02158c8edf43740a366.jpg",
        title: "Changgong Hall Computer Laboratory",
        department: "Support Facilities",
        campus: "seoul",
        programs: ["all-departments"]
    },
    {
        id: "sf_003",
        filename: "fa1b47aac1e62b7dca9d81244beef45a.jpg",
        title: "Changgong Hall Admission Counseling Office",
        department: "Support Facilities",
        campus: "seoul",
        programs: ["all-departments"]
    },
    {
        id: "sf_004",
        filename: "7b526f7df48df082a34d929e952d79a5.jpg",
        title: "Main Conference Room",
        department: "Support Facilities",
        campus: "seoul",
        programs: ["all-departments"]
    }
];

// 국방경찰AI계열 시설 데이터 (서울 영등포 캠퍼스)
const defensePoliceAIFacilities: FacilityImage[] = [
    {
        id: "dp_001",
        filename: "23f0df031953631c341e664ea3d25d7c.jpg",
        title: "Military Equipment Exhibition Hall",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_002",
        filename: "c4efafbb54c67be6b630f761114f06e3.jpg",
        title: "Military Training Laboratory (ROK Armed Forces Personal Weapons)",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_003",
        filename: "be704e4df88b74b27bc9c2a8bbca51a3.jpg",
        title: "Military Training Center",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_004",
        filename: "33656964afd21fc32cfec6aa59f65465.jpeg",
        title: "National Defense Physical Training Center",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_005",
        filename: "9c06a0bc866da67fd9857739164de9fc.jpg",
        title: "Martial Arts Training Center",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_006",
        filename: "106a3e287ae6248b2d7f6afa1657b022.jpg",
        title: "Martial Arts Training Center",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_007",
        filename: "ae0fecd324d0f7960625b30f3149beb8.jpg",
        title: "Martial Arts Training Center",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_008",
        filename: "9c2ab2a2749270af6c8ef9a09c808463.jpg",
        title: "Martial Arts Training Center",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_009",
        filename: "89a014176c45f07ebe0be6f55174d42e.jpg",
        title: "Aviation Security Screening Laboratory",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_010",
        filename: "012d1bf3dfa18530d7efd33ae0e61aea.jpg",
        title: "Virtual Reality (VR) Shooting Training Laboratory",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    },
    {
        id: "dp_011",
        filename: "40388545d26359fb34ee888c1b642ccf.jpg",
        title: "Virtual Reality (VR) Shooting Training Laboratory",
        department: "Defense Police AI",
        campus: "seoul",
        programs: ["national-defense-officer", "national-defense-nco", "national-defense-ai", "police-officer"]
    }
];

// 항공보안계열 시설 데이터 (서울 영등포 캠퍼스)
const aviationSecurityFacilities: FacilityImage[] = [
    {
        id: "as_001",
        filename: "de42ad237decba2297a9e27820052ca5.jpg",
        title: "Martial Arts Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_002",
        filename: "83d81213eff422d9683a9593ef2d6b83.jpg",
        title: "Martial Arts Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_003",
        filename: "b799954680ddc09711be595cf3cb5b4a.jpg",
        title: "Mechanical Security Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_004",
        filename: "e08b0c8d9ab2be59e413d8cbff30eef1.jpg",
        title: "X-Ray CBT Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_005",
        filename: "f3c48a1fb1897c77ddfaad2738a04140.jpg",
        title: "AI (Artificial Intelligence) Security Screening Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_006",
        filename: "6bd25476f5b2d651a79567fa5a143aa4.jpg",
        title: "AI (Artificial Intelligence) Security Screening Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_007",
        filename: "9b0c6988936d2ab9c7ef432f6176ab6d.jpg",
        title: "Explosive X-Ray Analysis Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_008",
        filename: "04405366576c80fb5412f8d95239ab2e.jpg",
        title: "Mechanical Security Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_009",
        filename: "78499ee0d726c2d35ad06896415945a9.jpg",
        title: "Explosive Model Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_010",
        filename: "dc756a26b58e32bb683dae9d7f2507e8.jpg",
        title: "Explosive Model Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_011",
        filename: "9aa1b0720670c7d72789b3d3970b76df.jpg",
        title: "Explosive Model Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_012",
        filename: "17363fec9f6735874a23b1a0b00d9a78.jpg",
        title: "Vehicle Security Screening Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_013",
        filename: "be811b773ea118d047961a61c52e4729.jpg",
        title: "In-Flight Security Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_014",
        filename: "7e75a7a85ce637b1fa790e3153493c42.jpg",
        title: "In-Flight Security Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_015",
        filename: "1a7714537350996014ac4a8b0fc9d165.jpg",
        title: "CrossFit Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_016",
        filename: "369e6060b1ef9f28ebf1692c4024a516.jpg",
        title: "B1 Floor Martial Arts Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_017",
        filename: "ef00c9036178b1013a7b882d907a6a22.jpg",
        title: "CrossFit Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_018",
        filename: "2848ec5b6f51d1ef4bec8ff7dbce3a14.jpg",
        title: "Aviation Security Screening Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_019",
        filename: "96a6229d4341f1b81326b6ebd77382ca.jpg",
        title: "Aviation Security Screening Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_020",
        filename: "caea85ff1080728f1c847538eb283df3.png",
        title: "Rappelling Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_021",
        filename: "94c8396efd72c4f39d42826fd5c04f96.jpg",
        title: "Weight Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_022",
        filename: "b4f320b32e7b1a7f3e20b245eb791253.png",
        title: "Electronic Shooting Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_023",
        filename: "168f5e66ddd870ddc2a6ea687fa013d5.png",
        title: "Simulator Shooting Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_024",
        filename: "727ac00a5331d8d02653e84d8186d3c7.png",
        title: "Multi-Purpose Martial Arts Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_025",
        filename: "02f831e8bfcaf3b23eca6a565c881631.png",
        title: "Aviation Security Screening Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_026",
        filename: "108af95b623b9db0d66c8ddaba2fec4b.png",
        title: "Mechanical Security Comprehensive Training Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_027",
        filename: "4afcc07d8362dfbd4b49fec218cb5f02.png",
        title: "VIP Security Screening Laboratory",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    },
    {
        id: "as_028",
        filename: "08f7ab466d3055c4ff6ecbc7b95dd408.jpg",
        title: "Martial Arts Training Center",
        department: "Aviation Security",
        campus: "seoul",
        programs: ["airport-security", "vip-security", "pmc-security", "action-acting", "sports-rehabilitation"]
    }
];

// 항공관광계열 시설 데이터 (서울 영등포 캠퍼스)
const aviationTourismFacilities: FacilityImage[] = [
    {
        id: "at_001",
        filename: "05c7117b1a232fdcd3a02aab88a3a0be.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_002",
        filename: "2e9f7741ef680fa8563bdb68827d74a6.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_003",
        filename: "a6891d25fac2614be16028c4b4c7e138.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_004",
        filename: "c65f50332cc899ba5bb81faea4851ca9.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_005",
        filename: "e8c4f5f40c0e67d0c7eac7a0479e3700.jpg",
        title: "Hotel Food & Beverage Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_006",
        filename: "fbee9d6927e261e204454ad3e8af20a0.jpg",
        title: "Hotel Front Office Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_007",
        filename: "d3bc49eac1c0e50b04219e0de60e0762.jpg",
        title: "Hotel Room Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_008",
        filename: "2c181303c7b035973921941578741ba7.jpg",
        title: "ASEA Cruise Professional Training Center",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_009",
        filename: "9b997ac7af56343d86d6b71c7912f85b.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_010",
        filename: "1d7ff98bf0f197332e33dcc8d5a6a6f0.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_011",
        filename: "3af9f88254f03c7e5311fafb762a5fd3.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_012",
        filename: "44b1842f5f02c9a32c0a95f368c195e9.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_013",
        filename: "02c1162bdcd86ef58374aa5f2dc67acf.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_014",
        filename: "c26ed4054236279e99b6bb7dcebb7baa.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_015",
        filename: "a890dc64c3fc8ee53410e8e7fb7b4e05.jpg",
        title: "ASEA Cruise Professional Training Center",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_016",
        filename: "3759487b857c8662fc48bd6e385cec11.jpg",
        title: "ASEA Cruise Professional Training Center",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_017",
        filename: "c88ef8f3a390b3840f71e1e25fdda9fc.jpg",
        title: "ASEA Cruise Professional Training Center",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_018",
        filename: "aac1669e39902a47c707f1297cd46324.jpg",
        title: "ASEA Cruise Professional Training Center",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_019",
        filename: "2105aa06cd232e9d2158d71cfec7cbb4.jpg",
        title: "Hotel Front Office Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_020",
        filename: "67421c7d335ec59969b5e0f04feb30eb.jpg",
        title: "Hotel Front Office Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_021",
        filename: "337489431e436b7163e9613f0bc1de2c.jpg",
        title: "Hotel Food & Beverage Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_022",
        filename: "1953bcb1a5ff50e277cc55ed39262ba1.jpg",
        title: "Hotel Food & Beverage Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_023",
        filename: "fcaf4c0e2eb1b8ba0912ab794f3e6b8c.jpg",
        title: "Casino Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_024",
        filename: "841956cdde1ac2fde9247f9aeeaca786.jpg",
        title: "Barista Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_025",
        filename: "f68fa8eb04ec543a8cf47e233b929535.jpg",
        title: "Comprehensive Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_026",
        filename: "4009e209e3ba29755d3c5f7f71217341.jpg",
        title: "Airport Comprehensive Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_027",
        filename: "8f608f92a38ea9680dde56f310223bed.jpg",
        title: "Airport Comprehensive Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_028",
        filename: "b958ab411767c3d544916f45db8af8af.jpg",
        title: "Food & Beverage Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_029",
        filename: "83f938eea467f85fdacaf3ee1fe8b1ed.jpg",
        title: "Barista Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_030",
        filename: "9fa425657c6b3cf888f5dd65ef74ae34.jpg",
        title: "Hotel Front Office Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_031",
        filename: "9ebe7d94c38c51c699ae0af93f2d169e.jpg",
        title: "Hotel Room Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_032",
        filename: "ec387357e8e7ecba4b845ddeaba6a8c4.jpg",
        title: "Wine Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_033",
        filename: "f649e96e5e2f1cb502f9864a803f23d3.jpg",
        title: "Comprehensive Etiquette Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_034",
        filename: "ff943fbc4465856ca97819ef2704b3a8.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_035",
        filename: "92081b20b41ca86fb1247428543d3f5a.jpg",
        title: "Food & Beverage Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_036",
        filename: "35d9d8e6e44da9f35d4a41cb1ecf95c4.jpg",
        title: "Food & Beverage Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_037",
        filename: "bb915c761fe0fe46ee59298ef268162c.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    },
    {
        id: "at_038",
        filename: "252762ddd1ea01e22776bdabe2a5f093.jpg",
        title: "In-Flight Service Training Laboratory",
        department: "Aviation Tourism",
        campus: "seoul",
        programs: ["flight-attendant", "food-beverage-specialist", "tourism-specialist"]
    }
];

// 스마트안전진단계열 시설 데이터 (서울 영등포 캠퍼스)
const smartSafetyDiagnosticsFacilities: FacilityImage[] = [
    {
        id: "ssd_001",
        filename: "770ed2250ef518bc60e90f54412de37c.jpg",
        title: "Changgong Hall Radiation Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_002",
        filename: "9ec0b1490d691fbc923aabeba3a49c7c.jpg",
        title: "Changgong Hall Penetrant Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_003",
        filename: "cf11f87620a12b5b6fca7dae11a11e62.jpg",
        title: "Changgong Hall Metallurgical Materials Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_004",
        filename: "7f4e8c18d5cba96f1ab55aee76825142.jpg",
        title: "Changgong Hall Radiation Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_005",
        filename: "61be555da4a02b69331127f4bee20dd6.jpg",
        title: "Changgong Hall Magnetic Particle & Eddy Current Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_006",
        filename: "6d3bbc9a5046f075536979df672681b8.jpg",
        title: "Changgong Hall Ultrasonic Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_007",
        filename: "e6fc3adc6cf7af25a405d55846cdd762.jpg",
        title: "Changgong Hall Metallurgical Materials Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_008",
        filename: "e1237c49cd34d1f7950c29f9ad33dab9.jpg",
        title: "Changgong Hall Metallurgical Materials Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_009",
        filename: "5a2d4ace1aeb021a522ea170f8942699.jpg",
        title: "Changgong Hall Metallurgical Materials Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_010",
        filename: "cc6de8096dac196623109fda62347f72.jpg",
        title: "Changgong Hall Metallurgical Materials Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_011",
        filename: "08278d18ed2cc8a0e7565cddc3ae3b44.jpg",
        title: "Changgong Hall Ultrasonic Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_012",
        filename: "f9c41874b815577d738cd5b40be5cdde.jpg",
        title: "Changgong Hall Penetrant Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_013",
        filename: "c94a14451c4c4b47c94ee3edbed83dc8.jpg",
        title: "Changgong Hall Ultrasonic Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_014",
        filename: "e10fe63daa10f0b70841fd15cad76012.jpg",
        title: "Changgong Hall Ultrasonic Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_015",
        filename: "a45b0b88dddc7d6b4843ccb8b763fba0.jpg",
        title: "Changgong Hall Magnetic Particle & Eddy Current Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_016",
        filename: "31fba6f5f9207c448a1f97ec2ce00ed4.jpg",
        title: "Changgong Hall Ultrasonic Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_017",
        filename: "42ba6192ba3b172c66921b43497340cd.jpg",
        title: "Changgong Hall Magnetic Particle & Eddy Current Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_018",
        filename: "d75d6394396b62eec285fb9c9c44e781.jpg",
        title: "Changgong Hall Magnetic Particle & Eddy Current Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_019",
        filename: "ac25ed01e1f5699ca783fad933741846.jpg",
        title: "Changgong Hall Magnetic Particle & Eddy Current Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_020",
        filename: "34d73a038e36ce3c3e7e447d2c1e608d.jpg",
        title: "Changgong Hall Radiation Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_021",
        filename: "61610bdadfb8a90728b3cf6f5e168151.jpg",
        title: "Changgong Hall Radiation Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_022",
        filename: "373b212ec0a3019e00214bff1df74d35.jpg",
        title: "Changgong Hall Radiation Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    },
    {
        id: "ssd_023",
        filename: "c64c9cccf2dc5d80f83bf5c76131a32d.jpg",
        title: "Changgong Hall Radiation Testing Laboratory",
        department: "Smart Safety Diagnostics",
        campus: "seoul",
        programs: ["aviation-ndt", "ultrasonic-diagnostics", "metallurgical-engineering"]
    }
];

// 항공정비계열 시설 데이터 (서울 영등포 캠퍼스)
const aviationMaintenanceFacilities: FacilityImage[] = [
    {
        id: "am_001",
        filename: "c661aac4f40bb3527d98cc5ff69def1b.jpg",
        title: "C172 Cessna Aircraft & 500MD Helicopter",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_002",
        filename: "dad8f12bea1cb7674fc18c45b87309aa.jpg",
        title: "500MD Helicopter Cockpit",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_003",
        filename: "9ded008d4a4b99bc523ecbb4c1a96805.jpg",
        title: "T37C Training Aircraft",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_004",
        filename: "1e4fe5cbcf8e1f6fb16aa4fbb213a452.jpg",
        title: "CF56M Turbofan Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_005",
        filename: "650fe6cddb9878739a48c359f04725b3.jpeg",
        title: "F4 JET79 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_006",
        filename: "f8f3962c85fff8eebdbcb1de388bb634.jpg",
        title: "F5E-JET85 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_007",
        filename: "cdb037979c9b61939b37675b6365b3c8.jpg",
        title: "J85 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_008",
        filename: "0c48677a200763c685b18384727b642e.jpg",
        title: "J47 Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_009",
        filename: "679fe1711735733dc1077ab18b64cf51.jpeg",
        title: "F4 JET79 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_010",
        filename: "66199e7b39e31fbc08709b81f8b2b7cc.jpg",
        title: "500MD Helicopter",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_011",
        filename: "3cdc8a92e46816e2fbeec9812d22a986.jpg",
        title: "UH-1H Helicopter Cockpit",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_012",
        filename: "afa5ee20458eed2ed2357b2bc69addee.jpg",
        title: "UH-1H Helicopter",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_013",
        filename: "9018a68576cab05b0e3c997f59524577.jpg",
        title: "500MD Helicopter",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_014",
        filename: "80d379e3895f5d8f0d8a381caf9d1011.jpg",
        title: "Electrical & Electronics Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_015",
        filename: "1b474748f1e33959a8e132ad5ef9c991.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_016",
        filename: "7766d2af3257e6319d1e0ad0d609ba22.jpg",
        title: "Aviation Maintenance Classroom",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_017",
        filename: "51f7df040ea1e06135d0e56c50a96a62.jpg",
        title: "F5E-JET85 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_018",
        filename: "a6b05c68836a506e880d4945b04952b7.jpg",
        title: "Aviation Technical Education Center",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_019",
        filename: "3cd8c1a79ea75400e8592790c95da162.jpg",
        title: "Aircraft Type Training (MTD) Classroom",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_020",
        filename: "badcb766e10b3b93952b9ef04c7c198e.jpg",
        title: "Cessna C172 Cockpit",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_021",
        filename: "53d20da7e50d49eac70dad27a87f266e.jpg",
        title: "Cessna C172 Training Hangar",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_022",
        filename: "584137f6818ba649655cccae8b67e787.jpg",
        title: "Cessna C172 Training Hangar",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_023",
        filename: "bcaad22a5f80c85fad40ce1bdc5216c1.jpg",
        title: "Electrical & Electronics Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_024",
        filename: "8cea5171ad6f110ca5dd0c9158e2e697.jpg",
        title: "T37C Training Aircraft Hangar",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_025",
        filename: "66e7ff7eaa28a48f9860efbe5d96a3f9.jpg",
        title: "Training Equipment Tool Room",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_026",
        filename: "a03808d12ec3db01a7b8dccdeadced6d.jpg",
        title: "Parts Cleaning Room",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_027",
        filename: "76208ed09fcb6b49ee3fea80e13433ae.jpg",
        title: "Reciprocating Engine Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_028",
        filename: "336a7154d351a55bc0f7606aa723072d.jpg",
        title: "JT9D Turbofan Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_029",
        filename: "54a20e7812f18474fe16655ca4030299.jpg",
        title: "Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_030",
        filename: "e49352ddac5cb063dede76a10dc0f1ae.jpg",
        title: "R2800 Reciprocating Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_031",
        filename: "239e070e51064ead0d62a4d3f0ab4ea2.jpg",
        title: "Tool Set Collection",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_032",
        filename: "dbf35dd0618bc86515d73684faff8317.jpg",
        title: "Aviation Technical Education Center",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_033",
        filename: "b143696ed0996162959022c84989799f.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_034",
        filename: "da81f854d7870b74df8a9fab5fde6c04.jpg",
        title: "Electronics Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_035",
        filename: "9b321712b7cda149fdbd0069385f9d91.jpg",
        title: "Electronics Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_036",
        filename: "4f0764e4c6fb9e464c11cce4ecf4be46.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_037",
        filename: "2eb86bf46aae85cb82761e599cb34641.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_038",
        filename: "51f5a47a33370363d41680c2fd13cdf4.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_039",
        filename: "269d5f87ebfd9c1201a91ba21206f79a.jpg",
        title: "R2000 Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_040",
        filename: "6f9be810c153c7f8a9b4560a7417c195.jpg",
        title: "Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_041",
        filename: "34515f1265515038f597ac185c9c1de6.jpg",
        title: "J47 Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_042",
        filename: "8a8d8fc3d996f5df96915b6c66192e95.jpg",
        title: "J47 Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_043",
        filename: "a524a392056c173adfe328796d4e6f76.jpg",
        title: "Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_044",
        filename: "62bf8d614f287f3ee75265712afad3ee.jpg",
        title: "MTD Classroom",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_045",
        filename: "9d2222974efdfe8af2d599419fb5ab62.jpg",
        title: "T37C Training Aircraft",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_046",
        filename: "d9321909d8d83df6d35f52746c0a3775.jpg",
        title: "J47 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_047",
        filename: "47d8573314701bd6d0d3ccf0bae8fe91.jpg",
        title: "J69 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_048",
        filename: "b8806aa9c9c4925ae6dad4706e607667.jpg",
        title: "CF56M Turbofan Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_049",
        filename: "8cecfa62e74f6430ec5a5bc6b789f66c.jpg",
        title: "UH-1H Helicopter",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_050",
        filename: "f0be2441238c723991ef95807d74c7b3.jpg",
        title: "UH-1H Helicopter & T37 Training Aircraft",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_051",
        filename: "6969e3483fcf19c70c93b2c9c8e164bd.jpg",
        title: "J85 Turbojet Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_052",
        filename: "57d2b838dbb1fa7e7989fd2142259984.jpg",
        title: "T37C Training Aircraft",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_053",
        filename: "3142235f454b4e0599b2562454cf5a11.jpg",
        title: "R2800 Reciprocating Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_054",
        filename: "5cc65f45bbfc73fa917c15def16932ca.jpg",
        title: "CF56M Turbofan Engine",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_055",
        filename: "af0ee7cc92061eaa6a5827c84b5eaa1e.jpg",
        title: "Tool Set Collection",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_056",
        filename: "1e4a306e88aa13cac7fbe9e994ca045b.jpg",
        title: "Tool Set Collection",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_057",
        filename: "05f4459bdf290f7ff47343712fb9f0d5.jpg",
        title: "Aviation Maintenance Training Hangar",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_058",
        filename: "6677f657e45fc207bacf9d3beffb1003.jpg",
        title: "Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_059",
        filename: "c10d35fe51dda5a1a08957860d1a67a8.jpg",
        title: "Aviation Technical Education Center & Engine Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_060",
        filename: "3624ae560ed4818f5defe78a7a9ab4b6.jpg",
        title: "Aviation Technical Education Center & Engine Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_061",
        filename: "e618b9742b7b879af5c7b24d2b3332f7.jpg",
        title: "Aviation Technical Education Center & Airframe Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_062",
        filename: "08746fc43808802cc421fc10d5cd24b2.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_063",
        filename: "7f32dda283112ee489213418d9bc1110.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_064",
        filename: "2c4cc561ba92466f74504f12382c86b6.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_065",
        filename: "db0d8d8eb219e5d7cd30a74d4803a4ee.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_066",
        filename: "4e77d583b34af24eeb7268e71b27d849.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_067",
        filename: "ac4c9eda6a607adcd70a4b5b1c00d7de.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_068",
        filename: "0b96f268658ba263f899c3158b28132b.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_069",
        filename: "abde19f99348eacfedc5814e7e962a9e.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_070",
        filename: "46fec17ded5673fc3b6b599c64fe5556.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_071",
        filename: "50d86b4fd8a4d06319782039a62e5271.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_072",
        filename: "668c9828a6db3f4e9b5defda9a59fcfb.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_073",
        filename: "3f3c173465a1908849eb793956f98347.jpg",
        title: "Electronics Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_074",
        filename: "73d9c8107d108ecbd4b5e5f18b7056b7.jpeg",
        title: "Hydraulic System Equipment",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_075",
        filename: "7e39342ea4855dfad237d7d9b30e249d.jpeg",
        title: "Wind Tunnel Testing Equipment",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_076",
        filename: "c3dff34d9dad150f9bd44abb5f2f599e.jpg",
        title: "Flight Simulator",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_077",
        filename: "f0d1df38542ca9534c644fb2b9e4d5ac.jpg",
        title: "Flight Simulator",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_078",
        filename: "3f2f34d43b8d14160ffce6601a04a0c4.jpg",
        title: "Aviation Technical Education Center Engine Equipment",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_079",
        filename: "59b3373d3d7ee0d2be29eedb24304740.jpg",
        title: "T37C Training Aircraft Maintenance Practice",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_080",
        filename: "e0d678341431a399e7e4b0edcd1183a8.jpg",
        title: "Outdoor Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_081",
        filename: "326097c0c473fd85b0a9f2e7397307b9.jpg",
        title: "Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_082",
        filename: "6da1111201d94d5ddd7dca8fc806b4bb.jpg",
        title: "R2000 Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_083",
        filename: "039400c929e822474924f7ef34de07c7.jpg",
        title: "Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_084",
        filename: "943e61799d42b6c6b99cd526ac9d5637.jpg",
        title: "J47 Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_085",
        filename: "a5ef0d1215dd8feeacc594d187d92702.jpg",
        title: "Airframe Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_086",
        filename: "ddabf71c1a4b3a77d6db1fa4a5c4f01a.jpg",
        title: "Electronics Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_087",
        filename: "bd52bbdd4cec15fc665ab10c7556fb8d.jpg",
        title: "Aviation Engine Training Laboratory",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    },
    {
        id: "am_088",
        filename: "5fb93543e601c7210751c9fb4748b8b3.jpg",
        title: "Cessna Outdoor Training Hangar",
        department: "Aviation Maintenance",
        campus: "seoul",
        programs: ["aircraft-maintenance", "aviation-mechanical", "aviation-nco", "drone-operation"]
    }
];

// 프로그램별 시설 매핑
export const facilitiesData: ProgramFacilities[] = [
    // 항공정비계열 (4개 과정)
    {
        programId: "aircraft-maintenance",
        facilities: aviationMaintenanceFacilities
    },
    {
        programId: "aviation-mechanical",
        facilities: aviationMaintenanceFacilities
    },
    {
        programId: "aviation-nco",
        facilities: aviationMaintenanceFacilities
    },
    {
        programId: "drone-operation",
        facilities: aviationMaintenanceFacilities
    },
    // 스마트안전진단계열 (3개 과정)
    {
        programId: "aviation-ndt",
        facilities: smartSafetyDiagnosticsFacilities
    },
    {
        programId: "ultrasonic-diagnostics",
        facilities: smartSafetyDiagnosticsFacilities
    },
    {
        programId: "metallurgical-engineering",
        facilities: smartSafetyDiagnosticsFacilities
    },
    // 항공관광계열 (3개 과정)
    {
        programId: "flight-attendant",
        facilities: aviationTourismFacilities
    },
    {
        programId: "food-beverage-specialist",
        facilities: aviationTourismFacilities
    },
    {
        programId: "tourism-specialist",
        facilities: aviationTourismFacilities
    },
    // 항공보안계열 (5개 과정)
    {
        programId: "airport-security",
        facilities: aviationSecurityFacilities
    },
    {
        programId: "vip-security",
        facilities: aviationSecurityFacilities
    },
    {
        programId: "pmc-security",
        facilities: aviationSecurityFacilities
    },
    {
        programId: "action-acting",
        facilities: aviationSecurityFacilities
    },
    {
        programId: "sports-rehabilitation",
        facilities: aviationSecurityFacilities
    },
    // 국방경찰AI계열 (4개 과정)
    {
        programId: "national-defense-officer",
        facilities: defensePoliceAIFacilities
    },
    {
        programId: "national-defense-nco",
        facilities: defensePoliceAIFacilities
    },
    {
        programId: "national-defense-ai",
        facilities: defensePoliceAIFacilities
    },
    {
        programId: "police-officer",
        facilities: defensePoliceAIFacilities
    }
];

// 캠퍼스별 시설 필터링 함수
export const getFacilitiesByDepartment = (department: string): FacilityImage[] => {
    switch (department) {
        case "Aviation Maintenance":
            return aviationMaintenanceFacilities;
        case "Smart Safety Diagnostics":
            return smartSafetyDiagnosticsFacilities;
        case "Aviation Tourism":
            return aviationTourismFacilities;
        case "Aviation Security":
            return aviationSecurityFacilities;
        case "Defense Police AI":
            return defensePoliceAIFacilities;
        case "Support Facilities":
            return supportFacilities;
        case "Practical Training":
            return icheonCampusFacilities;
        default:
            return [];
    }
};

// 캠퍼스별 시설 필터링 함수
export const getFacilitiesByCampus = (campus: 'seoul' | 'icheon'): FacilityImage[] => {
    const allFacilities = [
        ...aviationMaintenanceFacilities,
        ...smartSafetyDiagnosticsFacilities,
        ...aviationTourismFacilities,
        ...aviationSecurityFacilities,
        ...defensePoliceAIFacilities,
        ...supportFacilities,
        ...icheonCampusFacilities
    ];
    return allFacilities.filter(facility => facility.campus === campus);
};

// 전체 시설 가져오기
export const getAllFacilities = (): FacilityImage[] => {
    return [
        ...aviationMaintenanceFacilities,
        ...smartSafetyDiagnosticsFacilities,
        ...aviationTourismFacilities,
        ...aviationSecurityFacilities,
        ...defensePoliceAIFacilities,
        ...supportFacilities,
        ...icheonCampusFacilities
    ];
};

// 특정 프로그램의 시설 가져오기
export const getFacilitiesByProgram = (programId: string): FacilityImage[] => {
    const programFacilities = facilitiesData.find(pf => pf.programId === programId);
    return programFacilities ? programFacilities.facilities : [];
};

// GitHub Pages 이미지 경로 생성
export const getFacilityImagePath = (filename: string): string => {
    return `/images/facilities/${filename}`;
};