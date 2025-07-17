import React, { useState, useCallback } from 'react';
import type { FacilityImage } from '../../data/facilities/FacilitiesData';
import {
    getFacilitiesByDepartment,
    getFacilityImagePath
} from '../../data/facilities/FacilitiesData';

// 계열 필터 옵션 (All Departments 제거)
const departmentFilters = [
    { key: 'Aviation Maintenance', label: 'Aviation Maintenance', color: 'blue' },
    { key: 'Smart Safety Diagnostics', label: 'Smart Safety Diagnostics', color: 'emerald' },
    { key: 'Aviation Tourism', label: 'Aviation Tourism', color: 'rose' },
    { key: 'Aviation Security', label: 'Aviation Security', color: 'slate' },
    { key: 'Defense Police AI', label: 'Defense & Police AI', color: 'gray' },
    { key: 'Support Facilities', label: 'Support Facilities', color: 'purple' },
    { key: 'Practical Training', label: 'Practical Training', color: 'green' },
];

const FacilitiesPage: React.FC = () => {
    const [activeCampus, setActiveCampus] = useState<'seoul' | 'icheon'>('seoul');
    const [activeDepartment, setActiveDepartment] = useState<string>('Aviation Maintenance');
    const [lightboxImage, setLightboxImage] = useState<FacilityImage | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(12); // 한 페이지당 12개 아이템

    // 현재 필터에 맞는 이미지들 가져오기
    const getFilteredImages = useCallback(() => {
        // 특정 계열의 이미지 (캠퍼스별로 필터링)
        const departmentImages = getFacilitiesByDepartment(activeDepartment);
        const filteredImages = departmentImages.filter(image => image.campus === activeCampus);

        return filteredImages;
    }, [activeCampus, activeDepartment]);

    // 페이지네이션 계산
    const allFilteredImages = getFilteredImages();
    const totalPages = Math.ceil(allFilteredImages.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentImages = allFilteredImages.slice(startIndex, endIndex);

    // 필터 변경 시 첫 페이지로 이동
    const handleFilterChange = useCallback((newCampus?: 'seoul' | 'icheon', newDepartment?: string) => {
        if (newCampus) {
            setActiveCampus(newCampus);
            // 캠퍼스 변경 시 기본 계열 설정
            if (newCampus === 'seoul') {
                setActiveDepartment('Aviation Maintenance');
            } else {
                setActiveDepartment('Practical Training');
            }
        }
        if (newDepartment) setActiveDepartment(newDepartment);
        setCurrentPage(1);
    }, []);

    // 페이지 변경
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // 페이지 변경 시 상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 페이지 번호 배열 생성 (최대 5개 페이지 번호 표시)
    const getPageNumbers = () => {
        const pages: number[] = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // 총 페이지가 5개 이하면 모든 페이지 표시
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // 현재 페이지를 중심으로 최대 5개 페이지 표시
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, start + maxVisiblePages - 1);

            if (end - start < maxVisiblePages - 1) {
                start = Math.max(1, end - maxVisiblePages + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    // 라이트박스 열기
    const openLightbox = (image: FacilityImage) => {
        setLightboxImage(image);
    };

    // 라이트박스 닫기
    const closeLightbox = () => {
        setLightboxImage(null);
    };

    // 계열별 색상 반환
    const getDepartmentColor = (department: string) => {
        const filter = departmentFilters.find(f => f.key === department);
        return filter?.color || 'gray';
    };

    // 계열별 배지 스타일
    const getDepartmentBadgeStyle = (department: string) => {
        const color = getDepartmentColor(department);
        const colorMap: { [key: string]: string } = {
            'blue': 'bg-blue-100 text-blue-800',
            'emerald': 'bg-emerald-100 text-emerald-800',
            'rose': 'bg-rose-100 text-rose-800',
            'slate': 'bg-slate-100 text-slate-800',
            'gray': 'bg-gray-100 text-gray-800',
            'purple': 'bg-purple-100 text-purple-800',
            'green': 'bg-green-100 text-green-800',
        };
        return colorMap[color] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-900 mt-10 sm:mt-16 lg:mt-20 mb-2 px-4">
                    World-Class Facilities<br />
                    for Professional Excellence
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 mt-8">
                    State-of-the-art facilities and comprehensive educational infrastructure to cultivate top-tier aviation professionals.
                </p>
            </div>

            {/* Campus Tabs */}
            <div className="px-0 sm:px-8">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => handleFilterChange('seoul')}
                            className={`px-6 py-3 rounded-md font-medium transition-all ${
                                activeCampus === 'seoul'
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'text-gray-600 hover:text-blue-900'
                            }`}
                        >
                            Seoul Yeongdeungpo Campus
                        </button>
                        <button
                            onClick={() => handleFilterChange('icheon')}
                            className={`px-6 py-3 rounded-md font-medium transition-all ${
                                activeCampus === 'icheon'
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'text-gray-600 hover:text-blue-900'
                            }`}
                        >
                            Icheon Campus
                        </button>
                    </div>
                </div>
            </div>

            {/* Department Filters */}
            <div className="px-0 sm:px-8">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {departmentFilters.filter(filter => {
                        if (activeCampus === 'seoul' && filter.key !== 'Practical Training') return true;
                        if (activeCampus === 'icheon' && filter.key === 'Practical Training') return true;
                        return false;
                    }).map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => handleFilterChange(undefined, filter.key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeDepartment === filter.key
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Image Gallery */}
            <div className="px-0 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            onClick={() => openLightbox(image)}
                        >
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                <img
                                    src={getFacilityImagePath(image.filename)}
                                    alt={image.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        // 이미지 로드 실패시 placeholder
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Image+Coming+Soon';
                                    }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {image.title}
                                </h3>

                                {/* 계열 배지 */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDepartmentBadgeStyle(image.department)}`}>
                                        {image.department}
                                    </span>
                                    <span className="text-xs text-gray-500 capitalize">
                                        {image.campus}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 이미지가 없을 때 */}
                {allFilteredImages.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Facilities Available</h3>
                        <p className="text-gray-600">
                            No facilities found for the selected {activeCampus} campus and {activeDepartment}.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 space-x-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                                currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 border border-gray-300'
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Page Numbers */}
                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                                    currentPage === page
                                        ? 'bg-blue-900 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 border border-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                                currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 border border-gray-300'
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={getFacilityImagePath(lightboxImage.filename)}
                                alt={lightboxImage.title}
                                className="w-full max-h-96 object-cover"
                            />

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{lightboxImage.title}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDepartmentBadgeStyle(lightboxImage.department)}`}>
                                        {lightboxImage.department}
                                    </span>
                                </div>

                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="capitalize">{lightboxImage.campus} Campus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacilitiesPage;