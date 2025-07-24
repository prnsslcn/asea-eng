import React, { useEffect, useState } from 'react';

interface Partner {
    id: number;
    logo: string;
    name: string;
}

const PartnershipShowcaseSection: React.FC = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    // 파트너 데이터 생성 (20개 로고)
    useEffect(() => {
        const partnerData: Partner[] = [];
        for (let i = 1; i <= 20; i++) {
            partnerData.push({
                id: i,
                logo: `as_logo_${i.toString().padStart(2, '0')}.gif`,
                name: `Partner Organization ${i}`
            });
        }

        // 파트너 데이터 섞기
        const shuffledPartners = partnerData.sort(() => Math.random() - 0.5);
        setPartners(shuffledPartners);
    }, []);

    // 연속 자동 스크롤 효과 (무한 반복, 애니메이션 없는 리셋)
    useEffect(() => {
        if (partners.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 0.05;
                // 원본 배열의 끝에 도달하면 애니메이션 없이 리셋
                if (nextIndex >= partners.length) {
                    setIsResetting(true);
                    // 다음 프레임에서 애니메이션 없이 리셋
                    setTimeout(() => {
                        setIsResetting(false);
                    }, 10);
                    return 0;
                }
                return nextIndex;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [partners]);

    // 파트너 로고 카드 컴포넌트
    const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => (
        <div className="flex-none w-48 h-32 bg-white rounded-3xl shadow-md overflow-hidden flex items-center justify-center p-6">
            <img
                src={`/asea-eng/images/partners/${partner.logo}`}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `
                            <div class="text-center">
                                <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 10h10M7 13h10" />
                                </svg>
                                <p class="text-xs text-gray-500 font-medium">Partner Logo</p>
                            </div>
                        `;
                    }
                }}
            />
        </div>
    );

    if (partners.length === 0) {
        return <div className="py-16">Loading...</div>;
    }

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            {/* 섹션 헤더 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Building strong partnerships with leading organizations in the aviation industry
                    </p>
                </div>
            </div>

            {/* 전체 너비 자동 스크롤 파트너 로고들 */}
            <div className="w-full py-4">
                <div
                    className={`flex space-x-6 ${isResetting ? '' : 'transition-transform duration-150 ease-linear'}`}
                    style={{
                        transform: `translateX(-${currentIndex * (192 + 24)}px)`, // 카드 너비(192px) + 간격(24px)
                        width: `${(partners.length * 2) * (192 + 24)}px` // 복제된 배열 크기
                    }}
                >
                    {/* 원본 배열 */}
                    {partners.map((partner, index) => (
                        <PartnerCard key={`original-${partner.id}-${index}`} partner={partner} />
                    ))}
                    {/* 복제된 배열 (무한 스크롤을 위해) */}
                    {partners.map((partner, index) => (
                        <PartnerCard key={`duplicate-${partner.id}-${index}`} partner={partner} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipShowcaseSection;